export type Side = 'greek' | 'persian';
export type Domain = 'land' | 'sea';
export type Intent = 'press' | 'balanced' | 'preserve';
export type Commitment = 'unsettled' | 'forward' | 'home' | 'honoured' | 'broken';
export type CommitmentChoice = 'forward' | 'home';

export interface Area {
  id: string;
  name: string;
  domain: Domain;
  terrain: string;
  capacity: number;
  defence: number;
  neighbors: string[];
  x: number;
  y: number;
  description: string;
}

export interface Unit {
  id: string;
  name: string;
  side: Side;
  domain: Domain;
  area: string;
  strength: number;
  cohesion: number;
  experience: number;
  supplied: boolean;
}

export interface Order {
  unitId: string;
  kind: 'hold' | 'move' | 'reserve';
  target: string | null;
  intent: Intent;
}

export interface Contact {
  area: string;
  band: 'light' | 'substantial' | 'strong' | 'clear';
  seenTurn: number;
}

export interface Dispatch {
  turn: number;
  side: Side | 'both';
  text: string;
  kind: 'battle' | 'movement' | 'supply' | 'council' | 'intelligence' | 'outcome';
}

export interface Outcome {
  result: 'victory' | 'defeat' | 'stalemate';
  title: string;
  reason: string;
}

export interface TurnRecord {
  turn: number;
  greek: Order[];
  persian: Order[];
  choice: CommitmentChoice;
}

export interface GameState {
  version: 1;
  initialSeed: number;
  rng: number;
  turn: number;
  maxTurns: number;
  units: Unit[];
  control: Record<string, Side | null>;
  contacts: Record<Side, Contact[]>;
  dispatches: Dispatch[];
  commitment: Commitment;
  history: TurnRecord[];
  outcome: Outcome | null;
}

/** No enemy objects, hidden orders, RNG state or omniscient event log. */
export interface Observation {
  side: Side;
  turn: number;
  maxTurns: number;
  units: Unit[];
  contacts: Contact[];
  control: Record<string, Side | null>;
  dispatches: Dispatch[];
  commitment: Commitment;
  outcome: Outcome | null;
}

export interface Advice {
  assessment: string;
  confidence: string;
  reasons: string[];
}

export interface SaveGame {
  version: 1;
  state: GameState;
  orders: Order[];
  choice: CommitmentChoice;
}
