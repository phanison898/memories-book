import { makeStyles } from "@material-ui/core/styles";
import image from "./images/bg.svg";

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
    background: "linear-gradient(to right, #00c6ff, #0072ff)",
    //backgroundImage: `url(${image})`,
    //backgroundBlendMode: "multiply",
  },
  posts_section: {
    height: "inherit",
    overflowY: "scroll",
  },
}));

export default style;
