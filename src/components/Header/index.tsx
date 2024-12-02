import { HeaderContainer } from "./styles";
import { ThemeToggle } from "./ThemeToggle";

export const Header = () => {
  return (
    <HeaderContainer className="color_transition">
      <h1>calc</h1>
      <ThemeToggle />
    </HeaderContainer>
  );
};
