import { makeStyles } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";

const Style = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "inherit",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    "& > *": {
      margin: `0 ${theme.spacing(1)}px`,
    },
    overflow: "hidden",
  },
  heading: {
    display: "flex",
    justifyContent: "center",
    fontSize: "20px",
    fontWeight: 700,
  },
  fileUpload: {},
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "space-between",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    "& > *": {
      width: "48%",
    },
  },
  upload: {
    position: "relative",
    height: "40vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: theme.spacing(1),
    boxShadow: "2px 2px 2px rgba(0,0,0,0.3)",
    "& > img": {
      width: "100%",
      height: "100%",
      borderRadius: theme.spacing(1),
    },
  },
  uploadIcon: {
    position: "absolute",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.05)",
    transition: "ease-in-out 0.1s",
    "&:hover": {
      backgroundColor: "rgba(0,0,0,0.1)",
    },
    "& > *": {
      width: "60%",
      height: "60%",
      color: theme.palette.primary.main,
    },
  },
}));

export default Style;
