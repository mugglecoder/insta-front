import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.div`
  height: 50vh;
  text-align: center;
`;

const SearchPresenter = ({ data, loadiing }) => (
  <Wrapper>{console.log(data, "real data")}</Wrapper>
);

SearchPresenter.propTyeps = {
  searchTerm: PropTypes.String,
  loadiing: PropTypes.bool
};

export default SearchPresenter;
