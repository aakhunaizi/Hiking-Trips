import { Title, Description, HomeImage } from "../styles";

const Home = () => {
  return (
    <>
      <Title>Hiking Trips</Title>
      <Description>Let's go on an Adventure!</Description>
      <HomeImage
        alt="hiking"
        src="https://wildlandtrekking.com/content/uploads/2020/03/Tour-du-Mont-Blanc-image4-1.jpg"
        className="homeimage"
      />
    </>
  );
};

export default Home;
