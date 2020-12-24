import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./style";
import Auth from "./components/auth/auth";
import Home from "./pages/home/home";
import Animation from "./components/LottieHolder/Animation";
import PageNotFound from "./images/pageNotFound.json";
import OfflineAnimation from "./images/offline.json";
import { Offline, Online } from "react-detect-offline";

const App = () => {
  const classes = style();

  return (
    <>
      <Online>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/auth" component={Auth} />
            <Route path="*" render={() => <Animation src={PageNotFound} />} />
          </Switch>
        </Router>
      </Online>
      <Offline>
        <Animation src={OfflineAnimation} />
      </Offline>
    </>
  );
};
export default App;
