import { connect} from "react-redux";
import Post from "./post";
import {Paper,Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from '@material-ui/core/colors';
import PostLoading from './postLoading';
import image from '../../images/Pattern-Randomized.svg';
import {red,blue} from '@material-ui/core/colors';

const styles = makeStyles((theme)=>({
  root:{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:0,
    border:"none",
    paddingTop:theme.spacing(1),
    "& > *":{
      margin:"0 0 10px 0",
    },
  },
  loading:{
    display:"flex",
    justifyContent:"center",
    alignContent:"center",
  }
}));

const Posts = (props) => {

  const data = Array.from(props.posts);
  const classes = styles();

  return (

    !data.length
    ? <div className={classes.loading}><PostLoading /></div>
    : <div className={classes.root}>
      {data.map((post) => (<Post key={post._id} post={post} setCurrentPostId={props.setCurrentPostId} />))}
      </div>
    
  );
};

const mapStateToProps = (state) => ({posts: state.posts});

export default connect(mapStateToProps)(Posts);
