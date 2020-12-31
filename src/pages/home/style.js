import { lightGreen } from "@material-ui/core/colors";
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
  body: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 0,
    boxShadow: "none",
    backgroundColor: "grey",
    zIndex: 1,
  },
  feed: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    paddingTop: "8vh",
    borderRadius: 0,
    boxShadow: "none",
    overflowY: "scroll",
  },
}));

export default style;
