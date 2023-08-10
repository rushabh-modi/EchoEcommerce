import React from "react";
import HeroSection from "../features/Home/HeroSection";
import Trusted from "../features/Home/Trusted";
import Services from "../features/Home/Services";
import FeatureProducts from "../features/Home/FeatureProducts";

const Home = () => {
  const data = {
    name: "EchoEcommerce",
  };

  return (
    <>
      <HeroSection myData={data} />;
      <FeatureProducts />
      <Services />
      <Trusted />
    </>
  );
};

export default Home;
