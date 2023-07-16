import React from "react";
import HeroSection from "../components/HomeFeatures/HeroSection";
import Trusted from "../components/HomeFeatures/Trusted";
import Services from "../components/HomeFeatures/Services";
import FeatureProducts from "../components/HomeFeatures/FeatureProducts";

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
