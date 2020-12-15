import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import moment from 'moment';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    margin:"10px 0",
    alignItems:"center",
    borderRadius:theme.spacing(2),
    boxSizing:"border-box",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor:"pointer",
  },
  avatar: {
    backgroundColor: red[500],
  },
  tags:{
    color:"green",
    fontWeight:"600",
    cursor:"pointer",
  }
}));

const Post = ({ post }) => {

  const {title, description, tags, selectedFile, date} = post;
  const [tags_data] = tags;
  const split_tags = tags_data.split(",");

  const classes = useStyles();

  return (

    <Card className={classes.root}>

      <CardHeader
        avatar={<Avatar aria-label="recipe" className={classes.avatar}>P</Avatar>}
        action={<IconButton aria-label="settings"><MoreVertIcon /></IconButton>}
        title={title}
        subheader={moment(date).fromNow()}
      />

      <CardMedia className={classes.media} image={selectedFile} title={title} />

      <CardContent>
        <Typography variant="body2" color="textPrimary">{description}</Typography>
        <Typography variant="caption" className={classes.tags}>{split_tags.map((tag)=>`#${tag} `)}</Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color="secondary"><FavoriteIcon /></IconButton>
        <IconButton aria-label="share"><ShareIcon /></IconButton>
      </CardActions>

      </Card>
    
  );
}

export default Post;
