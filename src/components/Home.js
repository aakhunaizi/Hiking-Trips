import { Title, Description } from "../styles";
import SlideShow from "./SlideShow";
import { Helmet } from "react-helmet";

const Home = ({ trips }) => {
  return (
    <>
      <Helmet>
        <title>Hiking Trips </title>
      </Helmet>
      <Title>Hiking Trips</Title>
      <Description>Let's go on an Adventure!</Description>
      <SlideShow trips={trips} />
    </>
  );
};

export default Home;
