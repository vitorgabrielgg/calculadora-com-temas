import { useContext, useEffect } from "react";
import { theme1, theme2, theme3 } from "../../styles/themes";
import { ThemeContext, ThemeType } from "../../contexts";

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (!localStorage.getItem("theme")) {
      localStorage.setItem("theme", JSON.stringify("theme1"));
    }
  }, []);

  const themes = {
    theme1,
    theme2,
    theme3,
  };

  const handleChangeTheme = (theme: ThemeType) => {
    setTheme(theme);
    localStorage.setItem("theme", JSON.stringify(theme));
  };

  return {
    theme: themes[theme],
    handleChangeTheme,
  };
};
