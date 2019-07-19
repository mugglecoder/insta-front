import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ImageGallery from "react-image-gallery";
import className from "classnames";
import _JSXStyle from "styled-jsx/style";
import "../css/image-gallery.css";

const Container = styled.div`
  max-width: 386px;
  width: 25%;
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
  data,
  onclick,
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
}) => (
  <Container>
    <Column>
      <Files>
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

BoardParts.propTypes = {
  caption: PropTypes.string.isRequired
};

export default BoardParts;
