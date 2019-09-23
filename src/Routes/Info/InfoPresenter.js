import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Carousel from "react-multi-carousel";
import BoardPartsInDetailForMe from "../../Components/BoardPartsInDetailForMe";
import "react-multi-carousel/lib/styles.css";

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  max-width: 1370px;
`;

const Container = styled.div``;

const Section = styled.div`
  margin-top: 40px;
`;

const StyledH1 = styled.h1`
  font-size: 30px;
  color: black;
  margin-top: 70px;
  margin-bottom: 30px;
`;
const Description = styled.div``;

const ItemMap = styled.div``;

const ItemDiv = styled.div``;

const ItemMapS = styled.div``;

export default ({ data, loading, props }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3.5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  console.log(data, "data");
  return (
    <Wrapper>
      {loading && <Section>loading</Section>}
      {!loading && (
        <Container>
          <Section>
            <StyledH1>닉네임</StyledH1>
            <Description> {data.me && data.me.username}</Description>
          </Section>
          <Section>
            <StyledH1>이메일</StyledH1>
            <Description> {data.me && data.me.email}</Description>
          </Section>
          <Section>
            <StyledH1>좋아요 누른 매물들</StyledH1>
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
              itemClass="react-multi-carousel-item"
            >
              {data.me
                ? data.me &&
                  data.me.likes.map((item, key) => {
                    let arrayOfPath = [];
                    let test = [];
                    let path = [];
                    if (
                      data.me &&
                      data.me.likes &&
                      data.me.likes.length === 0
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
                      console.log(item, "item");
                      item &&
                        item.post.files.map(item => {
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
                      <BoardPartsInDetailForMe
                        props={props}
                        onclick={onclick}
                        path={path}
                        id={item.post.id}
                        data={item}
                        dataOfMe={data && data.me && data.me.id}
                        database={data}
                        key={key}
                        caption={item.post.caption}
                        username={item.post.username}
                        url={item.post.files}
                        deposit={item.post.deposit}
                        money={item.post.money}
                      />
                    );
                  })
                : false}
            </Carousel>
          </Section>
        </Container>
      )}
    </Wrapper>
  );
};
