import { useEffect, useState } from "react";
import { getCssVar } from "../utils/cssVar";

export function useCssVarResponsive(varName: string) {
  const [value, setValue] = useState(() => getCssVar(varName));

  useEffect(() => {
    const onResize = () => {
      setValue(getCssVar(varName));
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [varName]);

  return value;
}
