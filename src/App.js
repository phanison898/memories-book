import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./style";
import Auth from "./components/auth/auth";
import Header from "./components/header/header";

const App = () => {
  const classes = style();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Header} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
};
export default App;
