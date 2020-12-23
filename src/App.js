import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import style from "./style";
import Auth from "./components/auth/auth";
import Home from "./pages/home/home";

const App = () => {
  const classes = style();

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
};
export default App;
