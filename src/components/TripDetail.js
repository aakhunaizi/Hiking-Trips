import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import {
  DetailWrapper,
  ListWrapper,
  SuggestListWrapper,
  BackButton,
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
      <img alt={trip.name} src={trip.image} />
      <p>{trip.name}</p>
      <p>{trip.city}</p>
      <p>{trip.length}</p>
      <p>{trip.difficulty} </p>
      <p>{trip.rating}</p>
      <p>{trip.description}</p>

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
