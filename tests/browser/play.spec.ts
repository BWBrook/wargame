import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

const read = (page: Page) => page.evaluate(() => JSON.parse((window as unknown as { render_game_to_text: () => string }).render_game_to_text()));
async function start(page: Page) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Enter headquarters' }).click();
}
async function commit(page: Page) {
  await page.locator('#commit').click();
  await page.getByRole('button', { name: 'Resolve orders' }).click();
}

test('draft, reload, resolve, export and import through the command interface', async ({ page }, testInfo) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await start(page);
  await page.screenshot({ path: testInfo.outputPath('opening-desktop.png'), fullPage: true });
  const before = await read(page);
  await page.locator('#formation').selectOption('athenians');
  await page.locator('[data-area="thermopylae"]').click({ position: { x: 30, y: 50 } });
  await expect(page.locator('#destination')).toHaveValue('thermopylae');
  const drafted = await read(page);
  expect(drafted.contacts).toEqual(before.contacts);
  expect(drafted.units).toEqual(before.units);
  expect(drafted.turn).toBe(1);
  expect(drafted).not.toHaveProperty('rng');
  expect(drafted).not.toHaveProperty('history');
  expect(drafted.units.every((unit: { side: string }) => unit.side === 'greek')).toBe(true);
  await page.reload();
  expect((await read(page)).draftOrders).toEqual(drafted.draftOrders);
  await commit(page);
  expect((await read(page)).turn).toBe(2);
  await expect(page.locator('#dispatch-title')).toHaveText('Reports from turn 1');
  await page.screenshot({ path: testInfo.outputPath('after-first-turn.png'), fullPage: true });
  await page.getByRole('button', { name: 'Session', exact: true }).click();
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export save', exact: true }).click();
  const download = await downloadEvent;
  expect(download.suggestedFilename()).toBe('narrow-sea-save.json');
  const savedPath = await download.path();
  const saved = await read(page);
  await page.locator('#import-save').setInputFiles({ name: 'bad.json', mimeType: 'application/json', buffer: Buffer.from('{"version":2}') });
  await expect(page.getByText(/Import rejected/)).toBeVisible();
  expect(await read(page)).toEqual(saved);
  await commit(page);
  await page.locator('#import-save').setInputFiles(savedPath!);
  await expect(page.getByText(/Save imported and its turn record verified/)).toBeVisible();
  expect((await read(page)).turn).toBe(2);
  expect(errors).toEqual([]);
});

test('invalid staged service order survives reload, then can be repaired', async ({ page }) => {
  await start(page);
  await page.locator('#formation').selectOption('corinthians');
  await page.locator('#order-kind').selectOption('move');
  await page.locator('#destination').selectOption('boeotia');
  await expect(page.locator('#commit')).toBeDisabled();
  await page.reload();
  await expect(page.locator('#commit')).toBeDisabled();
  await expect(page.locator('.order-errors')).toContainText('restricted');
  await page.locator('#commitment').selectOption('forward');
  await expect(page.locator('#commit')).toBeEnabled();
  await commit(page);
  expect((await read(page)).commitment).toBe('forward');
});

test('six-turn exercise concludes, play record exports, restart requires confirmation', async ({ page }, testInfo) => {
  await start(page);
  for (let turn = 1; turn <= 6; turn++) {
    if ((await read(page)).outcome) break;
    await commit(page);
  }
  expect((await read(page)).outcome).not.toBeNull();
  await expect(page.locator('#commit')).toBeDisabled();
  await page.screenshot({ path: testInfo.outputPath('conclusion.png'), fullPage: true });
  const downloadEvent = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export play record' }).click();
  expect((await downloadEvent).suggestedFilename()).toBe('narrow-sea-play-record.md');
  await page.getByRole('button', { name: 'Try another plan' }).click();
  await page.getByRole('button', { name: 'Keep this exercise' }).click();
  expect((await read(page)).outcome).not.toBeNull();
  await page.getByRole('button', { name: 'Try another plan' }).click();
  await page.getByRole('button', { name: 'Start afresh' }).click();
  expect((await read(page)).turn).toBe(1);
  expect((await read(page)).outcome).toBeNull();
});

test('mobile layout and keyboard unit selection remain usable', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await start(page);
  const fleet = page.getByRole('button', { name: 'Select Athenian squadron', exact: true });
  await fleet.focus();
  await fleet.press('Enter');
  await expect(page.locator('#formation')).toHaveValue('athenian-fleet');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.screenshot({ path: testInfo.outputPath('mobile.png'), fullPage: true });
});

test('unreadable local save is preserved until explicit replacement', async ({ page }) => {
  await page.goto('/');
  await page.evaluate(() => localStorage.setItem('wargame:narrow-sea:v1', '{broken'));
  await page.reload();
  await expect(page.getByText(/original save has been kept/)).toBeVisible();
  await expect(page.locator('#commit')).toBeDisabled();
  expect(await page.evaluate(() => localStorage.getItem('wargame:narrow-sea:v1'))).toBe('{broken');
  await page.getByRole('button', { name: 'Session', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Download original save' })).toBeVisible();
});
