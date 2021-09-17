import React from "react";
import Coronavirusdata from "../Components/Data/Coronavirusdata";
import Footer from "../Components/Footer";
import NavigationBar from "../Components/NavigationBar";

const Coronavirus = () => {
  return (
    <>
      <NavigationBar />
      <Coronavirusdata />
      <Footer />
    </>
  );
};

export default Coronavirus;
