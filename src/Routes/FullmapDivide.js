import React, { useState } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import ImageGallery from "react-image-gallery";
import "../css/image-gallery.css";

const DetailContainer = styled.div`
  width: 40%;
  height: 80vh;
  overflow: scroll;
`;

const Column = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ColumnL = styled.div`
  height: 100%;

  opacity: 0.7;
  padding: 30px;
  min-height: 100px;
  overflow-wrap: break-word;
  overflow: scroll;
  width: 100%;
  background-color: #adceec;
`;

const ColumnR = styled.div`
  width: 100%;
`;

const Caption = styled.div`
  color: black;
  overflow-wrap: break-word;
  font-size: 27px;
  font-weight: 500;
`;

const Username = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContentMain = styled.div`
  padding: 20px;
`;

const Deposit = styled.span`
  font-size: 18px;
  display: inline-block;
  font-weight: 600;
  color: grey;
  margin-right: 10px;
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
  margin-top: -50px;
  margin-bottom: 20px;
  h1 {
    margin-top: 30px;
    font-size: 20px;
    color: grey;
  }
`;

const DetailText = styled.div`
  margin: 50px 0px;
  margin-top: 10px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const MapText = styled.div`
  margin: 50px 0px;
  margin-top: 10px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const FilesA = styled.div`
  width: 90%;
  height: 300px;
`;

const File = styled.img`
  background-image: url(${props => props.src});
  border-radius: 1%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background: no-repeat;
`;

const ContentWrap = styled.div`
  position: relative;
  padding: 0px 15px;
`;

const MapContainer = styled.div``;

const ImageGalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const MarkerIcon = styled.div`
  background-color: red;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  top: -4px;
  right: 25px;
  left: -1;
  border: none;
  background-color: #ff9b9b;
  color: #fff;
  display: block;
  padding: 3px;
  border-radius: 4px;
  z-index: 100;
  :focus {
    border: none;
  }
`;
const AnyReactComponent = ({ text }) => <MarkerIcon>{text}</MarkerIcon>;

////

export default props => {
  const data =
    props &&
    props.props.location &&
    props.props.location.data &&
    props.props.location.data.item;

  let posts = [];
  let getPath = [];
  const pathData =
    data && data.files && data.files.map(item => posts.push(item.url));

  const s = posts.reduce((s, a) => {
    {
      for (var i = 0; i < posts.lengsh; i++);
      let get;
      get = {
        original: `http://localhost:4000/${a}`,
        thumbnail: `http://localhost:4000/${a}`
      };
      return getPath.push(get);
    }
  }, {});

  const lat = parseFloat(data && data.places && data.places[0].lat);
  const lng = parseFloat(data && data.places && data.places[0].lng);
  console.log(window, "windowssss");
  return (
    <DetailContainer>
      <ContentWrap>
        <Button
          onClick={() => props.setDivide(false)}
          style={{ marginTop: 10 }}
        >
          colse
        </Button>
        <Column>
          <ColumnL>
            <Caption>{data && data.caption}</Caption>
          </ColumnL>

          <ColumnR>
            <File
              src={
                data && data.files && data.files[0] && data.files[0].url
                  ? `http://localhost:4000/${data.files[0].url}`
                  : "http://seogunny.com/wp-content/uploads/2018/03/arrival-review-glitter-rebel-1.jpg"
              }
            />
          </ColumnR>
        </Column>
        <ContentMain>
          <Deposit>보증금 {data && data.deposit}</Deposit>
          <Deposit>월세 {data && data.money}</Deposit>
          <Deposit>{data && data.numberOfFoors}층</Deposit>
          <Deposit>매물번호 {data && data.MLSnumber}</Deposit>
          <Content>{data && data.content}</Content>
        </ContentMain>
        <OptionText>
          <h1>옵션</h1>
          <hr />
        </OptionText>
        <Options>
          {console.log(data, "datacheck")}
          {data && data.airConditioner === true && (
            <Option>airConditioner</Option>
          )}
          {data && data.washer === true && <Option>washer</Option>}
          {data && data.refrigerator === true && <Option>refrigerator</Option>}
          {data && data.internet === true && <Option>internet</Option>}
          {data && data.microwave === true && <Option>microwave</Option>}
          {data && data.wifi === true && <Option>wifi</Option>}
          {data && data.bed === true && <Option>bed</Option>}
          {data && data.desk === true && <Option>desk</Option>}
          {data && data.induction === true && <Option>induction</Option>}
          {data && data.gasRange === true && <Option>gasRange</Option>}
          {data && data.doorLock === true && <Option>doorLock</Option>}
          {data && data.CCTV === true && <Option>CCTV</Option>}
          {data && data.pets === true && <Option>pets</Option>}
          {data && data.elevator === true && <Option>elevator</Option>}
          {data && data.parking === true && <Option>parking</Option>}
          {data && data.electricHeating === true && (
            <Option>electricHeating</Option>
          )}
          {data && data.cityGasHeating === true && (
            <Option>tecityGasHeatingst</Option>
          )}
          {data && data.nightElectric === true && (
            <Option>nightElectric</Option>
          )}
          {data && data.wateTax === true && <Option>wateTax</Option>}
          {data && data.includingElectricity === true && (
            <Option>includingElectricity</Option>
          )}
          {data && data.cityGasIncluded === true && (
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
              items={getPath}
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
        <MapText>
          <h1>위치</h1>
          <hr />
        </MapText>
        <MapContainer>
          <div style={{ height: "300px", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDQc0xMBQnrOOoj8UkPkN6yeGqkAo_l2hM"
              }}
              center={{ lat, lng }}
              defaultZoom={15}
              options={{ maxZoom: 17 }}
              yesIWantToUseGoogleMapApiInternals
            >
              <AnyReactComponent lat={lat} lng={lng} text="" />
            </GoogleMapReact>
          </div>
        </MapContainer>
      </ContentWrap>
    </DetailContainer>
  );
};
