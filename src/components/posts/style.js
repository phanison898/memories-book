import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  loading: {
    width: "80%",
    height: "300px",
  },
  posts: {
    width: "100%",
    height: "auto",
  },
  post: {
    width: "100%",
    height: "auto",
  },
  card: {
    borderRadius: 0,
    marginBottom: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.warning.dark,
  },
  media: {
    objectFit: "contain",
    width: "100%",
    height: "300px",
  },
  tags: {
    color: theme.palette.success.dark,
    cursor: "pointer",
  },
  skeleton: {
    marginBottom: theme.spacing(1),
  },
}));

export default Style;
