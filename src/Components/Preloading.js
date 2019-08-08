import React, { useState, useEffect } from "react";
import styled from "styled-components";

import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const FullMapContainer = styled.div`
  width: 100%;
  display: flex;
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
  setTimeout(() => {
    props.history.push(`/new/search/1`);
  }, 2000);
  return (
    <FullMapContainer>
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
    </FullMapContainer>
  );
};
