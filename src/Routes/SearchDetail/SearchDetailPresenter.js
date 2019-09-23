import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BoardPartsSlide from "../../Components/boardPartsSlide";
import ImageGallery from "react-image-gallery";
import GoogleMapReact from "google-map-react";
import "../../css/image-gallery.css";
import DetailLoader from "../../Components/PlaceHolderForLoader/DetailLoader";
import Carousel from "react-multi-carousel";
import Gallery from "react-grid-gallery";
import { Parallax, Background } from "react-parallax";
import "react-multi-carousel/lib/styles.css";
import "../../css/ReactGridGallery_tile.css";
import BoardPartsInDetail from "../../Components/BoardPartsInDetail";

import washerS from "../../optionPng/004-laundry.png";
import airConditionerS from "../../optionPng/005-air-conditioner.png";
import refrigeratorS from "../../optionPng/refrigerator.png";
import wifiS from "../../optionPng/001-wifi.png";
import internetS from "../../optionPng/002-domain.png";
import microwaveS from "../../optionPng/003-microwave-oven.png";
import bedS from "../../optionPng/007-bed.png";
import deskS from "../../optionPng/008-desk.png";
import inductionS from "../../optionPng/010-cooking.png";
import gasRangeS from "../../optionPng/011-cooking-1.png";
import doorLockS from "../../optionPng/015-door-knob.png";
import cctvS from "../../optionPng/016-cctv.png";
import upS from "../../optionPng/018-up.png";
import parkingS from "../../optionPng/019-parking.png";
import cityGasHeatingS from "../../optionPng/020-gas-station.png";
import wateTaxS from "../../optionPng/021-raindrop.png";
import includingElectricityS from "../../optionPng/023-light.png";
import nightElectricS from "../../optionPng/023-light.png";

import electricHeatingS from "../../optionPng/024-electric-charge.png";
import cityGasIncludedS from "../../optionPng/026-fuel-station.png";
import petsS from "../../optionPng/dog.png";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;

const ColumnL = styled.div`
  padding: 40px;
  width: 40%;
  margin-right: 15px;
`;

const ColumnR = styled.div`
  position: relative;
  width: 60%;
`;

const Caption = styled.div`
  color: black;
  overflow-wrap: break-word;
  font-size: 27px;
  font-weight: 500;
  margin-top: 20px;
`;

const Username = styled.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const ContentMain = styled.div`
  width: 100%;
  display: flex;

  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

const ContentMainWrap = styled.div``;

const Deposit = styled.span`
  font-size: 18px;
  display: inline-block;
  /*font-weight: 600;*/
  /*color: grey;*/
  opacity: 0.7;
  margin-right: 10px;
`;

const Content = styled.div`
  margin-top: 10px;
  margin: 30px 0px;
  width: 100%;
  height: 100%;
  font-size: 17px;
  line-height: 1.6;
`;

const Options = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
  margin-top: -10px;
  margin-bottom: 30px;
`;

const Option = styled.div`
  height: 130px;
  width: 10%;
  margin-bottom: 55px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 65px;
    margin-bottom: 13px;
  }
`;

const OptionText = styled.div`
  margin-top: 40px;
  border-top: 1px solid #d5d5d5;
`;

const DetailText = styled.div`
  margin: 50px 0px 20px 0px;
  margin-top: 50px;
  border-top: 1px solid #d5d5d5;
`;

const MapText = styled.div`
  margin: 50px 0px 20px 0px;
  margin-top: 50px;
  border-top: 1px solid #d5d5d5;
`;

const FilesA = styled.div`
  margin: 0 auto;
  width: 100%;
  height: 100%;
`;

const File = styled.img`
  background-image: url(${props => props.src});
  height: 100%;
  width: 100%;
  background-position: center;
  background-size: cover;
  background: no-repeat;
`;

const MoreRooms = styled.div`
  max-width: 1370px;
  width: 90%;
  margin: 0 auto;
  border-top: 1px solid #d5d5d5;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
  color: black;
  margin-top: 70px;
  margin-bottom: 30px;
`;

const MoreRoomsContainer = styled.div`
  display: flex;
  margin: -15px;

  justify-content: flex-start;
  flex-wrap: wrap;
`;

const ContentWrap = styled.div`
  position: relative;
  max-width: 2000px;
  margin: 0 auto;
`;

const ImgIn = styled.img`
  width: 100vw;
  min-height: 500px;
`;

const WidthContainer = styled.div`
  margin: 0 auto;
  max-width: 1370px;
  width: 90%;
`;

const LogInButtonWrap = styled.div`
  padding: 20px;
  width: 100%;
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

const Container = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const PPcontainer = styled.div`
  width: 100%;

  margin-top: 20px;
  display: flex;
  justify-content: center;
`;
const Pcontainer = styled.div`
  width: 300px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const P = styled.p`
  display: flex;
`;

const ImageGalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const DeleteButton = styled.button`
  cursor: pointer;
  margin: 10px;
  width: 70px;
  border: 0;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  background-color: #bae7e2;
  text-align: center;
  padding: 11px 0px;
  font-size: 16px;
`;

const MarkerIcon = styled.div`
  background-color: red;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

// 좋아요

const LikeContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
`;
const Like = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  z-index: 100;
  bottom: 100px;
  right: 50px;
`;

const LikeToggle = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;
const LikeToggleH1 = styled.h1`
  opacity: 0.7;
  font-size: 18px;
  padding-bottom: 4px;
`;

//구글 맵 컨테이너

const MapContainer = styled.div``;
const AnyReactComponent = ({ text }) => <MarkerIcon>{text}</MarkerIcon>;
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const RoomsDetailPresenter = ({
  getPathMainS,
  newData,
  checkLikeLoading,
  toggleJoayoLoading,
  searchData,
  beforeCheck,
  setJoayo,
  toggleButton,
  id,
  beforeLike,
  responsive,
  joayo,
  toggleLike,
  lat,
  lng,
  center,
  zoom,
  path,
  props,
  data,
  data2,
  loading,
  page,
  onClick,
  onClick2,
  token,
  dataOfMe,
  _previousPage,
  _nextPage,
  onDeletePost
}) => {
  const backImg =
    data && data.files && data.files[0] && data.files[0].url
      ? `http://localhost:4000/${data.files[0].url}`
      : "http://localhost:4000/images/preImage/no-image.jpg";

  return (
    <Wrapper>
      {loading && <DetailLoader token={token} data={data} loading={loading} />}

      {!loading && (
        <ContentWrap>
          <Parallax strength={400} bgImageStyle={{ height: "50px" }}>
            <div style={{ height: "750px" }} />
            <Background className="custom-bg">
              <ImgIn src={backImg} alt="" />
            </Background>
          </Parallax>
          <LikeContainer>
            <Like>
              <LikeToggle onClick={toggleLike}>
                {checkLikeLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="35"
                    viewBox="0 0 30 30"
                    fill="#ff3422"
                    fill-opacity="0.4"
                    stroke="white"
                    stroke-width="3"
                  >
                    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                  </svg>
                ) : toggleJoayoLoading ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="35"
                    viewBox="0 0 30 30"
                    fill="#ff3422"
                    fill-opacity="0.4"
                    stroke="white"
                    stroke-width="3"
                  >
                    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                  </svg>
                ) : joayo ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="35"
                    viewBox="0 0 30 30"
                    fill="#ED4956"
                  >
                    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="35"
                    viewBox="0 0 30 30"
                    fill="#000000"
                    fill-opacity="0.2"
                    stroke="white"
                    stroke-width="3"
                  >
                    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                  </svg>
                )}
              </LikeToggle>
            </Like>
          </LikeContainer>
          <WidthContainer>
            <Column>
              <ColumnL>
                <Username>{data && data.user && data.user.username}</Username>
                <Deposit>보증금 {data && data.deposit}</Deposit>
                <Deposit>월세 {data && data.money}</Deposit>
                <Deposit>{data && data.numberOfFoors}층</Deposit>
                <Deposit>매물번호 {data && data.MLSnumber}</Deposit>
                <Caption>{data && data.caption}</Caption>
              </ColumnL>
              <ColumnR>
                <Content>{data && data.content}</Content>
              </ColumnR>
            </Column>
            <OptionText>
              <StyledH1>공과금</StyledH1>
            </OptionText>
            <Options>
              {data && data.nightElectric === "심야전기" && (
                <Option>
                  <img src={nightElectricS} alt="nightElectric" />
                  심야전기
                </Option>
              )}
              {data && data.wateTax === "수도세" && (
                <Option>
                  <img src={wateTaxS} alt="wateTax" />
                  수도세
                </Option>
              )}
              {data && data.includingElectricity === "전기세포함" && (
                <Option>
                  <img src={includingElectricityS} alt="includingElectricity" />
                  전기세(포함)
                </Option>
              )}
              {data && data.cityGasIncluded === "도시가스포함" && (
                <Option>
                  <img src={cityGasIncludedS} alt="cityGasIncluded" />
                  도시가스(포함)
                </Option>
              )}
            </Options>
            <OptionText>
              <StyledH1>옵션</StyledH1>
            </OptionText>
            <Options>
              {data && data.electricHeating === "전기난방" && (
                <Option>
                  <img src={electricHeatingS} alt="electricHeating" />
                  전기난방
                </Option>
              )}
              {data && data.cityGasHeating === "도시가스난방" && (
                <Option>
                  <img src={cityGasHeatingS} alt="cityGasHeating" />
                  도시가스난방
                </Option>
              )}
              {data && data.airConditioner === "에어컨" && (
                <Option>
                  <img src={airConditionerS} alt="airConditioner" />
                  에어컨
                </Option>
              )}
              {data && data.washer === "세탁기" && (
                <Option>
                  <img src={washerS} alt="washer" />
                  세탁기
                </Option>
              )}
              {data && data.refrigerator === "냉장고" && (
                <Option>
                  <img src={refrigeratorS} alt="refrigerator" />
                  냉장고
                </Option>
              )}
              {data && data.internet === "인터넷" && (
                <Option>
                  <img src={internetS} alt="internet" />
                  인터넷
                </Option>
              )}
              {data && data.microwave === "전자렌지" && (
                <Option>
                  <img src={microwaveS} alt="microwave" />
                  전자레인지
                </Option>
              )}
              {data && data.wifi === "wifi" && (
                <Option>
                  <img src={wifiS} alt="wifi" />
                  WIFI
                </Option>
              )}
              {data && data.bed === "침대" && (
                <Option>
                  <img src={bedS} alt="bed" />
                  침대
                </Option>
              )}
              {data && data.desk === "책상" && (
                <Option>
                  <img src={deskS} alt="desk" />
                  책상
                </Option>
              )}
              {data && data.induction === "인덕션" && (
                <Option>
                  <img src={inductionS} alt="induction" />
                  인덕션
                </Option>
              )}
              {data && data.gasRange === "가스레인지" && (
                <Option>
                  <img src={gasRangeS} alt="gasRange" />
                  가스렌지
                </Option>
              )}
              {data && data.doorLock === "도어락" && (
                <Option>
                  <img src={doorLockS} alt="doorLock" />
                  도어락
                </Option>
              )}
              {data && data.CCTV === "CCTV" && (
                <Option>
                  <img src={cctvS} alt="CCTV" />
                  CCTV
                </Option>
              )}
              {data && data.pets === "애완동물" && (
                <Option>
                  <img src={petsS} alt="pets" />
                  애완동물
                </Option>
              )}
              {data && data.elevator === "엘리베이터" && (
                <Option>
                  <img src={upS} alt="elevator" />
                  엘리베이터
                </Option>
              )}
              {data && data.parking === "주차" && (
                <Option>
                  <img src={parkingS} alt="parking" />
                  주차
                </Option>
              )}
            </Options>

            {data && data.files && data.files[0] && data.files[0] && (
              <>
                <DetailText>
                  <StyledH1>디테일</StyledH1>
                </DetailText>

                <ImageGalleryContainer>
                  <FilesA>
                    <Gallery
                      images={path}
                      enableImageSelection={false}
                      id="test"
                      rowHeight={300}
                    />
                  </FilesA>
                </ImageGalleryContainer>
              </>
            )}
            <MapText>
              <StyledH1>위치</StyledH1>
            </MapText>
            <MapContainer>
              <div style={{ height: "35vh", width: "100%" }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: "AIzaSyDQc0xMBQnrOOoj8UkPkN6yeGqkAo_l2hM"
                  }}
                  defaultCenter={{ lat, lng }}
                  defaultZoom={zoom}
                  options={{ maxZoom: 17 }}
                  yesIWantToUseGoogleMapApiInternals={true}
                >
                  <AnyReactComponent lat={lat} lng={lng} text="" />
                </GoogleMapReact>
              </div>
            </MapContainer>
          </WidthContainer>
        </ContentWrap>
      )}
      {!loading && token && data ? (
        <LogInButtonWrap>
          <Link
            key={data.id}
            to={{
              pathname: `/new/edit/${data && data.id}`,
              state: {
                fromNotifications: true,
                data: "tett"
              }
            }}
          >
            <DeleteButton> 수정하기 </DeleteButton>
          </Link>
          <DeleteButton onClick={onDeletePost}>삭제</DeleteButton>
        </LogInButtonWrap>
      ) : (
        false
      )}
      {searchData ? (
        <MoreRooms>
          <StyledH1>비슷한 매물</StyledH1>
          <MoreRoomsContainer>
            {searchData
              ? searchData &&
                searchData.post &&
                searchData.post.slice(0, 9) &&
                searchData.post.slice(0, 9).map((item, key) => {
                  if (item.id === id) {
                    return false;
                  }
                  let arrayOfPath = [];
                  let test = [];
                  let path = [];
                  if (
                    searchData.post &&
                    searchData.post[key] &&
                    searchData.post[key].files.length === 0
                  ) {
                    /// 임시로 메인에 보일 이미지 주소
                    arrayOfPath.push(
                      `http://127.0.0.1:4000/images/preImage/no-image.jpg`
                    );
                    arrayOfPath.map((item, key) => {
                      return test.push(item);
                    });
                    const s = test.reduce((s, a) => {
                      {
                        for (var i = 0; i < test.length; i++);
                        let get;
                        get = {
                          original: `${a}`,
                          thumbnail: `${a}`
                        };
                        return path.push(get);
                      }
                    }, {});
                  } else {
                    /////// 이미지 있을때

                    searchData.post &&
                      searchData.post[key] &&
                      searchData.post[key].files.map(item => {
                        return arrayOfPath.push(item.url);
                      });
                    arrayOfPath.map((item, key) => {
                      return test.push(item);
                    });

                    const s = test.reduce((s, a) => {
                      {
                        for (var i = 0; i < test.length; i++);
                        let get;
                        get = {
                          original: `http://127.0.0.1:4000/${a}`,
                          thumbnail: `http://127.0.0.1:4000/${a}`
                        };
                        return path.push(get);
                      }
                    }, {});
                  }

                  return (
                    <BoardPartsInDetail
                      beforeCheck={beforeCheck}
                      toggleButton={toggleButton}
                      joayo={joayo}
                      props={props}
                      token={token}
                      toggleLike={toggleLike}
                      dataOfMe={dataOfMe}
                      loading={loading}
                      data2={data2}
                      onclick={onclick}
                      path={path}
                      id={item.id}
                      page={page}
                      data={item}
                      database={data}
                      key={key}
                      selectType={item.selectType}
                      caption={item.caption}
                      username={item.user.username}
                      createdAt={item.createdAt.slice(0, 10)}
                      count={item.count}
                      url={item.files}
                      deposit={item.deposit}
                      money={item.money}
                    />
                  );
                })
              : false}
          </MoreRoomsContainer>
        </MoreRooms>
      ) : newData ? (
        <MoreRooms>
          <h1>매물이 더 있습니다!</h1>
          <hr />

          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={false}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props && props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {newData
              ? newData &&
                newData.map((item, key) => {
                  let arrayOfPath = [];
                  let test = [];
                  let path = [];
                  if (
                    newData &&
                    newData[key] &&
                    newData[key].files.length === 0
                  ) {
                    /// 임시로 메인에 보일 이미지 주소
                    arrayOfPath.push(
                      `http://127.0.0.1:4000/images/preImage/no-image.jpg`
                    );
                    arrayOfPath.map((item, key) => {
                      if (item.id === id) {
                        return false;
                      }
                      return test.push(item);
                    });
                    const s = test.reduce((s, a) => {
                      {
                        for (var i = 0; i < test.length; i++);
                        let get;
                        get = {
                          original: `${a}`,
                          thumbnail: `${a}`
                        };
                        return path.push(get);
                      }
                    }, {});
                  } else {
                    /////// 이미지 있을때

                    newData &&
                      newData[key] &&
                      newData[key].files.map(item => {
                        return arrayOfPath.push(item.url);
                      });
                    arrayOfPath.map((item, key) => {
                      return test.push(item);
                    });

                    const s = test.reduce((s, a) => {
                      {
                        for (var i = 0; i < test.length; i++);
                        let get;
                        get = {
                          original: `http://127.0.0.1:4000/${a}`,
                          thumbnail: `http://127.0.0.1:4000/${a}`
                        };
                        return path.push(get);
                      }
                    }, {});
                  }

                  return (
                    <BoardPartsInDetail
                      beforeCheck={beforeCheck}
                      toggleButton={toggleButton}
                      joayo={joayo}
                      props={props}
                      token={token}
                      toggleLike={toggleLike}
                      dataOfMe={dataOfMe}
                      loading={loading}
                      data2={data2}
                      path={path}
                      id={item.id}
                      page={page}
                      data={item}
                      database={data}
                      key={key}
                      selectType={item.selectType}
                      caption={item.caption}
                      username={item.user.username}
                      createdAt={item.createdAt.slice(0, 10)}
                      count={item.count}
                      url={item.files}
                      deposit={item.deposit}
                      money={item.money}
                    />
                  );
                })
              : false}
          </Carousel>
        </MoreRooms>
      ) : (
        console.log("what the hell")
      )}
    </Wrapper>
  );
};

export default RoomsDetailPresenter;
