import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ImageIcon from "@material-ui/icons/Image";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import MenuDrawer from "../../components/utils/drawer";
import { useHistory } from "react-router-dom";
import Style from "./style";

const Header = ({ postsCount, posts, searchText, setSearchText }) => {
  const data = Array.from(posts);
  const classes = Style();
  const history = useHistory();

  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
      icon: <HomeIcon />,
      name: "Home",
      link: "/",
    },
    {
      icon: <NoteAddIcon />,
      name: "Add Memory",
      link: "/add",
    },
    {
      icon: <SettingsIcon />,
      name: "settings",
      link: "/settings",
    },
  ];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const search = (e) => {
    setSearchText(e.target.value);
    console.log(searchText);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <div className={classes.left}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
          </div>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
              onChange={search}
            />
          </div>

          <div className={classes.right}>
            <IconButton aria-label="posts count" color="inherit">
              <Badge badgeContent={postsCount} color="secondary">
                <ImageIcon />
              </Badge>
            </IconButton>
            <Fab color="secondary" size="small" onClick={() => history.push("/add")}>
              <AddIcon />
            </Fab>
          </div>
        </Toolbar>
      </AppBar>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} listData={menu} />
    </>
  );
};

export default Header;
