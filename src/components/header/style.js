import { fade, makeStyles } from "@material-ui/core/styles";

const Style = makeStyles((theme) => ({
  root: {
    height: "8vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: "#1976d2",
    "& > div": {
      flex: 1,
      alignItems: "center",
    },
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    "& > *": {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("md")]: {
        marginRight: theme.spacing(0),
      },
    },
  },
  search: {
    position: "relative",
    width: "100%",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default Style;
