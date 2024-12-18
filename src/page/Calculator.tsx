import { ThemeProvider } from "styled-components";
import { CalculatorKeyboard, CalculatorScreen, Header } from "../components";
import { CalculatorContextProvider } from "../contexts";
import { CalculatorContainer } from "./styles";
import { useTheme } from "../hooks";

export const Calculator = () => {
  const { theme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <CalculatorContextProvider>
        <CalculatorContainer className="color_transition">
          <div className="container_box">
            <Header />
            <CalculatorScreen />
            <CalculatorKeyboard />
          </div>
        </CalculatorContainer>
      </CalculatorContextProvider>
    </ThemeProvider>
  );
};
