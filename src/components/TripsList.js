import trips from "../trips";
import TripItem from "./TripItem";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RangeBar from "./RangeBar";
const TripsList = () => {
  const [query, setQuery] = useState("");

  const [range, setRange] = useState(50);

  const [filter, setFilter] = useState(false);

  const filteredTrips = trips.filter((trip) =>
    trip.name.toLowerCase().includes(query.toLowerCase())
  );

  const tripList = filteredTrips.map((trip) => (
    <TripItem key={trip.id} trip={trip} />
  ));

  const filteredByLength = trips.filter((trip) => trip.length <= range);

  const byLength = filteredByLength.map((trip) => (
    <TripItem key={trip.id} trip={trip} />
  ));

  const listView = () => {
    if (filter === false) return <div>{tripList}</div>;
    else {
      return (
        <div>
          <RangeBar range={range} setRange={setRange} tripList={tripList} />
          {byLength}
        </div>
      );
    }
  };

  return (
    <div>
      <button onClick={() => setFilter(!filter)}>Filter by length</button>
      <SearchBar setQuery={setQuery} />
      {listView()}
    </div>
  );
};

export default TripsList;
