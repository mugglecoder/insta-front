import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { withRouter } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";

const SEARCH = gql`
  query searchRoom(
    $deposit: Int
    $deposit2: Int
    $money: Int
    $money2: Int
    $caption: String
    $content: String
    $files: [String]
    $selectType: String
    $airConditioner: Boolean
    $washer: Boolean
    $refrigerator: Boolean
    $internet: Boolean
    $microwave: Boolean
    $wifi: Boolean
    $bed: Boolean
    $desk: Boolean
    $induction: Boolean
    $gasRange: Boolean
    $doorLock: Boolean
    $CCTV: Boolean
    $pets: Boolean
    $elevator: Boolean
    $parking: Boolean
    $electricHeating: Boolean
    $cityGasHeating: Boolean
    $nightElectric: Boolean
    $wateTax: Boolean
    $includingElectricity: Boolean
    $cityGasIncluded: Boolean
    $numberOfFoors: String
    $MLSnumber: String
  ) {
    searchRoom(
      deposit: $deposit
      deposit2: $deposit2
      money: $money
      money2: $money2
      caption: $caption
      content: $content
      files: $files
      selectType: $selectType
      airConditioner: $airConditioner
      washer: $washer
      refrigerator: $refrigerator
      internet: $internet
      microwave: $microwave
      wifi: $wifi
      bed: $bed
      desk: $desk
      induction: $induction
      gasRange: $gasRange
      doorLock: $doorLock
      CCTV: $CCTV
      pets: $pets
      elevator: $elevator
      parking: $parking
      electricHeating: $electricHeating
      cityGasHeating: $cityGasHeating
      nightElectric: $nightElectric
      wateTax: $wateTax
      includingElectricity: $includingElectricity
      cityGasIncluded: $cityGasIncluded
      numberOfFoors: $numberOfFoors
      MLSnumber: $MLSnumber
    ) {
      id
      caption
      places {
        id
        lat
        lng
      }
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
  const {
    location: {
      state: {
        depositSS,
        deposit2SS,
        moneySS,
        money2SS,
        selectTypeSS,
        airConditionerSS,
        washerSS,
        refrigeratorSS,
        internetSS,
        microwaveSS,
        wifiSS,
        bedSS,
        deskSS,
        inductionSS,
        gasRangeSS,
        doorLockSS,
        CCTVSS,
        petsSS,
        elevatorSS,
        parkingSS,
        electricHeatingSS,
        cityGasHeatingSS,
        nightElectricSS,
        wateTaxSS,
        includingElectricitySS,
        cityGasIncludedSS
      }
    }
  } = props;
  console.log(props, "re match");

  ///체크박스 스테이트
  const [airConditioner, setAirConditioner] = useState(false);
  const [washer, setWasher] = useState(false);
  const [refrigerator, setRefrigerator] = useState(false);
  const [internet, setInternet] = useState(false);
  const [microwave, setMicrowave] = useState(false);
  const [wifi, setWifi] = useState(false);
  const [bed, setBed] = useState(false);
  const [desk, setDesk] = useState(false);
  const [induction, setInduction] = useState(false);
  const [gasRange, setGasRange] = useState(false);
  const [doorLock, setDoorLock] = useState(false);
  const [CCTV, setCCTV] = useState(false);
  const [pets, setPets] = useState(false);
  const [elevator, setElevator] = useState(false);
  const [parking, setParking] = useState(false);
  const [electricHeating, setElectricHeating] = useState(false);
  const [cityGasHeating, setCityGasHeating] = useState(false);
  const [nightElectric, setNightElectric] = useState(false);
  const [wateTax, setWateTax] = useState(false);
  const [includingElectricity, setIncludingElectricity] = useState(false);
  const [cityGasIncluded, setCityGasIncluded] = useState(false);

  const airConditionerS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setAirConditioner(true);
    } else if (target === false) {
      setAirConditioner(false);
    }
    return false;
  };

  const washerS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWasher(true);
    } else if (target === false) {
      setWasher(false);
    }
    return false;
  };

  const refrigeratorS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setRefrigerator(true);
    } else if (target === false) {
      setRefrigerator(false);
    }
    return false;
  };

  const internetS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setInternet(true);
    } else if (target === false) {
      setInternet(false);
    }
    return false;
  };

  const microwaveS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setMicrowave(true);
    } else if (target === false) {
      setMicrowave(false);
    }
    return false;
  };
  const wifiS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWifi(true);
    } else if (target === false) {
      setWifi(false);
    }
    return false;
  };
  const bedS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setBed(true);
    } else if (target === false) {
      setBed(false);
    }
    return false;
  };
  const deskS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setDesk(true);
    } else if (target === false) {
      setDesk(false);
    }
    return false;
  };
  const inductionS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setInduction(true);
    } else if (target === false) {
      setInduction(false);
    }
    return false;
  };
  const gasRangeS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setGasRange(true);
    } else if (target === false) {
      setGasRange(false);
    }
    return false;
  };
  const doorLockS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setDoorLock(true);
    } else if (target === false) {
      setDoorLock(false);
    }
    return false;
  };
  const CCTVS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCCTV(true);
    } else if (target === false) {
      setCCTV(false);
    }
    return false;
  };
  const petsS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setPets(true);
    } else if (target === false) {
      setPets(false);
    }
    return false;
  };
  const elevatorS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setElevator(true);
    } else if (target === false) {
      setElevator(false);
    }
    return false;
  };
  const parkingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setParking(true);
    } else if (target === false) {
      setParking(false);
    }
    return false;
  };
  const electricHeatingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setElectricHeating(true);
    } else if (target === false) {
      setElectricHeating(false);
    }
    return false;
  };
  const cityGasHeatingS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCityGasHeating(true);
    } else if (target === false) {
      setCityGasHeating(false);
    }
    return false;
  };
  const nightElectricS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setNightElectric(true);
    } else if (target === false) {
      setNightElectric(false);
    }
    return false;
  };

  const wateTaxS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setWateTax(true);
    } else if (target === false) {
      setWateTax(false);
    }
    return false;
  };
  const includingElectricityS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setIncludingElectricity(true);
    } else if (target === false) {
      setIncludingElectricity(false);
    }
    return false;
  };
  const cityGasIncludedS = e => {
    const target = e.target.checked;
    console.log(target);
    if (target === true) {
      setCityGasIncluded(true);
    } else if (target === false) {
      setCityGasIncluded(false);
    }
    return false;
  };

  //페이지네이션
  const [skip, setSkip] = useState(0);
  const [first, setFrist] = useState(0);

  //셀렉트 박스
  const [select, setSelect] = useState("");
  console.log(select, "select");
  const [selectValue1, setSelectValue1] = useState("");
  console.log(selectValue1, "selectValue1");
  useEffect(() => {
    setSelect(String(`${selectValue1} ${selectValue2}`));
  }, [selectValue1]);
  const [selectValue2, setSelectValue2] = useState("");
  console.log(selectValue2, " selectValue2");
  useEffect(() => {
    setSelect(String(`${selectValue1} ${selectValue2}`));
  }, [selectValue2]);
  //보증금과 월세에 대한 저장
  const [select2, setSelect2] = useState([]);
  console.log(select2, "select2");

  //보증금 선택사항
  const [selectValue3, setSelectValue3] = useState([0, 100000000]);
  console.log(selectValue3, "selectValue3");
  useEffect(() => {
    setSelect2(`${selectValue3} ${selectValue4}`);
  }, [selectValue3]);

  //월세선택사항
  const [selectValue4, setSelectValue4] = useState([0, 100000000]);
  console.log(selectValue4, " selectValue4");
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
  const { data: searchData, loading } = useQuery(SEARCH, {
    variables: {
      deposit: depositSS,
      deposit2: deposit2SS,
      money: moneySS,
      money2: money2SS,
      selectType: selectTypeSS,
      airConditioner: airConditionerSS,
      washer: washerSS,
      refrigerator: refrigeratorSS,
      internet: internetSS,
      microwave: microwaveSS,
      wifi: wifiSS,
      bed: bedSS,
      desk: deskSS,
      induction: inductionSS,
      gasRange: gasRangeSS,
      doorLock: doorLockSS,
      CCTV: CCTVSS,
      pets: petsSS,
      elevator: elevatorSS,
      parking: parkingSS,
      electricHeating: electricHeatingSS,
      cityGasHeating: cityGasHeatingSS,
      nightElectric: nightElectricSS,
      wateTax: wateTaxSS,
      includingElectricity: includingElectricitySS,
      cityGasIncluded: cityGasIncludedSS
      // numberOfFoors,
      //  MLSnumber
    }
  });
  console.log(searchData, "써치드 데이터");

  // 토글 팝업 에드 클래스
  const [isOpen, setIsOpen] = useState(false);
  const setActiveClass = () => (isOpen ? setIsOpen(false) : setIsOpen(true));

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
      (searchData &&
        searchData.searchRoom &&
        searchData.searchRoom.count / LINKS_PER_PAGE)
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

  const deposit = selectValue3[0];
  const deposit2 = selectValue3[1];

  const money = selectValue4[0];
  const money2 = selectValue4[1];

  console.log(deposit, deposit2, money, money2, "잘 넘어오는지 확인하기");

  const searching = e => {
    e.preventDefault();
  };

  ////////////////////
  //검색하는 데이터 쿼리

  //주소를 가져온다
  const latAndlng =
    searchData &&
    searchData.searchRoom &&
    searchData.searchRoom.map(item => item);

  console.log(searchData, "searchData");

  return (
    <SearchPresenter
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
