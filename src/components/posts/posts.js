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

const Post = ({ post }) => {
  const { _id, title, description, tags, selectedFile, date } = post;
  const [tags_data] = tags;
  const split_tags = tags_data.split(",");

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
    <Card className={classes.post}>
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
          {split_tags.map((tag) => `#${tag.trim()} `)}
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

const Posts = ({ posts }) => {
  const data = Array.from(posts);
  const postCount = data.length;
  const classes = Style();

  return (
    <Grid item container xs={12} className={classes.root} direction={postCount > 1 ? "column-reverse" : "column"} alignItems="center" justify="flex-start">
      {data.map((post) => (
        <Post key={post._id} post={post} />
      ))}
    </Grid>
  );
};

export default Posts;
