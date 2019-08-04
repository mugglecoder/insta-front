import React, { useEffect } from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import MapPartsImageGall from "./MapPartsImageGall";
import Floater from "react-floater";
import { relative } from "path";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { set } from "immutable";

// 메인 맵

const Container = styled.div`
  width: 100%;
`;
const WrapperS = styled.div`
  margin: 0 auto;
  max-width: 500px;
  line-height: 1.5;
`;
const LogInButtonWrap = styled.div`
  padding: 20px;
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const LogInButton = styled.button`
  margin: 10px;
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: #bae7e2;
  text-align: center;
  padding: 9px 0px;
  font-size: 14px;
`;

const Mapdiv = styled.div`
  border: 1px solid #e0e0e0;
`;

const MarkerContainer = styled.div``;

const MarkerIcon = styled.div`
  cursor: pointer;
`;

const Dash = styled.span`
  color: #000;
  display: inline-block;
  margin-right: 8px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px;
  padding-left: 15px;
  position: relative;
  background-color: #fffcf8;
  border-radius: 10px;
  width: 290px;
  height: 250px;
  text-align: right;
  margin: 0 auto;
`;

const Button = styled.button`
  cursor: pointer;
  position: absolute;
  bottom: 21px;
  right: 20px;
  font-size: 16px;
  left: -1;
  border: none;
  background-color: #ff9b9b;
  color: #fff;
  display: block;
  padding: 4px;
  line-height: 1.2;
  border-radius: 4px;
  z-index: 100;
  :focus {
    border: none;
  }
`;

const H1 = styled.div`
  cursor: pointer;
  position: absolute;
  padding: 8px 15px;
  background: #e57070;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  top: 8%;
  left: 43%;
`;
const H12 = styled.div`
  position: absolute;
  padding: 8px 15px;
  background: #e57070;
  border-radius: 10px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  top: 8%;
  left: 45%;
`;

export default ({
  findRoom,
  data,
  dataOfMe,
  searchData,
  loading,
  onBoundsChange,
  zoom,
  center,
  latAndlng,
  props,
  setCenter,
  height = "45vh",
  width = "100%",
  setDivide
}) => {
  const passing = props;
  const dataOfMeS = dataOfMe;
  const searchDataS = searchData;
  const loadingS = loading;

  const AnyReactComponent = ({ item, searchData }) => {
    const CustomFloater = ({ closeFn }) => (
      <Wrapper>
        <MapPartsImageGall
          data={data}
          item={item}
          props={passing}
          dataOfMe={dataOfMeS}
          searchData={searchData}
          loading={loadingS}
        />
        <Button onClick={closeFn} style={{ marginTop: 10 }}>
          colse
        </Button>
      </Wrapper>
    );

    return (
      <MarkerContainer>
        <Floater
          callback={(action, props) => (action === "open" ? true : false)}
          title={
            <>
              <Dash>/</Dash>
            </>
          }
          placement={"top"}
          disableAnimation={true}
          showCloseButton={true}
          styles={{
            floater: {
              display: "inline-block",
              filter: "drop-shadow(0 0 1px rgba(0, 0, 0, 0.3))"
            }
          }}
          hideArrow={true}
          component={CustomFloater}
        >
          <WrapperS>
            <MarkerIcon>
              <Marker value={item.money} type={item.selectType} />
            </MarkerIcon>
          </WrapperS>
        </Floater>
      </MarkerContainer>
    );
  };

  const createMapOptions = maps => console.log(maps, "createMapOptions");

  const onChildClick = (a, b) => {
    console.log(a, b, "onChildClick");
  };

  const onChildMouseEnter = () => {
    console.log("마우스 온 더 잇");
  };

  return (
    <Container>
      <Mapdiv style={{ height, width, position: "relative" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDQc0xMBQnrOOoj8UkPkN6yeGqkAo_l2hM"
          }}
          onChildMouseEnter={onChildMouseEnter}
          center={center}
          onChildClick={onChildClick}
          defaultZoom={zoom}
          onBoundsChange={onBoundsChange}
          yesIWantToUseGoogleMapApiInternals
          options={{ maxZoom: 18, createMapOptions }}
        >
          {latAndlng &&
            latAndlng.map((item, key) =>
              item.places[0] ? (
                <AnyReactComponent
                  searchData={searchDataS}
                  setDivide={setDivide}
                  key={key}
                  lat={item.places && item.places[0].lat}
                  lng={item.places && item.places[0].lng}
                  item={item}
                />
              ) : (
                false
              )
            )}
        </GoogleMapReact>
        {loading ? (
          <H1 onClick={findRoom}>좋은집 찾는중!</H1>
        ) : (
          <H1 onClick={findRoom}>여기에 있는 매물 재검색</H1>
        )}
      </Mapdiv>
    </Container>
  );
};
