import { ComponentType, useEffect, useState } from "react";
import PrimitiveSelect from "react-select";
import { OptionType } from "../../types/transactions";

import * as S from "./styles";

interface SelectProps {
  options: OptionType[];
  label: string;
  onChange: (newValue: OptionType | null) => void;
  value: OptionType | null;
  placeholder?: string;
}

const Select = ({
  options,
  label,
  value,
  placeholder,
  onChange,
}: SelectProps) => {
  return (
    <S.Container>
      <span>{label}</span>
      <div>
        <PrimitiveSelect
          value={value}
          onChange={(newValue) => onChange(newValue)}
          placeholder={placeholder || ""}
          options={options}
          styles={{
            control: (provided, state) => ({
              ...provided,
              borderColor: state.isFocused ? "#333333" : "#979797",
              boxShadow: "none",
            }),
            valueContainer: (provided) => ({
              ...provided,
              padding: "0px 10px",
            }),
            singleValue: (provided) => ({
              ...provided,
              fontSize: 14,
            }),
            option: (provided, state) => ({
              ...provided,
              fontSize: 14,
              backgroundColor: state.isSelected
                ? "#333333"
                : state.isFocused
                ? "#888888"
                : "transparent",
              color: state.isSelected ? "white" : "#333333",
              padding: 10,
            }),
            placeholder: (provided) => ({
              ...provided,
              fontSize: 14,
              color: "#888888",
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              maxWidth: '90%',
              overflow: 'hidden'
            }),
            indicatorSeparator: () => ({ display: "none" }),
            dropdownIndicator: () => ({ display: "none" }),
          }}
        />
        <S.Icon src="/icons/arrow.svg" width={12} height={12} alt="arrow" />
      </div>
    </S.Container>
  );
};
export default Select;
