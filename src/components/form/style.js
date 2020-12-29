import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const Style = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: 0,
    boxShadow: "none",
    overflowY: "scroll",
    backgroundColor: "lightgrey",
  },
  form: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflowX: "hidden",
    overflowY: "scroll",
    padding: theme.spacing(1),
  },
  form__header: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header__title: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 600,
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
  header__post__button: {
    cursor: "pointer",
    display: "block",
  },
  form__title: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${theme.spacing(1)}px 0`,
  },
  form__description: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: `${theme.spacing(1)}px 0`,
  },
  form__tags: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: `${theme.spacing(1)}px 0`,
  },
  form__upload: {
    width: "100%",
    height: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uploaded_image: {
    width: "100%",
    height: "100%",
    borderRadius: 0,
    boxShadow: "none",
    backgroundColor: "lightgrey",
    "& > img": {
      objectFit: "cover",
      height: "100%",
    },
  },
  bottom__tools: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 0,
    boxShadow: "none",
    padding: theme.spacing(1),
    backgroundColor: "lightgrey",
    "& > h6": {
      fontSize: "16px",
      flex: 0.7,
      color: "grey",
    },
    "& > label": {
      flex: 0.3,
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  },
}));

export default Style;
