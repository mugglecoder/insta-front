import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BoardPartsSlide from "../../Components/boardPartsSlide";
import ImageGallery from "react-image-gallery";
import GoogleMapReact from "google-map-react";
import "../../css/image-gallery.css";
import DetailLoader from "../../Components/PlaceHolderForLoader/DetailLoader";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1300px;
  width: 100%;
`;

const Column = styled.div`
  height: 600px;
  display: flex;
  flex-direction: row;
`;

const ColumnL = styled.div`
  opacity: 0.7;
  padding: 40px;
  height: 580px;
  width: 400px;
  background-color: #bae0db;
  margin-right: 15px;
`;

const ColumnR = styled.div`
  height: 580px;
  width: 100%;
`;

const Caption = styled.div`
  color: black;
  overflow-wrap: break-word;
  font-size: 27px;
  font-weight: 500;
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
  font-weight: 600;
  color: grey;
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
  background-color: pink;
  margin-top: -10px;
  margin-bottom: 30px;
`;

const Option = styled.div`
  height: 130px;
  width: 20%;
  padding: 1%;
  background-color: #c5bfea;
`;

const OptionText = styled.div`
  margin-top: -25px;
  margin-bottom: 20px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const DetailText = styled.div`
  margin: 50px 0px;
  margin-top: 10px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const MapText = styled.div`
  margin: 50px 0px;
  margin-top: 10px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const FilesA = styled.div`
  width: 75%;
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
  margin: 30px 0px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const ContentWrap = styled.div`
  position: relative;
  padding: 20px;
`;

const LogInButtonWrap = styled.div`
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

const LikeContainer = styled.div``;
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
  font-size: 20px;
`;

//구글 맵 컨테이너

const MapContainer = styled.div``;
const AnyReactComponent = ({ text }) => <MarkerIcon>{text}</MarkerIcon>;
//////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////
const RoomsDetailPresenter = ({
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
}) => (
  <Wrapper>
    {loading && (
      <DetailLoader
        token={token}
        data={data}
        onDeletePost={onDeletePost}
        loading={loading}
      />
    )}
    {!loading && token && data.detailPost ? (
      <LogInButtonWrap>
        <Link
          key={data.detailPost.id}
          to={{
            pathname: `/edit/${data && data.detailPost.id}`,
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
    {!loading && (
      <ContentWrap>
        <Column>
          <ColumnL>
            <Username>
              {data.detailPost &&
                data.detailPost.user &&
                data.detailPost.user.username}
            </Username>
            <Caption>{data.detailPost && data.detailPost.caption}</Caption>
          </ColumnL>
          <ColumnR>
            <File
              src={
                data.detailPost &&
                data.detailPost.files &&
                data.detailPost.files[0] &&
                data.detailPost.files[0].url
                  ? `http://localhost:4000/${data.detailPost.files[0].url}`
                  : "http://localhost:4000/images/preImage/no-image.jpg"
              }
            />
          </ColumnR>
        </Column>
        <ContentMain>
          <ContentMainWrap>
            <Deposit>
              보증금 {data.detailPost && data.detailPost.deposit}
            </Deposit>
            <Deposit>월세 {data.detailPost && data.detailPost.money}</Deposit>
            <Deposit>
              {data.detailPost && data.detailPost.numberOfFoors}층
            </Deposit>
            <Deposit>
              매물번호 {data.detailPost && data.detailPost.MLSnumber}
            </Deposit>
          </ContentMainWrap>
          <LikeContainer>
            <Like>
              <LikeToggleH1>찜하기</LikeToggleH1>
              <LikeToggle onClick={toggleLike}>
                {joayo ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="#ED4956"
                  >
                    <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 9.229c.234-1.12 1.547-6.229 5.382-6.229 2.22 0 4.618 1.551 4.618 5.003 0 3.907-3.627 8.47-10 12.629-6.373-4.159-10-8.722-10-12.629 0-3.484 2.369-5.005 4.577-5.005 3.923 0 5.145 5.126 5.423 6.231zm-12-1.226c0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-7.962-9.648-9.028-12-3.737-2.338-5.262-12-4.27-12 3.737z" />
                  </svg>
                )}
              </LikeToggle>
            </Like>
          </LikeContainer>
        </ContentMain>
        <Content>{data.detailPost && data.detailPost.content}</Content>
        <OptionText>
          <h1>옵션</h1>
          <hr />
        </OptionText>
        <Options>
          {data.detailPost && data.detailPost.airConditioner === "에어컨" && (
            <Option>airConditioner</Option>
          )}
          {data.detailPost && data.detailPost.washer === "세탁기" && (
            <Option>washer</Option>
          )}
          {data.detailPost && data.detailPost.refrigerator === "냉장고" && (
            <Option>refrigerator</Option>
          )}
          {data.detailPost && data.detailPost.internet === "인터넷" && (
            <Option>internet</Option>
          )}
          {data.detailPost && data.detailPost.microwave === "전자렌지" && (
            <Option>microwave</Option>
          )}
          {data.detailPost && data.detailPost.wifi === "wifi" && (
            <Option>wifi</Option>
          )}
          {data.detailPost && data.detailPost.bed === "침대" && (
            <Option>bed</Option>
          )}
          {data.detailPost && data.detailPost.desk === "책상" && (
            <Option>desk</Option>
          )}
          {data.detailPost && data.detailPost.induction === "인덕션" && (
            <Option>induction</Option>
          )}
          {data.detailPost && data.detailPost.gasRange === "가스레인지" && (
            <Option>gasRange</Option>
          )}
          {data.detailPost && data.detailPost.doorLock === "도어락" && (
            <Option>doorLock</Option>
          )}
          {data.detailPost && data.detailPost.CCTV === "CCTV" && (
            <Option>CCTV</Option>
          )}
          {data.detailPost && data.detailPost.pets === "애완동물" && (
            <Option>pets</Option>
          )}
          {data.detailPost && data.detailPost.elevator === "엘리베이터" && (
            <Option>elevator</Option>
          )}
          {data.detailPost && data.detailPost.parking === "주차" && (
            <Option>parking</Option>
          )}
          {data.detailPost &&
            data.detailPost.electricHeating === "전기난방" && (
              <Option>electricHeating</Option>
            )}
          {data.detailPost &&
            data.detailPost.cityGasHeating === "도시가스난방" && (
              <Option>tecityGasHeatingst</Option>
            )}
          {data.detailPost && data.detailPost.nightElectric === "심야전기" && (
            <Option>nightElectric</Option>
          )}
          {data.detailPost && data.detailPost.wateTax === "수도세" && (
            <Option>wateTax</Option>
          )}
          {data.detailPost &&
            data.detailPost.includingElectricity === "전기세포함" && (
              <Option>includingElectricity</Option>
            )}
          {data.detailPost &&
            data.detailPost.cityGasIncluded === "도시가스포함" && (
              <Option>cityGasIncluded</Option>
            )}
        </Options>

        {data.detailPost &&
          data.detailPost.files &&
          data.detailPost.files[0] &&
          data.detailPost.files[0] && (
            <>
              <DetailText>
                <h1>디테일</h1>
                <hr />
              </DetailText>

              <ImageGalleryContainer>
                <FilesA>
                  <ImageGallery
                    additionalClass={`test`}
                    items={path}
                    showFullscreenButton={false}
                    useBrowserFullscreen={false}
                    showThumbnails={true}
                    showPlayButton={false}
                    showBullets={true}
                    lazyLoad={true}
                    showIndex={false}
                  />
                </FilesA>
              </ImageGalleryContainer>
            </>
          )}
        <MapText>
          <h1>위치</h1>
          <hr />
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
      </ContentWrap>
    )}
    {loading ? (
      false
    ) : (
      <MoreRooms>
        <h1>더 많은 매물이 있습니다.</h1>
        <hr />
        {data2.seeFullPost ? (
          <LogInButtonWrap>
            <Link
              key={data2.seeFullPost.id}
              to={{
                pathname: `/writeboard/${dataOfMe &&
                  dataOfMe.me &&
                  dataOfMe.me.id}`,
                data
              }}
            >
              <LogInButton onClick={onClick}>글쓰기</LogInButton>
            </Link>
          </LogInButtonWrap>
        ) : (
          false
        )}

        {data2 && data2.seeFullPost && (
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            deviceType={props.deviceType}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            {data2 &&
              data2.seeFullPost &&
              data2.seeFullPost.post.map((item, key) => {
                let arrayOfPath = [];
                let test = [];
                let path = [];

                if (
                  data2.seeFullPost &&
                  data2.seeFullPost.post[key] &&
                  data2.seeFullPost.post[key].files.length === 0
                ) {
                  /// 임시로 메인에 보일 이미지 주소
                  arrayOfPath.push(
                    `http://localhost:4000/images/preImage/no-image.jpg`
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

                  data2.seeFullPost &&
                    data2.seeFullPost.post[key] &&
                    data2.seeFullPost.post[key].files.map(item => {
                      return arrayOfPath.push(item.url);
                    });
                  arrayOfPath.map((item, key) => test.push(item));

                  const s = test.reduce((s, a) => {
                    {
                      for (var i = 0; i < test.length; i++);
                      let get;
                      get = {
                        original: `http://localhost:4000/${a}`,
                        thumbnail: `http://localhost:4000/${a}`
                      };
                      return path.push(get);
                    }
                  }, {});
                }

                const onclick = () =>
                  props.history.push(`/roomsdetail/${item.id}`);
                return (
                  <BoardPartsSlide
                    onclick={onclick}
                    path={path}
                    id={item.id}
                    page={page}
                    data={data}
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
              })}
          </Carousel>
        )}
      </MoreRooms>
    )}
  </Wrapper>
);

export default RoomsDetailPresenter;
