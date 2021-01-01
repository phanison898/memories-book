import { Menu, MenuItem, Tooltip } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
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
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Backdrop from "@material-ui/core/Backdrop";
import moment from "moment";
//-----------------local-imports-----------------//
import { DeletePostData, CleanDelete } from "../../actions/posts";
import Animation from "../animations/animation";
import Loading from "../../images/wave-loading.json";
import Style from "./style";

const Post = ({ post, url }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = Style();

  const { _id, title, description, tags, selectedFile, date } = post;
  const { status } = useSelector((state) => state.posts.delete);

  const [isOpen, setIsOpen] = useState(false);

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
    history.push(`${url}/edit?postId=${_id}`);
  };

  useEffect(() => {
    if (status) {
      setIsOpen(false);
    }
    return () => {
      if (status) {
        dispatch(CleanDelete());
      }
    };
  }, [status]);

  return (
    <>
      <Card className={classes.card} key={_id}>
        {/*----------------------------------Card Header---------------------------------*/}
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
                    setIsOpen(true);
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
        {/*-----------------------------------Card Media---------------------------------*/}

        <CardMedia className={classes.media} image={selectedFile} title={title} />

        {/*----------------------------------Card Content-------------------------------*/}
        <CardContent>
          <Typography variant="body2" color="textPrimary">
            {description}
          </Typography>
          <Typography variant="caption" className={classes.tags}>
            {tags && tags.map((tag) => <p key={tag}>#{tag}</p>)}
          </Typography>
        </CardContent>
        {/*----------------------------------Card Action---------------------------------*/}
        <CardActions disableSpacing>
          <IconButton color="secondary">
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
      {/*---------------------Loading animation while deleting a post----------------------*/}
      <Backdrop open={isOpen} style={{ zIndex: 10000 }}>
        <div style={{ width: "500px", height: "250px" }}>
          <Animation src={Loading} />
        </div>
      </Backdrop>
    </>
  );
};

export default Post;
