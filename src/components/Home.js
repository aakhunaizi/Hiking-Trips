import { Title, Description } from "../styles";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Title>Hiking Trips</Title>
      <Description>Let's go on an Adventure!</Description>
      <Carousel className="carousel">
        <Carousel.Item>
          <Link to="/trips/trip/mountains-to-fjords">
            <img
              className="d-block w-100"
              src="https://strapi-images-prod.s3.us-west-1.amazonaws.com/northern-lights-skagsanden-beach-lofoten-norway-shutterstock_1120772963_db36cd9e1b.jpeg"
              alt="Mountains to Fjords"
            />
            <Carousel.Caption>
              <h2>Mountains to Fjords</h2>
              <h3>Visit Norway's best landscapes</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/trips/trip/iceland-winter-wonders">
            <img
              className="d-block w-100"
              src="https://wildlandtrekking.com/content/uploads/2020/03/Iceland-Winter-Wonders-Tour-image1-1.jpg"
              alt="Iceland Winter Wonders"
            />
            <Carousel.Caption>
              <h2>Iceland Winter Wonders</h2>
              <h3>An amazing diversity of scenery</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/trips/trip/mule-assisted-classic">
            <img
              className="d-block w-100"
              src="https://wildlandtrekking.com/content/uploads/2020/03/magcc-slides8.jpg"
              alt="Mule-Assisted Classic"
            />
            <Carousel.Caption>
              <h2>Mule-Assisted Classic</h2>
              <h3>Suitable for a broad range of ages and abilities</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/trips/trip/tour-du-mont-blanc">
            <img
              className="d-block w-100"
              src="https://prod-upp-image-read.ft.com/561f60ce-f49a-11e8-ae55-df4bf40f9d0d"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h2>Tour Du Mont Blanc</h2>
              <h3>A must do for all hiking enthusiasts</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/trips/trip/vietnam-sapa-trek">
            <img
              className="d-block w-100"
              src="https://wildlandtrekking.com/content/uploads/2020/03/image1-5.jpg"
              alt="Vietnam Sapa Trek"
            />
            <Carousel.Caption>
              <h2>Vietnam Sapa Trek</h2>
              <h3>An epic adventure in the ancient capital city</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
        <Carousel.Item>
          <Link to="/trips/trip/short-inca-trail">
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/07V7hnHkyF8/maxresdefault.jpg"
              alt="Short Inca Trail"
            />
            <Carousel.Caption>
              <h2>Short Inca Trail</h2>
              <h3>A lodge-based tour highlighting Cusco</h3>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Home;
