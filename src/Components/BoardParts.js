import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  max-width: 386px;
  width: 32vw;
  height: 100%;
`;

const Column = styled.div`
  margin: 0px 10px;
  height: 250px;
`;

const SubColumn = styled.div`
  padding: 5px 2px;
  margin: 2px 10px;
  margin-bottom: 30px;
`;

const Files = styled.div`
  position: relative;
`;

const File = styled.img`
  border-radius: 5px;
  height: 250px;
  width: 100%;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src}});
  background-position: center;
  background-size: cover;
`;

const Subject = styled.div`
  overflow-wrap: break-word;
  font-size: 17px;
  font-weight: 500;
  margin-bottom: 5px;
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

const BoardParts = ({
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
        {url && url.files && url.files[0] === undefined ? (
          <File
            src={
              "http://seogunny.com/wp-content/uploads/2018/03/arrival-review-glitter-rebel-1.jpg"
            }
          />
        ) : (
          <File src={`http://localhost:4000/${url.files[0].url}`} />
        )}
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
