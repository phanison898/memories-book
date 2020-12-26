import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  post: {
    width: "100%",
  },
  card: {
    borderRadius: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  media: {
    width: "100%",
    height: "300px",
  },
}));

export default Style;
