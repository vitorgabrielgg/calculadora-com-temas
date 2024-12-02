import { useTheme } from "../../../hooks";
import { ThemeToggleItemContainer } from "./styles";
import { ThemeType } from "../../../contexts";

interface ThemeToggleItemProps {
  className: string;
  ariaLabel: string;
  themeString: ThemeType;
}

export const ThemeToggleItem = ({
  className,
  ariaLabel,
  themeString,
}: ThemeToggleItemProps) => {
  const { theme, handleChangeTheme } = useTheme();

  const opacity = className.includes(theme.title) ? "opacity_100" : "opacity_0";

  return (
    <ThemeToggleItemContainer
      aria-label={ariaLabel}
      className={`${opacity} ${className}`}
      onClick={() => {
        handleChangeTheme(themeString);
      }}
    ></ThemeToggleItemContainer>
  );
};
