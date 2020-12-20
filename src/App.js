import { BrowserRouter as Router, Route, Switch, useHistory } from "react-router-dom";
import { useDispatch, connect } from "react-redux";
import { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import { GetPostData } from "./actions/posts";
import Posts from "./components/posts/posts";
import Header from "./components/header/header";
import Form from "./components/form/form";
import SignInPage from "./components/signin/signin";
import style from "./style";

const App = (props) => {
  const posts = props.state.posts;
  const dispatch = useDispatch();
  const history = useHistory();

  const [currentPostId, setCurrentPostId] = useState(null);

  const classes = style();
  return (
    <Router>
      <Grid container className={classes.root} direction="column">
        <Grid item container className={classes.header} xs={12}>
          <Header postsCount={posts.length} posts={posts} />
        </Grid>

        <Grid item container className={classes.body} justify="space-around">
          <Grid item container className={classes.posts_section} xs={12} sm={7} md={5} direction="column" justify="flex-start" alignItems="center">
            <Switch>
              <Route path="/" exact render={() => <Posts posts={posts} setCurrentPostId={setCurrentPostId} />} />
              <Route path="/add" render={() => <Form />} />
              <Route path="/edit/:id" render={() => <Form currentPostId={currentPostId} posts={posts} />} />
              <Route path="/users/sign-in" render={() => <SignInPage />} />
            </Switch>
          </Grid>
        </Grid>
      </Grid>
    </Router>
  );
};

const mapStateToProps = (state) => ({ state });

export default connect(mapStateToProps)(App);
