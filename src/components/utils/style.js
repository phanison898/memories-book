import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const style = makeStyles((theme) => ({
  root: {},
  sidebar: {
    width: "250px",
  },
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: blue[50],
    overflow: "hidden",
  },
  profile: {
    width: "100px",
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: theme.spacing(2),
    "& > *": {
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      boxShadow: "0px 1px 2px black",
      color: "grey",
      fontSize: "4rem",
      fontWeight: 600,
      textTransform: "uppercase",
    },
  },
  info: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    color: "grey",
  },
  text: {
    marginLeft: theme.spacing(1),
  },
  list: {
    width: "100%",
    "& > a": {
      textDecoration: "none",
    },
  },
  listItems: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > *": {
      fontSize: 10,
      color: "black",
    },
  },
  logout: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "black",
    padding: theme.spacing(1),
    backgroundColor: blue[200],
  },
}));

export default style;
