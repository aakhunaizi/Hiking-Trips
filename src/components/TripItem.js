import { Link } from "react-router-dom";

const TripItem = ({ trip }) => {
  return (
    <div>
      <Link to={`/trips/${trip.slug}`}>
        <img alt={trip.name} src={trip.image} />
      </Link>
      <h3>{trip.name}</h3>
      <p>{trip.city}</p>
      <p>{trip.length}</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
    </div>
  );
};

export default TripItem;
