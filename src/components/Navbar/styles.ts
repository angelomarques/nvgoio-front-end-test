import styled from "styled-components";

export const Container = styled.header`
  background-color: ${(props) => props.theme.palette.gray["100"]};
  padding: 15px 22px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  & > h1 {
    flex: 1;
    text-align: center;
  }

  @media only screen and (min-width: 1100px) {
    gap: 20px;

    & > h1 {
      text-align: left;
    }
  }
`;

export const Button = styled.button`
  padding: 6px 3px;
  cursor: pointer;
  border: none;
  background: none;

  display: flex;
  flex-direction: column;
  gap: 3px;

  & > span {
    display: block;
    width: 18px;
    height: 2px;
    background-color: ${(props) => props.theme.palette.gray["900"]};
  }

  @media only screen and (min-width: 1100px) {
    display: none;
  }
`;

export const NavLinks = styled.nav`
  background-color: ${(props) => props.theme.palette.white.main};
  padding: 10px 20px;
  display: none;

  & > ul {
    display: flex;
  }

  & a {
    color: ${(props) => props.theme.palette.gray['900']};
  }

  & li:not(:last-child) {
    & > a {
      padding-right: 20px;
      margin-right: 20px;
      border-right: 1px solid ${(props) => props.theme.palette.gray.main};
    }
  }

  @media only screen and (min-width: 1100px) {
    display: block;
  }
`;
