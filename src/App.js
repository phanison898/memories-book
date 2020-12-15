import {useEffect} from 'react';
import {useDispatch} from "react-redux";
import Posts from "./components/posts";
import axios from "axios";
import {Grid,AppBar,Toolbar,Typography,Hidden} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import image from './images/Pattern-Randomized.svg';
import {red,blue} from '@material-ui/core/colors';

const App = () => {

  // Runs once per every page refresh and updates the state
  // Value with data-base post values
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(()=>{ axios.get("http://localhost:5000/posts")
    .then((res) => {dispatch({type: "FETCH_ALL",payload: res.data,})},3000);},
    [dispatch])});

  const classes = styles();

  return (

    <Grid container className={classes.root} direction="column">

      <Grid item container className={classes.header} xs={12}>
        <Grid item>
          <AppBar variant="elevation" color="primary" className={classes.appBar}>
            <Toolbar>
              <Typography variant="h4" className={classes.title}>Memory book</Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>

      <Grid item container className={classes.body} xs={12} justify="space-evenly">

        <Hidden smDown>
          <Grid item className={classes.left_section} md>

          </Grid>
        </Hidden>
        <Grid item className={classes.posts_section} xs={12} sm={8} md={5}>
          <Posts />
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.right_section} md>

          </Grid>
        </Hidden>

    </Grid>

    </Grid>

  );

};

const styles = makeStyles((theme)=>({
  root:{
    display:"relative",
  },
  header:{
    height:"10vh",
  },
  appBar:{
    height:"10vh",
    justifyContent:"center",
  },
  title:{
    fontFamily:"Pacifico",
  },
  body:{
    position:"absolute",
    top:"10vh",
    height:"90vh",
    padding:theme.spacing(1),
    backgroundColor: grey[500],
    backgroundImage: `url(${image})`,
    "& > *":{
      borderRadius:"8px",
    }
  },
  left_section:{
    height:"100%",
    backgroundColor: grey[200],
    backgroundImage: `url(${image})`,
    backgroundBlendMode:"multiply",
  },
  posts_section:{
    height:"100%",
    backgroundColor: grey[200],
    backgroundImage: `url(${image})`,
    backgroundBlendMode:"multiply",
    overflowY:"scroll",
    margin:"0 8px",
    paddingTop:theme.spacing(1),
  },
  right_section:{
    height:"100%",
    backgroundColor: grey[200],
    backgroundImage: `url(${image})`,
    backgroundBlendMode:"multiply",
  },
  posts:{
    width:"80vw",
    alignItems:"center",
  }
}));

export default App;
