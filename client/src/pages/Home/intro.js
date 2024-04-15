import React from "react";
import { useSelector } from "react-redux";

function Intro() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[50vh] bg-primary flex flex-col items-start justify-center gap-8 py-8">
      <h1 className="text-white text-3xl">{welcomeText || " "}</h1>
      <h1 className="text-5xl sm:text-3xl text-secondary font-semibold">
        <span>{firstName || " "}</span>
        <span>{lastName || " "}</span>
      </h1>
      <h1 className="text-3xl sm:text-2xl text-green-400 border-b-teal-400 font-semibold">
        {caption || ""}
      </h1>
      <p className="text-white w-3/4">{description || ""}</p>
      <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded-b-2xl button-view">
        View More
      </button>
      <br />
      <br />
    </div>
  );
}

export default Intro;
