import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Portfolio from "./Portfolio";
import Services from "./Services";

const Home = () => {
  return (
    <main>
      <Banner />
      <Services />
      <AboutMe />
      <Portfolio />
    </main>
  );
};

export default Home;
