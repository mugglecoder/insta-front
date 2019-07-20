import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import "../css/image-gallery.css";

const Container = styled.div`
  height: 350px;
  overflow: scroll;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: wrap;
`;

const Files = styled.div`
  height: 100px;
  width: 100%;
  cursor: pointer;
`;

const Subject = styled.div`
  background-color: #ffe4d740;
  width: 100px;
  height: 150px;
  padding: 8px;
  width: 100px;
  margin-right: 5px;
  overflow-wrap: break-word;
  line-height: 1.4;
  font-weight: 600;
  font-size: 15px;
  color: #836c80;
  overflow: scroll;
  text-align: start;
`;
const SubColumn = styled.div`
  width: 250px;
  position: relative;
  padding: 5px;
`;
const ContentMain = styled.div`
  display: flex;
  margin-top: 5px;
`;

const SelectType = styled.div`
  margin-right: 7px;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: rgb(169, 193, 232);
`;

const Deposit = styled.span`
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const Money = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const Hr = styled.hr`
  margin-top: 10px;
`;
const Content = styled.div`
  padding: 7px;
  width: 100%;
  height: 80%;
  overflow: scroll;
  font-size: 14px;
  line-height: 1.4;
  text-align: start;
`;
const OptionText = styled.div`
  margin-top: -50px;
  margin-bottom: 20px;
  h1 {
    text-align: start;
    margin-top: 30px;
    font-size: 20px;
    color: grey;
  }
`;
const Option = styled.div`
  height: 130px;
  width: 20%;
  padding: 1%;
  background-color: #c5bfea;
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

const DetailText = styled.div`
  margin: 50px 0px;
  margin-top: 10px;
  h1 {
    text-align: start;
    font-size: 20px;
    color: grey;
  }
`;

const ImageGalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FilesA = styled.div`
  width: 95%;
  height: 300px;
`;

export default (item, setDivide) => {
  const props = item.props;
  const page = item.props.match && item.props.match.params.page;

  ///////////
  const urls = item.item.files && item.item.files.map(item => item);
  let arrayOfPath = [];
  let test = [];
  let path = [];

  if (item.item.files && item.item.files.length === 0) {
    /// 임시로 메인에 보일 이미지 주소
    arrayOfPath.push(`http://localhost:4000/images/preImage/no-image.jpg`);
    arrayOfPath.map((item, key) => {
      return test.push(item);
    });
    const s = test.reduce((s, a) => {
      {
        for (var i = 0; i < test.length; i++);
        let get;
        get = {
          original: `${a}`,
          thumbnail: `${a}`
        };
        return path.push(get);
      }
    }, {});
  } else {
    /////// 이미지 있을때

    item.item.files &&
      item.item.files.map(item => {
        return arrayOfPath.push(item.url);
      });
    arrayOfPath.map((item, key) => test.push(item));

    const s = test.reduce((s, a) => {
      {
        for (var i = 0; i < test.length; i++);
        let get;
        get = {
          original: `http://localhost:4000/${a}`,
          thumbnail: `http://localhost:4000/${a}`
        };
        return path.push(get);
      }
    }, {});
  }
  //////////

  const onclick = () => {
    return props.history.push(`/roomsdetail/${item.item.id}/new/1`);
  };

  return (
    <Container>
      <Files>
        <Column>
          <Subject>{item.item.caption}</Subject>
          <SubColumn>
            <ImageGallery
              additionalClass={`inTheMap`}
              items={path}
              showFullscreenButton={false}
              useBrowserFullscreen={false}
              showThumbnails={false}
              showPlayButton={false}
              showBullets={false}
              lazyLoad={true}
              showIndex={false}
              onClick={onclick}
            />
          </SubColumn>
        </Column>
        <ContentMain>
          <SelectType>{item.item.selectType}</SelectType>
          <Deposit>보증금 {item.item.deposit}</Deposit>
          <Money> 월세 {item.item.money}</Money>
        </ContentMain>
        <Hr />
        <Content>{item.item.content}</Content>

        <OptionText>
          <h1>옵션</h1>
          <hr />
        </OptionText>

        <Options>
          {item.item && item.item.airConditioner === "에어컨" && (
            <Option>airConditioner</Option>
          )}
          {item.item && item.item.washer === "세탁기" && (
            <Option>washer</Option>
          )}
          {item.item && item.item.refrigerator === true && (
            <Option>refrigerator</Option>
          )}
          {item.item && item.item.internet === "인터넷" && (
            <Option>internet</Option>
          )}
          {item.item && item.item.microwave === "전자렌지" && (
            <Option>microwave</Option>
          )}
          {item.item && item.item.wifi === "wifi" && <Option>wifi</Option>}
          {item.item && item.item.bed === "침대" && <Option>bed</Option>}
          {item.item && item.item.desk === "책상" && <Option>desk</Option>}
          {item.item && item.item.induction === "인덕션" && (
            <Option>induction</Option>
          )}
          {item.item && item.item.gasRange === "가스레인지" && (
            <Option>gasRange</Option>
          )}
          {item.item && item.item.doorLock === "도어락" && (
            <Option>doorLock</Option>
          )}
          {item.item && item.item.CCTV === "CCTV" && <Option>CCTV</Option>}
          {item.item && item.item.pets === "애완동물" && <Option>pets</Option>}
          {item.item && item.item.elevator === "엘리베이터" && (
            <Option>elevator</Option>
          )}
          {item.item && item.item.parking === "주차" && (
            <Option>parking</Option>
          )}
          {item.item && item.item.electricHeating === "전기난방" && (
            <Option>electricHeating</Option>
          )}
          {item.item && item.item.cityGasHeating === "도시가스난방" && (
            <Option>tecityGasHeatingst</Option>
          )}
          {item.item && item.item.nightElectric === "심야전기" && (
            <Option>nightElectric</Option>
          )}
          {item.item && item.item.wateTax === "수도세" && (
            <Option>wateTax</Option>
          )}
          {item.item && item.item.includingElectricity === "전기세포함" && (
            <Option>includingElectricity</Option>
          )}
          {item.item && item.item.cityGasIncluded === "도시가스포함" && (
            <Option>cityGasIncluded</Option>
          )}
        </Options>

        <DetailText>
          <h1>디테일</h1>
          <hr />
        </DetailText>
        <ImageGalleryContainer>
          <FilesA>
            <ImageGallery
              additionalClass={`inTheMapDetail`}
              items={path}
              showFullscreenButton={false}
              useBrowserFullscreen={false}
              showThumbnails={true}
              showPlayButton={false}
              showBullets={true}
              lazyLoad={true}
              showIndex={false}
            />
          </FilesA>
        </ImageGalleryContainer>
      </Files>
    </Container>
  );
};
