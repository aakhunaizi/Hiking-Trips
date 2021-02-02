import { Title, Description } from "../styles";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import SlideShow from "./SlideShow";

const Home = ({ trips }) => {
  return (
    <>
      <Title>Hiking Trips</Title>
      <Description>Let's go on an Adventure!</Description>
      <SlideShow trips={trips} />
    </>
  );
};

export default Home;
