import React from "react";
import styled from "styled-components";
import Widget from "./Widjet";

const Wrapper = styled.div``;

const Div = styled.div`
  width: 600px;
  height: 800px;
  background-color: black;
`;

export default () => {
  return (
    <Div>
      {console.log("왜 안나와!!!!!!!!!!!!!!!!!!!!!!!!")}왜 안나와!!!!!왜
      안나와!!!!!왜 안나와!!!!!왜 안나와!!!!!왜 안나와!!!!!왜 안나와!!!!!
    </Div>
  );
};
