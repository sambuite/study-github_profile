import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary:"#221f3b" ,
    secondary: "#6f4a8e",
    dark: "#050505",
    shadowLight:"#8a898f" ,
    light: "#ebebeb",
    lighter: "#fff"
  }
};

function Theme({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
};

export default Theme;