import React from "react";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Avatar, Divider, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import CreateIcon from "@material-ui/icons/Create";
import style from "./style";

const MenuDrawer = (props) => {
  const { isOpen, setIsOpen, listData, name, email } = props;

  const initial = name ? name.charAt(0) : "a";

  const classes = style();

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setIsOpen(open);
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {listData.map(({ name, icon, link, id }) => (
          <Link to={link} key={id}>
            <ListItem button key={id}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );

  return (
    <Drawer className={classes.root} anchor="left" open={isOpen} onClose={toggleDrawer(false)}>
      <div className={classes.details}>
        <CreateIcon className={classes.pencil} />
        <div className={classes.profile}>
          <Avatar variant="circular">{initial}</Avatar>
          {/* <Avatar variant="circular">
            <img src={bg} />
          </Avatar> */}
        </div>
        <span className={classes.name}>
          <AccountCircleIcon color="primary" />
          <Typography variant="subtitle1">{name}</Typography>
        </span>
        <span className={classes.email}>
          <EmailIcon color="primary" />
          <Typography variant="subtitle2">{email}</Typography>
        </span>
      </div>
      <Divider />
      {list("left")}
    </Drawer>
  );
};

export default MenuDrawer;
