// import "antd/dist/reset.css";
import React from "react";
import Header from "../../components/Header";
import { Tabs } from "antd";
import AdminIntro from "./AdminIntro";
import AdminAbout from "./AdminAbout";
import AdminCertifications from "./AdminCertifications";
import AdminContact from "./AdminContact";
import AdminProject from "./AdminProject";
import AdminExperience from "./AdminExperience";
import "../../index.css";
import { useSelector } from "react-redux";

const getTabContent = (index) => {
  switch (index) {
    case 0:
      return <AdminIntro />;
    case 1:
      return <AdminAbout />;
    case 2:
      return <AdminExperience />;
    case 3:
      return <AdminProject />;
    case 4:
      return <AdminCertifications />;
    case 5:
      return <AdminContact />;
    default:
      return `Content of Tab ${index + 1}`;
  }
};

function Admin() {
  const pages = [
    "intro",
    "about",
    "experiences",
    "projects",
    "certifications",
    "contact",
  ];

  const { portfolioData } = useSelector((state) => state.root);

  return (
    <div>
      <Header />
      <h1 className="text-2xl px-5 py-2">Admin</h1>
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs
            tabPosition="right"
            items={pages.map((page, index) => {
              const id = String(index);
              return {
                label: `${pages[index]}`.toUpperCase(),
                key: id,
                children: getTabContent(index),
              };
            })}
          />
        </div>
      )}
    </div>
  );
}

export default Admin;
