import trips from "../trips";
import TripItem from "./TripItem";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
const TripsList = () => {
  const [query, setQuery] = useState("");
  const filteredTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(query.toLowerCase())
  );

  const tripList = filteredTrips.map((trip) => (
    <TripItem key={trip.id} trip={trip} />
  ));

  return (
    <div>
      <SearchBar setQuery={setQuery} />
      {tripList}
    </div>
  );
};

export default TripsList;
