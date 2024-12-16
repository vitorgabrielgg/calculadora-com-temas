import React, { createContext, ReactNode, useReducer } from "react";

interface ICalculatorState {
  previousValue: string;
  currentValue: string;
  operator: string;
}

type ActionTypes = "TYPE_NUMBER";

interface IAction {
  type: ActionTypes;
  payload?: {
    number: string;
  };
}

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
      if (action.payload?.number === "." && state.currentValue.includes(".")) {
        return state;
      } else {
        // Se não houver valor no currentValue e se o payload é um '.' será adicionado um '0' antes das casas decimais
        return {
          ...state,
          currentValue:
            !state.currentValue && action.payload?.number === "."
              ? `0${state.currentValue + action.payload?.number}`
              : state.currentValue + action.payload?.number,
        };
      }
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
