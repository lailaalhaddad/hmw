import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-size: large;
    color: ${(props) => props.theme.firstColor};
    background-color: ${(props) => props.theme.backgroundColor}
  }
`;
