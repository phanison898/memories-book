import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
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

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();

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
          <NavBar />
        </Grid>

        <Paper className={classes.body}>
          <Paper className={classes.feed}>
            <Switch>
              <Route exact path="/home" render={() => <Posts posts={posts} />} />
              <Route exact path="/home/add" render={() => <AddPost />} />
              <Route exact path="/home/edit" render={() => <EditPost />} />
              <Route exact path="/home/user" render={() => <Profile />} />
            </Switch>
          </Paper>
        </Paper>
      </Grid>
    )
  );
};

export default Home;
