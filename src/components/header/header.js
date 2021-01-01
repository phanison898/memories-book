import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Badge, Typography, Paper } from "@material-ui/core";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
//----------------------local-hosts---------------------//
import Style from "./style";

const Header = () => {
  const classes = Style();

  const [postsCount, setPostCount] = useState(parseInt(window.localStorage.getItem("posts-count")));
  useEffect(() => {
    setPostCount(parseInt(window.localStorage.getItem("posts-count")));
  }, [window.localStorage.getItem("posts-count")]);

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
