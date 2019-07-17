import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";

const SEARCH = gql`
  query currentData($lat: Float, $lng: Float, $lat2: Float, $lng2: Float) {
    currentData(lat: $lat, lng: $lng, lat2: $lat2, lng2: $lng2) {
      id
      caption
      places {
        id
        lat
        lng
      }
      lat
      lng
      count
      content
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
      numberOfFoors
      MLSnumber
      deposit
      money
      selectType
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
  }
`;

const LINKS_PER_PAGE = 12;

export default withRouter(props => {
  ///체크박스 스테이트
  const [airConditioner, setAirConditioner] = useState("");
  const [washer, setWasher] = useState("");
  const [refrigerator, setRefrigerator] = useState("");
  const [internet, setInternet] = useState("");
  const [microwave, setMicrowave] = useState("");
  const [wifi, setWifi] = useState("");
  const [bed, setBed] = useState("");
  const [desk, setDesk] = useState("");
  const [induction, setInduction] = useState("");
  const [gasRange, setGasRange] = useState("");
  const [doorLock, setDoorLock] = useState("");
  const [CCTV, setCCTV] = useState("");
  const [pets, setPets] = useState("");
  const [elevator, setElevator] = useState("");
  const [parking, setParking] = useState("");
  const [electricHeating, setElectricHeating] = useState("");
  const [cityGasHeating, setCityGasHeating] = useState("");
  const [nightElectric, setNightElectric] = useState("");
  const [wateTax, setWateTax] = useState("");
  const [includingElectricity, setIncludingElectricity] = useState("");
  const [cityGasIncluded, setCityGasIncluded] = useState("");

  const airConditionerS = e => {
    const target = e.target.checked;
    if (target === true) {
      setAirConditioner("에어컨");
    } else if (target === false) {
      setAirConditioner("");
    }
    return false;
  };

  const washerS = e => {
    const target = e.target.checked;
    if (target === true) {
      setWasher("세탁기");
    } else if (target === false) {
      setWasher("");
    }
    return false;
  };

  const refrigeratorS = e => {
    const target = e.target.checked;
    if (target === true) {
      setRefrigerator("냉장고");
    } else if (target === false) {
      setRefrigerator("");
    }
    return false;
  };

  const internetS = e => {
    const target = e.target.checked;
    if (target === true) {
      setInternet("인터넷");
    } else if (target === false) {
      setInternet("");
    }
    return false;
  };

  const microwaveS = e => {
    const target = e.target.checked;
    if (target === true) {
      setMicrowave("전자렌지");
    } else if (target === false) {
      setMicrowave("");
    }
    return false;
  };
  const wifiS = e => {
    const target = e.target.checked;
    if (target === true) {
      setWifi("wifi");
    } else if (target === false) {
      setWifi("");
    }
    return false;
  };
  const bedS = e => {
    const target = e.target.checked;
    if (target === true) {
      setBed("침대");
    } else if (target === false) {
      setBed("");
    }
    return false;
  };
  const deskS = e => {
    const target = e.target.checked;
    if (target === true) {
      setDesk("책상");
    } else if (target === false) {
      setDesk("");
    }
    return false;
  };
  const inductionS = e => {
    const target = e.target.checked;
    if (target === true) {
      setInduction("인덕션");
    } else if (target === false) {
      setInduction("");
    }
    return false;
  };
  const gasRangeS = e => {
    const target = e.target.checked;
    if (target === true) {
      setGasRange("가스레인지");
    } else if (target === false) {
      setGasRange("");
    }
    return false;
  };
  const doorLockS = e => {
    const target = e.target.checked;
    if (target === true) {
      setDoorLock("도어락");
    } else if (target === false) {
      setDoorLock("");
    }
    return false;
  };
  const CCTVS = e => {
    const target = e.target.checked;
    if (target === true) {
      setCCTV("CCTV");
    } else if (target === false) {
      setCCTV("");
    }
    return false;
  };
  const petsS = e => {
    const target = e.target.checked;
    if (target === true) {
      setPets("애완동물");
    } else if (target === false) {
      setPets("");
    }
    return false;
  };
  const elevatorS = e => {
    const target = e.target.checked;
    if (target === true) {
      setElevator("엘리베이터");
    } else if (target === false) {
      setElevator("");
    }
    return false;
  };
  const parkingS = e => {
    const target = e.target.checked;
    if (target === true) {
      setParking("주차");
    } else if (target === false) {
      setParking("");
    }
    return false;
  };
  const electricHeatingS = e => {
    const target = e.target.checked;
    if (target === true) {
      setElectricHeating("전기난방");
    } else if (target === false) {
      setElectricHeating("");
    }
    return false;
  };
  const cityGasHeatingS = e => {
    const target = e.target.checked;
    if (target === true) {
      setCityGasHeating("도시가스난방");
    } else if (target === false) {
      setCityGasHeating("");
    }
    return false;
  };
  const nightElectricS = e => {
    const target = e.target.checked;
    if (target === true) {
      setNightElectric("심야전기");
    } else if (target === false) {
      setNightElectric("");
    }
    return false;
  };

  const wateTaxS = e => {
    const target = e.target.checked;
    if (target === true) {
      setWateTax("수도세");
    } else if (target === false) {
      setWateTax("");
    }
    return false;
  };
  const includingElectricityS = e => {
    const target = e.target.checked;
    if (target === true) {
      setIncludingElectricity("전기세포함");
    } else if (target === false) {
      setIncludingElectricity("");
    }
    return false;
  };
  const cityGasIncludedS = e => {
    const target = e.target.checked;
    if (target === true) {
      setCityGasIncluded("도시가스포함");
    } else if (target === false) {
      setCityGasIncluded("");
    }
    return false;
  };

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
  //보증금과 월세에 대한 저장
  const [select2, setSelect2] = useState([]);

  //보증금 선택사항
  const [selectValue3, setSelectValue3] = useState([0, 100000000]);
  useEffect(() => {
    setSelect2(`${selectValue3} ${selectValue4}`);
  }, [selectValue3]);

  //월세선택사항
  const [selectValue4, setSelectValue4] = useState([0, 100000000]);
  useEffect(() => {
    setSelect2(`${selectValue3} ${selectValue4}`);
  }, [selectValue4]);

  const handleChange = async e => {
    setSelectValue1(e.target.value);
  };
  const handleChange2 = async e => {
    setSelectValue2(e.target.value);
  };

  //서치
  const deposit = selectValue3[0];
  const deposit2 = selectValue3[1];

  const money = selectValue4[0];
  const money2 = selectValue4[1];

  // 토글 팝업 에드 클래스
  const [isOpen, setIsOpen] = useState(false);
  const setActiveClass = () => (isOpen ? setIsOpen(false) : setIsOpen(true));
  let lat;
  let lng;
  //구글지도
  const getInitialState = () => {
    const value = { lat: 35.8898463607061, lng: 128.61687976455687 };

    return {
      key: value
    };
  };
  const [center, setCenter] = useState(JSON.parse(localStorage.getItem("map")));
  console.log(center, "center");

  //이지역 검색할래요
  const setFixCenter = e => {
    e.preventDefault();
    lat = center.lat;
    lng = center.lng;
    const centers = { lat, lng };
    localStorage.setItem("map", JSON.stringify(centers));
  };

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

  ////
  //온 바운드 체인지
  const [latS, setLatS] = useState(0);
  const [lat2S, setLat2S] = useState(0);
  const [lngS, setLngS] = useState(0);
  const [lng2S, seLng2S] = useState(0);

  const onBoundsChange = (center, zoom, bounds, marginBounds) => {
    const centerS = center;
    const latS = bounds && bounds[0];
    const lat2S = bounds && bounds[4];
    const lngS = bounds && bounds[1];
    const lng2S = bounds && bounds[3];
    setLatS(latS);
    setLat2S(lat2S);
    setLngS(lngS);
    seLng2S(lng2S);
    setCenter(centerS);
    localStorage.setItem("map", JSON.stringify(centerS));

    return centerS;
  };
  ////////////////////

  //검색하는 데이터 쿼리
  /////

  const { data: searchData, loading } = useQuery(SEARCH, {
    variables: {
      lat: latS,
      lat2: lat2S,
      lng: lngS,
      lng2: lng2S,
      deposit,
      deposit2,
      money,
      money2,
      selectType: select,
      airConditioner,
      washer,
      refrigerator,
      internet,
      microwave,
      wifi,
      bed,
      desk,
      induction,
      gasRange,
      doorLock,
      CCTV,
      pets,
      elevator,
      parking,
      electricHeating,
      cityGasHeating,
      nightElectric,
      wateTax,
      includingElectricity,
      cityGasIncluded
      // numberOfFoors,
      //  MLSnumber
    }
  });
  console.log(searchData, "searchData");
  console.log(props, "props");
  //페이지네이션
  const _nextPage = e => {
    e.preventDefault();
    const page = parseInt(
      props && props.match && props.match.params && props.match.params.page
    );

    if (
      page <=
      (searchData &&
        searchData.currentData &&
        searchData.currentData.count / LINKS_PER_PAGE)
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

  //주소를 가져온다
  const latAndlng =
    searchData &&
    searchData.currentData &&
    searchData.currentData.map(item => item);

  return (
    <SearchPresenter
      setFixCenter={setFixCenter}
      onBoundsChange={onBoundsChange}
      isOpen={isOpen}
      setActiveClass={setActiveClass}
      handleChange={handleChange}
      handleChange2={handleChange2}
      selectValue1={selectValue1}
      selectValue2={selectValue2}
      setSelectValue1={setSelectValue1}
      setSelectValue2={setSelectValue2}
      select={select}
      setSelect={setSelect}
      setCenter={setCenter}
      latAndlng={latAndlng}
      center={center}
      zoom={zoom}
      props={props}
      page={page}
      loading={loading}
      data={searchData}
      searchData={searchData}
      token={token}
      dataOfMe={dataOfMe}
      skip={skip}
      first={first}
      onClick={onClick}
      _previousPage={_previousPage}
      _nextPage={_nextPage}
      airConditioner={airConditioner}
      washer={washer}
      refrigerator={refrigerator}
      internet={internet}
      microwave={microwave}
      wifi={wifi}
      bed={bed}
      desk={desk}
      induction={induction}
      gasRange={gasRange}
      doorLock={doorLock}
      CCTV={CCTV}
      pets={pets}
      elevator={elevator}
      parking={parking}
      electricHeating={electricHeating}
      cityGasHeating={cityGasHeating}
      nightElectric={nightElectric}
      wateTax={wateTax}
      includingElectricity={includingElectricity}
      cityGasIncluded={cityGasIncluded}
      airConditionerS={airConditionerS}
      washerS={washerS}
      refrigeratorS={refrigeratorS}
      internetS={internetS}
      microwaveS={microwaveS}
      wifiS={wifiS}
      bedS={bedS}
      deskS={deskS}
      inductionS={inductionS}
      gasRangeS={gasRangeS}
      doorLockS={doorLockS}
      CCTVS={CCTVS}
      petsS={petsS}
      elevatorS={elevatorS}
      parkingS={parkingS}
      electricHeatingS={electricHeatingS}
      cityGasHeatingS={cityGasHeatingS}
      nightElectricS={nightElectricS}
      wateTaxS={wateTaxS}
      includingElectricityS={includingElectricityS}
      cityGasIncludedS={cityGasIncludedS}
      setSelectValue3={setSelectValue3}
      setSelectValue4={setSelectValue4}
      searching={searching}
      deposit={deposit}
      deposit2={deposit2}
      money={money}
      money2={money2}
    />
  );
});
