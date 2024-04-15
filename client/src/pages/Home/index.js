import React from "react";
import Header from "../../components/Header";
import Intro from "./intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Certifications from "./Certifications";
import Contact from "./Contact";
import Footer from "./Footer";
import RightSider from "./RightSider";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData);
  return (
    <div>
      <Header />
      {portfolioData && (
        <div className="bg-primary px-40 sm:px-5">
          <Intro />
          <About />
          <Experiences />
          <Projects />
          <Certifications />
          <Contact />
          <Footer />
          <RightSider />
        </div>
      )}
    </div>
  );
}

export default Home;
