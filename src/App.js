import React, { useState } from 'react';
import './App.css';
import { Link, Redirect, Router, navigate } from "@reach/router";

import HomePage from "./views/HomePage";
import FilmDetails from "./views/FilmDetails";
import PeopleDetails from "./views/PeopleDetails";
import PlanetDetails from "./views/PlanetDetails";

function App() {
  const [rscInput, setRscInput] = useState("films");
  const [idInput, setIdInput] = useState(1);

  const navOnSumbit = event => {
    event.preventDefault();
    navigate(`/${rscInput}/${idInput}`);
  }
  const onrscInputChange = event => {
    setRscInput(event.target.value)
  }
  const onIDInputChange = event => {
    setIdInput(event.target.value)
  }

  return (
    <div className="App">
      {/* Show on EVERY page */}
      <nav>
        <form onSubmit={navOnSumbit}>
          <div className="col">
            <label>Search for: </label>
            <select onChange={onrscInputChange}>
              <option value="films">Films</option>
              <option value="people">People</option>
              <option value="planets">Planets</option>
            </select>
            <label>ID: </label>
            {rscInput === "films" ? <input type="number" onChange={onIDInputChange} value={idInput} min="1" max="7"></input> :<input type="number" onChange={onIDInputChange} value={idInput} min="1"></input>}
            
          </div>
          <div className="col">
            {idInput > 0 ? <input type="submit" value="Search"></input> : <input type="submit" value="Search" style={{visibility:"hidden"}}></input>}
          </div>
        </form>
      </nav>

      {/* Part of page that varies */}
      <Router>
        <HomePage path="/" />
        <FilmDetails path="/films/:id" />
        <PeopleDetails path="/people/:id" />
        <PlanetDetails path="/planets/:id" />

        <Redirect from="/home" to="/" noThrow="true" />
      </Router>
    </div>
  );
}

export default App;
