import { Drawer, Avatar, Divider, Typography, IconButton, Paper } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import GitHubIcon from "@material-ui/icons/GitHub";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
//-------------local-imports----------//
import style from "./style";

const authorData = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/phanikumar.btech/",
    icon: <FacebookIcon />,
  },
  {
    platform: "Github",
    url: "https://github.com/phanison898",
    icon: <GitHubIcon />,
  },
  {
    platform: "Instagram",
    url: "https://www.instagram.com/phanison225/",
    icon: <InstagramIcon />,
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/phanison225/",
    icon: <LinkedInIcon />,
  },
  {
    platform: "Twitter",
    url: "https://twitter.com/phanison225",
    icon: <TwitterIcon />,
  },
  {
    platform: "Youtube",
    url: "https://www.youtube.com/channel/UC4FAldAo2Ow_2F447yggcqA",
    icon: <YouTubeIcon />,
  },
];

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

          <List component="nav">
            <ListItem button>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary={name} />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary={email} />
            </ListItem>
          </List>
        </Paper>

        <Divider />
        <Paper className={classes.about}>
          <List component="nav">
            {authorData.map(({ platform, url, icon }) => (
              <ListItem key={platform} button component="a" href={url} target="_blank">
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={platform} />
              </ListItem>
            ))}
          </List>
        </Paper>
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
