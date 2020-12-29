import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
  },
  header: {
    position: "relative",
    width: "auto",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
  },
  feed: {
    position: "absolute",
    top: "8vh",
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    height: "auto",
    display: "flex",
    alignItems: "flex-start",
    zIndex: 1,
  },
}));

export default style;
