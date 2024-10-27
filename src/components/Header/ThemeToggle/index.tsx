import { ThemeToggleItem } from "../ThemeToggleItem";
import { ThemeToggleContainer } from "./styles";

export const ThemeToggle = () => {
  return (
    <ThemeToggleContainer>
      <span>Theme</span>
      <div className="toggle_box">
        <div className="toggle_index">
          {Array.from({ length: 3 }).map((_, i) => (
            <p>{i + 1}</p>
          ))}
        </div>

        <div className="toggle">
          <ThemeToggleItem className="btn_theme_1" />
          <ThemeToggleItem className="btn_theme_2" />
          <ThemeToggleItem className="btn_theme_3" />
        </div>
      </div>
    </ThemeToggleContainer>
  );
};
