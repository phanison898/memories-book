import { connect} from "react-redux";
import Post from "./post";
import {Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {grey} from '@material-ui/core/colors';

const styles = makeStyles((theme)=>({
  root:{
    width:"100%",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:grey[200],
    borderRadius:0,
    border:"none",
    paddingTop:theme.spacing(1),
    "& > *":{
      margin:"0 0 10px 0",
    }
  }
}));

const Posts = (props) => {

  const data = Array.from(props.posts);
  const classes = styles();

  return (

    <Paper variant="outlined" className={classes.root}>
      {/* Represents Posts */}
      {data.map((post) => (<Post key={post._id} post={post} />))}
    </Paper>
    
  );
};

const mapStateToProps = (state) => ({posts: state.posts});

export default connect(mapStateToProps)(Posts);
