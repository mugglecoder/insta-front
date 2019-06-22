import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  width: 300px;
  height: 100%;
`;

const Column = styled.div`
  margin: 0px 10px;
  height: 180px;
`;

const SubColumn = styled.div`
  margin: 10px 10px;
  margin-bottom: 30px;
`;

const Files = styled.div`
  position: relative;
`;

const File = styled.div`
  border-radius: 5px;

  width: 100%;
  position: absolute;
  top: 0;
  background-image: url(${props => props.src}});
  background: contain;
  background-position: center;
  height: 180px;
  background-size: 250px 250px;
`;

const Subject = styled.div`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 5px;
`;

const Username = styled.div``;

const Deposit = styled.span`
  font-weight: 600;
  color: red;
`;

const Money = styled.span`
  font-weight: 600;
  color: red;
`;

const Date = styled.div``;

const Count = styled.div``;

const BoardParts = ({
  caption,
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
        {url &&
          url.map((item, index) => (
            <File
              key={index}
              src={
                item.url.length === 0
                  ? "http://seogunny.com/wp-content/uploads/2018/03/arrival-review-glitter-rebel-1.jpg"
                  : item.url
              }
            />
          ))}
      </Files>
    </Column>
    <SubColumn>
      <Subject>{caption}</Subject>

      <Deposit>{deposit}</Deposit>
      {" / "}
      <Money>{money}</Money>
    </SubColumn>
  </Container>
);

BoardParts.propTypes = {
  caption: PropTypes.string.isRequired
};

export default BoardParts;
