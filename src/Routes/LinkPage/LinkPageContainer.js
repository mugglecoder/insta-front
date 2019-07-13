import React, { useState, useEffect } from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";
import LinkPagePresenter from "./LinkPagePresenter";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

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

const LINKS_PER_PAGE = 9;

export default props => {
  //페이지네이션
  const [skip, setSkip] = useState(0);
  const [first, setFrist] = useState(0);

  //셀렉트 박스
  const [select, setSelect] = useState("");
  const [selectValue1, setSelectValue1] = useState("");
  useEffect(() => {
    setSelect(String(`${selectValue1} ${selectValue2}`));
  }, [selectValue1]);
  const [selectValue2, setSelectValue2] = useState("");
  useEffect(() => {
    setSelect(String(`${selectValue1} ${selectValue2}`));
  }, [selectValue2]);

  const handleChange = async e => {
    console.log(e.target.value);
    if (e.target.value === "원룸" || "투룸") {
      setDefault([100, 3000]);
      setDefaultMax(10000);
    }
    if (e.target.value === "쓰리룸") {
      setDefault([2000, 5000]);
      setDefaultMax(30000);
    }
    if (e.target.value === "포룸") {
      setDefault([2000, 5000]);
      setDefaultMax(30000);
    }
    if (e.target.value === "상가") {
      setDefault([2000, 5000]);
      setDefaultMax(30000);
    }
    if (e.target.value === "주인세대") {
      setDefault([5000, 10000]);
      setDefaultMax(30000);
    }
    if (e.target.value === "빌라") {
      setDefault([8000, 20000]);
      setDefaultMax(30000);
    }
    if (e.target.value === "아파트") {
      setDefault([8000, 20000]);
      setDefaultMax(1000000);
    }

    setSelectValue1(e.target.value);
  };
  const handleChange2 = async e => {
    setSelectValue2(e.target.value);
  };

  //슬라이더에 대한 로직
  const [defaultS, setDefault] = useState([100, 1000]);
  const [defaultMax, setDefaultMax] = useState(100);
  console.log(defaultS, defaultMax, "dafaultS");
  const createSliderWithTooltip = Slider.createSliderWithTooltip;
  const Range = createSliderWithTooltip(Slider.Range);
  const setDefaultS = () => setDefault([100, 3000]);

  //구글지도
  const [center, setCenter] = useState({
    lat: 35.8961565802915,
    lng: 128.6162214802915
  });

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

  //페이지네이션
  const _nextPage = e => {
    e.preventDefault();
    const page = parseInt(
      props && props.match && props.match.params && props.match.params.page
    );

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
  //주소를 가져온다
  const latAndlng =
    data && data.seeFullPost && data.seeFullPost.post.map(item => item);
  return (
    <LinkPagePresenter
      defaultS={defaultS}
      handleChange={handleChange}
      handleChange2={handleChange2}
      selectValue1={selectValue1}
      selectValue2={selectValue2}
      select={select}
      setSelect={setSelect}
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
