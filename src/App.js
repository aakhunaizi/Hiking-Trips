import logo from "./logo.svg";
import "./App.css";
import TripsList from "./components/TripsList";
import { useState } from "react";
import trips from "./trips";
import TripDetail from "./components/TripDetail";
function App() {
  const [trip, setTrip] = useState(null);
  const [_trips, setTrips] = useState(trips);
  const display = trip ? (
    <TripDetail trip={trip} setTrip={setTrip} />
  ) : (
    <TripsList trips={_trips} setTrip={setTrip} />
  );

  return <div className="App">{display}</div>;
}

export default App;
