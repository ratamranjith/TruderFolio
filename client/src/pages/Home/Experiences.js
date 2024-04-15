import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// import { experiences } from "../../resources/experience";
import { useSelector } from "react-redux";
function Experiences() {
  const [selectedItems, setSelectedItems] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  return (
    <div className="flex flex-col">
      <SectionTitle title="Experience" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#3affbd] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experience.map((exp, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedItems(index);
              }}
            >
              <h1
                key={index}
                className={`text-xl px-5 cursor-pointer ${
                  selectedItems === index
                    ? "text-tertiary border-tertiary border-l-4 -ml-[2px] bg-[#1a7f5a31] py-3"
                    : "text-white"
                }`}
              >
                {exp.period}
              </h1>
            </div>
          ))}
        </div>

        <div>
          <h1 className="text-secondary text-2xl ">
            {experience[selectedItems].title}
          </h1>
          <h1 className="text-tertiary text-xl">
            {experience[selectedItems].company}
          </h1>
          <h1 className="text-white text-sm">
            {experience[selectedItems].description}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
