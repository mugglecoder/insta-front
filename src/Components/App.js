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
import { HeadProvider, Link } from "react-head";

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 50vh;
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
              </Wrapper>
            </>
          </Router>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </>
      </HeadProvider>
    </ThemeProvider>
  );
};
