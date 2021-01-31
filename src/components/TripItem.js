const TripItem = ({ trip, setTrip }) => {
  return (
    <div>
      <img onClick={() => setTrip(trip)} alt={trip.name} src={trip.image} />
      <h3>{trip.name}</h3>
      <p>{trip.city}</p>
      <p>{trip.length}</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
    </div>
  );
};

export default TripItem;
