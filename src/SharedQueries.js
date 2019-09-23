import gql from "graphql-tag";

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
            id
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
