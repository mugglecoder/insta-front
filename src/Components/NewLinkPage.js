import React from "react";
import styled from "styled-components";
import BoardParts from "../Components/BoardParts";
import { Link, withRouter } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0px -15px;
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

export default ({
  stateChecker,
  setStateChecker,
  pageData,
  props,
  data,
  searchData,
  page,
  loading,
  dataOfMe
}) => {
  return (
    <Wrapper>
      {searchData && (
        <Container>
          {searchData &&
            searchData &&
            searchData.post.map((item, key) => {
              let arrayOfPath = [];
              let test = [];
              let path = [];

              if (
                searchData &&
                searchData.post[key] &&
                searchData.post[key].files.length === 0
              ) {
                /// 임시로 메인에 보일 이미지 주소
                arrayOfPath.push(
                  `http://localhost:4000/images/preImage/no-image.jpg`
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
                searchData &&
                  searchData &&
                  searchData.post[key] &&
                  searchData.post[key].files.map(item => {
                    return arrayOfPath.push(item.url);
                  });
                arrayOfPath.map((item, key) => test.push(item));

                const s = test.reduce((s, a) => {
                  {
                    for (var i = 0; i < test.length; i++);
                    let get;
                    get = {
                      original: `http://localhost:4000/${a}`,
                      thumbnail: `http://localhost:4000/${a}`
                    };
                    return path.push(get);
                  }
                }, {});
              }

              const onclick = () =>
                props.history.push(`/new/detail/${item.id}`);
              return (
                <BoardParts
                  props={props}
                  searchData={searchData}
                  loading={loading}
                  dataOfMe={dataOfMe}
                  onclick={onclick}
                  path={path}
                  id={item.id}
                  page={page}
                  data={item}
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
