import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Project from "../components/Project";
// import Work from "../components/Work";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Skills />
      <Project />
      {/* <Work /> */}
      <Contact />
    </div>
  );
};

export default Home;
