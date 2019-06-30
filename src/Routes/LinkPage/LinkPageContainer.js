import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";
import LinkPagePresenter from "./LinkPagePresenter";

const FEED_QUERY = gql`
  query seeFullPost($first: Int, $skip: Int) {
    seeFullPost(first: $first, skip: $skip) {
      post {
        id
        caption
        selectType
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

export default props => {
  const [skip, setSkip] = useState(0);
  const [first, setFrist] = useState(0);
  console.log(skip, first, "skip과  //  frist");

  const page =
    parseInt(
      props && props.match && props.match.params && props.match.params.page
    ) || window.location.href.split("/new/")[1];

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
  const { data, loading } = useQuery(FEED_QUERY, {
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
    const page =
      parseInt(
        props && props.match && props.match.params && props.match.params.page
      ) || window.location.href.split("/new/")[1];
    console.log(page, "여기 page");
    if (
      page <=
      (data && data.seeFullPost && data.seeFullPost.count / LINKS_PER_PAGE)
    ) {
      const nextPage = page + 1;

      props.history.push(`/new/${nextPage}`);
      _getQueryVariables();
      return setSet(true);
    }
  };

  const _previousPage = async e => {
    e.preventDefault();
    const page =
      parseInt(
        props && props.match && props.match.params && props.match.params.page
      ) || window.location.href.split("/new/")[1];
    if (page > 1) {
      const previousPage = page - 1;
      props.history.push(`/new/${previousPage}`);
      await _getQueryVariables();
      return setSet2(true);
    }
  };

  return (
    <LinkPagePresenter
      props={props}
      page={page}
      loading={loading}
      data={data}
      token={token}
      dataOfMe={dataOfMe}
      skip={skip}
      first={first}
      onClick={onClick}
      _previousPage={_previousPage}
      _nextPage={_nextPage}
    />
  );
};
