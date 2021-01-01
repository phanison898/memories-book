import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  nav: {
    [theme.breakpoints.between("xs", "sm")]: {
      position: "fixed",
      bottom: 0,
      width: "100vw",
      backgroundColor: theme.palette.primary.main,
    },
    [theme.breakpoints.between("sm", "xl")]: {
      position: "fixed",
      top: 0,
      width: "550px",
      backgroundColor: "transparent",
      [theme.breakpoints.between("sm", "md")]: {
        width: "480px",
      },
    },
    height: "8vh",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    color: "white",
    borderRadius: 0,
    boxShadow: "none",
    "& > a": {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      textDecoration: "none",
      color: "white",
      "& > .MuiSvgIcon-root": {
        fontSize: "26px",
        fontWeight: 600,
        transition: "all 0.5s ease",
        "&:hover": {
          color: "black",
        },
      },
    },
  },
}));

export default style;
