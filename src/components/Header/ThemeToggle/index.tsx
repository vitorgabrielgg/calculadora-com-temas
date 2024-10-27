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

        <div className="toggle"></div>
      </div>
    </ThemeToggleContainer>
  );
};
