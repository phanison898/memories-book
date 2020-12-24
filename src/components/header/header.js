import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import MenuDrawer from "../../components/utils/drawer";
import Style from "./style";
import { GetUser, Logout } from "../../actions/users";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import axios from "axios";

const Header = () => {
  const classes = Style();
  const dispatch = useDispatch();
  const history = useHistory();
  const { email, name } = useSelector((state) => state.users.userDetails);
  const { status } = useSelector((state) => state.users.switch);

  useEffect(() => {
    if (window.localStorage.getItem("auth-token") === null || window.localStorage.getItem("auth-token") === undefined) {
      // Un-Autherized
      axios.defaults.headers.common["auth-token"] = null;
      history.push("/auth");
      return;
    }
    dispatch(GetUser());
  }, [status]);

  const [isOpen, setIsOpen] = useState(false);
  const menu = [
    {
      id: 1,
      icon: <HomeIcon />,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      icon: <NoteAddIcon />,
      name: "Add Memory",
      link: "/add",
    },
    {
      id: 3,
      icon: <SettingsIcon />,
      name: "settings",
      link: "/settings",
    },
  ];

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const HandleLogout = () => {
    try {
      dispatch(Logout());
    } catch (error) {
      console.log(error.message);
    }
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
            />
          </div>

          <div className={classes.right}>
            <IconButton onClick={HandleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} listData={menu} name={name} email={email} />
    </>
  );
};

export default Header;
