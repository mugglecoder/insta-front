import { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";
import LinkPagePresenter from "./LinkPagePresenter";
import axios from "axios";
import { formatExecError } from "jest-message-util";

const FEED_QUERY = gql`
  query seeFullPost($first: Int, $skip: Int) {
    seeFullPost(first: $first, skip: $skip) {
      post {
        id
        caption
        places {
          id
          lat
          lng
        }
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

const CURRENTDATA = gql`
  query currentData(
    $first: Int
    $skip: Int
    $lat: Float
    $lng: Float
    $lat2: Float
    $lng2: Float
  ) {
    currentData(
      first: $first
      skip: $skip
      lat: $lat
      lng: $lng
      lat2: $lat2
      lng2: $lng2
    ) {
      post {
        id
        caption
        places {
          id
          lat
          lng
        }
        lat
        lng
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

//
const QUERY_REPOS = gql`
  query($q: String!, $end: String) {
    search(first: 20, type: REPOSITORY, query: $q, after: $end) {
      nodes {
        ... on Repository {
          name
          url
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

//
const NEXT = gql`
  query nextBoard($first: Int, $skip: Int) {
    nextBoard(first: $first, skip: $skip) {
      post {
        id
        caption
        places {
          id
          lat
          lng
        }
        lat
        lng
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

const LINKS_PER_PAGE = 4;

export default props => {
  //페이지네이션
  const [skip, setSkip] = useState(0);
  const [first, setFrist] = useState(0);

  // 토글 팝업 에드 클래스
  const [isOpen, setIsOpen] = useState(false);
  const setActiveClass = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  //로컬스토리지 이용

  //구글지도 줌 레벨
  const [zoom, setZoom] = useState(16);
  const page = parseInt(
    props && props.match && props.match.params && props.match.params.page
  );
  const { data: dataOfMe } = useQuery(ME);

  const _getQueryVariables = () => {
    const isNewPage =
      props.location &&
      props.location.pathname &&
      props.location.pathname.includes("new");

    //페이지네이션
    const skip = isNewPage || props ? (page - 1) * LINKS_PER_PAGE : 0;
    const first = isNewPage || props ? LINKS_PER_PAGE : 100;
    setFrist(first);
    setSkip(skip);
    return skip;
  };

  console.log(first, skip);
  const [getQueryVariables, teset2] = useState(_getQueryVariables);
  useEffect(() => {}, [getQueryVariables]);

  //온 바운드 체인지
  const onBoundsChange = (center, zoom, bounds, marginBounds) => {
    localStorage.setItem("map", JSON.stringify(center));
    return true;
  };

  let herrrr = props.history;
  const token = localStorage.getItem("token");
  const { data: pageData, loading } = useQuery(FEED_QUERY);

  //구글지도
  const [center, setCenter] = useState({
    lat: 35.8961565802915,
    lng: 128.6162214802915
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
  //페이지네이션
  const _nextPage = () => {};

  //무한스크롤 로직

  const { loading: loadings, data, updateQuery, fetchMore } = useQuery(NEXT, {
    props: ({ data }) => ({
      loadMore: () => {
        return {
          variables: {
            first,
            skip
          },
          updateQuery(previousResult, { fetchMoreResult }) {
            const connection = fetchMoreResult;
          }
        };
      }
    })
  });
  console.log(data, "data");

  const [hasMoreItems, setHasMoreItems] = useState(true);

  const loadFunc = async () => {};
  //주소를 가져온다
  const latAndlng =
    pageData &&
    pageData.seeFullPost &&
    pageData.seeFullPost.post.map(item => item);

  // props.history.push(`/new/search`);
  return (
    <LinkPagePresenter
      hasMoreItems={hasMoreItems}
      loadFunc={loadFunc}
      pageData={pageData}
      onBoundsChange={onBoundsChange}
      isOpen={isOpen}
      setActiveClass={setActiveClass}
      setCenter={setCenter}
      latAndlng={latAndlng}
      center={center}
      zoom={zoom}
      props={props}
      page={page}
      loading={loading}
      data={data}
      token={token}
      dataOfMe={dataOfMe}
      skip={skip}
      first={first}
      onClick={onClick}
      _nextPage={_nextPage}
    />
  );
};
