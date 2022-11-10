import styled from "styled-components";

export const Container = styled.label`
  display: flex;
  flex-direction: column;

  & > span {
    display: block;
    font-size: 14px;
    color: ${(props) => props.theme.palette.gray["900"]};
    margin-bottom: 8px;
  }
`;

export const Input = styled.input`
  flex: 1;
  color: ${(props) => props.theme.palette.gray["900"]};
  border: 1px solid ${props => props.theme.palette.gray.main};
  box-shadow: none;
  border-radius: 4px;
  outline: 0;
  padding: 10px 12px;
  font-size: 14px;
  font-family: "Lato", sans-serif;
  margin-bottom: 20px;
  display: block;

  &:focus {
    border-color: ${props => props.theme.palette.gray['900']};
  }

  ::placeholder {
    color: ${props => props.theme.palette.gray['700']};
  }
`;
