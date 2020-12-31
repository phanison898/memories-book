import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Offline, Online } from "react-detect-offline";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
//--------------local-imports-------------//
import Animation from "./components/LottieHolder/Animation";
import OfflineAnimation from "./images/offline.json";
import PageNotFound from "./images/404.json";
import Auth from "./components/auth/auth";
import Home from "./pages/home/home";

const App = () => {
  const { theme } = useSelector((state) => state.util);

  const [themeStatus, setThemeStatus] = useState(theme);
  const [username, setUsername] = useState(window.localStorage.getItem("username"));

  const MuiTheme = createMuiTheme({
    palette: {
      type: themeStatus ? "dark" : "light",
    },
  });

  useEffect(() => {
    setThemeStatus(theme);
  }, [theme]);

  return (
    <ThemeProvider theme={MuiTheme}>
      {/* if online --> displays our application */}
      <Online>
        <Router>
          <Switch>
            {/* Path to Home page */}
            <Route path={`/${username}`} render={({ match }) => <Home match={match} />} />

            {/* Path to authentication page (login/sign-up) */}
            <Route exact path="/" render={() => <Auth setUsername={setUsername} />} />

            {/* default Path... if user enter non exiting path
             * loads 404 page not found page
             */}
            <Route path="*" render={() => <Animation src={PageNotFound} />} />
          </Switch>
        </Router>
      </Online>

      {/* if offline --> displays connection failed lottie animation */}
      <Offline>
        <Animation src={OfflineAnimation} />
      </Offline>
    </ThemeProvider>
  );
};
export default App;
