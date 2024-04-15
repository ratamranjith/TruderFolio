import React from "react";
import { useSelector } from "react-redux";
import profile from "../../resources/PortfolioImages/profile.jpg";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[60vh] bg-primary flex flex-col items-start justify-center gap-8 py-8 sm:h-[70vh]">
      <div>
        <h1 className="text-white text-3xl sm:text-sm">{welcomeText || " "}</h1>
        <h1 className="text-5xl sm:text-xl text-secondary font-semibold">
          <span>{firstName || " "}</span>
          <span>{lastName || " "}</span>
        </h1>
        <h1 className="text-3xl sm:text-2xl text-green-400 border-b-teal-400 font-semibold">
          {caption || ""}
        </h1>
        <p className="text-white w-3/4 sm:invisible">{description || ""}</p>
      </div>
      <br />
      <br />
    </div>
  );
}

export default Intro;
