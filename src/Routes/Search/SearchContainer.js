import React, { useState, useEffect } from "react";
import SearchPresenter from "./SearchPresenter";
import { withRouter } from "react-router-dom";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { ME } from "../../SharedQueries";
import { Link } from "react-router-dom/cjs/react-router-dom";

const GETPOST = gql`
  query detailPost($id: String!) {
    detailPost(id: $id) {
      id
      places {
        lat
        lng
      }
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
      likes {
        id
        post {
          id
        }
      }
    }
  }
`;

const SEARCH = gql`
  mutation searchRoom(
    $id: String
    $first: Int
    $skip: Int
    $lat: Float
    $lng: Float
    $lat2: Float
    $lng2: Float
    $deposit: Int
    $deposit2: Int
    $money: Int
    $money2: Int
    $caption: String
    $content: String
    $files: [String]
    $selectType: String
    $airConditioner: String
    $washer: String
    $refrigerator: String
    $internet: String
    $microwave: String
    $wifi: String
    $bed: String
    $desk: String
    $induction: String
    $gasRange: String
    $doorLock: String
    $CCTV: String
    $pets: String
    $elevator: String
    $parking: String
    $electricHeating: String
    $cityGasHeating: String
    $nightElectric: String
    $wateTax: String
    $includingElectricity: String
    $cityGasIncluded: String
    $numberOfFoors: String
    $MLSnumber: String
  ) {
    searchRoom(
      id: $id
      first: $first
      skip: $skip
      lat: $lat
      lng: $lng
      lat2: $lat2
      lng2: $lng2
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
      preData {
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
        likes {
          post {
            id
            caption
          }
          user {
            id
            username
          }
        }
      }
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
        likes {
          post {
            id
            caption
          }
          user {
            id
            username
          }
        }
      }
      counts
    }
  }
`;

const LINKS_PER_PAGE = 8;

export default props => {
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
  let first = LINKS_PER_PAGE;
  console.log(first, "inthe first");
  useEffect(() => {}, [skip]);

  //셀렉트 박스
  const [select, setSelect] = useState("");
  const [selectValue1, setSelectValue1] = useState(
    localStorage.getItem("종류")
  );
  useEffect(() => {
    setSelect(String(`${selectValue1} ${selectValue2}`));
  }, [selectValue1]);
  const [selectValue2, setSelectValue2] = useState(
    localStorage.getItem("종류2")
  );
  useEffect(() => {
    setSelect(String(`${selectValue1} ${selectValue2}`));
  }, [selectValue2]);

  //보증금과 월세에 대한 저장
  const [select2, setSelect2] = useState([]);

  //보증금 선택사항
  const [selectValue3, setSelectValue3] = useState(
    Number(localStorage.getItem("보증금"))
  );
  useEffect(() => {
    setSelect2(`${selectValue3} ${selectValue4}`);
  }, [selectValue3]);

  //월세선택사항
  const [selectValue4, setSelectValue4] = useState(
    Number(localStorage.getItem("월세"))
  );
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
  const deposit = selectValue3 && selectValue3[0];
  const deposit2 = selectValue3 && selectValue3[1];

  const money = selectValue4 && selectValue4[0];
  const money2 = selectValue4 && selectValue4[1];

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

  //이지역 검색할래요
  const setFixCenter = e => {
    e.preventDefault();
    lat = center.lat;
    lng = center.lng;
    const centers = { lat, lng };
    localStorage.setItem("map", JSON.stringify(centers));
  };

  //구글지도 줌 레벨
  const [zoom, setZoom] = useState(parseInt(localStorage.getItem("zoom")));

  const page = parseInt(
    props && props.match && props.match.params && props.match.params.page
  );

  const { data: dataOfMe } = useQuery(ME);

  const _getQueryVariables = () => {
    //페이지네이션
    first = LINKS_PER_PAGE;
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

  ////
  //온 바운드 체인지
  const [bound, setTheBounds] = useState(1);
  const latS = bound && bound[0];
  const lat2S = bound && bound[4];
  const lngS = bound && bound[1];
  const lng2S = bound && bound[3];

  //검색하는 데이터 쿼

  /////
  const id =
    props.location.pathname.split("/")[3].length > 4
      ? props.location.pathname.split("/")[3]
      : props.location.pathname.split("/")[3];

  const [searchData, { loading }] = useMutation(SEARCH, {
    variables: {
      id,
      first,
      skip,
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

  const [newData, setNewData] = useState();

  const onBoundsChange = (center, zoom, bounds, marginBounds) => {
    const centerLat = center.lat;
    const centerLng = center.lng;

    setTheBounds(bounds);

    localStorage.setItem(
      "map",
      JSON.stringify({
        lat: parseFloat(centerLat),
        lng: parseFloat(centerLng)
      })
    );
  };
  //찾기 버튼 눌렀을때!

  const findRoom = async () => {
    setActivePage(1);
    first = LINKS_PER_PAGE;
    setSkip(0);
    const {
      data: { searchRoom }
    } = await searchData({ variables: { first, skip } });
    await setNewData(searchRoom);
    console.log(searchRoom, "in the searchContainer");
    props.history.push(`/new/search/1`);
  };

  //
  const [theChange, setTheChange] = useState(setTimeout(() => {}, 60));
  const detail =
    props.location.pathname.split("/")[2] === "detail" ? true : false;

  //맨처음 접속 했을때 디폴트 데이터
  useEffect(() => {
    if (detail) {
      console.log("");
    } else {
      findRoom();
      setTheChange(true);
    }
  }, [theChange]);

  //
  const [activePage, setActivePage] = useState(1);
  const [pageNumber2, setPageNumber2] = useState(1);
  console.log(pageNumber2, "pagenumber2?");

  //new 페이지네이션

  const edit = props.location.pathname.split("/")[2] === "edit" ? true : false;
  const matchDetail = props.location.pathname.split("/")[3];

  const handlePageChange = async pageNumber => {
    //페이지네이션
    const skip = (pageNumber - 1) * LINKS_PER_PAGE;
    first = LINKS_PER_PAGE;

    setSkip(skip);
    setPageNumber2(pageNumber);
    setActivePage(pageNumber);

    console.log(skip, first, pageNumber, "skip first");

    props.history.push(`/new/search/${pageNumber}`);
  };

  useEffect(() => {
    if (detail) {
      console.log("detail");
    } else {
      (async function() {
        const {
          data: { searchRoom }
        } = await searchData({ variables: { first, skip } });
        await setNewData(searchRoom);
        props.history.push(`/new/search/${pageNumber2}`);
      })();
    }
  }, [activePage]);

  //
  const itemsCountPerPage = () => {};
  const totalCount = newData && newData.counts ? newData && newData.counts : 10;
  //주소를 가져온다
  const latAndlng = newData && newData.post.map(item => item);

  //디테일페이지에 관한 모든것

  //다이렉트로 주소로 접근할때 디테일에 대한 로직
  useEffect(() => {
    if (props.location.pathname.split("/")[3].length > 4) {
      (async function() {
        const {
          data: { searchRoom: fuckData }
        } = await searchData();
        console.log(fuckData, "fuckData");
        setNewData(fuckData);
      })();
    } else {
      console.log("no id");
    }
    setSelectValue1(localStorage.getItem("종류"));
    setSelectValue2(localStorage.getItem("종류2"));
    setSelectValue3(JSON.parse(localStorage.getItem("보증금")));
    setSelectValue4(JSON.parse(localStorage.getItem("월세")));
  }, []);

  return (
    <SearchPresenter
      newData={newData}
      findRoom={findRoom}
      edit={edit}
      matchDetail={matchDetail}
      detail={detail}
      itemsCountPerPage={itemsCountPerPage}
      totalCount={totalCount}
      activePage={activePage}
      handlePageChange={handlePageChange}
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
      deposit={deposit}
      deposit2={deposit2}
      money={money}
      money2={money2}
    />
  );
};
