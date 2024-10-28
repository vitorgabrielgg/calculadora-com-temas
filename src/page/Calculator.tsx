import { CalculatorScreen, Header } from "../components";
import { CalculatorContainer } from "./styles";

export const Calculator = () => {
  return (
    <CalculatorContainer>
      <div className="container_box">
        <Header />
        <CalculatorScreen />
      </div>
    </CalculatorContainer>
  );
};
