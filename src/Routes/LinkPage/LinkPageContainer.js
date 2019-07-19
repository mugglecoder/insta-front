import { gql } from "apollo-boost";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";
import LinkPagePresenter from "./LinkPagePresenter";

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

const LINKS_PER_PAGE = 16;

export default props => {
  //페이지네이션
  const [skip, setSkip] = useState(0);
  const [first, setFrist] = useState(0);

  // 토글 팝업 에드 클래스
  const [isOpen, setIsOpen] = useState(false);
  const setActiveClass = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

  //로컬스토리지 이용
  useEffect(() => {
    localStorage.setItem(
      "map",
      JSON.stringify({ lat: 35.8898463607061, lng: 128.61687976455687 })
    );
    localStorage.setItem("종류", "");
    localStorage.setItem("종류2", "");
    localStorage.setItem("보증금", JSON.stringify([0, 1000000]));
    localStorage.setItem("월세", JSON.stringify([0, 1000000]));
  }, []);
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

  const [getQueryVariables, teset2] = useState(_getQueryVariables);
  useEffect(() => {}, [getQueryVariables]);

  //
  console.log(first, skip, "tyes");
  //온 바운드 체인지
  const [latS, setLatS] = useState(0);
  const [lat2S, setLat2S] = useState(0);
  const [lngS, setLngS] = useState(0);
  const [lng2S, seLng2S] = useState(0);

  const onBoundsChange = (center, zoom, bounds, marginBounds) => {
    console.log(props);
    const centerS = center;
    const latS = bounds[0];
    const lat2S = bounds[4];
    const lngS = bounds[1];
    const lng2S = bounds[3];
    setLatS(latS);
    setLat2S(lat2S);
    setLngS(lngS);
    seLng2S(lng2S);
    setCenter(centerS);

    localStorage.setItem("map", JSON.stringify(centerS));

    return true;
  };
  let herrrr = props.history;
  const token = localStorage.getItem("token");
  const { data, loading } = useQuery(FEED_QUERY);

  console.log(data, "data");

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
  const _nextPage = e => {
    e.preventDefault();
    const page = parseInt(
      props && props.match && props.match.params && props.match.params.page
    );
    console.log(data && data.seeFullPost && data.seeFullPost.count, "page");

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

  //페이지네이션
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

  const searching = e => {
    e.preventDefault();
  };

  ////////////////////
  //검색하는 데이터 쿼리

  //주소를 가져온다
  const latAndlng =
    data && data.seeFullPost && data.seeFullPost.post.map(item => item);

  // props.history.push(`/new/search`);
  return (
    <LinkPagePresenter
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
      _previousPage={_previousPage}
      _nextPage={_nextPage}
    />
  );
};
