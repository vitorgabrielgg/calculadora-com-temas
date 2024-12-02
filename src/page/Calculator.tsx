import { CalculatorKeyboard, CalculatorScreen, Header } from "../components";
import { CalculatorContainer } from "./styles";

export const Calculator = () => {
  return (
    <CalculatorContainer className="color_transition">
      <div className="container_box">
        <Header />
        <CalculatorScreen />
        <CalculatorKeyboard />
      </div>
    </CalculatorContainer>
  );
};
