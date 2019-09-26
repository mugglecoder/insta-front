import React from "react";
import InfoPresenter from "./InfoPresenter";
import { useQuery } from "react-apollo-hooks";
import { gql } from "apollo-boost";

export const ME = gql`
  {
    me {
      id
      username
      email
      likes {
        id
        post {
          id
          caption
          likes {
            user {
              id
            }
          }
          deposit
          money
          files {
            id
            url
          }
        }
      }
    }
  }
`;

export default props => {
  const { data, loading } = useQuery(ME);
  return <InfoPresenter data={data} loading={loading} props={props} />;
};
