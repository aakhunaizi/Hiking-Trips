import TripItem from "./TripItem";

const TripDetail = ({ trip, setTrip, trips }) => {
  const suggestList = trips
    .filter(
      (_trip) => _trip.difficulty === trip.difficulty && trip.id !== _trip.id
    )
    .map((_trip) => <TripItem setTrip={setTrip} key={_trip.id} trip={_trip} />);

  console.log(suggestList);
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
      <div>{suggestList}</div>
    </div>
  );
};

export default TripDetail;
