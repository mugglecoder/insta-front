import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import BoardParts from "../../Components/BoardParts";
import ImageGallery from "react-image-gallery";
import GoogleMapReact from "google-map-react";
import "react-image-gallery/styles/css/image-gallery.css";
const Wrapper = styled.div`
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
  padding: 30px;
`;

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

const FileS = styled.img`
  background-size: contain;
  background-image: url(${props => props.src});
  background-position: center;
  width: 100%;
  background-repeat: no-repeat;
  margin: 80px 0px;
`;

const MoreRooms = styled.div`
  margin: 30px 0px;
  h1 {
    font-size: 20px;
    color: grey;
  }
`;

const ContentWrap = styled.div`
  padding: 20px;
`;

const LogInButtonWrap = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
`;

const LogInButton = styled.button`
  margin-bottom: 20px;
  height: 50px;
  width: 100px;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
`;

const SLink = styled(Link)`
  color: grey;
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

const ButtonDiv = styled.div``;

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

//구글 맵 컨테이너

const MapContainer = styled.div``;
const AnyReactComponent = ({ text }) => <MarkerIcon>{text}</MarkerIcon>;

const RoomsDetailPresenter = ({
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
    {loading && <Loader />}
    {console.log(data.detailPost)}
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
                  : "http://seogunny.com/wp-content/uploads/2018/03/arrival-review-glitter-rebel-1.jpg"
              }
            />
          </ColumnR>
        </Column>
        <ContentMain>
          <Deposit>보증금 {data.detailPost && data.detailPost.deposit}</Deposit>
          <Deposit>월세 {data.detailPost && data.detailPost.money}</Deposit>
          <Deposit>
            {data.detailPost && data.detailPost.numberOfFoors}층
          </Deposit>
          <Deposit>
            매물번호 {data.detailPost && data.detailPost.MLSnumber}
          </Deposit>
          <Content>{data.detailPost && data.detailPost.content}</Content>
        </ContentMain>
        <OptionText>
          <h1>옵션</h1>
          <hr />
        </OptionText>
        <Options>
          {data.detailPost && data.detailPost.airConditioner === true && (
            <Option>airConditioner</Option>
          )}
          {data.detailPost && data.detailPost.washer === true && (
            <Option>washer</Option>
          )}
          {data.detailPost && data.detailPost.refrigerator === true && (
            <Option>refrigerator</Option>
          )}
          {data.detailPost && data.detailPost.internet === true && (
            <Option>internet</Option>
          )}
          {data.detailPost && data.detailPost.microwave === true && (
            <Option>microwave</Option>
          )}
          {data.detailPost && data.detailPost.wifi === true && (
            <Option>wifi</Option>
          )}
          {data.detailPost && data.detailPost.bed === true && (
            <Option>bed</Option>
          )}
          {data.detailPost && data.detailPost.desk === true && (
            <Option>desk</Option>
          )}
          {data.detailPost && data.detailPost.induction === true && (
            <Option>induction</Option>
          )}
          {data.detailPost && data.detailPost.gasRange === true && (
            <Option>gasRange</Option>
          )}
          {data.detailPost && data.detailPost.doorLock === true && (
            <Option>doorLock</Option>
          )}
          {data.detailPost && data.detailPost.CCTV === true && (
            <Option>CCTV</Option>
          )}
          {data.detailPost && data.detailPost.pets === true && (
            <Option>pets</Option>
          )}
          {data.detailPost && data.detailPost.elevator === true && (
            <Option>elevator</Option>
          )}
          {data.detailPost && data.detailPost.parking === true && (
            <Option>parking</Option>
          )}
          {data.detailPost && data.detailPost.electricHeating === true && (
            <Option>electricHeating</Option>
          )}
          {data.detailPost && data.detailPost.cityGasHeating === true && (
            <Option>tecityGasHeatingst</Option>
          )}
          {data.detailPost && data.detailPost.nightElectric === true && (
            <Option>nightElectric</Option>
          )}
          {data.detailPost && data.detailPost.wateTax === true && (
            <Option>wateTax</Option>
          )}
          {data.detailPost && data.detailPost.includingElectricity === true && (
            <Option>includingElectricity</Option>
          )}
          {data.detailPost && data.detailPost.cityGasIncluded === true && (
            <Option>cityGasIncluded</Option>
          )}
        </Options>

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
          <Container>
            {data2 &&
              data2.seeFullPost &&
              data2.seeFullPost.post.map((item, key) => {
                let arrayOfPath = [];
                let test = [];
                let path = [];
                data2.seeFullPost &&
                  data2.seeFullPost.post[key] &&
                  data2.seeFullPost.post[key].files.map(item =>
                    arrayOfPath.push(item.url)
                  );
                arrayOfPath.map((item, key) => test.push(item));

                const s = test.reduce((s, a) => {
                  {
                    for (var i = 0; i < test.lengsh; i++);
                    let get;
                    get = {
                      original: `http://localhost:4000/${a}`,
                      thumbnail: `http://localhost:4000/${a}`
                    };
                    return path.push(get);
                  }
                }, {});

                const onclick = () =>
                  props.history.push(`/roomsdetail/${item.id}/new/${page}`);
                return (
                  <BoardParts
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
            {!loading && (
              <PPcontainer>
                <Pcontainer>
                  <P>
                    이전
                    <button onClick={_previousPage} />
                  </P>
                  <P>
                    다음
                    <button onClick={_nextPage} />
                  </P>
                </Pcontainer>
              </PPcontainer>
            )}
          </Container>
        )}
      </MoreRooms>
    )}
  </Wrapper>
);

export default RoomsDetailPresenter;
