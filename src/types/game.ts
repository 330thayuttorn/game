export type GameStatus = "not_started" | "playing" | "completed";

export type Game = {
  id: string;
  title: string;
  platform: string;
  expectedHours: number;
  status: GameStatus;
  imageUrl: string;
};

export type GameDraft = {
  title: string;
  platform: string;
  expectedHours: string;
  status: GameStatus;
  imageUrl: string;
};