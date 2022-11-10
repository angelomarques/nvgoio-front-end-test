
export interface TransactionItemType {
  readonly id: number;
  readonly value: number;
  readonly name: string;
  readonly transactionType: "SALE" | "PURCHASE";
}

export interface OptionType {
  readonly value: TransactionItemType['transactionType'];
  readonly label: string;
}
