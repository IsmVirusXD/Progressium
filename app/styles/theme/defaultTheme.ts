import { ThemeTokens } from "@/app/styles/theme/themeTokens";
import { mapFont } from "../../features/themeManager/maps/mapFont";

export const defaultTheme: ThemeTokens = {
  //Colors
  "--theme-color-background": "#f8fafc",
  "--theme-color-foreground": "#1a1a1a",
  "--theme-color-muted": "#64748b",
  "--theme-color-primary": "#1a4b8e",
  "--theme-color-secondary": "#d42027",
  "--theme-color-done": "#00843d",

  //Typography
  "--theme-font-body": mapFont.playpen,
  "--theme-font-heading": mapFont.playpen,

  "--theme-font-weight-bold": "700",
  "--theme-font-weight-semi-bold": "600",
  "--theme-font-weight-medium": "500",
  "--theme-font-weight-regular": "400",
  "--theme-font-weight-light": "300",
  "--theme-font-weight-extra-light": "200",
};
