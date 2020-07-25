import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
   margin: 0;
   padding: 0;
   outline: 0;
   box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.colors.light};
    color: ${props => props.theme.colors.dark};
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  input, button, textarea {
    font: 400 1.1rem Roboto, sans-serif;
  }

  button, a {
    cursor: pointer;
  }
`;

export default GlobalStyle;