import React, { useEffect } from "react";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const MaxHeight = styled.div`
  margin: 0 auto;
`;
const PorkMain = styled.div`
  background-color: #fff5f0;
  height: 90vh;
  min-height: 740px;

  width: 100%;
  position: relative;
  &.example-appear {
    opacity: 0.01;
  }

  &.example-appear-active {
    opacity: 1;
    transition: opacity ${1000}ms ease-out;
  }
`;
const PorkMain2 = styled.div`
  background-color: #e8dbee;
  height: 90vh;
  min-height: 740px;
  width: 100%;
  position: relative;
  &.example-appear {
    opacity: 0.01;
  }

  &.example-appear-active {
    opacity: 1;
    transition: opacity ${1000}ms ease-out;
  }
`;
const PorkMain3 = styled.div`
  background-color: #dbe7ee;
  height: 90vh;
  min-height: 740px;
  width: 100%;
  position: relative;
  &.example-appear {
    opacity: 0.01;
  }

  &.example-appear-active {
    opacity: 1;
    transition: opacity ${1000}ms ease-out;
  }
`;

const Rooms = styled.div`
  position: absolute;
  top: 2vw;
  left: 1vw;
  font-size: 19vw;
  font-weight: 900;
  color: #7ec092;
`;
const For = styled.div`
  position: absolute;
  top: 18vw;
  right: 11vw;
  font-size: 17vw;
  font-weight: 900;
  color: #7ec092;
`;
const Rent = styled.div`
  position: absolute;
  top: 38vw;
  left: 4vw;
  font-size: 17vw;
  font-weight: 900;
  color: #7ec092;
`;

const RoomsForRentImage = styled.div`
  position: absolute;
  top: 16vw;
  background-image: url("http://kexpedia.co.kr/files/attach/images/111/833/038/cd5ba8c23206d9377eb1c92e0dbf4cf6.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 36vw;
  width: 73vw;
`;

export default () => {
  localStorage.setItem(
    "map",
    JSON.stringify({ lat: 35.8898463607061, lng: 128.61687976455687 })
  );
  localStorage.setItem("zoom", JSON.stringify(16));
  localStorage.setItem("종류", "");
  localStorage.setItem("종류2", "");
  localStorage.setItem("보증금", JSON.stringify([0, 1000000]));
  localStorage.setItem("월세", JSON.stringify([0, 1000000]));

  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionAppear={true}
      transitionAppearTimeout={1500}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      <MaxHeight>
        <PorkMain>
          <RoomsForRentImage />
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Rooms>Rooms</Rooms>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <For>For</For>
          </ReactCSSTransitionGroup>
          <ReactCSSTransitionGroup
            transitionName="example"
            transitionAppear={true}
            transitionAppearTimeout={500}
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            <Rent>Rent</Rent>
          </ReactCSSTransitionGroup>
        </PorkMain>
        <PorkMain2 />
        <PorkMain3 />
      </MaxHeight>
    </ReactCSSTransitionGroup>
  );
};
