export interface Language {
  language: string;
  level: Level;
}

export type Level = "A1" | "A2" | "B1" | "B2" | "C1" | "Native";
