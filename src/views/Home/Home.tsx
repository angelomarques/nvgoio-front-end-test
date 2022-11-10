import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import TransactionsForm from "../../components/TransactionsForm";
import TransactionsTable from "../../components/TransactionsTable";
import { TransactionItemType } from "../../types/transactions";

import * as S from "./styles";

const Home = () => {
  const [transactionItems, setTransactionItems] = useState<
    TransactionItemType[]
  >([
    { id: 1, name: "Item 1", value: 120, transactionType: "PURCHASE" },
    { id: 2, name: "Item 2", value: 1000, transactionType: "SALE" },
  ]);

  const handleSubmit = (transactionData: Omit<TransactionItemType, "id">) => {
    const newTransactionItems = [
      ...transactionItems,
      { id: transactionItems.length + 1, ...transactionData },
    ];
    setTransactionItems(newTransactionItems);

    window.localStorage.setItem(
      "transactionItems",
      JSON.stringify(newTransactionItems)
    );
  };

  useEffect(() => {
    const storedTransactionItems =
      window.localStorage.getItem("transactionItems");

    if (storedTransactionItems) {
      setTransactionItems(JSON.parse(storedTransactionItems));
    }
  }, []);

  return (
    <>
      <Head>
        <title>Controle financeiro</title>
      </Head>
      <Navbar />
      <S.Main>
        <TransactionsForm onSubmit={handleSubmit} />
        <TransactionsTable transactionItems={transactionItems} />
      </S.Main>
    </>
  );
};

export default Home;
