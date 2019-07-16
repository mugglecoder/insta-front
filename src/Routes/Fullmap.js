import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";
import GoogleMaps from "../Components/GoogleMaps";
import Loader from "../Components/Loader";
import FullmapDivide from "./FullmapDivide";

const FEED_QUERY = gql`
  query seeFullPost($first: Int, $skip: Int) {
    seeFullPost(first: $first, skip: $skip) {
      post {
        id
        caption
        places {
          id
          lat
          lng
        }
        selectType
        deposit
        airConditioner
        washer
        refrigerator
        internet
        microwave
        wifi
        bed
        desk
        induction
        gasRange
        doorLock
        CCTV
        pets
        elevator
        parking
        numberOfFoors
        electricHeating
        cityGasHeating
        nightElectric
        wateTax
        includingElectricity
        cityGasIncluded
        MLSnumber
        money
        count
        content
        createdAt
        user {
          id
          username
        }
        files {
          id
          url
        }
      }
      count
    }
  }
`;

const FullMapContainer = styled.div`
  width: 100%;
  display: flex;
`;

const DividerWrap = styled.div`
  display: flex;
  width: 100%;
`;

const Detail = styled.div`
  width: 30%;
  height: 80vh;
`;

export default props => {
  //구글지도
  const [center, setCenter] = useState({
    lat: 35.8961565802915,
    lng: 128.6162214802915
  });

  //구글지도 줌 레벨

  const [zoom, setZoom] = useState(16);
  const [divide, setDivide] = useState(false);
  const page = parseInt(
    props && props.match && props.match.params && props.match.params.page
  );
  const { data: dataOfMe } = useQuery(ME);

  const { data, loading } = useQuery(FEED_QUERY);
  const latAndlng =
    data && data.seeFullPost && data.seeFullPost.post.map(item => item);
  return (
    <FullMapContainer>
      {loading && <Loader />}
      {!loading && !divide ? (
        <GoogleMaps
          zoom={zoom}
          center={center}
          latAndlng={latAndlng}
          props={props}
          setCenter={setCenter}
          height={"80vh"}
          setDivide={setDivide}
        />
      ) : (
        !loading &&
        divide && (
          <DividerWrap>
            <GoogleMaps
              zoom={zoom}
              center={center}
              latAndlng={latAndlng}
              props={props}
              setCenter={setCenter}
              height={"80vh"}
              width={"100%"}
              setDivide={setDivide}
            />
            <FullmapDivide data={data} props={props} setDivide={setDivide} />
          </DividerWrap>
        )
      )}
    </FullMapContainer>
  );
};
