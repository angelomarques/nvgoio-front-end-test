import Image from "next/image";
import styled from "styled-components";

export const Icon = styled(Image)`
  position: absolute;
  right: 10px;
  top: 50%;
  transition: all 200ms ease-in-out;
  transform: translateY(-50%) rotate(0deg);
`;

export const Container = styled.label`
  display: block;
  margin-bottom: 20px;

  & > span {
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.palette.gray["900"]};
    margin-bottom: 8px;
  }

  & > div {
    position: relative;
  }

  &:has(input[aria-expanded="true"]) img {
    transform: translateY(-50%) rotate(180deg);
  }
`;
