import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
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
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import MenuDrawer from "../../components/utils/drawer";

const Header = ({ postsCount }) => {
  const classes = useStyles();

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
  return (
    <>
      <AppBar position="static">
        <Toolbar className={classes.root}>
          <div className={classes.left}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="open drawer" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            {/* <Typography variant="h6" noWrap>
            Memories
          </Typography> */}
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
            />
          </div>

          <div className={classes.right}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={postsCount} color="secondary">
                <ImageIcon />
              </Badge>
            </IconButton>
            <Link to="/add">
              <Fab color="secondary" size="small">
                <AddIcon />
              </Fab>
            </Link>
          </div>
        </Toolbar>
      </AppBar>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} listData={menu} />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    height: "8vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#1976d2",
    "& > div": {
      flex: 1,
      alignItems: "center",
    },
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    "& > *": {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(0),
      },
    },
  },
  search: {
    position: "relative",
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default Header;
