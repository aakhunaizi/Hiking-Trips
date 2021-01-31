import { Link } from "react-router-dom";
import {
  TripWrapper,
  TripName,
  TripCity,
  TripLength,
  TripDifficulty,
  TripRating,
} from "../styles";
import { GiPathDistance } from "react-icons/gi";

const TripItem = ({ trip }) => {
  return (
    <TripWrapper>
      <Link to={`/trips/trip/${trip.slug}`}>
        <img alt={trip.name} src={trip.image} />
      </Link>
      <TripName>{trip.name}</TripName>
      <TripCity>{trip.city}</TripCity>
      <GiPathDistance size="30px" />
      <TripLength>{trip.length}</TripLength>
      <h4>KM</h4>
      <TripDifficulty>{trip.difficulty}</TripDifficulty>
      <TripRating>{trip.rating}</TripRating>
    </TripWrapper>
  );
};

export default TripItem;
