import { IKeyItem } from "../../@types";
import { KeyItem } from "./KeyItem";
import { CalculatorKeyboardContainer } from "./styles";

const keysArray: IKeyItem[] = [
  {
    keyText: "7",
    className: "number",
    type: "number",
  },
  {
    keyText: "8",
    className: "number",
    type: "number",
  },
  {
    keyText: "9",
    className: "number",
    type: "number",
  },
  {
    keyText: "DEL",
    className: "delete",
    type: "delete",
  },
  {
    keyText: "4",
    className: "number",
    type: "number",
  },
  {
    keyText: "5",
    className: "number",
    type: "number",
  },
  {
    keyText: "6",
    className: "number",
    type: "number",
  },
  {
    keyText: "+",
    className: "operator",
    type: "operator",
  },
  {
    keyText: "1",
    className: "number",
    type: "number",
  },
  {
    keyText: "2",
    className: "number",
    type: "number",
  },
  {
    keyText: "3",
    className: "number",
    type: "number",
  },
  {
    keyText: "-",
    className: "operator",
    type: "operator",
  },
  {
    keyText: ".",
    className: "number",
    type: "number",
  },
  {
    keyText: "0",
    className: "number",
    type: "number",
  },
  {
    keyText: "/",
    className: "operator",
    type: "operator",
  },
  {
    keyText: "x",
    className: "operator",
    type: "operator",
  },
  {
    keyText: "RESET",
    className: "reset",
    type: "reset",
  },
  {
    keyText: "=",
    className: "equal",
    type: "equal",
  },
];

export const CalculatorKeyboard = () => {
  return (
    <CalculatorKeyboardContainer>
      {keysArray.map((key, i) => (
        <KeyItem {...key} key={i} />
      ))}
    </CalculatorKeyboardContainer>
  );
};
