import React from "react";
import { useSelector } from "react-redux";
import { Badge, Typography, Paper } from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
//----------------------local-hosts---------------------//
import Style from "./style";

const Header = () => {
  const classes = Style();
  const posts = useSelector((state) => state.posts.get);
  const postsCount = Array.from(posts).length;

  return (
    <Paper className={classes.header}>
      <Typography variant="subtitle1" className={classes.header__title}>
        Memories
      </Typography>

      <Badge badgeContent={postsCount} color="secondary" className={classes.header__postsCount}>
        <PhotoLibraryIcon />
      </Badge>
    </Paper>
  );
};
export default Header;
