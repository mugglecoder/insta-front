import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import BoardParts from "../Components/BoardParts";
import { Link, withRouter } from "react-router-dom";

const FEEDLIST = gql`
  {
    seeFeed {
      id
      caption
      deposit
      money
      content
      createdAt
      user {
        id
        username
      }
      count
      files {
        url
      }
    }
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const SLink = styled(Link)`
  color: grey;
`;

export default withRouter(() => {
  const { data } = useQuery(FEEDLIST);
  return (
    <Wrapper>
      {data &&
        data.seeFeed &&
        data.seeFeed.map((item, key) => (
          <SLink
            key={item.id}
            to={{
              pathname: `/roomsdetail/${item.id}`,
              aboutProps: { item },
              state: {
                fromNotifications: true
              }
            }}
          >
            <BoardParts
              key={key}
              caption={item.caption}
              username={item.user.username}
              createdAt={item.createdAt.slice(0, 10)}
              count={item.count}
              url={item.files}
              deposit={item.deposit}
              money={item.money}
            />
          </SLink>
        ))}
    </Wrapper>
  );
});
