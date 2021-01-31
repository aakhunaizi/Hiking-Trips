import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { GiPathDistance } from "react-icons/gi";
import { BiRun } from "react-icons/bi";
import {
  DetailWrapper,
  SuggestListWrapper,
  BackButton,
  DetailedImage,
  DetailedName,
  DetailedCity,
  DetailedLength,
  DetailedDifficulty,
  DetailedRating,
  DetailedDescription,
} from "../styles";
import TripItem from "./TripItem";
import { Button } from "react-bootstrap";

const TripDetail = ({ trips }) => {
  const { tripSlug } = useParams();
  const trip = trips.find((trip) => trip.slug === tripSlug);

  const suggestList = trips
    .filter(
      (_trip) => _trip.difficulty === trip.difficulty && trip.id !== _trip.id
    )
    .map((_trip) => <TripItem key={_trip.id} trip={_trip} />);

  if (!trip) return <Redirect to="/trip"></Redirect>;

  return (
    <DetailWrapper>
      <DetailedImage>
        <img alt={trip.name} src={trip.image} />
      </DetailedImage>

      <DetailedName>{trip.name}</DetailedName>
      <DetailedCity>{trip.city}</DetailedCity>
      <GiPathDistance size="50px" />
      <DetailedLength>{trip.length}KM</DetailedLength>
      <br />
      <BiRun size="50px" />
      <DetailedDifficulty> {trip.difficulty} </DetailedDifficulty>

      <DetailedRating>{trip.rating}</DetailedRating>
      <DetailedDescription>{trip.description}</DetailedDescription>

      <Link to="/trips">
        <BackButton>
          <Button variant="primary">Back</Button>
        </BackButton>
      </Link>
      <h1>Recommended Trips</h1>
      <SuggestListWrapper>{suggestList}</SuggestListWrapper>
    </DetailWrapper>
  );
};

export default TripDetail;
