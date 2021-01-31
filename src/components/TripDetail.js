import { Redirect, useParams } from "react-router";
import { Link } from "react-router-dom";
import { DetailWrapper, ListWrapper } from "../styles";
import TripItem from "./TripItem";

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
      <h3>{trip.name}</h3>
      <p>{trip.city}</p>
      <p>{trip.length}</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
      <p>{trip.description}</p>
      <Link to="/trips">
        <button>Back</button>
      </Link>

      <ListWrapper>{suggestList}</ListWrapper>
    </DetailWrapper>
  );
};

export default TripDetail;
