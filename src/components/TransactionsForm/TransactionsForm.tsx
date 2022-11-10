import { ChangeEventHandler, FormEventHandler, useState } from "react";
import { OptionType, TransactionItemType } from "../../types/transactions";
import { getRawAmount } from "../../utils/formatAmount";
import Select from "../Select";
import TextInput from "../TextInput";

import * as S from "./styles";

interface TransactionsFormProps {
  onSubmit: (transactionData: Omit<TransactionItemType, "id">) => void;
}

const TransactionsForm = ({ onSubmit }: TransactionsFormProps) => {
  const selectOptions: OptionType[] = [
    { value: "PURCHASE", label: "Compra" },
    { value: "SALE", label: "Venda" },
  ];
  const [transactionType, setTransactionType] = useState<OptionType | null>(
    null
  );
  const [productName, setProductName] = useState("");
  const [productValue, setProductValue] = useState(0);

  const handleTransactionTypeChange = (newValue: OptionType | null) => {
    setTransactionType(newValue);
  };

  const handleProductNameChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    setProductName(event.target.value);
  };

  const handleProductValueChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const value = event.target.value;
    if (value.includes(",00")) {
      setProductValue(getRawAmount(value));
    } else {
      setProductValue(getRawAmount(value.substring(0, value.length - 3)));
    }
  };

  const resetFields = () => {
    setTransactionType(null);
    setProductName("");
    setProductValue(0);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (productName && productValue && transactionType) {
      onSubmit({
        name: productName,
        value: productValue,
        transactionType: transactionType?.value,
      });
      resetFields();
    }
  };

  return (
    <S.Container onSubmit={handleSubmit}>
      <S.FormTitle>Nova transação</S.FormTitle>
      <S.InputContainer>
        <Select
          options={selectOptions}
          label="Tipo de transação"
          value={transactionType}
          onChange={handleTransactionTypeChange}
          placeholder="Selecione o Tipo de Transação"
        />
        <TextInput
          label="Nome da mercadoria"
          name="product-name"
          value={productName}
          onChange={handleProductNameChange}
          placeholder="Digite o nome da mercadoria"
        />
        <TextInput
          label="Valor"
          name="product-value"
          value={productValue}
          onChange={handleProductValueChange}
          currency
        />
      </S.InputContainer>
      <S.FormButton type="submit">Adicionar transação</S.FormButton>
    </S.Container>
  );
};

export default TransactionsForm;
