import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Paper } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import MenuIcon from "@material-ui/icons/Menu";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import BrightnessHighIcon from "@material-ui/icons/BrightnessHigh";
import { Link } from "react-router-dom";
//---------local-imports-------//
import { GetUser, Logout } from "../../actions/users";
import { ChangeTheme } from "../../actions/util";
import MenuDrawer from "../../components/drawer/drawer";
import style from "./style";

const NavBar = ({ url }) => {
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
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // gets user details from server (email & name)
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
          <AddCircleOutlineIcon />
        </Link>
        <Link to={`${url}/dashboard`}>
          <AccountCircleIcon />
        </Link>
        <Link to="#" onClick={() => dispatch(ChangeTheme(!theme))}>
          {theme ? <BrightnessHighIcon /> : <Brightness4Icon />}
        </Link>
      </Paper>
      <MenuDrawer isOpen={isOpen} setIsOpen={setIsOpen} name={name} email={email} handleLogout={() => handleLogout} />
    </>
  );
};

export default NavBar;
