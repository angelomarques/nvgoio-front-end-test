import { TransactionItemType } from "../../types/transactions";
import { formatAmount } from "../../utils/formatAmount";
import { getTransactionsSum } from "../../utils/transactions";
import * as S from "./styles";

interface TransactionsTableProps {
  transactionItems: TransactionItemType[];
}

const TransactionsTable = ({ transactionItems }: TransactionsTableProps) => {
  const transactionsSum = getTransactionsSum(transactionItems);

  const getTransactionTypeSign = (
    transactionType: TransactionItemType["transactionType"]
  ) => {
    switch (transactionType) {
      case "PURCHASE":
        return "-";
      case "SALE":
        return "+";
    }
  };

  const getTransactionTotalStatus = (transactionsSum: number) => {
    if (transactionsSum > 0) return '[LUCRO]';
    return '[PREJUÍZO]'
  }

  return (
    <S.Container>
      <S.Title>Extrato de transações</S.Title>
      <S.TableHeader>
        <S.TransactionType />
        <S.ProductNameHeader>Mercadoria</S.ProductNameHeader>
        <S.ProductValueHeader>Valor</S.ProductValueHeader>
      </S.TableHeader>
      <div>
        {transactionItems.map((item) => (
          <S.Item key={item.id}>
            <S.TransactionType>
              {getTransactionTypeSign(item.transactionType)}
            </S.TransactionType>
            <S.ProductName>{item.name}</S.ProductName>
            <S.ProductValue>{formatAmount(item.value)}</S.ProductValue>
          </S.Item>
        ))}
      </div>
      <S.TotalContainer>
        <div>
          <p>Total</p>
          <p>{formatAmount(transactionsSum)}</p>
        </div>
        <S.Status>{getTransactionTotalStatus(transactionsSum)}</S.Status>
      </S.TotalContainer>
    </S.Container>
  );
};

export default TransactionsTable;
