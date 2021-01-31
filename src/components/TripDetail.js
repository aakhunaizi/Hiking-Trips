const TripDetail = ({ trip, setTrip }) => {
  return (
    <div>
      <img alt={trip.name} src={trip.image} />
      <h3>{trip.name}</h3>
      <p>{trip.city}</p>
      <p>{trip.length}</p>
      <p>{trip.difficulty}</p>
      <p>{trip.rating}</p>
      <p>{trip.description}</p>
      <button onClick={() => setTrip(null)}>Back</button>
    </div>
  );
};

export default TripDetail;
