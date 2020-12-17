import { makeStyles } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

const Style = makeStyles((theme) => ({
  root: {
    padding: `0 ${theme.spacing(4)}px`,
    paddingTop: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      padding: 0,
    },
  },
  post: {
    width: "inherit",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("md")]: {
      marginBottom: theme.spacing(1),
    },
    borderRadius: 0,
    boxSizing: "border-box",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
    cursor: "pointer",
  },
  avatar: {
    backgroundColor: red[500],
  },
  tags: {
    color: "green",
    fontWeight: "600",
    cursor: "pointer",
  },
}));

export default Style;
