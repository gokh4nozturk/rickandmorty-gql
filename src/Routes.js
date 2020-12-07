import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/register.js";
import Login from "./pages/login";
import CharacterDetail from "./components/character/characterDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
    </Router>
  );
}

export default App;
