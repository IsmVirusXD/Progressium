"use client";

import { ReactNode, useState } from "react";
import { mapTheme, Theme } from "./maps/mapTheme";
import { ThemeTokens } from "../../styles/theme/themeTokens";
import { ThemeContext } from "./context";
interface ThemeManagerProps {
  children: ReactNode;
}

function ThemeManager({ children }: ThemeManagerProps) {
  const [usingTheme, setUsingTheme] = useState<ThemeTokens>(
    mapTheme["default"],
  );

  const hasTheme = (name: string): name is Theme => name in mapTheme;

  const getTheme = (name?: string): ThemeTokens => {
    if (name && hasTheme(name)) return mapTheme[name];
    return mapTheme.default;
  };

  const getAllTheme = () => Object.values(mapTheme);

  const changeTheme = (newTheme: string) => {
    setUsingTheme(getTheme(newTheme));
  };

  return (
    <ThemeContext.Provider value={{ usingTheme, changeTheme, mapTheme }}>
      <div style={usingTheme as React.CSSProperties}>{children}</div>
    </ThemeContext.Provider>
  );
}

export default ThemeManager;
