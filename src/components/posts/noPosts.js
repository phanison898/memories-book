import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
//-----------local-imports--------------------//
import Animation from "../animations/animation";
import Create from "../../images/group.json";

const style = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  create: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1, 0),
    },
    "& > .MuiSvgIcon-root": {
      fontSize: "50px",
      color: theme.palette.warning.dark,
      cursor: "pointer",
      transition: "all 0.3s ease",
      "&:hover": {
        fontSize: "55px",
        color: theme.palette.warning.light,
      },
    },
    "& > h6": {
      fontSize: "16px",
      "& > span": {
        color: theme.palette.success.dark,
        fontFamily: "pacifico",
        fontSize: "28px",
        fontWeight: 500,
      },
    },
  },
  anime: {
    width: "90%",
    height: "90%",
  },
}));

const NoPosts = ({ url }) => {
  const classes = style();
  const history = useHistory();
  return (
    <div className={classes.root}>
      <div className={classes.anime}>
        <Animation src={Create} />
      </div>
      <div className={classes.create}>
        <AddCircleIcon onClick={() => history.push(`${url}/add`)} />
        <Typography variant="h6">
          Create your first <span>memory</span>
        </Typography>
      </div>
    </div>
  );
};

export default NoPosts;
