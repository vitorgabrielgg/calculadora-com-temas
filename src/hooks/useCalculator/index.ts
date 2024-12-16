import { useContext } from "react";
import { CalculatorContext } from "../../contexts";

export const useCalculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  const { currentValue, operator, previousValue } = state;

  const handleTypeNumber = (number: string) => {
    dispatch({ type: "TYPE_NUMBER", payload: { number } });
  };

  return {
    currentValue,
    operator,
    previousValue,
    handleTypeNumber,
  };
};
