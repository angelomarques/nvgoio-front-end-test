export const formatAmount = (amount: string | number) => {
    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      });
    return formatter.format(Number(amount)).replace(/\s/, " ");
}

export const getRawAmount = (amountFormatted: string) => {
  const digits = amountFormatted.split(",00").join('').match(/\d/g);

  return Number(digits?.join('')) || 0;
}