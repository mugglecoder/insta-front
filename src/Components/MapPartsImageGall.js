import React, { useState, useEffect } from "react";
import { useQuery, useMutation } from "react-apollo-hooks";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import { gql } from "apollo-boost";
import "../css/image-gallery.css";
import { Link } from "react-router-dom/cjs/react-router-dom";

const CHECK_LIKE = gql`
  query checkLike($postId: String!) {
    checkLike(postId: $postId)
  }
`;

const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

const Container = styled.div`
  margin: 0 auto;
  height: 350px;
  border: 1px solid #e8e8e8;
  background-color: white;
  border-radius: 3px;
  width: 100%;
  overflow: scroll;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: wrap;
`;

const Files = styled.div`
  height: 100%;
  width: 100%;
`;

const Subject = styled.div`
  /* background-color: #9ab9e1; */
  width: 100px;
  /* height: 140px; */
  padding: 5px 3px 5px 5px;
  width: 100px;
  margin-right: 1px;
  overflow-wrap: break-word;
  line-height: 1.4;
  font-size: 14px;
  /* color: #ffffff; */
  overflow: scroll;
  text-align: start;
`;
const SubColumn = styled.div`
  position: relative;
`;

// 좋아요

const LikeContainer = styled.div`
  position: absolute;
  top: 8px;
  right: 4px;
  z-index: 100;
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

const Heart = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`;
const ContentMain = styled.div`
  display: flex;
  margin-top: 5px;
  padding: 4px;
`;

const SelectType = styled.div`
  margin-right: 7px;
  display: inline-block;
  font-size: 14px;
  color: rgb(169, 193, 232);
`;

const Deposit = styled.span`
  display: inline-block;
  margin-right: 5px;
  font-size: 14px;
  color: #c87777;
`;

const Money = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-size: 14px;
  color: #c87777;
`;

const Hr = styled.hr`
  margin-top: 10px;
`;
const Content = styled.div`
  padding: 7px;
  width: 100%;
  overflow: scroll;
  font-size: 14px;
  line-height: 1.4;
  text-align: start;
`;
const OptionText = styled.div`
  margin-bottom: 20px;
  h1 {
    text-align: start;
    margin-top: 20px;
    padding: 5px;
    font-size: 13px;
    color: grey;
  }
`;
const Option = styled.div`
  height: 130px;
  width: 20%;
  padding: 1%;
  background-color: #c5bfea;
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

const DetailText = styled.div`
  margin: 50px 0px;
  margin-top: 10px;
  h1 {
    text-align: start;
    margin-top: 20px;
    padding: 5px;
    font-size: 13px;
    color: grey;
  }
`;

const ImageGalleryContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const FilesA = styled.div`
  width: 95%;
  height: 300px;
`;

const BottomFiles = styled.div`
  height: 100px;
  width: 100%;
  h1 {
    text-align: start;
    margin-top: 5px;
    color: #a2cbd8;
  }
`;

const H1Bottom = styled.div`
  margin-top: 17px;
`;

const MapPartsImageGall = item => {
  const page = item.props.match && item.props.match.params.page;
  ///////////
  const urls = item.item.files && item.item.files.map(item => item);
  let arrayOfPath = [];
  let test = [];
  let path = [];
  if (item.item.files && item.item.files.length === 0) {
    /// 임시로 메인에 보일 이미지 주소
    arrayOfPath.push(`http://127.0.0.1:4000/images/preImage/no-image.jpg`);
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

    item.item.files &&
      item.item.files.map(items => {
        return arrayOfPath.push(items.url);
      });
    arrayOfPath.map((items, key) => test.push(items));

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
  //////////

  const onclick = () => {
    item.props.history.push(`/new/detail/${item.item.id}`);
  };
  //좋아요 로직

  let joayo = false;
  const [joayoS, setJoayoS] = useState(false);
  const [joayoSS, setJoayoSS] = useState(false);

  const [toggleJoayo, { loading: toggleJoayoLoading }] = useMutation(
    TOGGLE_LIKE,
    {
      variables: { postId: item.item.id }
    }
  );

  const toggleLike = async () => {
    const {
      data: { toggleLike }
    } = await toggleJoayo();

    if (joayo) {
      setJoayoS(true);
    } else {
      setJoayoS(true);
      setJoayoSS(true);
    }
    if (joayoS === true) {
      setJoayoSS(toggleLike);
    }
  };

  if (item.item.likes.length >= 1) {
    item &&
      item.item &&
      item.item.likes.map(items => {
        if (
          String(items && items.user && items.user.id) ===
          String(item && item.dataOfMe && item.dataOfMe.me.id)
        ) {
          joayo = true;
        } else if (
          String(items && items.user && items.user.id) !==
          String(
            item && item.dataOfMe && item.dataOfMe.me && item.dataOfMe.me.id
          )
        ) {
          joayo = false;
        } else {
          console.log("에러 방지용 윈도우 리로딩");
          window.location.reload();
        }
      });
  } else {
    console.log("없음");
  }

  //  console.log(items.user.id, "1");
  //  if (
  //    items.user.id === item &&
  //    item &&
  //    item.dataOfMe &&
  //    item.dataOfMe.me.id
  //  ) {
  //    return (joayo = true);
  //  } else if (
  //    items.user.id !== item &&
  //    item.dataOfMe &&
  //    item.dataOfMe.me.id
  //  ) {
  //    joayo = false;
  //  }

  return (
    <>
      <Container>
        <Files>
          <Column>
            <SubColumn>
              <ImageGallery
                additionalClass={`inTheMap`}
                items={path}
                showFullscreenButton={false}
                useBrowserFullscreen={false}
                showThumbnails={false}
                showPlayButton={false}
                showBullets={false}
                lazyLoad={true}
                showIndex={false}
                onClick={onclick}
              />
            </SubColumn>
          </Column>
          <ContentMain>
            <SelectType>{item.item.selectType}</SelectType>
            <Deposit>보증금 {item.item.deposit}</Deposit>
            <Money> 월세 {item.item.money}</Money>
          </ContentMain>
          <Subject>{item.item.caption}</Subject>
          <hr />
          <Content>{item.item.content}</Content>

          <OptionText>
            <h1>옵션</h1>
            <hr />
          </OptionText>

          <Options>
            {item.item && item.item.airConditioner === "에어컨" && (
              <Option>airConditioner</Option>
            )}
            {item.item && item.item.washer === "세탁기" && (
              <Option>washer</Option>
            )}
            {item.item && item.item.refrigerator === true && (
              <Option>refrigerator</Option>
            )}
            {item.item && item.item.internet === "인터넷" && (
              <Option>internet</Option>
            )}
            {item.item && item.item.microwave === "전자렌지" && (
              <Option>microwave</Option>
            )}
            {item.item && item.item.wifi === "wifi" && <Option>wifi</Option>}
            {item.item && item.item.bed === "침대" && <Option>bed</Option>}
            {item.item && item.item.desk === "책상" && <Option>desk</Option>}
            {item.item && item.item.induction === "인덕션" && (
              <Option>induction</Option>
            )}
            {item.item && item.item.gasRange === "가스레인지" && (
              <Option>gasRange</Option>
            )}
            {item.item && item.item.doorLock === "도어락" && (
              <Option>doorLock</Option>
            )}
            {item.item && item.item.CCTV === "CCTV" && <Option>CCTV</Option>}
            {item.item && item.item.pets === "애완동물" && (
              <Option>pets</Option>
            )}
            {item.item && item.item.elevator === "엘리베이터" && (
              <Option>elevator</Option>
            )}
            {item.item && item.item.parking === "주차" && (
              <Option>parking</Option>
            )}
            {item.item && item.item.electricHeating === "전기난방" && (
              <Option>electricHeating</Option>
            )}
            {item.item && item.item.cityGasHeating === "도시가스난방" && (
              <Option>tecityGasHeatingst</Option>
            )}
            {item.item && item.item.nightElectric === "심야전기" && (
              <Option>nightElectric</Option>
            )}
            {item.item && item.item.wateTax === "수도세" && (
              <Option>wateTax</Option>
            )}
            {item.item && item.item.includingElectricity === "전기세포함" && (
              <Option>includingElectricity</Option>
            )}
            {item.item && item.item.cityGasIncluded === "도시가스포함" && (
              <Option>cityGasIncluded</Option>
            )}
          </Options>
        </Files>
      </Container>
      <BottomFiles>
        <H1Bottom>
          <h1>사진을 스크롤하면 </h1>
          <h1>더 많은 정보가 나옵니다</h1>
        </H1Bottom>
      </BottomFiles>
    </>
  );
};

export default MapPartsImageGall;

////좋아용
//<LikeContainer>
//<Like>
//  <LikeToggle onClick={toggleLike}>
//    {toggleJoayoLoading ? (
//      <svg
//        xmlns="http://www.w3.org/2000/svg"
//        width="34"
//        height="30"
//        viewBox="0 0 30 30"
//        fill="#ff3422"
//        fill-opacity="0.4"
//        stroke="white"
//        stroke-width="3"
//      >
//        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
//      </svg>
//    ) : joayoS ? (
//      joayoSS ? (
//        <svg
//          xmlns="http://www.w3.org/2000/svg"
//          width="34"
//          height="30"
//          viewBox="0 0 30 30"
//          fill="#ED4956"
//        >
//          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
//        </svg>
//      ) : (
//        <svg
//          xmlns="http://www.w3.org/2000/svg"
//          width="34"
//          height="30"
//          viewBox="0 0 30 30"
//          fill="#000000"
//          fill-opacity="0.2"
//          stroke="white"
//          stroke-width="3"
//        >
//          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
//        </svg>
//      )
//    ) : joayo ? (
//      <svg
//        xmlns="http://www.w3.org/2000/svg"
//        width="34"
//        height="30"
//        viewBox="0 0 30 30"
//        fill="#ED4956"
//      >
//        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
//      </svg>
//    ) : (
//      <svg
//        xmlns="http://www.w3.org/2000/svg"
//        width="34"
//        height="30"
//        viewBox="0 0 30 30"
//        fill="#000000"
//        fill-opacity="0.2"
//        stroke="white"
//        stroke-width="3"
//      >
//        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
//      </svg>
//    )}
//  </LikeToggle>
//</Like>
//</LikeContainer>
