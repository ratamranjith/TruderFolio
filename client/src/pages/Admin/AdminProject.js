// AdminProject.js
import React, { useState } from "react";
import { Form, message, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";

function AdminProject() {
  const { portfolioData } = useSelector((state) => state.root);
  const { project } = portfolioData;
  const dispatch = useDispatch();

  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    title: portfolioData.project.title || "",
    company: portfolioData.project.company || "",
    image: portfolioData.project.image || "",
    description: portfolioData.project.description || "",
    technologies: portfolioData.project.technologies || "",
    toolsUsed: portfolioData.project.toolsUsed || "",
    link: portfolioData.project.link || "",
  });

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (formData.id) {
        // Update existing project
        response = await axios.post("/api/portfolio/update-project", values);
      } else {
        // Add new project
        response = await axios.post("/api/portfolio/add-project", values);
      }
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
        setShowEditModal(false);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  const handleDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-project", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));

        // Filter out the deleted item from the project array
        const updatedProject = project.filter((proj) => proj._id !== item._id);
        dispatch({
          type: "root/SetPortfolioData",
          payload: { ...portfolioData, project: updatedProject },
        });
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  return (
    <div>
      <div className="flex justify-center m-3">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={handleEdit}
        >
          Add Project
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 sm:grid-cols-1">
        {project.map((prj, index) => (
          <div
            className="shadow border-2 p-5 border-gray-400 text-primary border-b-gray-950"
            key={index}
          >
            <h1>{prj.period}</h1>
            <hr />
            <h1>Company:{prj.company}</h1>
            <h1>Role: {prj.title}</h1>
            <h1>Description:{prj.description}</h1>
            <div className="flex justify-end gap-5">
              <button
                className="bg-tertiary text-white px-5 py-1 m-3"
                onClick={() => handleEdit(prj)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-5 py-1 m-3"
                onClick={() => handleDelete(prj)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={showEditModal}
        title="Edit Project"
        onCancel={() => setShowEditModal(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} initialValues={formData}>
          <Form.Item name="title" label="Title">
            <input
              placeholder="Enter Project Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="company" label="company">
            <input
              placeholder="Enter company / Self-project"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="image" label="Image (URL)">
            <input
              placeholder="Project Image Location"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea
              placeholder="Project Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="technologies" label="Technologies">
            <input
              placeholder="Technologies used in the project"
              value={formData.technologies}
              onChange={(e) =>
                setFormData({ ...formData, technologies: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="toolsUsed" label="Tools Used">
            <input
              placeholder="Tools used in the project"
              value={formData.toolsUsed}
              onChange={(e) =>
                setFormData({ ...formData, toolsUsed: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <input
              placeholder="Project Link"
              value={formData.link}
              onChange={(e) =>
                setFormData({ ...formData, link: e.target.value })
              }
            />
          </Form.Item>
          <div className="flex justify-end w-full">
            <button
              className="bg-primary text-white px-5 py-2 mr-3"
              onClick={() => setShowEditModal(false)}
            >
              Cancel
            </button>
            <button type="primary" className="bg-primary text-white px-5 py-2">
              {formData.id ? "Update" : "Add"} Project
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminProject;
