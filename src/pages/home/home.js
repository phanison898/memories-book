import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Grid } from "@material-ui/core";
//--------------[ L O C A L -- I M P O R T S ]-------------//
import { GetPostData } from "../../actions/posts";
import Header from "../../components/header/header";
import Upload from "../../components/upload/upload";
import Posts from "../../components/posts/posts";
import style from "./style";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  // getting all posts from redux store
  const posts = useSelector((state) => state.posts);

  // posts count
  const postsCount = Array.from(posts).length;

  // value entered in search box
  const [inputValue, setInputValue] = useState("");

  // new filtered posts
  const [newPosts, setNewPosts] = useState({});

  // status : it is a redux store property, which gets unique id
  // (uuid) value, every time login or logout button clicked
  // useEffect hook always listens the value of status
  // if status value changes, then useEffect hook triggers
  const { status } = useSelector((state) => state.users.switch);

  // condition for loading animation while fetching posts from server
  // becomes false, when posts are completely fetched
  const [isLoading, setIsLoading] = useState(true);

  // checks whether the auth_token generated in local storage or not
  // [note:] auth_token generates only when user successfully logged-in
  const isAuthorized = () => {
    // initially treating as not logged in
    let condition = false;

    // getting the value of auth_token from local storage
    const auth_token = window.localStorage.getItem("auth-token");

    // cheching auth_token available in local storage or not
    // if it is not null or not undefined... means auth_token available
    if (auth_token !== null && auth_token !== undefined) {
      // assigning true --> which means user is logged in
      condition = true;
    }

    // finally returning the logged-in status
    return condition;
  };

  // useEffect: tracks the changes of..
  // 1. status (logout button clicked)
  // 2. posts (holds posts data in redux store)
  useEffect(() => {
    // if not authorized --> goto authentication page
    if (!isAuthorized()) return history.push("/auth");

    // if authorized ---> check posts count
    // if posts count = 0 ---> send posts get request
    if (Array.from(posts).length === 0) return dispatch(GetPostData());

    // posts are not zero meaning posts fetched successfully
    // then set loading animation to false
    setIsLoading(false);
  }, [status, posts]);

  const classes = style();
  return (
    // only if authorized --> displays home page
    isAuthorized() && (
      <Grid container className={classes.root}>
        {/*Header section*/}
        <Grid item className={classes.header}>
          <Header postsCount={postsCount} posts={posts} />
        </Grid>

        <Grid item container className={classes.body}>
          {/*Upload section*/}
          <Grid item className={classes.upload}>
            <Upload />
          </Grid>

          {/*Posts section*/}
          <Posts posts={posts} isLoading={isLoading} />
        </Grid>
      </Grid>
    )
  );
};

export default Home;
