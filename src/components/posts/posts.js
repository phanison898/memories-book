import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
//---------------local-host-------------//
import PostSkeleton from "./postSkeleton";
import NoPosts from "./noPosts";
import Post from "./post";
import Style from "./style";

const Posts = ({ posts, url }) => {
  const classes = Style();

  const postsArray = Array.from(posts);

  const postsAnim = useSpring({
    width: "100%",
    height: "100%",
    opacity: 1,
    from: {
      opacity: 0,
    },
  });

  const PostsComponent = () =>
    postsArray.map((post) => (
      <animated.div style={postsAnim} key={post._id}>
        <Post key={post._id} post={post} className={classes.post} url={url} />
      </animated.div>
    ));

  const noPostsAnim = useSpring({
    width: "100%",
    height: "80%",
    opacity: 1,
    from: {
      width: "0%",
      height: "0%",
      opacity: 0,
    },
  });

  const NoPostsComponent = () => (
    <animated.div style={noPostsAnim}>
      <NoPosts url={url} />
    </animated.div>
  );

  const [postCount, setPostCount] = useState(window.localStorage.getItem("posts-count"));

  useEffect(() => {
    setPostCount(window.localStorage.getItem("posts-count"));
  }, [window.localStorage.getItem("posts-count")]);

  const areNoPosts = parseInt(postCount) === 0 || postCount === undefined || postCount === null;
  return areNoPosts ? <NoPostsComponent /> : !postsArray.length ? <PostSkeleton /> : <PostsComponent />;
};

export default Posts;
