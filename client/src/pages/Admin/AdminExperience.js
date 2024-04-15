import React, { useState } from "react";
import { Form, message, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading, ReloadData } from "../../redux/rootSlice";
import axios from "axios";

function AdminExperience() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experience } = portfolioData;
  const dispatch = useDispatch();

  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedItemForEdit, setSelectedItemForEdit] = useState(null);
  const [formData, setFormData] = useState({
    period: "",
    company: "",
    title: "",
    description: "",
  });

  const handleAdd = () => {
    setShowAddModal(true);
    setSelectedItemForEdit(null);
    setFormData({
      period: "",
      company: "",
      title: "",
      description: "",
    });
  };

  const handleEdit = (item) => {
    setShowEditModal(true);
    setSelectedItemForEdit(item);
    setFormData({
      period: item.period || "",
      company: item.company || "",
      title: item.title || "",
      description: item.description || "",
    });
  };

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemForEdit) {
        // Update existing experience
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          id: selectedItemForEdit.id,
        });
      } else {
        // Add new experience
        response = await axios.post("/api/portfolio/add-experience", values);
      }
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
        setShowAddModal(false);
        setSelectedItemForEdit(null);
        setShowEditModal(false);
        dispatch(ReloadData(true));
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
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));

        // Filter out the deleted item from the experience array
        const updatedExperience = experience.filter(
          (exp) => exp._id !== item._id
        );
        dispatch({
          type: "root/SetPortfolioData",
          payload: { ...portfolioData, experience: updatedExperience },
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
      <div className="flex justify-center m-5">
        <button className="bg-primary px-5 py-2 text-white" onClick={handleAdd}>
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 mt-5 sm:grid-cols-1">
        {experience.map((exp, index) => (
          <div
            className="shadow border-2 p-5 border-gray-400 text-primary border-b-gray-950"
            key={index}
          >
            <h1>{exp.period}</h1>
            <hr />
            <h1>Company:{exp.company}</h1>
            <h1>Role: {exp.title}</h1>
            <h1>Description:{exp.description}</h1>
            <div className="flex justify-end gap-5">
              <button
                className="bg-tertiary text-white px-5 py-1 m-3"
                onClick={() => handleEdit(exp)}
              >
                Edit
              </button>
              <button
                className="bg-red-600 text-white px-5 py-1 m-3"
                onClick={() => handleDelete(exp)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <Modal
        open={showAddModal || showEditModal}
        title={selectedItemForEdit ? "Edit Experience" : "Add Experience"}
        onCancel={() => {
          setShowAddModal(false);
          setShowEditModal(false);
        }}
        footer={null}
      >
        <Form layout="vertical" onFinish={onFinish} initialValues={formData}>
          <Form.Item name="period" label="Time Period">
            <input
              placeholder="Time Period"
              value={formData.period}
              onChange={(e) =>
                setFormData({ ...formData, period: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="company" label="Company">
            <input
              placeholder="Company"
              value={formData.company}
              onChange={(e) =>
                setFormData({ ...formData, company: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="title" label="Role">
            <input
              placeholder="Role"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
            />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <textarea
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
            />
          </Form.Item>

          <div className="flex">
            <button
              className="bg-primary text-white px-5 py-2"
              onClick={() => {
                setShowAddModal(false);
                setShowEditModal(false);
              }}
            >
              Cancel
            </button>
            <button type="primary" className="bg-primary text-white px-5 py-2">
              {selectedItemForEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminExperience;
