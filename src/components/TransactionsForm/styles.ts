import styled from "styled-components";
import Button from "../Button";

export const Container = styled.form`
  padding: 6px 0px 28px;
  border-bottom: 1px solid ${(props) => props.theme.palette.gray.main};
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    padding: 20px;
    border: 1px solid ${(props) => props.theme.palette.gray.main};
    border-radius: 4px;
  }
`;

export const FormTitle = styled.h2`
  font-weight: 700;
  font-size: 18px;
  display: none;
  text-align: center;
  margin: 0px 0px 20px;

  @media only screen and (min-width: 768px) {
    display: block;
  }
`;

export const FormButton = styled(Button)`
  @media only screen and (min-width: 768px) {
    width: 200px;
    align-self: end;
  }
  
  @media only screen and (min-width: 1100px) {
    width: 100%;
  }
`;
