import { createContext } from "react";
import type { ResumeContextProps } from "./ResumeContext.types";

export const ResumeContext = createContext<ResumeContextProps | null>(null);
