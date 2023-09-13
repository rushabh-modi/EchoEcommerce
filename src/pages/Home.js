import MainSection from "../features/Home/MainSection";
import Trusted from "../features/Home/Trusted";
import Services from "../features/Home/Services";
import FeatureProducts from "../features/Home/FeatureProducts";

const Home = () => {
  return (
    <>
      <MainSection />;
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
