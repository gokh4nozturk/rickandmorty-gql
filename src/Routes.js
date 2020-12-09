import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/home";
import Register from "./pages/register.js";
import Login from "./pages/login";
import Profile from "./pages/currentUser";
import Character from "./components/character";
import CharacterDetail from "./components/character/characterDetail";
import Episode from "./components/episode";
import EpisodeDetail from "./components/episode/episodeDetail";
import Location from "./components/location";
import LocationDetail from "./components/location/locationDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} />
        <Route path="/characters" component={Character} />
        <Route path="/episodes" component={Episode} />
        <Route path="/locations" component={Location} />
        <Route path="/character/:id" component={CharacterDetail} />
        <Route path="/episode/:id" component={EpisodeDetail} />
        <Route path="/location/:id" component={LocationDetail} />
      </Switch>
    </Router>
  );
}

export default App;
