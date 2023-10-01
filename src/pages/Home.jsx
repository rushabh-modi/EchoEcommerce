import MainSection from '../components/home/MainSection';
import Trusted from '../components/home/Trusted';
import Services from '../components/home/Services';
import FeatureProducts from '../features/product/FeatureProducts';

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
