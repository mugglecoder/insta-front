import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import { gql } from "apollo-boost";
import "../css/image-gallery.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { useQuery, useMutation } from "react-apollo-hooks";

const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

const BEFORE_CHECK = gql`
  mutation beforeLike($postId: String!) {
    beforeLike(postId: $postId)
  }
`;

const Container = styled.div`
  max-width: 386px;
  width: 100%;
  height: 100%;
`;

const Column = styled.div`
  margin: 0px 15px;
  height: 200px;
`;

const SubColumn = styled.div`
  padding: 5px 2px;
  margin: 2px 10px;
  margin-bottom: 30px;
`;

const Files = styled.div`
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

let url = [];

const BoardParts = ({
  checkLikeLoading,
  setJoayo,
  toggleButton,
  database,
  toggleLike,
  joayo,
  token,
  props,
  id,
  dataOfMe,
  loading,
  data2,
  data,
  onclick,
  path,
  caption,
  selectType,
  money,
  deposit
}) => {
  //

  const [joayoS, setJoayoS] = useState(false);
  const [joayoSS, setJoayoSS] = useState(false);

  const toggleJoayo = useMutation(TOGGLE_LIKE);
  const toggleLikeS = async e => {
    if (joayo) {
      setJoayoS(true);
      setJoayoSS(true);
      console.log("1");
    }
    if (joayoS === true) {
      if (joayoSS === false) {
        setJoayoSS(true);
        console.log("3");
      }
      if (joayoSS === true) {
        setJoayoSS(false);
        console.log("4");
      }
    }
    const test = await toggleJoayo({ variables: { postId: data.id } });
    console.log(test.data.toggleLike, "test");
  };

  //default heart state
  console.log(data, "data?");
  let joayoy = false;
  if (!loading) {
    data &&
      data.likes.map(item => {
        if (String(item.user.id) === String(dataOfMe.me.id)) {
          joayoy = true;
        } else if (
          String(item && item.user.id) !== String(dataOfMe && dataOfMe.me.id)
        ) {
          joayoy = false;
        }
      });
  }

  return (
    <Container>
      <Column>
        <Files>
          <LikeContainer>
            <Like>
              <LikeToggle
                onClick={
                  String(id) === String(data.id) ? toggleLike : toggleLikeS
                }
              >
                {String(id) === String(data.id) ? (
                  joayo ? (
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
                ) : joayoy ? (
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
          <Link
            to={{
              pathname: `/roomsdetail/${data.id}`,
              state: { data: data2 }
            }}
            key={data.id}
          >
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
          </Link>
        </Files>
      </Column>
      <SubColumn>
        <SmallSub>
          <SelectType>{selectType}</SelectType>
          <Deposit>보증금 {deposit}</Deposit>
          {" / "}
          <Money> 월세 {money}</Money>
        </SmallSub>
        <Subject>{caption}</Subject>
      </SubColumn>
    </Container>
  );
};

BoardParts.propTypes = {
  caption: PropTypes.string.isRequired
};

export default BoardParts;
