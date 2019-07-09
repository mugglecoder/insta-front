import React from "react";
import styled from "styled-components";
import GoogleMapReact from "google-map-react";

const Container = styled.div`
  width: 100%;
`;

const MarkerIcon = styled.div`
  background-color: red;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export default ({ zoom, center }) => {
  const AnyReactComponent = ({ text }) => <MarkerIcon>{text}</MarkerIcon>;

  return (
    <Container>
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
    </Container>
  );
};
