import React from "react";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import RoomsDetailPresenter from "./RoomsDetailPresenter";

const GETPOST = gql`
  query detailPost($id: String!) {
    detailPost(id: $id) {
      id
      count
      numberOfFoors
      MLSnumber
      deposit
      money
      content
      caption
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
      electricHeating
      cityGasHeating
      nightElectric
      wateTax
      includingElectricity
      cityGasIncluded

      comments {
        id
      }
      files {
        id
        url
      }
      user {
        id
        username
      }
    }
  }
`;

const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

export default props => {
  const id = props.history.location.pathname.split("/")[2];
  const { data, loading } = useQuery(GETPOST, {
    variables: { id }
  });
  const localLoginMutation = useMutation(LOCAL_LOG_IN);

  const logIns = localLoginMutation({
    variables: { token: localStorage.getItem("token") }
  });

  return (
    <RoomsDetailPresenter
      props={props}
      data={data}
      loading={loading}
      logIn={logIns}
    />
  );
};
