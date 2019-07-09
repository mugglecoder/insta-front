import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
`;

export default () => {
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
  </Container>;
};
