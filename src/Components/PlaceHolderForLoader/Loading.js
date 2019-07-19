import React from "react";
import styled, { keyframes } from "styled-components";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-flow: row wrap;
`;

const Wrap = styled.div`
  width: 25%;
`;

const Column = styled.div`
  background-color: #efefef;
  border-radius: 5px;
  margin: 0px 15px;
  height: 200px;
`;

const SubColumn = styled.div`
  margin-left: 15px;
  border-radius: 5px;
  height: 30px;
  width: 40%;

  background-color: #efefef;

  margin-bottom: 30px;
`;

const Files = styled.div`
  padding: 30px;
  position: relative;
`;

const File = styled.div`
  margin-bottom: 10px;
  border-radius: 5px;
  height: 20px;
  width: 50%;
  background-color: white;
`;

const Subject = styled.div`
  overflow-wrap: break-word;
  font-size: 17px;
  margin-bottom: 5px;
  color: #747474;
`;

const SmallSub = styled.div`
  background-color: #efefef;
  display: flex;
  justify-content: flex-start;
  margin: 7px 0px;
`;

const Deposit = styled.span`
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #c87777;
`;

const SelectType = styled.div`
  margin-right: 7px;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  color: rgb(169, 193, 232);
`;

const Money = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #c87777;
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
    transition: opacity ${1000}ms ease-out;
  }
`;

export default () => {
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
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>{" "}
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>{" "}
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>{" "}
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>{" "}
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>{" "}
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>{" "}
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>{" "}
      <Wrap>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          <ContainerS>
            <Column>
              <Files>
                <File />
                <File />
              </Files>
            </Column>
            <SubColumn>
              <SmallSub>
                <SelectType>{}</SelectType>
                <Deposit />
                <Money> </Money>
              </SmallSub>
              <Subject>{}</Subject>
            </SubColumn>
          </ContainerS>
        </ReactCSSTransitionGroup>
      </Wrap>
    </Container>
  );
};
