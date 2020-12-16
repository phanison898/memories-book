import {useEffect,useState} from 'react';
import {useDispatch,connect} from "react-redux";
import Posts from "./components/posts";
import FormHolder from './components/form';
import {Link} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import {Grid,AppBar,Toolbar,Typography,Hidden,IconButton,Menu,MenuItem} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import image from './images/Pattern-Randomized.svg';
import {GetPostData} from './actions/posts';

const App = (props) => {

  const posts = props.posts;

  const [currentPostId, setCurrentPostId] = useState(null);

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(GetPostData());
  },[dispatch])

  const classes = styles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeMenuHandle = ()=>{
    setAnchorEl(false);
  }

  return (

    <Grid container className={classes.root} direction="column">

      <Grid item container className={classes.header} xs={12}>
        <Grid item>
          <AppBar variant="elevation" color="primary" className={classes.appBar}>
            <Toolbar>
              <Hidden mdUp>
                <IconButton edge="start" color="inherit" onClick={handleClick}><MenuRoundedIcon /></IconButton>
                <Menu id="post-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
                  <MenuItem onClick={()=>{closeMenuHandle()}}>Add Memory</MenuItem>
                  <MenuItem onClick={()=>{closeMenuHandle()}}>Settings</MenuItem>
                </Menu>
              </Hidden>
              <Typography variant="h6" className={classes.title} >
                <Link href="http://localhost:3000/" color="textSecondary" style={{textDecoration:"none",color:"white"}}>Memory book</Link>
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>

      <Grid item container className={classes.body} xs={12} justify="space-evenly">

        <Hidden smDown>
          <Grid item className={classes.left_section} md>

          </Grid>
        </Hidden>
        <Grid item className={classes.posts_section} xs={12} sm={7} md={5}>
          <Posts setCurrentPostId={setCurrentPostId} />
        </Grid>
        <Hidden smDown>
          <Grid item className={classes.right_section} md>
            <FormHolder currentPostId={currentPostId} setCurrentPostId={setCurrentPostId} />
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
    height:"8vh",
  },
  appBar:{
    height:"8vh",
    justifyContent:"center",
    backgroundColor:"#1976d2",
  },
  title:{
    fontFamily:"Pacifico",
  },
  body:{
    position:"absolute",
    top:"8vh",
    height:"92vh",
    padding:theme.spacing(1),
    backgroundColor:"white",
    backgroundImage: `url(${image})`,
    backgroundBlendMode:"multiply",
    "& > *":{
      //borderRadius:"8px",
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
    display:"flex",
    justifyContent:"center",
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

const mapStateToProps = (state) => ({posts: state.posts});

export default connect(mapStateToProps)(App);
