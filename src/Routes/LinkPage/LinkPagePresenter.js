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
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";

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
  flex-direction: row;
  width: 100%;
`;
const SelectBox = styled.select`
  height: 35px;
  width: 80px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const SliderDiv = styled.div`
  display: flex;
  margin-right: 10px;
  margin-left: 10px;
  width: 30%;
`;

export default ({
  defaultS,
  defaultMax,
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
  _nextPage
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
      {console.log(item, "link presenter")}
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
        <SelectBox namevalue={select} onChange={handleChange2}>
          <option value="월세" required>
            필수
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
        <SliderDiv>
          <Range
            min={0}
            max={defaultMax}
            defaultValue={defaultS}
            tipFormatter={value => `${value}만원`}
            marks={{ 20: 20, 40: 40, 1000: `${defaultMax}원` }}
            step={100}
          />
          <Range
            min={0}
            max={100}
            defaultValue={[20, 30]}
            tipFormatter={value => `${value}만원`}
            step={5}
          />
        </SliderDiv>
      </SearchBox>
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
