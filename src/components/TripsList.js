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

  const maxRange = () => {
    let max = 0;
    trips.forEach((trip) => {
      if (trip.length > max) max = trip.length;
    });
    return max;
  };

  const minRange = () => {
    let min = maxRange();
    trips.forEach((trip) => {
      if (trip.length < min) min = trip.length;
    });
    return min;
  };

  const [range, setRange] = useState(maxRange());

  //const [filter, setFilter] = useState(false);

  const { difficulty } = useParams();

  const difficultyDrop = () => {
    if (difficulty) return `${difficulty.toUpperCase()}`;
    else return `ALL`;
  };

  // const filteredTrips = trips
  //   .filter((trip) => trip.name.toLowerCase().includes(query.toLowerCase()))
  //   .map((trip) => <TripItem key={trip.id} trip={trip} />);

  // const filteredByLength = trips
  //   .filter((trip) => trip.length <= range)
  //   .map((trip) => <TripItem key={trip.id} trip={trip} />);

  // const filteredByDifficulty = trips
  //   .filter((trip) => trip.difficulty === difficulty)
  //   .map((trip) => <TripItem key={trip.id} trip={trip} />);

  const filtering = (filterType, filterList) => {
    if (filterType === "search") {
      return filterList.filter((trip) =>
        trip.name.toLowerCase().includes(query.toLowerCase())
      );
    } else if (filterType === "length") {
      return filterList.filter((trip) => trip.length <= range);
    } else {
      return filterList.filter((trip) => trip.difficulty === difficulty);
    }
  };

  const listView = () => {
    let filtered = [];
    if (query !== "" && difficulty) {
      filtered = filtering("search", trips);
      filtered = filtering("length", filtered);
      filtered = filtering("difficulty", filtered);
      return filtered.map((trip) => <TripItem key={trip.id} trip={trip} />);
    } else if (query !== "" && !difficulty) {
      filtered = filtering("search", trips);
      filtered = filtering("length", filtered);
      return filtered.map((trip) => <TripItem key={trip.id} trip={trip} />);
    } else if (query === "" && difficulty) {
      filtered = filtering("length", trips);
      filtered = filtering("difficulty", filtered);
      return filtered.map((trip) => <TripItem key={trip.id} trip={trip} />);
    } else {
      filtered = filtering("length", trips);
      return filtered.map((trip) => <TripItem key={trip.id} trip={trip} />);
    }
  };

  // onClick={() => setFilter(!filter)}

  return (
    <>
      <SearchBar setQuery={setQuery} />

      <Buttons>
        <RangeBar
          range={range}
          setRange={setRange}
          min={minRange()}
          max={maxRange()}
        />

        <Dropdown>
          <Dropdown.Toggle id="dropdown-basic">
            {difficultyDrop()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/trips/">
              ALL
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/trips/easy">
              EASY
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/trips/medium">
              MEDUIM
            </Dropdown.Item>
            <Dropdown.Item as={Link} to="/trips/hard">
              HARD
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Buttons>

      <ListWrapper>{listView()}</ListWrapper>
    </>
  );
};

export default TripsList;
