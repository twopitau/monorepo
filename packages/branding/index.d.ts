import type resolveConfig from "tailwindcss/resolveConfig";
import type { DefaultColors } from "tailwindcss/colors";

type fullConfigType = ReturnType<typeof resolveConfig>;

export const fullConfig: fullConfigType;
export const colors = [
  "inherit",
  "current",
  "transparent",
  "black",
  "white",
  "slate",
  "gray",
  "zinc",
  "neutral",
  "stone",
  "red",
  "orange",
  "amber",
  "yellow",
  "lime",
  "green",
  "emerald",
  "teal",
  "cyan",
  "sky",
  "blue",
  "indigo",
  "violet",
  "purple",
  "fuchsia",
  "pink",
  "rose",
] as const;
