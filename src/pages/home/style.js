import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  root: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },
  header: {
    width: "100vw",
    flex: 0.08,
  },
  body: {
    width: "550px",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    flex: 0.92,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    overflowY: "scroll",
  },
  upload: {
    width: "100%",
    height: "auto",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export default style;
