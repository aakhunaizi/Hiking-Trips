import { Link } from "react-router-dom";
import {
  TripWrapper,
  TripName,
  TripCity,
  TripLength,
  TripDifficulty,
  TripRating,
} from "../styles";

const TripItem = ({ trip }) => {
  return (
    <TripWrapper>
      <Link to={`/trips/trip/${trip.slug}`}>
        <img alt={trip.name} src={trip.image} />
      </Link>
      <TripName>{trip.name}</TripName>
      <TripCity>{trip.city}</TripCity>
      <TripLength>{trip.length}</TripLength>
      <TripDifficulty>{trip.difficulty}</TripDifficulty>
      <TripRating>{trip.rating}</TripRating>
    </TripWrapper>
  );
};

export default TripItem;
