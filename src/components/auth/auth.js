import { Paper, TextField, Button, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { Login, SignUp } from "../../actions/users";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import style from "./style";

const Auth = () => {
  const classes = style();
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector((state) => state.users);

  const authStatus = users.login.status;
  const message = users.login.message;

  const switching = users.switch.status;

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (window.localStorage.getItem("auth-token") !== null && window.localStorage.getItem("auth-token") !== undefined) {
      // Authentication success : goto home page
      axios.defaults.headers.common["auth-token"] = window.localStorage.getItem("auth-token");
      history.push("/");
      return;
    }
  }, [switching]);

  const onLoginSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(Login(loginData));
    } catch (error) {
      console.log(error);
    }
  };

  const onSignUpSubmit = (e) => {
    e.preventDefault();

    if (signupData.password.localeCompare(signupData.confirmPassword)) return console.log("Password should be same");

    try {
      dispatch(SignUp({ name: signupData.name, email: signupData.email, password: signupData.password }));
    } catch (error) {
      console.log(error);
    }
  };

  const clickLoginButton = () => {
    setIsLogin(true);
    setSignupData({ name: "", email: "", password: "", confirmPassword: "" });
  };

  const clickSignupButton = () => {
    setIsLogin(false);
    setLoginData({ email: "", password: "" });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper} variant="elevation" color="primary">
        <nav className={classes.nav}>
          <ul>
            <li onClick={clickLoginButton} style={isLogin ? { backgroundColor: "white", color: "blue" } : {}}>
              Login
            </li>
            <li onClick={clickSignupButton} style={!isLogin ? { backgroundColor: "white", color: "blue" } : {}}>
              Sign-Up
            </li>
          </ul>
        </nav>
        {isLogin ? (
          // Login form

          <form noValidate autoComplete="off" className={classes.form} onSubmit={onLoginSubmit}>
            <TextField required label="email" type="email" variant="standard" fullWidth value={loginData.email} onChange={(e) => setLoginData({ ...loginData, email: e.target.value })} />
            <TextField required label="password" type="password" variant="standard" fullWidth value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
            <Typography variant="caption" className={classes.error}>
              {!authStatus && message}
            </Typography>
            <Button type="submit" size="large" fullWidth variant="contained" color="primary">
              Submit
            </Button>
          </form>
        ) : (
          //Sign-Up form

          <form noValidate autoComplete="off" className={classes.form} onSubmit={onSignUpSubmit}>
            <TextField required label="name" variant="standard" fullWidth value={signupData.name} onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}></TextField>
            <TextField required label="email" variant="standard" fullWidth value={signupData.email} onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}></TextField>
            <TextField required label="password" type="password" variant="standard" fullWidth value={signupData.password} onChange={(e) => setSignupData({ ...signupData, password: e.target.value })}></TextField>
            <TextField required label="confirm password" type="password" variant="standard" fullWidth value={signupData.confirmPassword} onChange={(e) => setSignupData({ ...signupData, confirmPassword: e.target.value })}></TextField>
            <Button type="submit" size="large" fullWidth variant="contained" color="primary">
              Submit
            </Button>
            <Typography variant="caption" className={classes.error}>
              {!authStatus && message}
            </Typography>
          </form>
        )}
      </Paper>
    </div>
  );
};

export default Auth;
