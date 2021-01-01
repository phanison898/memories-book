import { makeStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";

const style = makeStyles((theme) => ({
  root: {},
  sidebar: {
    width: "250px",
    [theme.breakpoints.down("xs")]: {
      width: "60vw",
    },
    borderRadius: 0,
  },
  details: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 0,
    paddingTop: theme.spacing(2),
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
      fontSize: "4rem",
      fontWeight: 600,
      textTransform: "uppercase",
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
    borderRadius: 0,
    padding: theme.spacing(1),
    backgroundColor: blue[200],
  },
}));

export default style;
