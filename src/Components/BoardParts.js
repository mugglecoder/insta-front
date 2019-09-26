import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import "../css/image-gallery.css";
import gql from "graphql-tag";
import { useQuery, useMutation } from "react-apollo-hooks";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { set } from "immutable";

import washerS from "../optionPng/004-laundry.png";
import airConditionerS from "../optionPng/005-air-conditioner.png";
import refrigeratorS from "../optionPng/refrigerator.png";
import wifiS from "../optionPng/001-wifi.png";
import internetS from "../optionPng/002-domain.png";
import microwaveS from "../optionPng/003-microwave-oven.png";
import bedS from "../optionPng/007-bed.png";
import deskS from "../optionPng/008-desk.png";
import inductionS from "../optionPng/010-cooking.png";
import gasRangeS from "../optionPng/011-cooking-1.png";
import doorLockS from "../optionPng/015-door-knob.png";
import cctvS from "../optionPng/016-cctv.png";
import upS from "../optionPng/018-up.png";
import parkingS from "../optionPng/019-parking.png";
import cityGasHeatingS from "../optionPng/020-gas-station.png";
import wateTaxS from "../optionPng/021-raindrop.png";
import includingElectricityS from "../optionPng/023-light.png";
import nightElectricS from "../optionPng/023-light.png";

import electricHeatingS from "../optionPng/024-electric-charge.png";
import cityGasIncludedS from "../optionPng/026-fuel-station.png";
import petsS from "../optionPng/dog.png";

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

const SnapContainer = styled.div`
  /*border: 1px solid #f1f1f1*/
  padding: 20px 15px 20px 15px;
  border-radius: 5px;
  width: 23%;
  margin: 1%;
  margin-bottom: 24px;
  background-color: #ffffff;
`;

const SnapContainerInn = styled.div`
  background-color: white;
`;

const Container = styled.div`
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  max-width: 386px;
  width: 100%;
  height: 190px;
  overflow: scroll;
`;

const Column = styled.div``;

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

const SubColumn = styled.div`
  padding: 5px 2px;
  margin: 2px 10px;
  margin-bottom: 30px;
`;

const Files = styled.div`
  position: relative;
`;

const SelectTypeS = styled.div`
  color: black;
  opacity: 0.5;
`;
const SubjectS = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin: 5px 0px 5px 0px;
`;
const DepositS = styled.div`
  color: red;
  margin: 5px;
`;

const BottomFiles = styled.div`
  position: relative;
  width: 100%;
  height: 50px;
`;

const TypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const BottomFilesContainer = styled.div`
  position: absolute;
  bottom: 2px;
  right: 5px;
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

const File = styled(ImageGallery)`
  &&& {
    height: 600px;
  }
`;

const Subject = styled.div`
  overflow-wrap: break-word;
  font-size: 17px;
  margin-bottom: 5px;
  color: #747474;
`;

const SmallSub = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 7px 0px;
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

const StyledH1 = styled.h1`
  font-size: 30px;
  color: black;
  margin-top: 70px;
  margin-bottom: 30px;
`;

const Option = styled.div`
  height: 90px;
  width: 83px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    width: 30px;
    margin-bottom: 13px;
  }
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

const Deposit = styled.span`
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #c87777;
`;

const SelectType = styled.div`
  margin-right: 7px;
  display: inline-block;
  font-weight: 600;
  font-size: 16px;
  color: rgb(169, 193, 232);
`;

const Money = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-weight: 600;
  font-size: 16px;
  color: #c87777;
`;

const StyledLink = styled(Link)`
  width: 25%;
`;

let url = [];

const BoardParts = ({
  content,
  props,
  newData,
  searchData,
  loading,
  dataOfMe,
  data,
  id,
  page,
  path,
  caption,
  selectType,
  username,
  createdAt,
  count,
  url,
  money,
  deposit
}) => {
  let joayo = false;
  const [joayoS, setJoayoS] = useState(false);
  const [joayoSS, setJoayoSS] = useState(false);

  const [toggleJoayo, { loading: toggleJoayoLoading }] = useMutation(
    TOGGLE_LIKE,
    { variables: { postId: data.id } }
  );

  const toggleLike = async () => {
    const {
      data: { toggleLike }
    } = await toggleJoayo();
    console.log(toggleLike, "togglelike!!");
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

  if (data.likes.length >= 1) {
    data &&
      data.likes.map(item => {
        if (
          String(item && item.user && item.user.id) ===
          String(dataOfMe && dataOfMe.me && dataOfMe.me.id)
        ) {
          return (joayo = true);
        } else if (
          String(item && item.user && item.user.id) !==
          String(dataOfMe && dataOfMe.me && dataOfMe.me.id)
        ) {
          return (joayo = false);
        }
      });
  } else {
    console.log("없음");
  }

  const onclick = event => {
    event.preventDefault();
    window.open(`/new/detail/${id}`);
  };

  return (
    <SnapContainer>
      <Container>
        <SnapContainerInn>
          <Column>
            <Files>
              <LikeContainer>
                <Like>
                  <LikeToggle onClick={toggleLike}>
                    {toggleJoayoLoading ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#ff3422"
                        fill-opacity="0.4"
                        stroke="white"
                        stroke-width="3"
                      >
                        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                      </svg>
                    ) : joayoS ? (
                      joayoSS ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="#ED4956"
                        >
                          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="34"
                          height="30"
                          viewBox="0 0 30 30"
                          fill="#000000"
                          fill-opacity="0.2"
                          stroke="white"
                          stroke-width="3"
                        >
                          <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                        </svg>
                      )
                    ) : joayo ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="#ED4956"
                      >
                        <path d="M12 4.435c-1.989-5.399-12-4.597-12 3.568 0 4.068 3.06 9.481 12 14.997 8.94-5.516 12-10.929 12-14.997 0-8.118-10-8.999-12-3.568z" />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="34"
                        height="30"
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

              <File
                items={path}
                showFullscreenButton={false}
                useBrowserFullscreen={false}
                showThumbnails={false}
                showPlayButton={false}
                showBullets={true}
                lazyLoad={true}
                showIndex={false}
                sizes={500}
                onClick={onclick}
              />
            </Files>
          </Column>
        </SnapContainerInn>
      </Container>
      <BottomFiles>
        <TypeContainer>
          <SelectTypeS>{selectType}</SelectTypeS>
          <DepositS>
            ₩ {deposit}
            {"/"}
            {money}
          </DepositS>
        </TypeContainer>
        <SubjectS>
          {caption.length > 25 ? `${caption.substring(0, 25)}...` : caption}
        </SubjectS>
      </BottomFiles>
    </SnapContainer>
  );
};

BoardParts.propTypes = {
  caption: PropTypes.string.isRequired
};

export default BoardParts;
