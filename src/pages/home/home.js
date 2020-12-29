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

  const posts = useSelector((state) => state.posts);

  const postsCount = Array.from(posts).length;

  const [currentPath, setCurrentPath] = useState("/home");

  const [prevPosition, setPrevPosition] = useState(window.pageYOffset);

  const [pos, setPos] = useState("0");

  window.onscroll = () => {
    const currPosition = window.pageYOffset;
    prevPosition > currPosition ? setPos("0") : setPos("-100px");
    setPrevPosition(currPosition);
  };

  const [newPosts, setNewPosts] = useState(posts);

  const [open, setOpen] = useState(false);

  const { status } = useSelector((state) => state.users.switch);

  const [isLoading, setIsLoading] = useState(true);

  const isAuthorized = () => {
    let condition = false;

    const auth_token = window.localStorage.getItem("auth-token");

    if (auth_token !== null && auth_token !== undefined) {
      condition = true;
    }

    return condition;
  };

  useEffect(() => {
    if (!isAuthorized()) return history.push("/auth");
    dispatch(GetPostData());
  }, [status]);

  const classes = style();
  return (
    isAuthorized() && (
      <Grid container className={classes.root}>
        <Grid item className={classes.header}>
          <Header />
          <NavBar />
        </Grid>

        <Grid item container className={classes.feed} direction="column-reverse">
          <Switch>
            <Route exact path="/home" render={() => <Posts posts={posts} />} />
            <Route exact path="/home/add" component={Form} />
            <Route exact path="/home/user" render={() => <h2>user dashboard</h2>} />
          </Switch>
        </Grid>
      </Grid>
    )
  );
};

export default Home;
