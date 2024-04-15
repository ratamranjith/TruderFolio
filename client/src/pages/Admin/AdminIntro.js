import React from "react";
import { Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminIntro() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: portfolioData.intro._id,
      });
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
      } else {
        console.log(values);
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());

      message.error(error.message);
    }
  };

  return (
    <div>
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.intro}
      >
        <Form.Item name="welcomeText" label="Welcome Text">
          <input placeholder="Intro" />
        </Form.Item>
        <Form.Item name="firstName" label="First Name">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="description" label="Description">
          <textarea placeholder="Detailed Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white">UPDATE</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
