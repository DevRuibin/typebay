import { ThemeName } from "@monkeytype/schemas/configs";
import { z } from "zod";

const hexColorSchema = z
  .string()
  .regex(
    /^#([0-9a-fA-F]{3,4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,
    "Invalid hex color",
  );

export const ThemeSchema = z.object({
  hasCss: z.boolean().optional(),
  bg: hexColorSchema,
  main: hexColorSchema,
  caret: hexColorSchema,
  sub: hexColorSchema,
  subAlt: hexColorSchema,
  text: hexColorSchema,
  error: hexColorSchema,
  errorExtra: hexColorSchema,
  colorfulError: hexColorSchema,
  colorfulErrorExtra: hexColorSchema,
});
export type Theme = z.infer<typeof ThemeSchema>;
export type ColorName = keyof Omit<Theme, "hasCss">;
export const themes: Record<ThemeName, Theme> = {
  typebay_light: {
    bg: "#f7f8fa",
    main: "#4f46e5",
    caret: "#4f46e5",
    sub: "#9aa3b2",
    subAlt: "#e9ebf0",
    text: "#2a2f3a",
    error: "#dc2626",
    errorExtra: "#991b1b",
    colorfulError: "#dc2626",
    colorfulErrorExtra: "#991b1b",
  },
  typebay_dark: {
    bg: "#101114",
    main: "#818cf8",
    caret: "#818cf8",
    sub: "#545c6b",
    subAlt: "#1a1c21",
    text: "#d5d9e0",
    error: "#f87171",
    errorExtra: "#b91c1c",
    colorfulError: "#f87171",
    colorfulErrorExtra: "#b91c1c",
  },
  sand: {
    bg: "#f6f3ec",
    main: "#b45309",
    caret: "#b45309",
    sub: "#a99f8b",
    subAlt: "#ede8dc",
    text: "#3b3325",
    error: "#b91c1c",
    errorExtra: "#7f1d1d",
    colorfulError: "#b91c1c",
    colorfulErrorExtra: "#7f1d1d",
  },
  midnight: {
    bg: "#14181f",
    main: "#93a1ff",
    caret: "#93a1ff",
    sub: "#5a6374",
    subAlt: "#1d222c",
    text: "#d8dce5",
    error: "#fb7185",
    errorExtra: "#9f1239",
    colorfulError: "#fb7185",
    colorfulErrorExtra: "#9f1239",
  },
};

export type ThemeWithName = Theme & { name: ThemeName };
export const ThemesList: ThemeWithName[] = Object.keys(themes)
  .sort()
  .map((it) => ({
    ...themes[it as ThemeName],
    name: it as ThemeName,
  }));
