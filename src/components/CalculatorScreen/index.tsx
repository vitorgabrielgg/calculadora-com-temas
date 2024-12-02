import { CalculatorScreenContainer } from "./styles";

export const CalculatorScreen = () => {
  return (
    <CalculatorScreenContainer className="color_transition">
      <div>
        <p className="previous_value">1</p>
        <p className="operator_value">+</p>
      </div>
      <p className="current_value">111</p>
    </CalculatorScreenContainer>
  );
};
