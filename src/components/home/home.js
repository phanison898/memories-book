import { useDispatch, connect } from "react-redux";
import { useEffect, useState } from "react";
import { Grid, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import image from "../../images/Pattern-Randomized.svg";
import { GetPostData } from "../../actions/posts";
import Posts from "../posts/posts";
import FormHolder from "../form/form";
import Header from "../header/header";

const Home = (props) => {
  const posts = props.posts;

  const [currentPostId, setCurrentPostId] = useState(null);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetPostData());
  }, [dispatch]);

  const classes = styles();

  return (
    <Grid container className={classes.root} direction="column">
      {/* <Grid item container className={classes.header} xs={12}>
        <Header />
      </Grid> */}

      <Grid item container className={classes.body} xs={12} justify="space-around">
        <Hidden smDown>
          <Grid item container className={classes.left_section} md justify="center" alignItems="center"></Grid>
        </Hidden>
        <Grid item container className={classes.posts_section} xs={12} sm={7} md={5} direction="column" justify="flex-start" alignItems="center">
          <Posts setCurrentPostId={setCurrentPostId} />
        </Grid>
        <Hidden smDown>
          <Grid item container className={classes.right_section} md justify="center" alignItems="flex-start">
            <FormHolder currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
          </Grid>
        </Hidden>
      </Grid>
    </Grid>
  );
};

const styles = makeStyles((theme) => ({
  root: {
    display: "relative",
    boxSizing: "border-box",
  },
  header: {
    height: "8vh",
  },
  body: {
    position: "absolute",
    top: "8vh",
    height: "92vh",
    backgroundColor: "white",
    backgroundImage: `url(${image})`,
    backgroundBlendMode: "multiply",
  },
  left_section: {
    height: "inherit",
    backgroundColor: grey[300],
    backgroundImage: `url(${image})`,
    backgroundBlendMode: "multiply",
  },
  posts_section: {
    height: "inherit",
    overflowY: "scroll",
    margin: `0 ${theme.spacing(1) / 4}px`,
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
    backgroundColor: grey[300],
    backgroundImage: `url(${image})`,
    backgroundBlendMode: "multiply",
  },
  right_section: {
    height: "inherit",
    backgroundColor: grey[300],
    backgroundImage: `url(${image})`,
    backgroundBlendMode: "multiply",
  },
}));

const mapStateToProps = (state) => ({ posts: state.posts });

export default connect(mapStateToProps)(Home);
