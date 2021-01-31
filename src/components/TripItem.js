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
import { BiRun } from "react-icons/bi";

const TripItem = ({ trip }) => {
  return (
    <TripWrapper>
      <Link to={`/trips/trip/${trip.slug}`}>
        <img alt={trip.name} src={trip.image} />
      </Link>
      <TripName>{trip.name}</TripName>
      <TripCity>{trip.city}</TripCity>
      <GiPathDistance size="30px" />
      <TripLength>{trip.length} KM</TripLength>
      <BiRun size="30px" />
      <TripDifficulty trip={trip}>
        {trip.difficulty.toUpperCase()}
      </TripDifficulty>
      <TripRating>{trip.rating}</TripRating>
    </TripWrapper>
  );
};

export default TripItem;
