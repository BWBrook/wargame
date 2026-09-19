import type { Area, Unit } from './types.ts';

// Authored schematic exercise, not a historical movement graph or order of battle.
export const SCENARIO = {
  id: 'the-narrow-sea-v2',
  title: 'The Narrow Sea',
  subtitle: 'A Greek coalition command exercise · 480 BC',
  turns: 6,
  seed: 480,
};

export const AREAS: Area[] = [
  { id: 'thessaly', name: 'Thessaly', domain: 'land', terrain: 'Open country', capacity: 3, defence: 1, neighbors: ['thermopylae', 'phocis'], x: 200, y: 75, description: 'The invading army approaches from the north. The western route can bypass a concentrated defence.' },
  { id: 'thermopylae', name: 'Thermopylae', domain: 'land', terrain: 'Narrow pass', capacity: 2, defence: 1.35, neighbors: ['thessaly', 'phocis', 'boeotia'], x: 270, y: 205, description: 'Restricted frontage helps a prepared defence. A pass alone cannot protect the western approach.' },
  { id: 'phocis', name: 'Phocis', domain: 'land', terrain: 'Mountain routes', capacity: 2, defence: 1.2, neighbors: ['thessaly', 'thermopylae', 'boeotia'], x: 115, y: 285, description: 'The schematic western approach. Holding this route costs forces that could defend the pass.' },
  { id: 'boeotia', name: 'Boeotia', domain: 'land', terrain: 'Open country', capacity: 3, defence: 1, neighbors: ['thermopylae', 'phocis', 'attica', 'megara'], x: 305, y: 350, description: 'A junction between the forward defence and the southern positions.' },
  { id: 'attica', name: 'Attica', domain: 'land', terrain: 'Coastal country', capacity: 2, defence: 1, neighbors: ['boeotia', 'megara'], x: 485, y: 435, description: 'A forward supply source while the Saronic route remains Greek-controlled. This exercise models field control, not a siege of Athens.' },
  { id: 'megara', name: 'Megara', domain: 'land', terrain: 'Isthmus approach', capacity: 2, defence: 1.2, neighbors: ['boeotia', 'attica', 'corinth'], x: 315, y: 515, description: 'The Corinthians want this approach protected. A forward-service commitment is tested after the third turn.' },
  { id: 'corinth', name: 'Corinth', domain: 'land', terrain: 'Home base', capacity: 3, defence: 1.3, neighbors: ['megara'], x: 180, y: 600, description: 'The southern supply base. Its loss threatens resistance but does not automatically end the exercise.' },
  { id: 'pagasae', name: 'Pagasae approaches', domain: 'sea', terrain: 'Northern anchorage', capacity: 3, defence: 1, neighbors: ['artemisium'], x: 580, y: 80, description: 'The invading fleet enters the exercise here.' },
  { id: 'artemisium', name: 'Artemisium', domain: 'sea', terrain: 'Restricted waters', capacity: 2, defence: 1.2, neighbors: ['pagasae', 'euripus'], x: 585, y: 210, description: 'Holding this forward sea station helps constrain the invading fleet.' },
  { id: 'euripus', name: 'Euboean waters', domain: 'sea', terrain: 'Coastal passage', capacity: 2, defence: 1.1, neighbors: ['artemisium', 'saronic'], x: 660, y: 360, description: 'A compressed coastal route around Euboea and Attica; edges are operational connections, not literal channels.' },
  { id: 'saronic', name: 'Saronic Gulf', domain: 'sea', terrain: 'Southern anchorage', capacity: 3, defence: 1.2, neighbors: ['euripus'], x: 595, y: 580, description: 'Greek control keeps Attica available as a supply source. Losing this route does not instantly starve every army.' },
];

export const AREA_BY_ID = Object.fromEntries(AREAS.map(area => [area.id, area]));

export const INITIAL_UNITS: Unit[] = [
  { id: 'leonidas', name: 'Spartan contingent', side: 'greek', domain: 'land', area: 'thermopylae', strength: 85, cohesion: 90, experience: 1.15, supplied: true },
  { id: 'athenians', name: 'Athenian hoplites', side: 'greek', domain: 'land', area: 'boeotia', strength: 75, cohesion: 85, experience: 1, supplied: true },
  { id: 'corinthians', name: 'Corinthian contingent', side: 'greek', domain: 'land', area: 'megara', strength: 65, cohesion: 85, experience: 1, supplied: true },
  { id: 'athenian-fleet', name: 'Athenian squadron', side: 'greek', domain: 'sea', area: 'artemisium', strength: 85, cohesion: 90, experience: 1.1, supplied: true },
  { id: 'allied-fleet', name: 'Allied squadron', side: 'greek', domain: 'sea', area: 'saronic', strength: 75, cohesion: 85, experience: 1, supplied: true },
  { id: 'persian-guard', name: 'Royal contingent', side: 'persian', domain: 'land', area: 'thessaly', strength: 90, cohesion: 90, experience: 1.1, supplied: true },
  { id: 'persian-main', name: 'Main contingent', side: 'persian', domain: 'land', area: 'thessaly', strength: 85, cohesion: 85, experience: 1, supplied: true },
  { id: 'persian-wing', name: 'Western contingent', side: 'persian', domain: 'land', area: 'thessaly', strength: 70, cohesion: 85, experience: 1, supplied: true },
  { id: 'phoenician-fleet', name: 'Phoenician squadron', side: 'persian', domain: 'sea', area: 'pagasae', strength: 90, cohesion: 85, experience: 1.05, supplied: true },
  { id: 'ionian-fleet', name: 'Ionian squadron', side: 'persian', domain: 'sea', area: 'pagasae', strength: 80, cohesion: 80, experience: 1, supplied: true },
];
