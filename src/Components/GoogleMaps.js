import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";
import MapPartsImageGall from "./MapPartsImageGall";
import Floater from "react-floater";

import Popup from "reactjs-popup";

const Container = styled.div``;
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

const MarkerContainer = styled.div`
  border-radius: 50%;
`;

const MarkerIcon = styled.div`
  cursor: pointer;
`;

const Deposit = styled.span`
  display: inline-block;
  margin-right: 4px;
  margin-top: 7px;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const Dash = styled.span`
  color: #000;
  display: inline-block;
  margin-right: 8px;
`;

const Money = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const SelectType = styled.div`
  margin: 0px 7px;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: rgb(169, 193, 232);
`;

export default ({ zoom, center, latAndlng, props, setCenter }) => {
  const passing = props;

  const AnyReactComponent = ({ item }) => (
    <MarkerContainer>
      <Floater
        callback={(action, props) => (action === "open" ? true : false)}
        title={
          <>
            <SelectType>{item.selectType}</SelectType>
            <Deposit>보증금 {item.deposit}</Deposit>
            <Dash>/</Dash>
            <Money> 월세 {item.money}</Money>
          </>
        }
        placement={"top"}
        disableAnimation={true}
        showCloseButton={true}
        offset={15}
        styles={{
          tooltip: {
            filter: "none"
          },
          container: {
            backgroundColor: "#f7f7f7",
            borderRadius: 5,
            color: "#fff",
            filter: "none",
            minHeight: "230px",
            height: "100%",
            width: "100%",
            padding: "7px",
            textAlign: "left",
            overflow: "scroll"
          }
        }}
        hideArrow={true}
        content={<MapPartsImageGall item={item} props={passing} />}
      >
        <WrapperS>
          <MarkerIcon>
            <Marker value={item.money} />
          </MarkerIcon>
        </WrapperS>
      </Floater>
    </MarkerContainer>
  );

  const createMapOptions = maps => {
    return {
      panControl: false,
      mapTypeControl: false,
      scrollwheel: false,
      styles: [
        {
          stylers: [
            { saturation: -100 },
            { gamma: 0.8 },
            { lightness: 4 },
            { visibility: "on" }
          ]
        }
      ]
    };
  };

  const onBoundsChange = (center, zoom) => {
    setCenter({ lat: parseFloat(center.lat), lng: parseFloat(center.lng) });
  };

  const onChildClick = (a, b) => {
    setCenter({ lat: parseFloat(b.lat), lng: parseFloat(b.lng) });
  };

  return (
    <Container>
      <Mapdiv style={{ height: "45vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyDQc0xMBQnrOOoj8UkPkN6yeGqkAo_l2hM"
          }}
          center={center}
          onChildClick={onChildClick}
          defaultZoom={zoom}
          onBoundsChange={onBoundsChange}
          yesIWantToUseGoogleMapApiInternals
          options={{ maxZoom: 18, createMapOptions }}
        >
          {latAndlng.map((item, key) =>
            item.places[0] ? (
              <AnyReactComponent
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
      </Mapdiv>
    </Container>
  );
};
