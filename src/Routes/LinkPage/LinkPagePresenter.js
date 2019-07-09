import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import NewLinkPage from "../../Components/NewLinkPage";
import GoogleMapReact from "google-map-react";
import Popup from "reactjs-popup";
import MapPartsImageGall from "../../Components/MapPartsImageGall";
import "react-image-gallery/styles/css/image-gallery.css";
import Floater from "react-floater";

const Wrapper = styled.div`
  width: 100%;
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

const MarkerContainer = styled.div`
  border-radius: 50%;
`;

const MarkerIcon = styled.div`
  cursor: pointer;
  background-color: #d64f4f;
  opacity: 0.7;
  width: 13px;
  height: 13px;
  border-radius: 50%;
`;

const PopUps = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

export default ({
  latAndlng,
  places,
  zoom,
  center,
  page,
  props,
  data,
  loading,
  dataOfMe,
  skip,
  first,
  token,
  onClick,
  _previousPage,
  _nextPage
}) => {
  /// 마커 아이콘에 대한 로직
  const passing = props;
  const AnyReactComponent = ({ item }) => (
    <MarkerContainer>
      <Floater content="This is the Floater content">
        <span>click me</span>
      </Floater>
      <Popup
        children={false}
        on={["hover", "click"]}
        trigger={<MarkerIcon />}
        position="top center"
        closeOnDocumentClick={true}
        contentStyle={{
          backgroundColor: "#f4f4f4",
          borderRadius: "3px",
          border: "none",
          width: "200px",
          height: "220px",
          padding: "-3px",
          overflowX: "auto"
        }}
      >
        <MapPartsImageGall item={item} props={passing} />
      </Popup>
    </MarkerContainer>
  );

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && (
        <div style={{ height: "40vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDQc0xMBQnrOOoj8UkPkN6yeGqkAo_l2hM"
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals
            options={{ maxZoom: 17 }}
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
        </div>
      )}
      {!loading && token && data.seeFullPost ? (
        <LogInButtonWrap>
          <Link
            key={data.seeFullPost.id}
            to={{
              pathname: `/writeboard/${dataOfMe &&
                dataOfMe.me &&
                dataOfMe.me.id}`,
              state: {
                fromNotifications: true
              }
            }}
          >
            <LogInButton onClick={onClick}>글쓰기</LogInButton>
          </Link>
        </LogInButtonWrap>
      ) : (
        false
      )}
      {!loading && (
        <NewLinkPage
          props={props}
          data={data}
          loading={loading}
          page={page}
          _previousPage={_previousPage}
          _nextPage={_nextPage}
        />
      )}
    </Wrapper>
  );
};
