import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import BoardMain from "../BoardMain";

const Wrapper = styled.div`
  width: 100%;
`;

const Column = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
`;

const ColumnL = styled.div`
  padding: 40px;
  height: 600px;
  width: 400px;
  background-color: #cce0e0;
  margin-right: 15px;
`;

const ColumnR = styled.div`
  height: 600px;
  width: 100%;
`;

const Caption = styled.div`
  font-size: 27px;
  font-weight: 500;
`;

const Username = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Count = styled.span``;

const ContentMain = styled.div`
  margin-top: 10px;
  padding: 40px;
`;

const Deposit = styled.span`
  font-size: 16px;
  display: inline-block;
  font-weight: 600;
  color: grey;
  margin-right: 10px;
`;

const Money = styled.span`
  font-size: 16px;
  display: inline-block;
  font-weight: 600;
  color: grey;
`;

const Content = styled.div`
  margin-top: 10px;
  margin: 30px 0px;
  width: 100%;
  height: 100%;
  font-size: 17px;
  line-height: 1.6;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: pink;
  margin-top: -10px;
  margin-bottom: 30px;
`;

const Option = styled.div`
  height: 130px;
  width: 20%;
  padding: 1%;
  background-color: #c5bfea;
`;

const OptionText = styled.div`
  margin-top: -25px;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const DetailText = styled.div`
  margin: 20px 0px;
  margin-top: 10px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const Files = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const File = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
`;

const FileS = styled.div`
  background-image: url(${props => props.src});
  background-position: center;
  background-size: cover;
  height: 600px;
  width: 800px;
  background-repeat: no-repeat;
  margin: 30px 0px;
`;

const MoreRooms = styled.div`
  margin: 30px 0px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const RoomsDetailPresenter = ({ data, loading }) => (
  <Wrapper>
    {loading && <Loader />}
    {!loading && data.detailPost && (
      <>
        <Column>
          <ColumnL>
            <Username>
              {data.detailPost &&
                data.detailPost.user &&
                data.detailPost.user.username}
            </Username>
            <Caption>{data.detailPost && data.detailPost.caption}</Caption>
          </ColumnL>
          <ColumnR>
            <File
              src={
                data.detailPost &&
                data.detailPost.files &&
                data.detailPost.files[0] &&
                data.detailPost.files[0].url
                  ? data.detailPost.files[0].url
                  : "http://seogunny.com/wp-content/uploads/2018/03/arrival-review-glitter-rebel-1.jpg"
              }
            />
          </ColumnR>
        </Column>
        <ContentMain>
          <Deposit>보증금 {data.detailPost && data.detailPost.deposit}</Deposit>
          <Deposit>월세 {data.detailPost && data.detailPost.money}</Deposit>
          <Deposit>
            {data.detailPost && data.detailPost.numberOfFoors}층
          </Deposit>
          <Deposit>
            매물번호 {data.detailPost && data.detailPost.MLSnumber}
          </Deposit>
          <Content>{data.detailPost && data.detailPost.content}</Content>
        </ContentMain>
        <OptionText>
          <h1>옵션</h1>
          <hr />
        </OptionText>
        <Options>
          {data.detailPost && data.detailPost.airConditioner === true && (
            <Option>airConditioner</Option>
          )}
          {data.detailPost && data.detailPost.washer === true && (
            <Option>washer</Option>
          )}
          {data.detailPost && data.detailPost.refrigerator === true && (
            <Option>refrigerator</Option>
          )}
          {data.detailPost && data.detailPost.internet === true && (
            <Option>internet</Option>
          )}
          {data.detailPost && data.detailPost.microwave === true && (
            <Option>microwave</Option>
          )}
          {data.detailPost && data.detailPost.wifi === true && (
            <Option>wifi</Option>
          )}
          {data.detailPost && data.detailPost.bed === true && (
            <Option>bed</Option>
          )}
          {data.detailPost && data.detailPost.desk === true && (
            <Option>desk</Option>
          )}
          {data.detailPost && data.detailPost.induction === true && (
            <Option>induction</Option>
          )}
          {data.detailPost && data.detailPost.gasRange === true && (
            <Option>gasRange</Option>
          )}
          {data.detailPost && data.detailPost.doorLock === true && (
            <Option>doorLock</Option>
          )}
          {data.detailPost && data.detailPost.CCTV === true && (
            <Option>CCTV</Option>
          )}
          {data.detailPost && data.detailPost.pets === true && (
            <Option>pets</Option>
          )}
          {data.detailPost && data.detailPost.elevator === true && (
            <Option>elevator</Option>
          )}
          {data.detailPost && data.detailPost.parking === true && (
            <Option>parking</Option>
          )}
          {data.detailPost && data.detailPost.electricHeating === true && (
            <Option>electricHeating</Option>
          )}
          {data.detailPost && data.detailPost.cityGasHeating === true && (
            <Option>tecityGasHeatingst</Option>
          )}
          {data.detailPost && data.detailPost.nightElectric === true && (
            <Option>nightElectric</Option>
          )}
          {data.detailPost && data.detailPost.wateTax === true && (
            <Option>wateTax</Option>
          )}
          {data.detailPost && data.detailPost.includingElectricity === true && (
            <Option>includingElectricity</Option>
          )}
          {data.detailPost && data.detailPost.cityGasIncluded === true && (
            <Option>cityGasIncluded</Option>
          )}
        </Options>
        <DetailText>
          <h1>디테일</h1>
          <hr />
        </DetailText>
        <Files>
          {data.detailPost &&
            data.detailPost.files.map(item =>
              item.url ? (
                <FileS key={item.id} src={item.url} />
              ) : (
                <FileS
                  key={item.id}
                  src={
                    "http://seogunny.com/wp-content/uploads/2018/03/arrival-review-glitter-rebel-1.jpg"
                  }
                />
              )
            )}
        </Files>
      </>
    )}

    {loading ? (
      false
    ) : (
      <MoreRooms>
        <h1>더 많은 매물이 있습니다.</h1>
        <hr />
        <BoardMain />
      </MoreRooms>
    )}
  </Wrapper>
);

export default RoomsDetailPresenter;
