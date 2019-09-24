import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { gql } from "apollo-boost";
import { useQuery, useMutation } from "react-apollo-hooks";
import SearchDetailPresenter from "./SearchDetailPresenter";
import { ME } from "../../SharedQueries";
import Axios from "axios";
import ModifyPresenter from "./ModifyPresenter";
import Loading from "../../Components/PlaceHolderForLoader/Loading";

const TOGGLE_LIKE = gql`
  mutation toggleLike($postId: String!) {
    toggleLike(postId: $postId)
  }
`;

const BEFORE_CHECK = gql`
  mutation beforeLike($postId: String!) {
    beforeLike(postId: $postId)
  }
`;

const DELETEPOST = gql`
  mutation detelePost($id: String) {
    detelePost(id: $id)
  }
`;

const FEED_QUERY = gql`
  query seeFullPost($first: Int, $skip: Int) {
    seeFullPost(first: $first, skip: $skip) {
      post {
        id
        caption
        deposit
        money
        count
        selectType
        content
        createdAt
        user {
          id
          username
        }
        files {
          id
          url
        }
      }
      count
    }
  }
`;

const LINKS_PER_PAGE = 12;

const LOCAL_LOG_IN = gql`
  mutation logUserIn($token: String!) {
    logUserIn(token: $token) @client
  }
`;

const Wrapper = styled.div``;
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////

const RoomsDetail = ({ props, data, loading, searchData, newData }) => {
  const id = props && props.location && props.location.pathname.split("/")[3];

  //구글지도

  const [center, setCenter] = useState({});

  //구글지도 줌 레벨
  const [zoom, setZoom] = useState(15);

  const lat = Number(data && data && data.lat);
  const lng = Number(data && data && data.lng);
  const forCenter = { lat, lng };

  ////////////////////////////////

  const [skip, setSkip] = useState(0);
  const [first, setFrist] = useState(0);

  const page = parseInt(
    props && props.match && props.match.params && props.match.params.page
  );

  const { data: dataOfMe } = useQuery(ME);
  console.log(dataOfMe, "이건 되는가 룸스디테일");

  const _getQueryVariables = () => {
    const isNewPage =
      props &&
      props.location &&
      props.location.pathname &&
      props.location.pathname.includes("new");

    const skip = isNewPage || props ? (page - 1) * LINKS_PER_PAGE : 0;
    const first = isNewPage || props ? LINKS_PER_PAGE : 100;
    setFrist(first);
    setSkip(skip);
    return skip;
  };

  const [getQueryVariables, teset2] = useState(_getQueryVariables);
  useEffect(() => {}, [getQueryVariables]);

  let herrrr = props && props.history;
  const token = localStorage.getItem("token");
  ///////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////////////////////////////////////////////////////////////////////////////////

  const data2 =
    props &&
    props.location &&
    props.location.state &&
    props.location.state.data;

  //http://127.0.0.1:4000

  const onClick = props => {
    if (dataOfMe && dataOfMe.me && dataOfMe.me.id) {
      return (
        herrrr &&
        herrrr.push(`/writeboard/${dataOfMe && dataOfMe.me && dataOfMe.me.id}`)
      );
    } else {
      return false;
    }
  };
  const onClick2 = props => {
    if (dataOfMe && dataOfMe.me && dataOfMe.me.id) {
      return herrrr && herrrr.push(`/edit/${data && data.searchRoom.id}`);
    } else {
      return false;
    }
  };

  const [set, setSet] = useState(false);
  const [set2, setSet2] = useState(false);

  useEffect(() => {
    if (set === true) {
      setSet(false);
    }
    _getQueryVariables();
  }, [set]);

  useEffect(() => {
    if (set2 === true) {
      setSet2(false);
    }
    _getQueryVariables();
  }, [set2]);

  const _nextPage = e => {
    e.preventDefault();
    const page = parseInt(
      props && props.match && props.match.params && props.match.params.page
    );

    if (
      page <=
      (data2 && data2.seeFullPost && data2.seeFullPost.count / LINKS_PER_PAGE)
    ) {
      const nextPage = page + 1;

      props.history.push(`/new/${nextPage}`);
      _getQueryVariables();
      return setSet(true);
    }
  };

  const _previousPage = async e => {
    e.preventDefault();
    const page = parseInt(
      props && props.match && props.match.params && props.match.params.page
    );
    if (page > 1) {
      const previousPage = page - 1;
      props.history.push(`/new/${previousPage}`);
      await _getQueryVariables();
      return setSet2(true);
    }
  };

  let posts = [];
  let getPath = [];
  const pathData =
    data && data.files && data.files.map(item => posts.push(item.url));

  const s = posts.reduce((s, a, currentIndex) => {
    {
      for (var i = 0; i < posts.length; i++);
      let get;

      if (currentIndex === 0) {
        get = {
          src: `http://localhost:4000/${a}`,
          thumbnail: `http://localhost:4000/${a}`,
          thumbnailWidth: 400,
          thumbnailHeight: 250
        };
      } else {
        get = {
          src: `http://localhost:4000/${a}`,
          thumbnail: `http://localhost:4000/${a}`,
          thumbnailWidth: 400,
          thumbnailHeight: 250
        };
      }
      return getPath.push(get);
    }
  }, {});

  ///////////////////////////////

  //토글 룸스디테일 & 수정하기
  const checker = props && props.match.path.includes("detail");
  const [deletePost] = useMutation(DELETEPOST);

  const deletePostForData =
    data2 &&
    data2.seeFullPost &&
    data2.seeFullPost.post[0].files.map(item => item.url);

  //딜리트포스트 온 서브밋
  const onDeletePost = async e => {
    e.preventDefault();
    await deletePost({ variables: { id } });
    props.history.push(`/new/}`);

    const axiosData = await Axios.delete("http://localhost:4000/upload", {
      data: { deletePostForData }
    })
      .then(res => {
        console.log(res, "axios res");
        return res.data;
      })
      .catch(err => console.log(err));
    console.log(axiosData, "axios data");
  };

  // 좋아요

  const [toggleButton, { loading: toggleJoayoLoading }] = useMutation(
    TOGGLE_LIKE
  );

  const [beforeCheck] = useMutation(BEFORE_CHECK);
  //

  //

  const [joayo, setJoayo] = useState(false);

  //default 좋아요를 셋팅함

  //페이지 넘길때 좋아요 미리 표시해줌
  //  useEffect(() => {
  //    (async function() {
  //      try {
  //        const {
  //          data: { beforeLike }
  //        } = await beforeCheck({ variables: { postId: id } });
  //        setJoayo(beforeLike);
  //      } catch (e) {
  //        console.error(e);
  //      }
  //    })();
  //    window.scrollTo(0, 0);
  //  }, [props && props.match.params]);

  //좋아요 클릭했을때 로직인데 음
  const toggleLike = async () => {
    if (token) {
      if (joayo === true) {
        setJoayo(false);
      } else if (joayo === false) {
        setJoayo(true);
      }
      const {
        data: { toggleLike }
      } = await toggleButton({ variables: { postId: id } });
      setJoayo(toggleLike);
    } else {
      console.log("로그인 후 이용가능 합니다");
    }
  };

  //하단
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3.5,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2.5,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
      slidesToSlide: 1 // optional, default to 1.
    }
  };

  ////만약 주소로 다이렉트로 접근할때?///////////////////////////////////////////

  const edit =
    props &&
    props.location.pathname &&
    props.location.pathname.split("/")[2] === "edit"
      ? true
      : false;

  return (
    <Wrapper>
      {loading && <Loading />}
      {edit ? (
        <ModifyPresenter
          token={token}
          path={getPath}
          page={page}
          props={props}
          data={data}
          data2={data2}
          loading={loading}
          onClick={onClick}
          onClick2={onClick2}
          _nextPage={_nextPage}
          _previousPage={_previousPage}
          dataOfMe={dataOfMe}
        />
      ) : (
        <SearchDetailPresenter
          newData={newData}
          toggleJoayoLoading={toggleJoayoLoading}
          searchData={searchData}
          beforeCheck={beforeCheck}
          setJoayo={setJoayo}
          toggleButton={toggleButton}
          props={props}
          id={id}
          responsive={responsive}
          joayo={joayo}
          toggleLike={toggleLike}
          lng={lng}
          lat={lat}
          center={center}
          zoom={zoom}
          onDeletePost={onDeletePost}
          token={token}
          path={getPath}
          page={page}
          data={data}
          data2={data2}
          loading={loading}
          onClick={onClick}
          onClick2={onClick2}
          _nextPage={_nextPage}
          _previousPage={_previousPage}
          dataOfMe={dataOfMe}
        />
      )}
    </Wrapper>
  );
};

export default RoomsDetail;
