import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Montserrat", "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  *,
  *::before,
  *::after {
    margin:0;
    padding:0;
    box-sizing: inherit;
  }
`;
