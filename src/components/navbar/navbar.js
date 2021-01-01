import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import AddBoxIcon from "@material-ui/icons/AddBox";
import { Link } from "react-router-dom";
//---------local-imports-------//
import { GetUser, Logout } from "../../actions/users";
import MenuDrawer from "../../components/drawer/drawer";
import style from "./style";

const NavBar = ({ url, setIsDarkMode }) => {
  const classes = style();
  const dispatch = useDispatch();

  // logged in user email & name
  const { email, name } = useSelector((state) => state.users.userDetails);
  const { theme } = useSelector((state) => state.util);

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    try {
      dispatch(Logout());
      setIsDarkMode(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleDarkModeButton = () => {
    const isDarkMode = window.localStorage.getItem("dark-mode");
    const condition = isDarkMode === "true";
    window.localStorage.setItem("dark-mode", !condition);
    setIsDarkMode(window.localStorage.getItem("dark-mode") === "true");
  };

  useEffect(() => {
    dispatch(GetUser());
  }, []);

  return (
    <>
      <Paper className={classes.nav}>
        <Link to="#" onClick={handleMenuClick}>
          <MenuIcon />
        </Link>
        <Link to={`${url}`}>
          <HomeIcon />
        </Link>
        <Link to={`${url}/add`}>
          <AddBoxIcon />
        </Link>
        <Link to={`${url}/dashboard`}>
          <AccountCircleIcon />
        </Link>
        <Link to="#" onClick={handleDarkModeButton}>
          {theme ? <BrightnessHighIcon /> : <Brightness4Icon />}
        </Link>
      </Paper>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} name={name} email={email} handleLogout={() => handleLogout} />
    </>
  );
};

export default NavBar;
