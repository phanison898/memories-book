import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Offline, Online } from "react-detect-offline";
//--------------local-imports-------------//
import Animation from "./components/LottieHolder/Animation";
import OfflineAnimation from "./images/offline.json";
import PageNotFound from "./images/404.json";
import Auth from "./components/auth/auth";
import Home from "./pages/home/home";
import Form from "./components/form/form";

const App = () => {
  return (
    <>
      {/* if online --> displays our application */}
      <Online>
        {console.log(`${process.env.PUBLIC_URL}/robots.txt`)}
        <Router>
          <Switch>
            {/* Path to Home page */}
            <Route exact path="/" component={Home} />

            {/* Path to authentication page (login/sign-up) */}
            <Route path="/auth" component={Auth} />

            {/* Path to add post page*/}
            <Route path="/add" component={Form} />

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
    </>
  );
};
export default App;
