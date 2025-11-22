import type { Education } from "./education";
import type { Experience } from "./experience";
import type { Info } from "./info";
import type { Language } from "./language";
import type { Project } from "./project";
import type { Skills } from "./skills";

export interface Resume {
  info: Info;
  aboutMe: string;
  education: Education[];
  experience: Experience[];
  skills: Skills[];
  languages: Language[];
  project: Project;
}
