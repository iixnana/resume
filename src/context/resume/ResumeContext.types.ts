import type { Resume } from "../../types/resume";

export interface ResumeContextProps {
  resume: Resume | null;
  isLoading: boolean;
}

export type ResumeState =
  | { status: "loading" }
  | { status: "loaded"; resume: Resume };
