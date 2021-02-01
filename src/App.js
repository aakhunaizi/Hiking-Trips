import "./App.css";
import TripsList from "./components/TripsList";
import React, { useState } from "react";
import trips from "./trips";
import TripDetail from "./components/TripDetail";
import { Route, Switch } from "react-router";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  const [_trips, setTrips] = useState(trips);

  const [lengthUnit, setLengthUnit] = useState(false);

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/trips/trip/:tripSlug">
          <TripDetail
            trips={trips}
            lengthUnit={lengthUnit}
            setLengthUnit={setLengthUnit}
          />
        </Route>
        <Route path="/trips/:difficulty">
          <TripsList
            trips={_trips}
            lengthUnit={lengthUnit}
            setLengthUnit={setLengthUnit}
          />
        </Route>
        <Route path="/trips">
          <TripsList
            trips={_trips}
            lengthUnit={lengthUnit}
            setLengthUnit={setLengthUnit}
          />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
