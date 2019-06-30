import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import NewLinkPage from "../../Components/NewLinkPage";

const Wrapper = styled.div`
  width: 100%;
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

export default ({
  page,
  props,
  data,
  loading,
  dataOfMe,
  skip,
  first,
  token,
  onClick,
  _previousPage,
  _nextPage
}) => {
  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && token && data.seeFullPost ? (
        <LogInButtonWrap>
          <Link
            key={data.seeFullPost.id}
            to={{
              pathname: `/writeboard/${dataOfMe &&
                dataOfMe.me &&
                dataOfMe.me.id}`,
              state: {
                fromNotifications: true
              }
            }}
          >
            <LogInButton onClick={onClick}>글쓰기</LogInButton>
          </Link>
        </LogInButtonWrap>
      ) : (
        false
      )}
      {!loading && (
        <NewLinkPage
          data={data}
          loading={loading}
          page={page}
          _previousPage={_previousPage}
          _nextPage={_nextPage}
        />
      )}
    </Wrapper>
  );
};
