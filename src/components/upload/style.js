import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const Style = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    borderRadius: 0,
    //paddingBottom: "8vh",
  },
  form: {
    width: "100%",
    flex: 0.92,
    borderRadius: 0,
    boxShadow: "none",
    "& > form": {
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      padding: theme.spacing(0, 1),
    },
  },
  form__header: {
    width: "100%",
    flex: 0.1,
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
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& >  .MuiSvgIcon-root": {
      marginLeft: theme.spacing(1) / 2,
      fontSize: "20px",
    },
  },
  form__title: {
    width: "100%",
    flex: 0.1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    margin: theme.spacing(1, 0),
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
  form__description: {
    width: "100%",
    flex: 0.2,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
  form__tags: {
    width: "100%",
    flex: 0.1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    "& > *": {
      marginRight: theme.spacing(1),
    },
  },
  form__upload: {
    width: "100%",
    flex: 0.5,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  uploaded_image: {
    width: "100%",
    height: "300px",
    borderRadius: 0,
    boxShadow: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& > img": {
      objectFit: "cover",
      height: "100%",
    },
  },
  bottom__tools: {
    width: "100%",
    flex: 0.08,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 0,
    boxShadow: "none",
    padding: theme.spacing(1),
    "& > h6": {
      fontSize: "15px",
      flex: 0.7,
      color: "lightgrey",
      marginLeft: theme.spacing(4),
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
