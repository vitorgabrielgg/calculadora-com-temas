import { useContext } from "react";
import { CalculatorContext } from "../../contexts";

export const useCalculator = () => {
  const { state, dispatch } = useContext(CalculatorContext);

  const { currentValue, operator, previousValue } = state;

  const handleTypeNumber = (number: string) => {
    dispatch({ type: "TYPE_NUMBER", payload: { number } });
  };

  const handleDeleteNumber = () => {
    dispatch({ type: "TYPE_DELETE" });
  };

  const handleTypeOperator = (operator: string) => {
    dispatch({ type: "TYPE_OPERATOR", payload: { operator } });
  };

  const handleEqual = () => {
    dispatch({ type: "TYPE_EQUAL" });
  };

  const handleReset = () => {
    dispatch({ type: "TYPE_RESET" });
  };

  return {
    currentValue,
    operator,
    previousValue,
    handleTypeNumber,
    handleDeleteNumber,
    handleTypeOperator,
    handleEqual,
    handleReset,
  };
};
