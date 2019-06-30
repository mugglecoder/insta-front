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

const NEXTPAGE = gql`
  query nextBoard {
    nextBoard {
      id
    }
  }
`;

const POSTCOUNT = gql`
  {
    seeFullPost
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

const PPcontainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const Pcontainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const P = styled.p`
  display: flex;
`;

export default withRouter(props => {
  const { data: dataOfMe } = useQuery(ME);
  const { data: pageCount } = useQuery(POSTCOUNT);
  const { data, loading } = useQuery(FEEDLIST);
  const { data: data2 } = useQuery(NEXTPAGE);
  const token = localStorage.getItem("token");

  const onClick = () => {
    if (dataOfMe && dataOfMe.me && dataOfMe.me.id) {
      return props.history.push(
        `/writeboard/${dataOfMe && dataOfMe.me && dataOfMe.me.id}`
      );
    } else {
      return false;
    }
  };

  const nextPage = () => {
    console.log(data2);
    props.history.push("/get");
    return data2;
  };

  const pageFullCount = pageCount.seeFullPost;
  console.log(pageFullCount, "pageFullCount");
  console.log(pageCount, "pageCount");
  console.log(data, "data");

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && token && data.seeFeed ? (
        <LogInButtonWrap>
          <LogInButton onClick={onClick}>글쓰기</LogInButton>
        </LogInButtonWrap>
      ) : (
        false
      )}
      <Container>
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
                url={item}
                deposit={item.deposit}
                money={item.money}
              />
            </SLink>
          ))}
      </Container>
      {!loading && (
        <PPcontainer>
          <Pcontainer>
            <P>이전</P>
            <P>
              <button onClick={nextPage}>1</button>
            </P>
            <P>2</P>
            <P>3</P>
            <P>4</P>
            <P>5</P>
            <P>다음</P>
          </Pcontainer>
        </PPcontainer>
      )}
    </Wrapper>
  );
});
