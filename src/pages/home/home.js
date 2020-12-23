import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { GetPostData } from "../../actions/posts";
import Posts from "../../components/posts/posts";
import Header from "../../components/header/header";
import style from "./style";
import { useHistory } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const posts = useSelector((state) => state.posts);
  const { status } = useSelector((state) => state.users.switch);

  useEffect(() => {
    if (window.localStorage.getItem("auth-token") === null || window.localStorage.getItem("auth-token") === undefined) {
      history.push("/auth");
      return;
    }
    dispatch(GetPostData());
  }, [status]);

  const classes = style();
  return (
    <Grid container className={classes.root} direction="column">
      <Grid item container className={classes.header} xs={12}>
        {window.localStorage.getItem("auth-token") !== null && window.localStorage.getItem("auth-token") !== undefined && <Header />}
      </Grid>

      <Grid item container className={classes.body} justify="space-around">
        <Grid item container className={classes.posts_section} xs={12} sm={7} md={5} direction="column" justify="flex-start" alignItems="center">
          {window.localStorage.getItem("auth-token") !== null && window.localStorage.getItem("auth-token") !== undefined && <Posts posts={posts} />}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Home;
