import React from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import BoardParts from "../Components/BoardParts";
import { Link, withRouter } from "react-router-dom";
import Loader from "../Components/Loader";
import { ME } from "../SharedQueries";

const FEEDLIST = gql`
  {
    seeFeed {
      id
      caption
      selectType
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
        id
        url
      }
    }
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SLink = styled(Link)`
  color: grey;
`;

const LogInButtonWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const LogInButton = styled.button`
  margin-bottom: 20px;
  height: 50px;
  width: 100px;
`;

export default withRouter(props => {
  const { data: dataOfMe } = useQuery(ME);
  const { data, loading } = useQuery(FEEDLIST);
  const token = localStorage.getItem("token");
  const onClick = () => {
    if (dataOfMe) {
      return props.history.push(`/writeboard/${dataOfMe.me.id}`);
    } else {
      return false;
    }
  };
  return (
    <Wrapper>
      {!loading && token && data.seeFeed ? (
        <LogInButtonWrap>
          <LogInButton onClick={onClick}>글쓰기</LogInButton>
        </LogInButtonWrap>
      ) : (
        false
      )}
      <Container>
        {loading && <Loader />}

        {!loading &&
          data &&
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
                selectType={item.selectType}
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
      </Container>
    </Wrapper>
  );
});
