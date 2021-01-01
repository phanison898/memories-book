import { Paper, TextField, Button } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//----------------local-imports--------------------//
import { Login, SignUp } from "../../actions/users";
import { GetPostCount } from "../../actions/posts";
import Popup from "../../components/popup/popup";
import style from "./style";

const Auth = ({ setUsername }) => {
  const classes = style();
  const dispatch = useDispatch();
  const history = useHistory();

  const users = useSelector((state) => state.users);

  const authStatus = users.login.status;
  const [verified, setVerified] = useState(authStatus);
  const loggingMessage = users.login.message;

  const switching = users.switch.status;

  const [loginData, setLoginData] = useState({ email: "", password: "" });

  const [signupData, setSignupData] = useState({ name: "", email: "", password: "", confirmPassword: "" });

  const [isLogin, setIsLogin] = useState(true);

  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState(loggingMessage);

  useEffect(() => {
    setMessage(loggingMessage);
    loggingMessage && setOpen(true);

    const auth_token = window.localStorage.getItem("auth-token");
    const username = window.localStorage.getItem("username");

    if (auth_token !== null && auth_token !== undefined) {
      setVerified(true);
      setTimeout(() => {
        dispatch(GetPostCount());
        setUsername(username);
        history.push(`/${username}`);
      }, 1000);
      return;
    }
  }, [switching, message, authStatus]);

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(Login(loginData));
  };

  const onSignUpSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(SignUp({ name: signupData.name, email: signupData.email, password: signupData.password, confirmPassword: signupData.confirmPassword }));
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
    <>
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
            </form>
          )}
        </Paper>
      </div>
      <Popup open={open} onClose={() => setOpen(false)} title={message} severity={verified ? "success" : "error"} />
    </>
  );
};

export default Auth;
