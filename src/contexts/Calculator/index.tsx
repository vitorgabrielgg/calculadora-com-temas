import React, { createContext, ReactNode, useReducer } from "react";
import { handleResult } from "../../utils";

interface ICalculatorState {
  previousValue: string;
  currentValue: string;
  operator: string;
}

type PayloadType = {
  [key: string]: string;
};

type IAction =
  | { type: "TYPE_NUMBER"; payload: PayloadType }
  | { type: "TYPE_DELETE" }
  | { type: "TYPE_OPERATOR"; payload: PayloadType }
  | { type: "TYPE_EQUAL" }
  | { type: "TYPE_RESET" };

const initialState: ICalculatorState = {
  currentValue: "",
  previousValue: "",
  operator: "",
};

interface ICalculatorContext {
  state: ICalculatorState;
  dispatch: React.Dispatch<IAction>;
}

export const CalculatorContext = createContext<ICalculatorContext>({
  state: initialState,
  dispatch: () => {},
});

const calculatorReducer = (state: ICalculatorState, action: IAction) => {
  switch (action.type) {
    case "TYPE_NUMBER": {
      // Verifica se o payload é um '.' e se o currentValue já contém um '.'
      if (action.payload.number === "." && state.currentValue.includes(".")) {
        return state;
      } else {
        // Se não houver valor no currentValue e se o payload é um '.' será adicionado um '0' antes das casas decimais
        return {
          ...state,
          currentValue:
            !state.currentValue && action.payload.number === "."
              ? `0${state.currentValue + action.payload.number}`
              : state.currentValue + action.payload.number,
        };
      }
    }
    case "TYPE_DELETE": {
      return {
        ...state,
        currentValue: state.currentValue.slice(
          0,
          state.currentValue.length - 1
        ),
      };
    }
    case "TYPE_OPERATOR": {
      if (!state.previousValue) {
        return {
          operator: action.payload.operator,
          previousValue: state.currentValue ? state.currentValue : "0",
          currentValue: "",
        };
      } else {
        return {
          operator: action.payload.operator,
          previousValue: handleResult(
            state.previousValue,
            state.currentValue,
            state.operator
          ),
          currentValue: "",
        };
      }
    }
    case "TYPE_EQUAL": {
      return {
        currentValue: handleResult(
          state.previousValue,
          state.currentValue,
          state.operator
        ),
        previousValue: "",
        operator: "",
      };
    }
    case "TYPE_RESET": {
      return {
        currentValue: "",
        previousValue: "",
        operator: "",
      };
    }
  }
};

export const CalculatorContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  return (
    <CalculatorContext.Provider value={{ state, dispatch }}>
      {children}
    </CalculatorContext.Provider>
  );
};
