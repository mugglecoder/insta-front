import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import RoomsDetailPresenter from "./RoomsDetailPresenter";
import ModifyPresenter from "./ModifyPresenter";
import { ME } from "../../SharedQueries";

const FEED_QUERY = gql`
  query seeFullPost($first: Int, $skip: Int) {
    seeFullPost(first: $first, skip: $skip) {
      post {
        id
        caption
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

const LINKS_PER_PAGE = 6;

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
      selectType
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

const Wrapper = styled.div``;

export default props => {
  const id = props.history.location.pathname.split("/")[2];
  const { data, loading } = useQuery(GETPOST, {
    variables: { id }
  });
  const localLoginMutation = useMutation(LOCAL_LOG_IN);

  const logIns = localLoginMutation({
    variables: { token: localStorage.getItem("token") }
  });

  ////////////////////////////////

  const [skip, setSkip] = useState(0);
  const [first, setFrist] = useState(0);

  const page = parseInt(
    props && props.match && props.match.params && props.match.params.page
  );

  const { data: dataOfMe } = useQuery(ME);

  const _getQueryVariables = () => {
    const isNewPage =
      props.location &&
      props.location.pathname &&
      props.location.pathname.includes("new");

    const skip = isNewPage || props ? (page - 1) * LINKS_PER_PAGE : 0;
    const first = isNewPage || props ? LINKS_PER_PAGE : 100;
    setFrist(first);
    setSkip(skip);
    return skip;
  };

  const [getQueryVariables, teset2] = useState(_getQueryVariables);
  useEffect(() => {}, [getQueryVariables]);

  let herrrr = props.history;
  const token = localStorage.getItem("token");

  const { data: data2 } = useQuery(FEED_QUERY, {
    variables: { first, skip }
  });

  const onClick = props => {
    if (dataOfMe && dataOfMe.me && dataOfMe.me.id) {
      return (
        herrrr &&
        herrrr.push(`/writeboard/${dataOfMe && dataOfMe.me && dataOfMe.me.id}`)
      );
    } else {
      return false;
    }
  };
  const onClick2 = props => {
    if (dataOfMe && dataOfMe.me && dataOfMe.me.id) {
      return herrrr && herrrr.push(`/edit/${data && data.detailPost.id}`);
    } else {
      return false;
    }
  };

  const [set, setSet] = useState(false);
  const [set2, setSet2] = useState(false);

  useEffect(() => {
    if (set === true) {
      setSet(false);
    }
    _getQueryVariables();
  }, [set]);

  useEffect(() => {
    if (set2 === true) {
      setSet2(false);
    }
    _getQueryVariables();
  }, [set2]);

  const _nextPage = e => {
    e.preventDefault();
    const page = parseInt(
      props && props.match && props.match.params && props.match.params.page
    );

    if (
      page <=
      (data2 && data2.seeFullPost && data2.seeFullPost.count / LINKS_PER_PAGE)
    ) {
      const nextPage = page + 1;

      props.history.push(`/new/${nextPage}`);
      _getQueryVariables();
      return setSet(true);
    }
  };

  const _previousPage = async e => {
    e.preventDefault();
    const page = parseInt(
      props && props.match && props.match.params && props.match.params.page
    );
    if (page > 1) {
      const previousPage = page - 1;
      props.history.push(`/new/${previousPage}`);
      await _getQueryVariables();
      return setSet2(true);
    }
  };

  let posts = [];
  let getPath = [];
  const pathData =
    data.detailPost &&
    data.detailPost.files &&
    data.detailPost.files.map(item => console.log(posts.push(item.url)));

  const s = posts.reduce((s, a) => {
    {
      for (var i = 0; i < posts.lengsh; i++);
      let get;
      get = {
        original: `http://localhost:4000/${a}`,
        thumbnail: `http://localhost:4000/${a}`
      };
      return getPath.push(get);
    }
  }, {});

  //토글 룸스디테일 & 수정하기
  const checker = props.match.path.includes("roomsdetail");

  ////여기는 modifyPresenter ///////////////////////////////////////////

  return (
    <Wrapper>
      {checker ? (
        <RoomsDetailPresenter
          token={token}
          path={getPath}
          page={page}
          props={props}
          data={data}
          data2={data2}
          loading={loading}
          logIn={logIns}
          onClick={onClick}
          onClick2={onClick2}
          _nextPage={_nextPage}
          _previousPage={_previousPage}
          dataOfMe={dataOfMe}
        />
      ) : (
        <ModifyPresenter
          token={token}
          path={getPath}
          page={page}
          props={props}
          data={data}
          data2={data2}
          loading={loading}
          logIn={logIns}
          onClick={onClick}
          onClick2={onClick2}
          _nextPage={_nextPage}
          _previousPage={_previousPage}
          dataOfMe={dataOfMe}
        />
      )}
    </Wrapper>
  );
};
