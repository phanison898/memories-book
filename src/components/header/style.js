import { makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  header: {
    position: "fixed",
    top: 0,
    width: "100vw",
    height: "8vh",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 0,
    padding: `0 ${theme.spacing(2)}px`,
    backgroundColor: theme.palette.info.dark,
  },
  header__title: {
    color: "white",
    fontFamily: "pacifico",
  },
  header__postsCount: {
    color: "white",
  },
}));

export default Style;
