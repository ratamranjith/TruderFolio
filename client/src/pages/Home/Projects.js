import React, { useState } from "react";
import SectionTitle from "../../components/SectionTitle";
// import { projects } from "../../resources/projects"; // Correct import path
import { useSelector } from "react-redux";
function Projects() {
  const [selectedItems, setSelectedItems] = useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#3affbd] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {project.map((pro, index) => (
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
                {pro.title}
              </h1>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-10 sm:flex-col">
          {/* <img
            key={project[selectedItems]}
            src={project[selectedItems].image[selectedItems]}
            alt=""
            className="h-30 w-72"
          /> */}
          <div>
            <h1 className="text-secondary text-xl">
              {project[selectedItems].description}
            </h1>
            <h1 className="text-white text-2xl">
              <a
                href={project[selectedItems].link}
                key={project[selectedItems].link}
                target="_blank"
                rel="noreferrer"
              >
                Project Link
              </a>
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
