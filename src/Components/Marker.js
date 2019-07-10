import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const MarkerInner = styled.div`
  cursor: pointer;
  position: relative;
  width: auto;
  padding: 0.3px 3px;
  margin: 0;
  ${props => types(props.type)};
  color: #333;
  background: #fff;
  border-radius: 10px;
  &:active {
    border: solid 7px red;
    background: red;
  }
`;

const types = type => {
  let color = "";
  if (type === "1r") {
    color = "edac9c";
  } else if (type === "2r") {
    color = "84c0d8";
  } else if (type === "3r") {
    color = "8584d8";
  } else if (type === "4r") {
    color = "b284d8";
  } else if (type === "4r") {
    color = "e8e484";
  } else if (type === "주인세대") {
    color = "d89084";
  } else if (type === "lease") {
    color = "4572d3";
  } else if (type === "apt") {
    color = "9782b5";
  } else if (type === "villa") {
    color = "ba80b4";
  }
  return `border:5px solid #${color};
  `;
};

const Marker = ({ type = "1r", value }) => {
  return (
    <Wrapper>
      <MarkerInner type={type}>{value}</MarkerInner>
    </Wrapper>
  );
};

export default Marker;
