import { useCallback, useEffect, useState, type ReactNode } from "react";
import { ResumeContext } from "./ResumeContext";
import type { ResumeContextProps, ResumeState } from "./ResumeContext.types";
import resumeJson from "../../content/resume.json";
import type { Language, Level } from "../../types/language";

export const ResumeProvider = ({ children }: { children: ReactNode }) => {
  const [resumeState, setResumeState] = useState<ResumeState>({
    status: "loading",
  });

  const mapLanguageLevels = useCallback(
    (languages: { language: string; level: string }[]): Language[] => {
      return languages.map((lang) => ({
        ...lang,
        level: lang.level as Level,
      }));
    },
    []
  );

  useEffect(() => {
    setResumeState({
      status: "loaded",
      resume: {
        ...resumeJson,
        languages: mapLanguageLevels(resumeJson.languages),
      },
    });
  }, []);

  const contextValue: ResumeContextProps = {
    isLoading: resumeState.status === "loading",
    resume: resumeState.status === "loaded" ? resumeState.resume : null,
  };

  return (
    <ResumeContext.Provider value={contextValue}>
      {children}
    </ResumeContext.Provider>
  );
};
