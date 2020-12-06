import React from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Character from "./components/character";
import CharacterDetail from "./components/characterDetail";

function App() {
  return (
    <Router>
      <Link to="/">
        <h1>Rick and Morty</h1>
      </Link>
      <Switch>
        <Route path="/" exact>
          <Character />
        </Route>
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
      <hr />
    </Router>
  );
}

export default App;
