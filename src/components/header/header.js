import { AppBar, Toolbar, Typography, Hidden, IconButton, Grid } from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { makeStyles } from "@material-ui/core/styles";

const Header = () => {
  const classes = styles();

  return (
    <Grid container className={classes.root}>
      <AppBar variant="elevation" className={classes.appBar} elevation={0}>
        <Toolbar>
          <Hidden mdUp>
            <IconButton edge="start" color="inherit">
              <MenuRoundedIcon />
            </IconButton>
          </Hidden>

          <Typography variant="h6" className={classes.title}>
            Memory book
          </Typography>
        </Toolbar>
      </AppBar>
    </Grid>
  );
};

const styles = makeStyles((theme) => ({
  root: {
    height: "inherit",
  },
  appBar: {
    height: "inherit",
    justifyContent: "center",
    backgroundColor: "#1976d2",
  },
  title: {
    fontFamily: "Pacifico",
  },
}));

export default Header;
