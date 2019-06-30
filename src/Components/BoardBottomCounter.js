import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Pcontainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const P = styled.p``;

const BoardParts = ({}) => (
  <Pcontainer>
    <P>이전</P>
    <P>1</P>
    <P>2</P>
    <P>3</P>
    <P>4</P>
    <P>5</P>
    <P>다음</P>
  </Pcontainer>
);

export default BoardParts;
