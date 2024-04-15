import React from "react";
import { Form, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";
function AdminContact() {
  const { portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contact", {
        ...values,
        _id: portfolioData.contact._id,
      });
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
        initialValues={portfolioData.contact}
      >
        <Form.Item name="name" label="Developer Name">
          <input placeholder="Intro" />
        </Form.Item>
        <Form.Item name="age" label="Age">
          <input placeholder="First Name" />
        </Form.Item>
        <Form.Item name="gender" label="Gender">
          <input placeholder="Last Name" />
        </Form.Item>
        <Form.Item name="email" label="Email">
          <input placeholder="Caption" />
        </Form.Item>
        <Form.Item name="alt_email" label="Alternate Email">
          <input placeholder="Detailed Description" />
        </Form.Item>
        <Form.Item name="mobile" label="Mobile Number">
          <input placeholder="Detailed Description" />
        </Form.Item>
        <Form.Item name="country" label="Country">
          <input placeholder="Detailed Description" />
        </Form.Item>
        <div className="flex justify-end w-full" label="Description">
          <button className="px-10 py-2 bg-primary text-white">UPDATE</button>
        </div>
      </Form>
    </div>
  );
}

export default AdminContact;
