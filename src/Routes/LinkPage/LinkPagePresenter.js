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
  margin-top: 20px;
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

const ButtonSearch = styled.button`
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

const InTheDetailOption = styled.img`
  width: 80px;
  height: 80px;
`;
export default ({
  isOpen,
  setActiveClass,
  handleChange,
  handleChange2,
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
  cityGasIncludedS
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

  return (
    <Wrapper>
      {loading && <Loader />}
      {!loading && (
        <GoogleMapsMain
          latAndlng={latAndlng}
          props={props}
          center={center}
          zoom={zoom}
          setCenter={setCenter}
        />
      )}
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
      <SearchBox>
        <SelectBox namevalue={select} onChange={handleChange}>
          <option value="원룸" required>
            필수
          </option>
          <option value="원룸" required>
            원룸
          </option>
          <option value="투룸" required>
            투룸
          </option>
          <option value="쓰리룸" required>
            쓰리룸
          </option>
          <option value="포룸" required>
            포룸
          </option>
          <option value="주인세대" required>
            주인세대
          </option>
          <option value="아파트" required>
            아파트
          </option>
          <option value="빌라" required>
            빌라
          </option>
          <option value="상가" required>
            상가
          </option>
        </SelectBox>
        {select === "주인세대 default2" ? (
          false
        ) : (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="월세" required>
              필수(종류)
            </option>
            <option value="월세" required>
              월세
            </option>
            <option value="전세" required>
              전세
            </option>
            <option value="매매" required>
              매매
            </option>
          </SelectBox>
        )}
        {selectValue1 === "default" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="보증금" required>
              보증금(필수항목 선택하세요)
            </option>
          </SelectBox>
        )}
        {selectValue1 === "default" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="월세" required>
              월세(필수항목 선택하세요)
            </option>
          </SelectBox>
        )}
        {select === "원룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="보증금" required>
              보증금(필수항목 선택하세요)
            </option>
            <option value="보증금" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "원룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="월세" required>
              월세(필수항목 선택하세요)
            </option>
            <option value="월세" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "투룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="보증금" required>
              보증금(필수항목 선택하세요)
            </option>
            <option value="보증금" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "투룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="월세" required>
              월세(필수항목 선택하세요)
            </option>
            <option value="월세" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "쓰리룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="보증금" required>
              보증금(필수항목 선택하세요)
            </option>
            <option value="보증금" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "쓰리룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="월세" required>
              월세(필수항목 선택하세요)
            </option>
            <option value="월세" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "포룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="보증금" required>
              보증금(필수항목 선택하세요)
            </option>
            <option value="보증금" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "포룸 default2" && (
          <SelectBox namevalue={select} onChange={handleChange2}>
            <option value="월세" required>
              월세(필수항목 선택하세요)
            </option>
            <option value="월세" required>
              필수항목 선택하세요
            </option>
          </SelectBox>
        )}
        {select === "원룸 월세" && (
          <SelectBox namevalue={select} onChange={"handleChange2"}>
            <option value="보증금" required>
              보증금(월세)
            </option>
            <option value="상관없음" required>
              모두보기
            </option>
            <option value="100" required>
              100만원 이하
            </option>
            <option value="300" required>
              100 ~ 300
            </option>
            <option value="500" required>
              300~500
            </option>
            <option value="1000" required>
              500~1000
            </option>
            <option value="2000" required>
              1000~2000
            </option>
            <option value="5000" required>
              2000~5000
            </option>
            <option value="5000이상" required>
              5000이상
            </option>
          </SelectBox>
        )}
        {select === "원룸 월세" && (
          <SelectBox namevalue={select} onChange={"handleChange2"}>
            <option value="월세" required>
              월새
            </option>
            <option value="20" required>
              20이하
            </option>
            <option value="25" required>
              20~25
            </option>
            <option value="30" required>
              26~30
            </option>
            <option value="35" required>
              31~35
            </option>
            <option value="40" required>
              36~40
            </option>
            <option value="50" required>
              41~50
            </option>
            <option value="50이상" required>
              50만원 이상
            </option>
          </SelectBox>
        )}
        {select === "원룸 전세" && (
          <SelectBox namevalue={select} onChange={"handleChange2"}>
            <option value="보증금" required>
              전세금
            </option>
            <option value="3000만원 이하" required>
              3000만원 이하
            </option>
            <option value="3000~5000" required>
              3000~5000
            </option>
            <option value="매매" required>
              5000만원 이상
            </option>
          </SelectBox>
        )}
        <ButtonSearch>검색</ButtonSearch>
        <ButtonSearchB onClick={setActiveClass}>세부옵션</ButtonSearchB>
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
      {!loading && (
        <NewLinkPage
          props={props}
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
