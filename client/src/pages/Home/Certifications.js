import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// import { certifications } from "../../resources/certifications"; // Correct import path
import { useSelector } from "react-redux";

function Certifications() {
  const [selectedItems, setSelectedItems] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { certification } = portfolioData;
  return (
    <div>
      <SectionTitle title="certifications" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#3affbd] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {certification.map((project, index) => (
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
                {project.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <div>
            <h1 className="text-secondary text-xl">
              {certification[selectedItems].description}
            </h1>
            <h1 className="text-white text-2xl">
              <a
                href={certification[selectedItems].link}
                key={certification[selectedItems].link}
                target="_blank"
                rel="noreferrer"
              >
                Certification Link
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certifications;
