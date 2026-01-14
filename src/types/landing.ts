import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export type Skill = {
  icon: LucideIcon | IconType;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  titleEn: string;
  titleEs: string;
  titlePt: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  descriptionPt: string;
  imageUrl: string;
  imageAlt: string;
  liveHref: string;
  repoHref: string;
  tags: string[];
};

export type Experience = {
  company: string;
  role: string;
  roleEn: string;
  roleEs: string;
  rolePt: string;
  period: string;
  description: string;
  descriptionEn: string;
  descriptionEs: string;
  descriptionPt: string;
  current?: boolean;
};
