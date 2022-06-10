import React from "react";
import AboutMe from "./AboutMe";
import Banner from "./Banner";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Services from "./Services";

const Home = () => {
  return (
    <main>
      <Banner />
      <Services />
      <AboutMe />
      <Portfolio />
      <Contact />
    </main>
  );
};

export default Home;
