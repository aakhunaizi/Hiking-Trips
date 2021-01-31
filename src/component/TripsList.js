import trips from "../trips";
import TripItem from "./TripItem";

const TripsList = () => {
  const tripList = trips.map((trip) => <TripItem key={trip.id} trip={trip} />);

  return <div>{tripList}</div>;
};

export default TripsList;
