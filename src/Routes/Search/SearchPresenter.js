import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";

const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const SearchPresenter = ({ searchTerm, loadiing }) => (
  <Wrapper>
    {searchTerm === undefined && <FatText text={"search for something!"} />}
  </Wrapper>
);

SearchPresenter.propTyeps = {
  searchTerm: PropTypes.String,
  loadiing: PropTypes.bool
};

export default SearchPresenter;
