import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  root: {
    boxSizing: "border-box",
  },
  header: {
    height: "8vh",
  },
  body: {
    position: "absolute",
    top: "8vh",
    height: "92vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  posts_section: {
    height: "inherit",
    overflowY: "scroll",
  },
}));

export default style;
