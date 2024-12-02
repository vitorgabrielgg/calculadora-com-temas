import { ThemeToggleItem } from "../ThemeToggleItem";
import { ThemeToggleContainer } from "./styles";

export const ThemeToggle = () => {
  return (
    <ThemeToggleContainer>
      <span>Theme</span>
      <div className="toggle_box">
        <div className="toggle_index">
          {Array.from({ length: 3 }).map((_, i) => (
            <p key={i}>{i + 1}</p>
          ))}
        </div>

        <div className="toggle color_transition">
          <ThemeToggleItem
            className="btn_theme1"
            ariaLabel="toggle item 1"
            themeString="theme1"
          />
          <ThemeToggleItem
            className="btn_theme2"
            ariaLabel="toggle item 2"
            themeString="theme2"
          />
          <ThemeToggleItem
            className="btn_theme3"
            ariaLabel="toggle item 3"
            themeString="theme3"
          />
        </div>
      </div>
    </ThemeToggleContainer>
  );
};
