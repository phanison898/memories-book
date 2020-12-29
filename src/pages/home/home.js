import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useHistory, useLocation, Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
//--------------[ L O C A L -- I M P O R T S ]-------------//
import { GetPostData } from "../../actions/posts";
import Header from "../../components/header/header";
import NavBar from "../../components/navbar/navbar";
import Posts from "../../components/posts/posts";
import Form from "../../components/form/form";
import style from "./style";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  // getting all posts from redux store
  const posts = useSelector((state) => state.posts);

  // posts count
  const postsCount = Array.from(posts).length;

  // current route/component
  const [currentPath, setCurrentPath] = useState("/home");

  //toggle header on scroll
  const [prevPosition, setPrevPosition] = useState(window.pageYOffset);

  const [pos, setPos] = useState("0");

  window.onscroll = () => {
    const currPosition = window.pageYOffset;
    prevPosition > currPosition ? setPos("0") : setPos("-100px");
    setPrevPosition(currPosition);
  };

  // new filtered posts
  const [newPosts, setNewPosts] = useState(posts);

  const [open, setOpen] = useState(false);

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
    setNewPosts(posts);
  }, [status, posts]);

  const Component = (path) => {
    switch (path) {
      case "/home":
        return <Posts posts={posts} isLoading={isLoading} />;
      case "/home/add":
        return <h2>Add post</h2>;
      case "/home/user":
        return <h2>User dashboard</h2>;
      default:
        break;
    }
  };

  const classes = style();
  return (
    isAuthorized() && (
      <Grid container className={classes.root}>
        <Grid item className={classes.header}>
          <Header />
          <NavBar />
        </Grid>

        <Grid item container className={classes.feed} direction="column-reverse">
          {/* {Component(currentPath)} */}
          <Switch>
            <Route exact path="/home" render={() => <Posts posts={newPosts} isLoading={isLoading} />} />
            <Route exact path="/home/add" component={Form} />
            <Route exact path="/home/user" render={() => <h2>user dashboard</h2>} />
          </Switch>
        </Grid>
      </Grid>
    )
  );
};

export default Home;
