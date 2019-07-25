import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";
import GoogleMaps from "../Components/GoogleMaps";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const FEED_QUERY = gql`
  query seeFullPost($first: Int, $skip: Int) {
    seeFullPost(first: $first, skip: $skip) {
      post {
        id
      }
    }
  }
`;

const FullMapContainer = styled.div`
  width: 100%;
  display: flex;
`;

const DividerWrap = styled.div`
  display: flex;
  width: 100%;
`;

const Detail = styled.div`
  width: 30%;
  height: 80vh;
`;

const MapsLoder = styled.div`
  margin: 0 auto;
  height: 80vh;
  width: 100vw;
  background: #7ec092;
  display: flex;
  justify-content: center;
  align-items: center;
  &.example-appear {
    opacity: 0.01;
  }

  &.example-appear-active {
    opacity: 1;
    transition: opacity ${1000}ms ease-out;
  }
`;

const Maps = styled.h1`
  text-align: center;
  display: block;
  background: #7ec092;
  width: 100%;
  font-size: 30vw;
  font-weight: 900;
  color: white;
`;

export default props => {
  //구글지도 줌 레벨

  const { data, loading } = useQuery(FEED_QUERY);

  return (
    <FullMapContainer>
      {loading && (
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={1500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <MapsLoder>
            <Maps>MAPS</Maps>
          </MapsLoder>
        </ReactCSSTransitionGroup>
      )}
      {!loading && props.history.push(`/new/search`)}
    </FullMapContainer>
  );
};
