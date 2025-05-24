import React from "react";
import "../components/CSS/FamilyDetalis.css";
import "../components/CSS/common.css";
import { Button, Checkbox, Form, Input } from "antd";

const onFinish = (values) => {
  console.log("Success:", values);
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const App = () => (
  <div className="familycontainer">
    <Form
      name="basic"
      layout="vertical"
      style={{ width: "100%" }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <div className="father-mother-details">
        <Form.Item
          label={<label className="custom-label">Father Name</label>}
          name="Father Name"
          rules={[{ required: true, message: "Please input your Father Name!" }]}
        >
          <Input placeholder="Enter your father name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Aadhar Number</label>}
          name="Father Aadhar No"
          rules={[{ required: true, message: "Please input your Father Aadhar No.!" }]}
        >
          <Input placeholder="Enter your father Aadhar No." />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Mother Name</label>}
          name="Mother Name"
          rules={[{ required: true, message: "Please input your Mother Name!" }]}
        >
          <Input placeholder="Enter your Mother Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Aadhar Number</label>}
          name="Mother Aadhar No"
          rules={[{ required: true, message: "Please input your Mother Aadhar No!" }]}
        >
          <Input placeholder="Enter your Mother Aadhar No." />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Spouse Name</label>}
          name="Spouse Name"
          rules={[{ required: true, message: "Please input your Spouse Name!" }]}
        >
          <Input placeholder="Enter your Spouse Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Date of birth</label>}
          name="Spouse DOB"
          rules={[{ required: true, message: "Please input your Spouse DOB!" }]}
        >
          <Input placeholder="Enter your Spouse DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Aadhar Number</label>}
          name="Spouse Aadhar No"
          rules={[{ required: true, message: "Please input your Spouse Aadhar No.!" }]}
        >
          <Input placeholder="Enter your Spouse Aadhar No." />
        </Form.Item>
      </div>

      <div className="child">
        <Form.Item
          label={<label className="custom-label">First Child Name</label>}
          name="Child 1 Name"
        >
          <Input placeholder="Enter your Child 1 Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Date of birth</label>}
          name="Child 1 DOB"
        >
          <Input placeholder="Enter your Child 1 DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Aadhar Number</label>}
          name="Child 1 Aadhar"
        >
          <Input placeholder="Enter your Child 1 Aadhar" />
        </Form.Item>
      </div>

      <div className="child">
        <Form.Item
          label={<label className="custom-label">Second Child Name</label>}
          name="Child 2 Name"
        >
          <Input placeholder="Enter your Child 2 Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Date of birth</label>}
          name="Child 2 DOB"
        >
          <Input placeholder="Enter your Child 2 DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Aadhar Number</label>}
          name="Child 2 Aadhar"
        >
          <Input placeholder="Enter your Child 2 Aadhar" />
        </Form.Item>
      </div>

      <div className="child">
        <Form.Item
          label={<label className="custom-label">Third Child Name</label>}
          name="Child 3 Name"
        >
          <Input placeholder="Enter your Child 3 Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Date of birth</label>}
          name="Child 3 DOB"
        >
          <Input placeholder="Enter your Child 3 DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Aadhar Number</label>}
          name="Child 3 Aadhar"
        >
          <Input placeholder="Enter your Child 3 Aadhar" />
        </Form.Item>
      </div>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default App;
