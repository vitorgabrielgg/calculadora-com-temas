import { IKeyItem } from "../../../@types/keyItem";
import { KeyItemContainer } from "./styles";

export const KeyItem = ({ className, keyText, type }: IKeyItem) => {
  const handleAriaLabel = (): string => {
    if (type === "number" || type === "operator") {
      return `${type}: ${keyText}`;
    } else {
      return `${type}`;
    }
  };

  return (
    <KeyItemContainer
      className={`color_transition ${className}`}
      aria-label={handleAriaLabel()}
    >
      <p className="color_transition">{keyText}</p>
    </KeyItemContainer>
  );
};
