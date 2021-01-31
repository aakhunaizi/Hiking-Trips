import TripItem from "./TripItem";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RangeBar from "./RangeBar";
import { Dropdown } from "react-bootstrap";
import { useParams } from "react-router";
const TripsList = ({ trips }) => {
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
  const { difficulty } = useParams();

  const filteredByDifficulty = trips
    .filter((trip) => trip.difficulty === difficulty)
    .map((trip) => <TripItem key={trip.id} trip={trip} />);
  console.log(filteredByDifficulty);
  const listView = () => {
    if (filter === false && !difficulty) return <div>{tripList}</div>;
    else if (filter === true) {
      return (
        <div>
          <RangeBar range={range} setRange={setRange} tripList={tripList} />
          {byLength}
        </div>
      );
    } else {
      return <div>{filteredByDifficulty}</div>;
    }
  };

  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Difficulty: {difficulty}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/easy">easy</Dropdown.Item>
          <Dropdown.Item href="/medium">medium</Dropdown.Item>
          <Dropdown.Item href="/hard">hard</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <button onClick={() => setFilter(!filter)}>Filter by length</button>
      <SearchBar setQuery={setQuery} />
      {listView()}
    </div>
  );
};

export default TripsList;
