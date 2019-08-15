import React from "react";
import styled from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Container = styled.div`
  width: 100%;
  padding: 4% 10% 4% 10%;
  height: 80vh;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

const Wrap = styled.div`
  width: 100%;
`;

const LogInButtonWrap = styled.div`
  margin-top: 85px;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  margin: 10px;
  width: 70px;
  border: 0;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  background-color: #bae7e2;
  text-align: center;
  padding: 11px 0px;
  font-size: 16px;
`;

const WrapTheColumn = styled.div`
  display: flex;
`;

const ColumnL = styled.div`
  width: 25%;
  background-color: #efefef;
  border-radius: 5px;
  margin: 0px 15px;
  height: 580px;
`;
const ColumnR = styled.div`
  width: 75%;
  background-color: #efefef;
  border-radius: 5px;
  margin: 0px 15px;
  height: 580px;
`;

const Files = styled.div`
  padding: 30px;
  position: relative;
`;

const ContainerS = styled.section`
  font-size: 1.5em;
  padding: 0;
  margin: 0;
  img {
    width: 250px;
    height: 200px;
  }
  &.example-appear {
    opacity: 0.01;
  }
  &.example-appear-active {
    opacity: 1;
    transition: opacity ${500}ms ease-out;
  }
`;

export default ({ token, data, loading }) => {
  return (
    <Container>
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            {token && data ? <LogInButtonWrap /> : false}
            <WrapTheColumn>
              <ColumnL>
                <Files />
              </ColumnL>
              <ColumnR>
                <Files />
              </ColumnR>
            </WrapTheColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>
    </Container>
  );
};
