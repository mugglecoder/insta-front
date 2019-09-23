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
