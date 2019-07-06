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

export default ({ props, data, page, _previousPage, _nextPage, loading }) => {
  return (
    <Wrapper>
      {data && data.seeFullPost && (
        <Container>
          {data &&
            data.seeFullPost &&
            data.seeFullPost.post.map((item, key) => {
              let arrayOfPath = [];
              let test = [];
              let path = [];
              data.seeFullPost &&
                data.seeFullPost.post[key] &&
                data.seeFullPost.post[key].files.map(item =>
                  arrayOfPath.push(item.url)
                );
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
                props.history.push(`/roomsdetail/${item.id}/new/${page}`);
              return (
                <BoardParts
                  onclick={onclick}
                  path={path}
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
