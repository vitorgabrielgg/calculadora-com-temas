import { act, render, screen } from "@testing-library/react";
import { KeyItem } from ".";
import { IKeyItem } from "../../../@types/keyItem";
import { Calculator } from "../../../page/Calculator";
import userEvent from "@testing-library/user-event";
import { handleResult } from "../../../utils";

describe("Show Keys", () => {
  function getKey(data: IKeyItem) {
    const { getByLabelText } = render(<KeyItem {...data} />);

    let key;

    if (data.type === "number" || data.type === "operator") {
      key = getByLabelText(`${data.type}: ${data.keyText}`);
    } else {
      key = getByLabelText(`${data.type}`);
    }

    return key;
  }

  function expectKey(key: HTMLElement, className: string, keyText: string) {
    expect(key).toHaveClass(className);
    expect(key).toHaveTextContent(keyText);
  }

  it("should show number key", () => {
    const numberKeyData: IKeyItem = {
      keyText: "1",
      className: "number",
      type: "number",
    };

    const key = getKey(numberKeyData);

    expectKey(key, numberKeyData.className, numberKeyData.keyText);
  });

  it("should show operator key", () => {
    const operatorKeyData: IKeyItem = {
      keyText: "+",
      className: "operator",
      type: "operator",
    };

    const key = getKey(operatorKeyData);

    expectKey(key, operatorKeyData.className, operatorKeyData.keyText);
  });

  it("should show delete key", () => {
    const deleteKeyData: IKeyItem = {
      keyText: "DEL",
      className: "delete",
      type: "delete",
    };

    const key = getKey(deleteKeyData);

    expectKey(key, deleteKeyData.className, deleteKeyData.keyText);
  });

  it("should show reset key", () => {
    const resetKeyData: IKeyItem = {
      keyText: "RESET",
      className: "reset",
      type: "reset",
    };

    const key = getKey(resetKeyData);

    expectKey(key, resetKeyData.className, resetKeyData.keyText);
  });

  it("should show equal key", () => {
    const equalKeyData: IKeyItem = {
      keyText: "=",
      className: "equal",
      type: "equal",
    };

    const key = getKey(equalKeyData);

    expectKey(key, equalKeyData.className, equalKeyData.keyText);
  });
});

describe("Type on the keypad", () => {
  it("should show a number when it has been typed", async () => {
    const keyItemData: IKeyItem = {
      keyText: "1",
      className: "number",
      type: "number",
    };

    renderCalculator();

    const numberKey = screen.getByLabelText(
      `${keyItemData.type}: ${keyItemData.keyText}`
    );

    await act(async () => {
      await userEvent.click(numberKey);
    });

    const calculatorCurrentValue = screen.getByLabelText(
      "calculator_current_value"
    );

    expect(calculatorCurrentValue).toHaveTextContent(keyItemData.keyText);
  });

  it("should delete a number on the calculator", async () => {
    const deleteKeyData: IKeyItem = {
      keyText: "DEL",
      className: "delete",
      type: "delete",
    };

    const numberKeyData: IKeyItem = {
      className: "number",
      type: "number",
      keyText: "2",
    };

    renderCalculator();

    const numberKey = screen.getByLabelText(
      `${numberKeyData.type}: ${numberKeyData.keyText}`
    );

    await act(async () => {
      await userEvent.click(numberKey);
      await userEvent.click(numberKey);
    });

    const calculatorCurrentValue = screen.getByLabelText(
      "calculator_current_value"
    );

    expect(calculatorCurrentValue.textContent).toEqual(
      numberKeyData.keyText + numberKeyData.keyText
    );

    const deleteKey = screen.getByLabelText(`${deleteKeyData.type}`);

    await act(async () => {
      await userEvent.click(deleteKey);
    });

    expect(calculatorCurrentValue.textContent).toEqual(numberKeyData.keyText);
  });

  it("should replace the currentValue to previousValue when any operator has been typed", async () => {
    const operatorKeyData: IKeyItem = {
      keyText: "+",
      className: "operator",
      type: "operator",
    };

    const numberKeyData: IKeyItem = {
      className: "number",
      type: "number",
      keyText: "2",
    };

    renderCalculator();

    const numberKey = screen.getByLabelText(
      `${numberKeyData.type}: ${numberKeyData.keyText}`
    );

    await act(async () => {
      await userEvent.click(numberKey);
      await userEvent.click(numberKey);
    });

    const calculatorCurrentValue = screen.getByLabelText(
      "calculator_current_value"
    );

    expect(calculatorCurrentValue.textContent).toEqual(
      numberKeyData.keyText + numberKeyData.keyText
    );

    const operatorKey = screen.getByLabelText(
      `${operatorKeyData.type}: ${operatorKeyData.keyText}`
    );

    const calculatorPreviousValue = screen.getByLabelText(
      "calculator_previous_value"
    );

    const operatorValue = screen.getByLabelText("calculator_operator");

    await act(async () => {
      await userEvent.click(operatorKey);
    });

    expect(calculatorCurrentValue.textContent).toEqual("0");
    expect(operatorValue.textContent).toEqual(operatorKeyData.keyText);
    expect(calculatorPreviousValue.textContent).toEqual(
      numberKeyData.keyText + numberKeyData.keyText
    );
  });

  it("should show the operation result when the equal key has been typed", async () => {
    const operatorKeyData: IKeyItem = {
      keyText: "+",
      className: "operator",
      type: "operator",
    };

    const numberKeyData: IKeyItem = {
      className: "number",
      type: "number",
      keyText: "2",
    };

    const equalKeyData: IKeyItem = {
      className: "equal",
      type: "equal",
      keyText: "=",
    };

    renderCalculator();

    const numberKey = screen.getByLabelText(
      `${numberKeyData.type}: ${numberKeyData.keyText}`
    );
    const operatorKey = screen.getByLabelText(
      `${operatorKeyData.type}: ${operatorKeyData.keyText}`
    );

    const equalKey = screen.getByLabelText(`${equalKeyData.type}`);

    await act(async () => {
      await userEvent.click(numberKey);
      await userEvent.click(operatorKey);
      await userEvent.click(numberKey);
      await userEvent.click(equalKey);
    });

    const calculatorCurrentValue = screen.getByLabelText(
      "calculator_current_value"
    );

    expect(calculatorCurrentValue.textContent).toEqual(
      handleResult(
        numberKey.textContent!,
        numberKey.textContent!,
        operatorKey.textContent!
      )
    );
  });
});

const renderCalculator = () => {
  return render(<Calculator />);
};
