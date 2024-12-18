export const handleResult = (
  previousValue: string,
  currentValue: string,
  operator: string
) => {
  const previousNumber = Number(previousValue);
  const currentNumber = Number(currentValue);
  let result;
  switch (operator) {
    case "+": {
      result = previousNumber + currentNumber;
      break;
    }
    case "-": {
      result = previousNumber - currentNumber;
      break;
    }
    case "/": {
      result = previousNumber / currentNumber;
      break;
    }
    case "x": {
      result = previousNumber * currentNumber;
      break;
    }
  }

  return String(result);
};
