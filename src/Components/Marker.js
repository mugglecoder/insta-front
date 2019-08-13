import React from "react";
import styled from "styled-components";

const Wrapper = styled.div``;

const MarkerInner = styled.button`
  cursor: pointer;
  font-size: 11px;
  font-weight: 700;
  position: relative;
  width: auto;
  padding: 30px;
  margin: 0;
  border: 3px solid #ff9b9a;
  background: #ff9b9a;
  border-radius: 50%;
  opacity: 0.3;
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
      <MarkerInner type={type} />
    </Wrapper>
  );
};

export default Marker;
