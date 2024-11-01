type KeyType = "number" | "operator" | "delete" | "reset" | "equal";

export interface IKeyItem {
  className: string;
  keyText: string;
  type: KeyType;
}
