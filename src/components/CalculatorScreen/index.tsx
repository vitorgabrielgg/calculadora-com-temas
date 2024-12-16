import { useCalculator } from "../../hooks";
import { CalculatorScreenContainer } from "./styles";

export const CalculatorScreen = () => {
  const { currentValue } = useCalculator();

  return (
    <CalculatorScreenContainer className="color_transition">
      <div>
        <p className="previous_value">1</p>
        <p className="operator_value">+</p>
      </div>
      <p className="current_value" aria-label="calculator_current_value">
        {currentValue ? currentValue : "0"}
      </p>
    </CalculatorScreenContainer>
  );
};
