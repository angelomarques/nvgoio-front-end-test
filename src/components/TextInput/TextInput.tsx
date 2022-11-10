import { InputHTMLAttributes } from "react";
import { formatAmount } from "../../utils/formatAmount";

import * as S from "./styles";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  currency?: boolean;
}

const TextInput = ({ label, currency = false, ...props }: TextInputProps) => {
  const { name, value } = props;

  return (
    <S.Container>
      <span>{label}</span>
      <S.Input
        type="text"
        {...props}
        value={currency ? formatAmount(Number(value)) : value}
        name={name}
        aria-label={name}
      />
    </S.Container>
  );
};

export default TextInput;
