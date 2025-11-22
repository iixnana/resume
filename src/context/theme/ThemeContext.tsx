import { createContext } from "react";
import type { ThemeContextProps } from "./ThemeContext.types";

export const ThemeContext = createContext<ThemeContextProps | null>(null);
