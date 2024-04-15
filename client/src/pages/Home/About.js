import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { useSelector } from "react-redux";
function About() {
  // const skills = ["Javascript", "JQuery", "React", "Node", "Python"];
  // const tools = ["Perforce", "MagicDraw", "Code Collaborator"];
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { imageUrl, description1, description2, technologies, toolsUsed } =
    about;
  return (
    <div className="sm:text-xl">
      <SectionTitle title="My Story" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[40vh]">
          <lottie-player
            src={imageUrl || ""}
            background="transparent"
            speed="1"
            loop
            autoplay
            direction="1"
            mode="normal"
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-10 w-1/2 sm:w-full sm:text-sm">
          <p className="text-white">{description1 || ""}</p>
          <p className="text-white">{description2 || ""}</p>
        </div>
        <div className="flex flex-col gap-10 sm:w-full text-white">
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                  <svg
                    className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Awards and Events
                </h3>
                <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  Released on December 2, 2021
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  Get started with dozens of web components and interactive
                  elements.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
      <div className="flex">
        <div className="py-5 px-3">
          <h1 className="text-tertiary text-2xl sm:text-xl">TECHNOLOGIES:</h1>
          <div className="flex flex-wrap gap-5 mt-3 sm:text-xs sm:gap-2">
            {technologies.map((skill, index) =>
              skill.split(",").map((tech, i) => (
                <div className="border border-tertiary py-2 px-3 " key={index}>
                  <h1 className="text-secondary" key={i}>
                    {tech.trim()}
                  </h1>
                </div>
              ))
            )}
          </div>
        </div>
        <div className="py-5 px-3 border-l-2 border-tertiary ">
          <h1 className="text-tertiary text-2xl sm:text-xl">TOOLS WORKED:</h1>
          <div className="flex flex-wrap gap-5 mt-3 sm:text-xs sm:gap-2">
            {toolsUsed.map((tools, index) =>
              tools.split(",").map((tech, i) => (
                <div className="border border-tertiary py-2 px-3" key={index}>
                  <h1 className="text-secondary" key={i}>
                    {tech.trim()}
                  </h1>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
