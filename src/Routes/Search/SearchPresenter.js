import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "../../Components/Loader";
import NewLinkPage from "../../Components/NewLinkPage";
import GoogleMapReact from "google-map-react";
import Popup from "reactjs-popup";
import MapPartsImageGall from "../../Components/MapPartsImageGall";
import "../../css/image-gallery.css";
import Floater from "react-floater";
import Marker from "../../Components/Marker";
import GoogleMaps from "../../Components/GoogleMaps";
import GoogleMapsMain from "../../Components/GoogleMapsMain";
import Toggle from "react-toggle";
import "react-toggle/style.css";
import Select from "react-select";
import CreatableSelect from "react-select/creatable";

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
`;
const WrapperS = styled.div`
  margin: 0 auto;
  max-width: 500px;
  line-height: 1.5;
`;
const LogInButtonWrap = styled.div`
  padding: 20px;
  display: flex;
  justify-content: flex-end;
`;

const LogInButton = styled.button`
  cursor: pointer;
  margin: 10px;
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: #bae7e2;
  text-align: center;
  padding: 9px 0px;
  font-size: 14px;
`;

const Mapdiv = styled.div`
  border: 1px solid #e0e0e0;
`;

const MarkerContainer = styled.div`
  border-radius: 50%;
`;

const MarkerIcon = styled.div`
  cursor: pointer;
`;

const Deposit = styled.span`
  display: inline-block;
  margin-right: 4px;
  margin-top: 7px;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const Dash = styled.span`
  color: #000;
  display: inline-block;
  margin-right: 8px;
`;

const Money = styled.span`
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const SelectType = styled.div`
  margin: 0px 7px;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: rgb(169, 193, 232);
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 100%;
`;
const SelectBox = styled.select`
  border: 1px solid #ffbfbf;
  margin-right: 10px;
  height: 35px;
  width: 150px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const SliderDiv = styled.div`
  margin-left: 10px;
  width: 30%;
`;

const ButtonSearch = styled.div`
  cursor: pointer;
  margin: 10px;
  width: 72px;
  border: 0;
  border-radius: 5px;
  color: white;
  height: 36px;
  font-weight: 600;
  background-color: #bae7e2;
  text-align: center;
  padding: 11px 6px;
  font-size: 14px;
  border-radius: 4px;
  border-radius: ${props => props.theme.borderRadius};
`;
const ButtonSearchB = styled.button`
  cursor: pointer;
  margin: 10px;
  width: 10%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: #bae7e2;
  text-align: center;
  padding: 9px 0px;
  font-size: 14px;
`;

const ButtonSearchInside = styled.button`
  cursor: pointer;
  margin: 10px;
  width: 10%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: #bae7e2;
  text-align: center;
  padding: 9px 0px;
  font-size: 14px;
`;

const ToggleDetail = styled.div`
  height: 100%;
  width: 100%;
`;

const OptionCheckBox = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  label {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
`;

const DivSeparator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const InTheDetailOption = styled.img`
  width: 80px;
  height: 80px;
`;
export default ({
  onBoundsChange,
  isOpen,
  setActiveClass,
  handleChange,
  handleChange2,
  setSelectValue1,
  setSelectValue2,
  selectValue1,
  selectValue2,
  select,
  setSelect,
  setCenter,
  latAndlng,
  places,
  zoom,
  center,
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
  _nextPage,
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
  cityGasIncluded,
  airConditionerS,
  washerS,
  refrigeratorS,
  internetS,
  microwaveS,
  wifiS,
  bedS,
  deskS,
  inductionS,
  gasRangeS,
  doorLockS,
  CCTVS,
  petsS,
  elevatorS,
  parkingS,
  electricHeatingS,
  cityGasHeatingS,
  nightElectricS,
  wateTaxS,
  includingElectricityS,
  cityGasIncludedS,
  setInputValue,
  setSelectValue3,
  setSelectValue4,
  searching,
  deposit,
  deposit2,
  money,
  money2,
  searchData,
  setFixCenter
}) => {
  /// 마커 아이콘에 대한 로직
  const passing = props;
  const AnyReactComponent = ({ item }) => (
    <MarkerContainer>
      <Floater
        callback={(action, props) => (action === "open" ? true : false)}
        title={
          <>
            <SelectType>{item.selectType}</SelectType>
            <Deposit>보증금 {item.deposit}</Deposit>
            <Dash>/</Dash>
            <Money> 월세 {item.money}</Money>
          </>
        }
        placement={"top"}
        disableAnimation={true}
        showCloseButton={true}
        offset={15}
        wrapperOptions={{}}
        styles={{
          tooltip: {
            filter: "none"
          },
          container: {
            backgroundColor: "#f7f7f7",
            borderRadius: 5,
            color: "#fff",
            filter: "none",
            minHeight: "230px",
            height: "100%",
            width: "100%",
            padding: "7px",
            textAlign: "left",
            overflow: "scroll"
          }
        }}
        hideArrow={true}
        content={<MapPartsImageGall item={item} props={passing} />}
      >
        <WrapperS>
          <MarkerIcon>
            <Marker type={item.selectType} value={item.money} />
          </MarkerIcon>
        </WrapperS>
      </Floater>
    </MarkerContainer>
  );

  //인풋박스 로직 시작

  //매물 종류에 대한 저장
  const getValue1 = a => setSelectValue1(a.value);
  const getValue2 = a => setSelectValue2(a.value);

  /////// 보증금과 월세 입력 저장소
  const getValue3 = a => setSelectValue3(a.value);
  const getValue4 = a => setSelectValue4(a.value);

  //인풋박스 커스텀 스타일
  const customStyles = {
    indicatorSeparator: base => ({
      ...base,
      display: "none"
    }),
    dropdownIndicator: base => {
      return { ...base, display: "none" };
    },
    container: (base, state) => ({
      ...base,
      opacity: state.isDisabled ? ".5" : "1",
      backgroundColor: "transparent",
      zIndex: "999",
      marginLeft: "10px;"
    }),
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted pink",
      zIndex: 5
    }),
    control: () => ({
      borderRadius: "5px",
      border: "1px solid pink",
      zIndex: 5,
      height: "35px;",
      // none of react-select's styles are passed to <Control />
      width: "160px;"
    }),
    singleValue: (provided, state) => {
      const top = "60%";
      const opacity = state.theme ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition, top };
    }
  };

  const menuOption = [
    {
      value: "매물종류",
      label: (
        <DivSeparator>
          <div>종류(필수)</div>
          <div> ▼</div>
        </DivSeparator>
      )
    },
    {
      value: "원룸",
      label: "원룸"
    },
    {
      value: "투룸",
      label: "투룸"
    },
    {
      value: "쓰리룸",
      label: "쓰리룸"
    },
    {
      value: "포룸",
      label: "포룸"
    },
    {
      value: "주인세대",
      label: "주인세대"
    },
    {
      value: "아파트",
      label: "아파트"
    },
    {
      value: "빌라",
      label: "빌라"
    }
  ];

  const menuOption2 = [
    {
      value: "매물종류",
      label: (
        <DivSeparator>
          <div>선택(필수)</div>
          <div> ▼</div>
        </DivSeparator>
      )
    },
    {
      value: "월세",
      label: "월세"
    },
    {
      value: "전세",
      label: "전세"
    },
    {
      value: "매매",
      label: "매매"
    }
  ];
  const menuOption3 = [
    {
      value: "매물종류",
      label: (
        <DivSeparator>
          <div>보증금 입력</div>
        </DivSeparator>
      )
    }
  ];
  const menuOption4 = [
    {
      value: "매물종류",
      label: (
        <DivSeparator>
          <div>월세 입력</div>
        </DivSeparator>
      )
    }
  ];

  //원룸 보증금
  const monthDeposit = [
    {
      value: "보증금",
      label: "보증금(월세)"
    },
    {
      value: [0, 100],
      label: "100만원 이하"
    },
    {
      value: [100, 300],
      label: "100 - 300"
    },
    {
      value: [300, 500],
      label: "300 - 500"
    },
    {
      value: [500, 1000],
      label: "500 - 1000"
    },
    {
      value: [500, 1000],
      label: "500 - 1000"
    },
    {
      value: [1000, 2000],
      label: "1000 - 2000"
    },
    {
      value: [2000, 5000],
      label: "2000 - 5000"
    },
    {
      value: "매물종류",
      label: (
        <DivSeparator>
          <div onClick={setActiveClass}>보증금 직접입력</div>
        </DivSeparator>
      )
    }
  ];
  //원룸 월세
  const monthMoney = [
    {
      value: "월세",
      label: "월세(월세)"
    },
    {
      value: [0, 20],
      label: "20만원 이하"
    },
    {
      value: [21, 25],
      label: "21 - 25"
    },
    {
      value: [26, 30],
      label: "26 - 30"
    },
    {
      value: [31, 35],
      label: "31 - 35"
    },
    {
      value: [36, 40],
      label: "36 - 40"
    },
    {
      value: [41, 45],
      label: "41 - 45"
    },
    {
      value: [46, 50],
      label: "46 - 50"
    },
    {
      value: [51, 55],
      label: "51 - 55"
    },
    {
      value: [56, 60],
      label: "56 - 60"
    },
    {
      value: "직접입력",
      label: (
        <DivSeparator>
          <div onClick={setActiveClass}>월세 직접입력</div>
        </DivSeparator>
      )
    }
  ];

  //원룸 전세
  const leaseMoney = [
    {
      value: "전세",
      label: "전세금"
    },
    {
      value: "매물종류",
      label: (
        <DivSeparator>
          <div onClick={setActiveClass}>전세금 직접입력</div>
        </DivSeparator>
      )
    }
  ];

  return (
    ////////////////////////////////////////////////////////////////////
    <Wrapper>
      <GoogleMapsMain
        onBoundsChange={onBoundsChange}
        latAndlng={latAndlng}
        props={props}
        center={center}
        zoom={zoom}
        setCenter={setCenter}
      />

      <SearchBox>
        <CreatableSelect
          arrowRenderer={false}
          defaultValue={menuOption[0]}
          styles={customStyles}
          options={menuOption}
          onChange={getValue1}
        />
        <CreatableSelect
          arrowRenderer={false}
          defaultValue={menuOption2[0]}
          styles={customStyles}
          options={menuOption2}
          onChange={getValue2}
        />
        {selectValue1 === "" && (
          <CreatableSelect
            defaultValue={menuOption3[0]}
            styles={customStyles}
            options={menuOption3}
            onChange={getValue1}
          />
        )}
        {selectValue1 === "" && (
          <CreatableSelect
            defaultValue={menuOption4[0]}
            styles={customStyles}
            options={menuOption4}
            onChange={getValue1}
          />
        )}
        {select === "원룸 " && (
          <CreatableSelect
            defaultValue={monthDeposit[0]}
            styles={customStyles}
            options={monthDeposit}
          />
        )}
        {select === "원룸 " && (
          <CreatableSelect
            defaultValue={monthMoney[0]}
            styles={customStyles}
            options={monthMoney}
          />
        )}
        {select === "원룸 월세" && (
          <CreatableSelect
            defaultValue={monthDeposit[0]}
            styles={customStyles}
            options={monthDeposit}
            onChange={getValue3}
          />
        )}
        {select === "원룸 월세" && (
          <CreatableSelect
            defaultValue={monthMoney[0]}
            styles={customStyles}
            options={monthMoney}
            onChange={getValue4}
          />
        )}
        {select === "원룸 전세" && (
          <CreatableSelect
            defaultValue={leaseMoney[0]}
            styles={customStyles}
            options={leaseMoney}
            onChange={getValue3}
          />
        )}

        <ButtonSearchB onClick={setActiveClass}>세부옵션</ButtonSearchB>
        <Link
          to={{
            pathname: "/new/search",
            state: {
              depositSS: deposit,
              deposit2SS: deposit2,
              moneySS: money,
              money2SS: money2,
              selectTypeSS: select,
              airConditionerSS: airConditioner,
              washerSS: washer,
              refrigeratorSS: refrigerator,
              internetSS: internet,
              microwaveSS: microwave,
              wifiSS: wifi,
              bedSS: bed,
              deskSS: desk,
              inductionSS: induction,
              gasRangeSS: gasRange,
              doorLockSS: doorLock,
              CCTVSS: CCTV,
              petsSS: pets,
              elevatorSS: elevator,
              parkingSS: parking,
              electricHeatingSS: electricHeating,
              cityGasHeatingSS: cityGasHeating,
              nightElectricSS: nightElectric,
              wateTaxSS: wateTax,
              includingElectricitySS: includingElectricity,
              cityGasIncludedSS: cityGasIncluded
            }
          }}
        >
          <ButtonSearch>검색</ButtonSearch>
        </Link>
      </SearchBox>
      {isOpen ? (
        <ToggleDetail>
          <OptionCheckBox>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                에어컨
                <input
                  type="checkbox"
                  name="airConditioner"
                  checked={airConditioner}
                  onChange={airConditionerS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                세탁기
                <input
                  type="checkbox"
                  name="washer"
                  checked={washer}
                  onChange={washerS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                냉장고
                <input
                  type="checkbox"
                  name="refrigerator"
                  checked={refrigerator}
                  onChange={refrigeratorS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                인터넷
                <input
                  type="checkbox"
                  name="internet"
                  checked={internet}
                  onChange={internetS}
                />
              </div>
            </label>

            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                전자레인지
                <input
                  type="checkbox"
                  name="microwave"
                  checked={microwave}
                  onChange={microwaveS}
                />
              </div>
            </label>
            <label>
              {" "}
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                wifi
                <input
                  type="checkbox"
                  name="wifi"
                  checked={wifi}
                  onChange={wifiS}
                />
              </div>
            </label>

            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                침대
                <input
                  type="checkbox"
                  name="bed"
                  checked={bed}
                  onChange={bedS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                책상
                <input
                  type="checkbox"
                  name="desk"
                  checked={desk}
                  onChange={deskS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                인덕션
                <input
                  type="checkbox"
                  name="induction"
                  checked={induction}
                  onChange={inductionS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                가스레인지
                <input
                  type="checkbox"
                  name="gasRange"
                  checked={gasRange}
                  onChange={gasRangeS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                도어락
                <input
                  type="checkbox"
                  name="doorLock"
                  checked={doorLock}
                  onChange={doorLockS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                CCTV
                <input
                  type="checkbox"
                  name="CCTV"
                  checked={CCTV}
                  onChange={CCTVS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                애완동물
                <input
                  type="checkbox"
                  name="pets"
                  checked={pets}
                  onChange={petsS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                엘리베이터
                <input
                  type="checkbox"
                  name="elevator"
                  checked={elevator}
                  onChange={elevatorS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                주차
                <input
                  type="checkbox"
                  name="parking"
                  checked={parking}
                  onChange={parkingS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                전기난방
                <input
                  type="checkbox"
                  name="electricHeating"
                  checked={electricHeating}
                  onChange={electricHeatingS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                도시가스
                <input
                  type="checkbox"
                  name="cityGasHeating"
                  checked={cityGasHeating}
                  onChange={cityGasHeatingS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                심야전기
                <input
                  type="checkbox"
                  name="nightElectric"
                  checked={nightElectric}
                  onChange={nightElectricS}
                />
              </div>
            </label>

            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                전기세포함
                <input
                  type="checkbox"
                  name="includingElectricity"
                  checked={includingElectricity}
                  onChange={includingElectricityS}
                />
              </div>
            </label>
            <label>
              <InTheDetailOption
                src="https://as1.ftcdn.net/jpg/02/07/68/36/500_F_207683675_QoJOoCagnbzdGTmw3b4qY7hiXDewQeug.jpg"
                alt="air"
              />
              <div>
                도시가스포함
                <input
                  type="checkbox"
                  name="cityGasIncluded"
                  checked={cityGasIncluded}
                  onChange={cityGasIncludedS}
                />
              </div>
            </label>
          </OptionCheckBox>
          <ButtonSearchInside onClick={setActiveClass}>찾기</ButtonSearchInside>
        </ToggleDetail>
      ) : (
        false
      )}
      {loading && <Loader />}
      {!loading && token ? (
        <LogInButtonWrap>
          <Link
            key={data.searchRoom ? data.searchRoom.id : data.currentData.id}
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
      {!loading && data.currentData ? (
        <NewLinkPage
          props={props}
          data={data}
          loading={loading}
          page={page}
          _previousPage={_previousPage}
          _nextPage={_nextPage}
        />
      ) : (
        <NewLinkPage
          props={props}
          searchData={searchData}
          loading={loading}
          page={page}
          _previousPage={_previousPage}
          _nextPage={_nextPage}
        />
      )}
    </Wrapper>
  );
};
