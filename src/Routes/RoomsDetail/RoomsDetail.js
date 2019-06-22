import React, { useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import RoomsDetailPresenter from "./RoomsDetailPresenter";

const GETPOST = gql`
  query detailPost($postId: String!) {
    detailPost(postId: $postId) {
      id
      count
      content
      caption
      comments {
        id
      }
      files {
        url
      }
      user {
        username
      }
    }
  }
`;

export default props => {
  const postId = props.history.location.pathname.split("/roomsdetail/")[1];

  const { data, loading } = useQuery(GETPOST, {
    variables: { postId }
  });
  console.log(data, loading);

  return <RoomsDetailPresenter data={data} loading={loading} />;
};
