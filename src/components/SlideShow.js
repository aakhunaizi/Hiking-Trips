import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const SlideShow = ({ trips }) => {
  const tripsSlides = trips.map((trip) => {
    return (
      <Carousel.Item key={trip.id}>
        <Link to={`/trips/trip/${trip.slug}`}>
          <img
            className="d-block w-100"
            src={trip.slideImage}
            alt={trip.name}
          />
          <Carousel.Caption>
            <h2>{trip.name}</h2>
            <h3>{trip.caption}</h3>
          </Carousel.Caption>
        </Link>
      </Carousel.Item>
    );
  });

  return <Carousel>{tripsSlides}</Carousel>;
};

export default SlideShow;
