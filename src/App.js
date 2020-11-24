import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import Character from "./components/character";
import CharacterDetail from "./components/characterDetail";

function App() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(1);
  }, []);

  return (
    <Router>
      <Link to="/">
        <h1>Rick and Morty</h1>
      </Link>
      <Switch>
        <Route path="/" exact>
          <Character page={page} />
        </Route>
        <Route path="/character/:id" component={CharacterDetail} />
      </Switch>
      <hr />
      <div>
        <button
          onClick={() => {
            setPage(page - 1);
          }}
        >
          prev
        </button>
        <button
          onClick={() => {
            setPage(page + 1);
          }}
        >
          next
        </button>
      </div>
    </Router>
  );
}

export default App;
