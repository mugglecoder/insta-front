import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import Thema from "../Styles/Thema";

export default () => (
  <ThemeProvider theme={Thema}>
    <GlobalStyles />
    hello fuker
  </ThemeProvider>
);
