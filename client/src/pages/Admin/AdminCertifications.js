// AdminCertification.js
import React, { useState } from "react";
import { Form, message, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";

function AdminCertification() {
  const { portfolioData } = useSelector((state) => state.root);
  console.log(portfolioData);
  const { certification } = portfolioData;
  const dispatch = useDispatch();

  const [showEditModal, setShowEditModal] = useState(false);
  const [formData, setFormData] = useState({
    title: portfolioData.certification.title || "",
    image: portfolioData.certification.image || "",
    provider: portfolioData.certification.provider || "",
    description: portfolioData.certification.description || "",
    link: portfolioData.certification.link || "",
  });

  const handleEdit = () => {
    setShowEditModal(true);
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (formData.id) {
        // Update existing certification
        response = await axios.post(
          "/api/portfolio/update-certification",
          values
        );
      } else {
        // Add new certification
        response = await axios.post("/api/portfolio/add-certification", values);
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
      const response = await axios.post("/api/portfolio/delete-certification", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));

        // Filter out the deleted item from the certifications array
        const updatedCertifications = certification.filter(
          (cert) => cert._id !== item._id
        );
        dispatch({
          type: "root/SetPortfolioData",
          payload: { ...portfolioData, certification: updatedCertifications },
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
          Add Certification
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5">
        {certification.map((cert, index) => (
          <div
            className="shadow border-2 p-5 border-gray-400 text-primary border-b-gray-950"
            key={index}
          >
            <h1>{cert.title}</h1>
            <hr />
            <h1>Provider: {cert.provider}</h1>
            <h1>Description: {cert.description}</h1>
            <div className="flex justify-end gap-5">
              <button
                className="bg-tertiary text-white px-5 py-1 m-3"
                onClick={() => handleEdit(cert)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-5 py-1 m-3"
                onClick={() => handleDelete(cert)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={showEditModal}
        title="Edit Certification"
        onCancel={() => setShowEditModal(false)}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} initialValues={formData}>
          <Form.Item name="title" label="Title">
            <input
              placeholder="Enter Certification Title"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="image" label="Image (URL)">
            <input
              placeholder="Certification Image Location"
              value={formData.image}
              onChange={(e) =>
                setFormData({ ...formData, image: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="provider" label="Provider">
            <input
              placeholder="Certification Provider"
              value={formData.provider}
              onChange={(e) =>
                setFormData({ ...formData, provider: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea
              placeholder="Certification Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="link" label="Link">
            <input
              placeholder="Certification Link"
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
              {formData.id ? "Update" : "Add"} Certification
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminCertification;
