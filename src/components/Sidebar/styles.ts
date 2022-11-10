import styled from "styled-components";

interface ContainerProps {
  isVisible: boolean;
}

export const Container = styled.aside<ContainerProps>`
  width: 350px;
  background-color: ${(props) => props.theme.palette.gray["900"]};
  padding: 20px 0px;
  transition: all 200ms ease-in-out 100ms;

  flex-direction: column;
  justify-content: start;

  z-index: 2;
  position: fixed;
  transform: ${(props) => (props.isVisible ? "none" : "translateX(100%)")};
  top: 0;
  right: 0;
  bottom: 0;

  @media only screen and (min-width: 768px) {
    width: 250px;
  }
`;

export const Button = styled.button`
  width: min-content;
  margin-left: 20px;
  cursor: pointer;
  border: none;
  background: none;
`;

export const NavLinkContainer = styled.ul`
  margin: 26px 0px;
`;

export const NavLink = styled.li`
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: right;

  & > a {
    display: block;
    transition: all 300ms ease-in-out;
    margin-bottom: 7px;
    padding: 4px 20px;
    color: ${(props) => props.theme.palette.white.main};

    &:focus {
      background-color: ${(props) => props.theme.palette.gray["300"]};
      color: ${(props) => props.theme.palette.gray["900"]};
    }
  }
`;
