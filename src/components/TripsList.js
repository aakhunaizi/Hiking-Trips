import TripItem from "./TripItem";
import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RangeBar from "./RangeBar";
import { Button, Dropdown } from "react-bootstrap";
import { useParams } from "react-router";
import { Buttons, ListWrapper } from "../styles";
import { Link } from "react-router-dom";
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
    <>
      <div>
        <SearchBar setQuery={setQuery} />
      </div>
      <Buttons>
        <div>
          <Button variant="primary" onClick={() => setFilter(!filter)}>
            Filter
          </Button>
        </div>
        <div>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              Difficulty: {difficulty}
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/trips/">
                all
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/trips/easy">
                easy
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/trips/medium">
                medium
              </Dropdown.Item>
              <Dropdown.Item as={Link} to="/trips/hard">
                hard
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Buttons>

      <ListWrapper>{listView()}</ListWrapper>
    </>
  );
};

export default TripsList;
