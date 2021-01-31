import "./App.css";
import TripsList from "./components/TripsList";
import React, { useState } from "react";
import trips from "./trips";
import TripDetail from "./components/TripDetail";
import { Route, Switch } from "react-router";

function App() {
  const [_trips, setTrips] = useState(trips);

  // const display = trip ? (
  //   <TripDetail trip={trip} setTrip={setTrip} trips={trips} />
  // ) : (
  //   <TripsList trips={_trips} setTrip={setTrip} />
  // );

  return (
    <div className="App">
      <Switch>
        {/* <Route path="/trips/:difficulty"></Route> */}
        <Route path="/trips/:tripSlug">
          <TripDetail trips={trips} />
        </Route>
        <Route path="/:difficulty">
          <TripsList trips={_trips} />
        </Route>
        <Route path="/">
          <TripsList trips={_trips} />
        </Route>
      </Switch>
      {/* {display} */}
    </div>
  );
}

export default App;
