import React, { useState } from "react";
import { Form, Input, Button, message, Spin } from "antd";
import { useNavigate } from "react-router-dom";

const NumerologyForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const [numerologyData, setNumerologyData] = useState(null);
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true); // Set loading state to true before making API request

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyXBwzXdVwpm3jeyIT9TFnynOILyS-wn9EWyzMCiIYVIhM1ZI2Ttl9tVY_4SIbwUNShmw/exec",
        {
          redirect: "follow",
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(values),
        }
      );
      // Handle success
      navigate(`${values.phoneNumber}`);
      console.log("Form data submitted successfully");
    } catch (error) {
      message.error("Failed to submit form data");
      console.error("Error:", error);
    } finally {
      form.resetFields();
      setLoading(false); // Set loading state to false after API request is complete
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <div className="bg-gray-400 p-4 rounded mb-4">
        Please fill the form to get numerlogy output
      </div>
      {loading ? ( // Render loading component if loading state is true
        <div className="flex justify-center items-center h-64">
          <Spin tip="Loading..." />
        </div>
      ) : (
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please enter your first name" },
            ]}
            className="mb-4"
          >
            <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please enter your last name" }]}
            className="mb-4"
          >
            <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Item>
          <Form.Item
            label="Phone Number"
            name="phoneNumber"
            rules={[
              { required: true, message: "Please enter your phone number" },
            ]}
            className="mb-4"
          >
            <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please enter your email" }]}
            className="mb-4"
          >
            <Input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </Form.Item>
          <Form.Item
            label="Date of Birth"
            name="dob"
            rules={[
              { required: true, message: "Please enter your date of birth" },
            ]}
            className="mb-4"
          >
            <Input
              type="date"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      )}
    </div>
  );
};

export default NumerologyForm;
