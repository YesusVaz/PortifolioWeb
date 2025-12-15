import type { LucideIcon } from "lucide-react";

export type Skill = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  liveHref: string;
  repoHref: string;
};
