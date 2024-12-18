import { useCalculator } from "../../hooks";
import { CalculatorScreenContainer } from "./styles";

export const CalculatorScreen = () => {
  const { currentValue, previousValue, operator } = useCalculator();

  return (
    <CalculatorScreenContainer className="color_transition">
      <div>
        <p className="previous_value" aria-label="calculator_previous_value">
          {previousValue}
        </p>
        <p className="operator_value" aria-label="calculator_operator">
          {operator}
        </p>
      </div>
      <p className="current_value" aria-label="calculator_current_value">
        {currentValue ? currentValue : "0"}
      </p>
    </CalculatorScreenContainer>
  );
};
