import { Drawer, Avatar, Divider, Typography, IconButton, Paper } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import React from "react";
//-------------local-imports----------//
import style from "./style";

const MenuDrawer = ({ isOpen, setIsOpen, name, email, handleLogout }) => {
  const classes = style();

  const initial = name ? name.charAt(0) : "a";

  const closeDrawer = () => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsOpen(false);
  };

  return (
    <Drawer className={classes.root} anchor="left" open={isOpen} onClose={closeDrawer()}>
      <Paper elevation={0} className={classes.sidebar}>
        {/* User details and stats */}
        <Paper className={classes.details}>
          {/* Profile picture */}
          <div className={classes.profile}>
            <Avatar variant="circular">{initial}</Avatar>
          </div>

          {/* User name */}
          <div className={classes.info}>
            <AccountCircleIcon />
            <Typography className={classes.text} variant="subtitle1">
              {name}
            </Typography>
          </div>

          {/* User email */}
          <div className={classes.info}>
            <EmailIcon />
            <Typography className={classes.text} variant="subtitle2">
              {email}
            </Typography>
          </div>
        </Paper>

        <Divider />

        {/* Logout */}
        <Paper className={classes.logout}>
          <Typography variant="subtitle1">Exit from the app</Typography>
          <IconButton onClick={handleLogout()}>
            <ExitToAppIcon />
          </IconButton>
        </Paper>
      </Paper>
    </Drawer>
  );
};

export default MenuDrawer;
