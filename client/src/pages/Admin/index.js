import { useEffect } from "react";
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

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      window.location.href = "/admin-login";
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <h1 className="text-2xl text-primary px-5 py-2">Admin Panel</h1>
        <div className="w-60 h-[1px] bg-gray-500"></div>
        <h1
          className="underline text-primary text-xl cursor-pointer px-3 py-3 bg-teal-400 rounded-md"
          onClick={() => {
            localStorage.removeItem("token");
            window.location.href = "/admin-login";
          }}
        >
          Logout
        </h1>
      </div>
      {portfolioData && (
        <div className="mt-5 p-5">
          <Tabs
            tabPosition="left"
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
