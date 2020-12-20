import { makeStyles } from "@material-ui/core/styles";
import { Paper, TextField, Button, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { SignIn } from "../../actions/users";
import { GetPostData } from "../../actions/posts";
import { useDispatch, connect } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";

const style = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "inherit",
    backgroundColor: "grey",
    padding: theme.spacing(1),
  },
  main: {
    width: "100%",
    height: "inherit",
    backgroundColor: "white",
    padding: theme.spacing(2),
  },
  form: {
    width: "100%",
    height: "inherit",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "& > *": {
      margin: `${theme.spacing(2)}px 0`,
    },
  },
  heading: {
    flexBasis: "10%",
    fontSize: "26px",
    fontWeight: "600",
  },
}));

const SignUp = ({ users }) => {
  const { status, message } = users;
  const classes = style();
  const dispatch = useDispatch();
  const history = useHistory();

  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(SignIn(signupData));
      const s = await users.status;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.main} variant="elevation">
        <form noValidate autoComplete="off" className={classes.form} onSubmit={onSubmit}>
          <Typography variant="subtitle1" style={{ color: status === "ERROR" ? "red" : "green" }}>
            {message}
          </Typography>
          <Typography className={classes.heading} variant="subtitle1">
            Sign-Up
          </Typography>
          <TextField required label="email" variant="outlined" fullWidth value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}></TextField>
          <TextField required label="password" type="password" variant="outlined" fullWidth value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}></TextField>
          <Button type="submit" size="large" fullWidth variant="contained" color="primary">
            Submit
          </Button>
        </form>
      </Paper>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.users,
});

export default connect(mapStateToProps)(SignUp);
