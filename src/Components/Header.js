import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import Input from "./Input";
import useInput from "../Hooks/useInput";
import { Compass, HeartEmpty, User } from "./Icons";
import { useQuery } from "react-apollo-hooks";

import { ME } from "../../src/SharedQueries";

const Header = styled.header`
  width: 100%;
  border: 0;
  background-color: white;
  border-bottom: ${props => props.theme.boxBorder};
  border-radius: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 0px;
  z-index: 2;
`;

const HeaderWrapper = styled.div`
  width: 100%;
  max-width: ${props => props.theme.maxWidth};
  display: flex;
  justify-content: center;
`;

const HeaderColumn = styled.div`
  width: 33%;
  text-align: center;
  &:first-child {
    margin-right: auto;
    text-align: left;
  }
  &:last-child {
    margin-left: auto;
    text-align: right;
  }
`;

const SearchInput = styled(Input)`
  background-color: ${props => props.theme.bgColor};
  padding: 5px;
  border-radius: 3px;
  font-size: 14px;
  height: auto;
  text-align: center;
  width: 70%;
  &::placeholder {
    font-weight: 200;
    opacity: 0.8;
  }
`;

const HeaderLink = styled.a`
  display: inline-block;
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export default withRouter(({ history }) => {
  const search = useInput("");
  const { data, loading } = useQuery(ME);
  console.log(data, "data?");
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  return (
    <Header>
      <HeaderWrapper>
        <HeaderColumn>
          <Link to="/">
            <h1>변냥의 다락방</h1>
          </Link>
        </HeaderColumn>
        <HeaderColumn>
          <form onSubmit={onSearchSubmit}>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder="search"
            />
          </form>
        </HeaderColumn>
        <HeaderColumn>
          <Link to="/fullmap">
            <Compass />
          </Link>

          <Link to="/new/search">
            <HeartEmpty />
          </Link>

          {!loading && data && data.me ? (
            <Link to={`/info/${data && data.me && data.me.username}`}>
              <User />
            </Link>
          ) : (
            <Link to="/#">
              <User />
            </Link>
          )}
        </HeaderColumn>
      </HeaderWrapper>
    </Header>
  );
});
