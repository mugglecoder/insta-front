import React from "react";
import { gql } from "apollo-boost";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import GlobalStyles from "../Styles/GlobalStyles";
import { useQuery } from "react-apollo-hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Routes from "./Routes";
import Theme from "../Styles/Theme";
import Footer from "./Footer";
import Header from "./Header";
import ScriptTag from "react-script-tag";
import { HeadProvider, Link } from "react-head";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 100%;
  padding: 0px 20px 20px 20px;
`;

export default () => {
  const {
    data: { isLoggedIn }
  } = useQuery(QUERY);

  return (
    <ThemeProvider theme={Theme}>
      <HeadProvider>
        <>
          <GlobalStyles />
          <Router>
            <>
              {isLoggedIn && <Header />}

              <Wrapper>
                <Routes isLoggedIn={isLoggedIn} />
                <Footer />
                <ScriptTag src="https://unpkg.com/file-upload-with-preview@4.0.2/dist/file-upload-with-preview.min.js" />
              </Wrapper>
            </>
          </Router>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </>
      </HeadProvider>
    </ThemeProvider>
  );
};
