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
  // Retained map nodes must not retain permission to stage post-game orders.
  await page.locator('[data-area="phocis"]').click({ position: { x: 30, y: 50 } });
  expect((await read(page)).draftOrders).toEqual([]);
  await page.reload();
  expect((await read(page)).outcome).not.toBeNull();
  expect((await read(page)).draftOrders).toEqual([]);
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

test('briefing explains sides, scale, defaults and provisional objectives', async ({ page }, testInfo) => {
  await page.goto('/');
  const briefing = page.getByRole('dialog', { name: 'The Narrow Sea' });
  await expect(briefing.getByRole('heading', { name: 'The Narrow Sea', exact: true })).toBeInViewport();
  await expect(briefing.getByText('Greek defenders', { exact: true })).toBeInViewport();
  await expect(briefing).toContainText('Greek defenders');
  await expect(briefing).toContainText('Persian invasion from the north');
  await expect(briefing).toContainText('not 300 individual men or one ship');
  await expect(briefing).toContainText('hold & recover');
  await expect(briefing).toContainText('Both sides');
  await expect(briefing).toContainText('not a historical victory definition');
  await page.screenshot({ path: testInfo.outputPath('briefing-desktop.png') });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: testInfo.outputPath('briefing-mobile.png') });
  await page.getByRole('button', { name: 'Enter headquarters' }).click();
  await expect(page.locator('#formation')).toBeFocused();
});

test('previous-rules save is recoverable and replaced only after explicit new exercise', async ({ page }) => {
  await page.goto('/');
  const previous = '{"version":1,"state":{"version":1},"orders":[],"choice":"home"}';
  await page.evaluate(value => localStorage.setItem('wargame:narrow-sea:v1', value), previous);
  await page.reload();
  await expect(page.getByText(/earlier prototype rules/)).toBeVisible();
  await expect(page.locator('#commit')).toBeDisabled();
  await page.getByRole('button', { name: 'Session', exact: true }).click();
  const download = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download original save' }).click();
  expect((await download).suggestedFilename()).toBe('narrow-sea-original-save.json');
  expect(await page.evaluate(() => localStorage.getItem('wargame:narrow-sea:v1'))).toBe(previous);
  await page.getByRole('button', { name: 'New exercise' }).click();
  await page.getByRole('button', { name: 'Keep this exercise' }).click();
  expect(await page.evaluate(() => localStorage.getItem('wargame:narrow-sea:v1'))).toBe(previous);
  await page.getByRole('button', { name: 'New exercise' }).click();
  await page.getByRole('button', { name: 'Start afresh' }).click();
  await expect(page.locator('#commit')).toBeEnabled();
  expect(await page.evaluate(() => JSON.parse(localStorage.getItem('wargame:narrow-sea:v1')!).version)).toBe(2);
});

test('native selectors stay connected during repeated keyboard changes; view survives reload', async ({ page }) => {
  await start(page);
  const formation = await page.locator('#formation').elementHandle();
  await page.locator('#formation').focus();
  // macOS headless Chromium does not commit native-popup arrow navigation;
  // typeahead does commit it. Exercise both and verify actual DOM identity.
  await page.keyboard.press('a');
  await expect(page.locator('#formation')).toHaveValue('athenians');
  await page.keyboard.press('Tab');
  await page.locator('#formation').focus();
  await page.keyboard.press('c');
  await expect(page.locator('#formation')).toHaveValue('corinthians');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('Escape');
  expect(await formation!.evaluate(node => node.isConnected && node === document.activeElement)).toBe(true);
  await page.locator('#formation').selectOption('athenians');
  const kind = await page.locator('#order-kind').elementHandle();
  await page.locator('#order-kind').focus();
  await page.keyboard.press('m');
  await expect(page.locator('#order-kind')).toHaveValue('move');
  await page.keyboard.press('Tab');
  await page.locator('#order-kind').focus();
  await page.keyboard.press('r');
  await expect(page.locator('#order-kind')).toHaveValue('reserve');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('Escape');
  expect(await kind!.evaluate(node => node.isConnected && node === document.activeElement)).toBe(true);
  const destination = await page.locator('#destination').elementHandle();
  await page.locator('#destination').focus();
  await page.keyboard.press('p');
  await expect(page.locator('#destination')).toHaveValue('phocis');
  await page.keyboard.press('Tab');
  await page.locator('#destination').focus();
  await page.keyboard.press('a');
  await expect(page.locator('#destination')).toHaveValue('attica');
  await page.keyboard.press('ArrowDown');
  await page.keyboard.press('ArrowUp');
  await page.keyboard.press('Escape');
  expect(await destination!.evaluate(node => node.isConnected && node === document.activeElement)).toBe(true);
  const commitment = await page.locator('#commitment').elementHandle();
  await page.locator('#commitment').focus();
  await page.keyboard.press('r');
  await expect(page.locator('#commitment')).toHaveValue('forward');
  await page.keyboard.press('Tab');
  await page.locator('#commitment').focus();
  await page.keyboard.press('k');
  await expect(page.locator('#commitment')).toHaveValue('home');
  expect(await commitment!.evaluate(node => node.isConnected && node === document.activeElement)).toBe(true);
  await page.locator('#orders-review summary').click();
  await page.getByText('Exercise objective & support rules', { exact: true }).click();
  await page.locator('#order-kind').selectOption('hold');
  await expect(page.locator('#orders-review')).toHaveAttribute('open', '');
  await page.reload();
  await expect(page.locator('#formation')).toHaveValue('athenians');
  await expect(page.locator('#orders-review')).toHaveAttribute('open', '');
  await expect(page.getByText('Exercise objective & support rules', { exact: true }).locator('..')).toHaveAttribute('open', '');
});

test('overview shows own forces and dated intelligence, with keyboard return to orders', async ({ page }, testInfo) => {
  await start(page);
  await page.getByRole('button', { name: 'Overview', exact: true }).click();
  const overview = page.getByRole('dialog', { name: 'Forces & areas' });
  await expect(overview.getByRole('table')).toHaveCount(2);
  await expect(overview.locator('[data-overview-unit]')).toHaveCount(5);
  await expect(overview.locator('[data-overview-area="thessaly"]')).toContainText('strong enemy presence');
  await expect(overview.locator('[data-overview-area="attica"]')).toContainText('Clear at observation');
  await expect(overview).not.toContainText('Royal contingent');
  await expect(overview).not.toContainText('Phoenician squadron');
  await overview.getByRole('button', { name: 'Athenian squadron', exact: true }).click();
  await expect(overview).toHaveCount(0);
  await expect(page.locator('#formation')).toHaveValue('athenian-fleet');
  await expect(page.locator('#formation')).toBeFocused();
  await page.locator('#order-kind').selectOption('move');
  await page.locator('#destination').selectOption('euripus');
  await commit(page);
  await page.getByRole('button', { name: 'Overview', exact: true }).click();
  await expect(overview.locator('[data-overview-area="pagasae"]')).toContainText('Stale · last reported turn 1');
  await page.screenshot({ path: testInfo.outputPath('overview-desktop.png'), fullPage: true });
  await page.keyboard.press('Escape');
  await expect(page.getByRole('button', { name: 'Overview', exact: true })).toBeFocused();
});

test('hold at all costs disables intent and survives reload, export and import', async ({ page }) => {
  await start(page);
  await page.locator('#order-kind').selectOption('stand');
  await expect(page.locator('#destination')).toHaveCount(0);
  await expect(page.locator('.stand-warning')).toContainText('No retreat');
  await expect(page.locator('.stand-warning')).toContainText('does not guarantee victory');
  for (const radio of await page.getByRole('radio').all()) await expect(radio).toBeDisabled();
  expect((await read(page)).draftOrders).toEqual([{ unitId: 'leonidas', kind: 'stand', target: null, intent: 'balanced' }]);
  await page.reload();
  await expect(page.locator('#order-kind')).toHaveValue('stand');
  await page.getByRole('button', { name: 'Session', exact: true }).click();
  const downloaded = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Export save', exact: true }).click();
  const path = await (await downloaded).path();
  await page.locator('#order-kind').selectOption('hold');
  await page.locator('#import-save').setInputFiles(path!);
  await expect(page.locator('#order-kind')).toHaveValue('stand');
  await commit(page);
  expect((await read(page)).turn).toBe(2);
});

test('mobile overview scrolls within dialog without widening the page', async ({ page }, testInfo) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await start(page);
  await page.getByRole('button', { name: 'Overview', exact: true }).click();
  const dialog = page.getByRole('dialog', { name: 'Forces & areas' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  const region = dialog.getByRole('region', { name: 'Your formations table' });
  expect(await region.evaluate(node => node.scrollWidth > node.clientWidth)).toBe(true);
  await region.focus();
  await page.keyboard.press('ArrowRight');
  await page.screenshot({ path: testInfo.outputPath('overview-mobile.png'), fullPage: true });
  await page.keyboard.press('Escape');
  await expect(dialog).toHaveCount(0);
});
