import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const style = makeStyles((theme) => ({
  root: {},
  list: {
    width: 250,
    [theme.breakpoints.down("xs")]: {
      width: "50vw",
    },
    "& > *": {
      "& > a": {
        textDecoration: "none",
        color: "black",
      },
    },
  },
  fullList: {
    width: "auto",
  },
  details: {
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: `${theme.spacing(2)}px 0`,
    backgroundColor: blue[50],
    overflow: "hidden",
    "& > *": {
      width: "100%",
      margin: `${theme.spacing(1) / 2}px 0`,
    },
    "& > span": {
      width: "100%",
      display: "flex",
      "& > *": {
        fontWeight: 600,
        margin: `0 ${theme.spacing(2)}px`,
      },
    },
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
  pencil: {
    position: "absolute",
    top: "10%",
    left: "15%",
    zIndex: 10000,
    color: blue[700],
  },
}));

export default style;
