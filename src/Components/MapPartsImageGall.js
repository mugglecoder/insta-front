import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";
import style from "styled-jsx/dist/style";

const Container = styled.div`
  height: 200px;
  overflow: scroll;
`;

const Column = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: wrap;
`;

const Files = styled.div`
  height: 100px;
  width: 100%;
  cursor: pointer;
`;

const Subject = styled.div`
  background-color: #ffe4d740;
  padding: 5px;
  width: 80px;
  height: 130px;
  overflow-wrap: break-word;
  line-height: 1.4;
  font-weight: 600;
  font-size: 12px;
  color: #836c80;
  overflow: scroll;
  text-align: start;
`;
const SubColumn = styled.div`
  width: 210px;
  position: relative;
  padding: 10px;
`;
const ContentMain = styled.div`
  display: flex;
`;

const SelectType = styled.div`
  margin-right: 7px;
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  color: rgb(169, 193, 232);
`;

const Deposit = styled.span`
  display: inline-block;
  margin-right: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const Money = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-weight: 600;
  font-size: 14px;
  color: #c87777;
`;

const Hr = styled.hr`
  margin-top: 10px;
`;
const Content = styled.div`
  padding: 7px;
  width: 100%;
  height: 80%;
  overflow: scroll;
  font-size: 14px;
  line-height: 1.4;
  text-align: start;
`;
export default (item, setDivide) => {
  const props = item.props;
  const page = item.props.match && item.props.match.params.page;
  console.log(page, "page in parts");

  const urls = item.item.files && item.item.files.map(item => item);
  let arrayOfPath = [];
  let test = [];
  let path = [];
  urls.map(item => arrayOfPath.push(item.url));
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

  const onclick = () => {
    return props.history.push(`/roomsdetail/${item.item.id}/new/1`);
  };

  const deleteClassS = () => {};
  return (
    <Container>
      <Files>
        <Column>
          <Subject>{item.item.caption}</Subject>
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
        <Hr />
        <Content>{item.item.content}</Content>
      </Files>
    </Container>
  );
};
