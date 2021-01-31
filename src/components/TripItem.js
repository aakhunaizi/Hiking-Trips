import { Link } from "react-router-dom";
import { TripWrapper } from "../styles";

const TripItem = ({ trip }) => {
  return (
    <TripWrapper>
      <Link to={`/trips/${trip.slug}`}>
        <img alt={trip.name} src={trip.image} />
      </Link>
      <p>{trip.name}</p>
      <p>{trip.city}</p>
      <p>{trip.length}</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
    </TripWrapper>
  );
};

export default TripItem;
