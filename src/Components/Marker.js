import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const MarkerInner = styled.button`
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  position: relative;
  width: auto;
  padding: 0.3px 1.5px;
  margin: 0;
  border: 3px solid ${props => types(props.type)};
  color: #333;
  background: #fff;
  border-radius: 7px;
  :focus {
    outline: 0;
    font-size: 15px;
    font-weight: 700;
    border: 5px solid ${props => types(props.type)};
  }
  :hover {
    border: 5px solid ${props => types(props.type)};

    font-weight: 700;
    font-size: 15px;
  }
  :after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${props => types(props.type)};
    border-bottom: 0;
    border-left: 0;
    margin-left: -5px;
    margin-bottom: -10px;
  }
`;

const types = type => {
  let color = "";
  if (type === "원룸 월세") {
    color = "ff9b9a";
  } else if (type === "투룸 월세") {
    color = "84c0d8";
  } else if (type === "쓰리룸 월세") {
    color = "84c0d8";
  } else if (type === "포룸 월세") {
    color = "84c0d8";
  } else if (type === "원룸 전세") {
    color = "84c0d8";
  } else if (type === "투룸 전세") {
    color = "8584d8";
  } else if (type === "쓰리룸 전세") {
    color = "b284d8";
  } else if (type === "포룸 전세") {
    color = "e8e484";
  } else if (type === "주인세대 전세") {
    color = "d89084";
  } else if (type === "아파트 월세") {
    color = "9782b5";
  } else if (type === "아파트 전세") {
    color = "9782b5";
  } else if (type === "아파트 매매") {
    color = "9782b5";
  } else if (type === "원룸 매매") {
    color = "9782b5";
  } else if (type === "빌라 월세") {
    color = "9782b5";
  } else if (type === "빌라 전세") {
    color = "ba80b4";
  } else if (type === "빌라 매매") {
    color = "ba80b4";
  } else if (type === "상가 매매") {
    color = "ba80b4";
  } else if (type === "상가 월세") {
    color = "ba80b4";
  } else if (type === "상가 전세") {
    color = "ba80b4";
  }
  return `#${color};
  `;
};

const Marker = ({ type = "원룸 월세", value }) => {
  return (
    <Wrapper>
      <MarkerInner type={type}>{value}</MarkerInner>
    </Wrapper>
  );
};

export default Marker;
