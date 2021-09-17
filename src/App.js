import { Route, Switch } from "react-router-dom";
import Coronavirus from "./Pages/Coronavirus";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/coronavirus" component={Coronavirus} />
    </Switch>
  );
}

export default App;
