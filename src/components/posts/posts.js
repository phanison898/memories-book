import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Grid from "@material-ui/core/Grid";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import { Menu, MenuItem, Tooltip } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { DeletePostData } from "../../actions/posts";
import Style from "./style";
import { useHistory } from "react-router-dom";
import Skeleton from "@material-ui/lab/Skeleton";

const Post = ({ post }) => {
  const { _id, title, description, tags, selectedFile, date } = post;

  const dispatch = useDispatch();
  const history = useHistory();

  const classes = Style();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const closeMenuHandle = () => {
    setAnchorEl(false);
  };

  const clickEdit = () => {
    closeMenuHandle();
    history.push(`/edit/${_id}`);
  };

  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            P
          </Avatar>
        }
        action={
          <>
            <IconButton aria-label="settings" onClick={handleClick}>
              <MoreVertIcon />
            </IconButton>

            <Menu id="post-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
              <MenuItem>
                <Tooltip title="edit" placement="left">
                  <EditIcon onClick={clickEdit} />
                </Tooltip>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  dispatch(DeletePostData(_id));
                  closeMenuHandle();
                }}
              >
                <Tooltip title="delete" placement="left">
                  <DeleteIcon />
                </Tooltip>
              </MenuItem>
            </Menu>
          </>
        }
        title={title}
        subheader={moment(date).fromNow()}
      />

      <CardMedia className={classes.media} image={selectedFile} title={title} />

      <CardContent>
        <Typography variant="body2" color="textPrimary">
          {description}
        </Typography>
        <Typography variant="caption" className={classes.tags}>
          {tags && tags.map((tag) => <p key={tag}>`#${tag.trim()} `</p>)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" color="secondary">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

const Posts = ({ posts, isLoading }) => {
  const data = Array.from(posts);
  const classes = Style();

  return isLoading
    ? [1, 2, 3, 4].map((p) => (
        <Grid item className={classes.post} key={p}>
          <PostSkeleton />
        </Grid>
      ))
    : data.map((post) => (
        <Grid item key={post._id} className={classes.post}>
          <Post key={post._id} post={post} />
        </Grid>
      ));
};

export const PostSkeleton = () => {
  const classes = Style();

  return (
    <Card className={classes.skeleton}>
      <CardHeader avatar={<Skeleton variant="circle" width={50} height={50} />} title={<Skeleton variant="text" width={100} height={20} />} subheader={<Skeleton variant="text" width={50} height={20} />} />

      <CardMedia>
        <Skeleton variant="rect" width={550} height={300} />
      </CardMedia>

      <CardContent>
        <Skeleton variant="text" />
        <Skeleton variant="text" />
        <Skeleton variant="text" width={200} height={20} />
      </CardContent>
    </Card>
  );
};

export default Posts;
