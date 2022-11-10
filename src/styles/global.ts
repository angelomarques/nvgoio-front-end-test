import { createGlobalStyle, keyframes } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
  }

  body {
    font-family: "Lato", sans-serif;
    height: 100%;
    /* overflow: hidden; */
  }

  h1 {
    font-size: 20px;
    font-weight: 600;
    color: ${(props) => props.theme.palette.gray["900"]};
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const slideAnimation = keyframes`
  0% {
    transform: translateX(0%);
    display: flex;
  }
  75% {
    transform: translateX(100%);
  }
`;
