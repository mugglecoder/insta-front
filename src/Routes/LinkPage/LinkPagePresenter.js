import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import NewLinkPage from "../../Components/NewLinkPage";
import GoogleMapReact from "google-map-react";

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
const AnyReactComponent = ({ text }) => <div>{text}</div>;
export default ({
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
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && (
        <div style={{ height: "35vh", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDQc0xMBQnrOOoj8UkPkN6yeGqkAo_l2hM"
            }}
            defaultCenter={center}
            defaultZoom={zoom}
            yesIWantToUseGoogleMapApiInternals={true}
          >
            <AnyReactComponent
              lat={36.8085342802915}
              lng={128.6317640802915}
              text="My Marker"
            />
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
