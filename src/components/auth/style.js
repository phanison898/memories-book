import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const style = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    boxSizing: "border-box",
    backgroundColor: "lightgrey",
    overflow: "hidden",
  },
  paper: {
    width: "420px",
    [theme.breakpoints.down("xs")]: {
      width: "95vw",
      height: "98vh",
    },
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: theme.spacing(2),
    overflow: "hidden",
    margin: theme.spacing(1),
  },
  nav: {
    width: "100%",
    height: "50px",
    display: "flex",
    "& > ul": {
      width: "100%",
      height: "100%",
      listStyle: "none",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& > li": {
        height: "100%",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        backgroundColor: theme.palette.primary.main,
        color: "white",
        fontWeight: "600",
        fontSize: "1.3rem",
        //borderBottom: `4px solid ${theme.palette.primary.main}`,
      },
    },
  },
  active: {
    backgroundColor: "white",
    color: theme.palette.primary.main,
  },
  error: {
    width: "auto",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: `${theme.spacing(2)}px 0`,
    padding: `0 ${theme.spacing(2)}px`,
    borderRadius: theme.spacing(1),
    //backgroundColor: red[600],
    color: red[600],
  },
  form: {
    width: "100%",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: `0 ${theme.spacing(4)}px`,
    "& > *": {
      margin: `${theme.spacing(2)}px 0`,
    },
  },
}));

export default style;
