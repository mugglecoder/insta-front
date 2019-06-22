import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Column = styled.div`
  height: 700px;
  width: 500px;
`;

const Caption = styled.div``;

const Username = styled.div``;

const Count = styled.div``;

const Content = styled.div``;

const File = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  height: 500px;
  width: 600px;
  background-repeat: no-repeat;
`;

const RoomsDetailPresenter = ({ data: { detailPost }, loading }) => (
  <Wrapper>
    {loading && <Loader />}
    {!loading && detailPost && (
      <>
        <Column>
          <Caption>{detailPost && detailPost.caption}</Caption>
          <Username>
            {detailPost && detailPost.user && detailPost.user.username}
          </Username>
          <Count>{detailPost && detailPost.count}</Count>
          <Content>{detailPost && detailPost.Content}</Content>
        </Column>
        <Column>
          <File
            src={detailPost && detailPost.files && detailPost.files[0].url}
          />
        </Column>
      </>
    )}
  </Wrapper>
);

export default RoomsDetailPresenter;
