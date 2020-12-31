import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useHistory, Switch, Route } from "react-router-dom";
import { Grid, Paper } from "@material-ui/core";
//--------------[ L O C A L -- I M P O R T S ]-------------//
import { GetPostData } from "../../actions/posts";
import Profile from "../../components/profile/profile";
import Header from "../../components/header/header";
import NavBar from "../../components/navbar/navbar";
import Posts from "../../components/posts/posts";
import AddPost from "../../components/upload/addPost";
import EditPost from "../../components/upload/editPost";
import style from "./style";

const Home = ({ match }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { url, path } = match;

  const posts = useSelector((state) => state.posts.get);

  const { status } = useSelector((state) => state.users.switch);

  const isAuthorized = () => {
    let condition = false;

    const auth_token = window.localStorage.getItem("auth-token");

    if (auth_token !== null && auth_token !== undefined) {
      condition = true;
    }

    return condition;
  };

  useEffect(() => {
    if (!isAuthorized()) return history.push("/");
    dispatch(GetPostData());
  }, [status]);

  const classes = style();
  return (
    isAuthorized() && (
      <Grid container className={classes.root}>
        <Grid item className={classes.header}>
          <Header />
          <NavBar url={url} />
        </Grid>

        <Paper className={classes.body}>
          <Paper className={classes.feed}>
            <Switch>
              <Route exact path={`${path}`} render={() => <Posts posts={posts} url={url} />} />
              <Route exact path={`${path}/add`} render={() => <AddPost url={url} />} />
              <Route exact path={`${path}/edit`} render={() => <EditPost url={url} />} />
              <Route exact path={`${path}/dashboard`} render={() => <Profile />} />
            </Switch>
          </Paper>
        </Paper>
      </Grid>
    )
  );
};

export default Home;
