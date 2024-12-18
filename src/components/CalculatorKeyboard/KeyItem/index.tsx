import { IKeyItem, KeyType } from "../../../@types/keyItem";
import { useCalculator } from "../../../hooks";
import { KeyItemContainer } from "./styles";

export const KeyItem = ({ className, keyText, type }: IKeyItem) => {
  const { handleDeleteNumber, handleTypeNumber, handleTypeOperator } =
    useCalculator();

  const handleAriaLabel = (): string => {
    if (type === "number" || type === "operator") {
      return `${type}: ${keyText}`;
    } else {
      return `${type}`;
    }
  };

  const keyFunctions: Record<KeyType, () => void> = {
    number: () => handleTypeNumber(keyText),
    delete: () => handleDeleteNumber(),
    operator: () => handleTypeOperator(keyText),
  };

  return (
    <KeyItemContainer
      className={`color_transition ${className}`}
      aria-label={handleAriaLabel()}
      onClick={keyFunctions[type]}
    >
      <p className="color_transition">{keyText}</p>
    </KeyItemContainer>
  );
};
