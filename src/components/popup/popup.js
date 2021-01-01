import Alert from "@material-ui/lab/Alert";
import SnackBar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const style = makeStyles((theme) => ({
  root: {
    marginTop: "150px",
    opacity: 0.85,
  },
}));

const Transition = (props) => {
  return <Slide {...props} direction="down" />;
};

const Popup = ({ open, onClose, title, severity }) => {
  const classes = style();
  return (
    <SnackBar className={classes.root} anchorOrigin={{ horizontal: "center", vertical: "top" }} open={open} autoHideDuration={3000} onClose={onClose} TransitionComponent={Transition}>
      <Alert severity={severity}>{title}</Alert>
    </SnackBar>
  );
};

export default Popup;
