import React from "react";
import { Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminAbout() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: portfolioData.about._id,
      });
      console.log("portfolioData", portfolioData);
      dispatch(HideLoading());

      if (response.data.success) {
        message.success(response.data.message);
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
      <Form
        onFinish={onFinish}
        layout="vertical"
        initialValues={portfolioData.about}
      >
        <Form.Item name="imageUrl" label="Image Location">
          <input placeholder="Intro" />
        </Form.Item>
        <Form.Item name="description1" label="Description">
          <textarea placeholder="First Name" />
        </Form.Item>
        <Form.Item name="description2" label="Detailed Description">
          <textarea placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="technologies" label="Technologies">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="toolsUsed" label="Tools Used">
          <input placeholder="Detailed Description" />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className="px-10 py-2 bg-primary text-white">UPDATE</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
