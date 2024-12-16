import { CalculatorKeyboard, CalculatorScreen, Header } from "../components";
import { CalculatorContextProvider } from "../contexts";
import { CalculatorContainer } from "./styles";

export const Calculator = () => {
  return (
    <CalculatorContextProvider>
      <CalculatorContainer className="color_transition">
        <div className="container_box">
          <Header />
          <CalculatorScreen />
          <CalculatorKeyboard />
        </div>
      </CalculatorContainer>
    </CalculatorContextProvider>
  );
};
