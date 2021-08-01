import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from "./components/Detail";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/detail/:id">
        <Detail />
      </Route>
    </Switch>
  );
}

export default App;
