import { createContext, ReactNode, useState } from "react";

export type ThemeType = "theme1" | "theme2" | "theme3";

interface IThemeContext {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
}

const themeLocalStorage = localStorage.getItem("theme");

const initialStateContext: IThemeContext = {
  theme: themeLocalStorage ? JSON.parse(themeLocalStorage) : "theme1",
  setTheme: () => {},
};

export const ThemeContext = createContext<IThemeContext>(initialStateContext);

export const ThemeContextProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>(initialStateContext.theme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
