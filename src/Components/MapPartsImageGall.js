import React from "react";
import styled from "styled-components";
import ImageGallery from "react-image-gallery";

const PopUps = styled.div`
  background-color: red;
  width: 100px;
  height: 100px;
`;

const Files = styled.div`
  height: 100px;
  width: 200px;
  cursor: pointer;
`;

const SubColumn = styled.div`
  position: relative;
  padding: 10px;
`;

const Cancle = styled.div`
  position: absolute;
  top: 5px;
  left: -1;
`;

const SmallSub = styled.div`
  display: flex;
  justify-content: flex-start;
  margin: 5px 0px;
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

const Subject = styled.div`
  overflow-wrap: break-word;
  line-height: 1.4;
  font-size: 14px;
  margin-top: 5px;
  color: #747474;
`;

export default item => {
  const props = item.props;
  const page = item.props.match && item.props.match.params.page;

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

  const onclick = () =>
    props.history.push(`/roomsdetail/${item.item.id}/new/${page}`);

  console.log(item, "item");
  const deleteClassS = () => {};
  return (
    <Files>
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
        <Cancle onClick={deleteClassS}>
          <span />
        </Cancle>
        <hr />
        <Subject>{item.item.caption}</Subject>
      </SubColumn>
    </Files>
  );
};
