import { fade, makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  menu: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchBox: {
    width: "540px",
    height: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightgrey",
    borderRadius: theme.spacing(1),
    overflow: "hidden",
    "& > *": {
      width: "100%",
      backgroundColor: "white",
    },
  },
}));

export default Style;
