import React from "react";
import styled from "styled-components";
import BoardParts from "../Components/BoardParts";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
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
  margin-top: 20px;
  width: 100%;
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

export default ({ data, page, _previousPage, _nextPage, loading }) => {
  return (
    <Wrapper>
      {data && data.seeFullPost && (
        <Container>
          {data &&
            data.seeFullPost &&
            data.seeFullPost.post.map((item, key) => {
              let arrayOfPath = [];
              let test = [];
              let test2 = [];

              data.seeFullPost &&
                data.seeFullPost.post[key] &&
                data.seeFullPost.post[key].files.map(item =>
                  arrayOfPath.push(item.url)
                );

              arrayOfPath.map(item => test.push([item]));

              const yap = test.reduce(
                (acc, cur) => ({
                  original: { acc },
                  thumbnail: cur
                }),
                {}
              );
              console.log(yap);
              for (var i in test) {
                test2 += test.reduce(
                  (acc, cur) => ({
                    original: { acc },
                    thumbnail: cur
                  }),
                  {}
                );
              }
              console.log(test2);

              //              const right = test.reduce(
              //                (acc, cur) => ({
              //                  original: acc,
              //                  thumbnail: cur
              //                }),
              //                {}
              //              );

              return (
                <BoardParts
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
    </Wrapper>
  );
};

//

//<SLink
//key={item.id}
//to={{
//  pathname: `/roomsdetail/${item.id}/new/${page}`,
//  aboutProps: { item },
//  state: {
//    fromNotifications: true
//  }
//}}
//>
//</SLink>
