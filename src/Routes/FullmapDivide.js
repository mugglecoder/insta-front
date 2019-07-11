import React, { useState } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../SharedQueries";
import GoogleMaps from "../Components/GoogleMaps";
import Loader from "../Components/Loader";
import RoomsDetail from "./RoomsDetail";

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
        money
        count
        selectType
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

const DetailContainer = styled.div`
  width: 40%;
`;

const Detail = styled.div`
  width: 30%;
  height: 80vh;
`;

export default props => {
  const data = props && props.props.location && props.props.location.data.item;
  const propss = props && props.props;
  console.log(propss, "propssss");
  return (
    <DetailContainer>
      <RoomsDetail data={data} props={propss} />
    </DetailContainer>
  );
};
