import { ThemeToggleItemContainer } from "./styles";

export const ThemeToggleItem = ({ className }: { className: string }) => {
  return (
    <ThemeToggleItemContainer
      className={`color_transition ${className}`}
    ></ThemeToggleItemContainer>
  );
};
