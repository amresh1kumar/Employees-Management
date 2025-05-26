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
          rules={[{ required: true, message: "Please input Father Name!" }]}
        >
          <Input placeholder="Enter  father name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Father Aadhaar Number</label>}
          name="Father Aadhaar No"
          rules={[{ required: true, message: "Please input Father Aadhaar No.!" }]}
        >
          <Input placeholder="Enter father Aadhaar No." />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Mother Name</label>}
          name="Mother Name"
          rules={[{ required: true, message: "Please input Mother Name!" }]}
        >
          <Input placeholder="Enter  Mother Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Mother Aadhaar Number</label>}
          name="Mother Aadhaar No"
          rules={[{ required: true, message: "Please input Mother Aadhaar No!" }]}
        >
          <Input placeholder="Enter Mother Aadhaar No." />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Spouse Name</label>}
          name="Spouse Name"
          rules={[{ required: true, message: "Please input Spouse Name!" }]}
        >
          <Input placeholder="Enter Spouse Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Spouse Date of birth</label>}
          name="Spouse DOB"
          rules={[{ required: true, message: "Please input Spouse DOB!" }]}
        >
          <Input placeholder="Enter  Spouse DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label">Spouse Aadhaar Number</label>}
          name="Spouse Aadhaar No"
          rules={[{ required: true, message: "Please input Spouse Aadhaar No.!" }]}
        >
          <Input placeholder="Enter Spouse Aadhaar No." />
        </Form.Item>
      </div>

      <div className="child">
        <Form.Item
          label={<label className="custom-label">Child 1 Name</label>}
          name="Child 1 Name"
        >
          <Input placeholder="Enter Child 1 Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Child 1 Date of birth</label>}
          name="Child 1 DOB"
        >
          <Input placeholder="Enter Child 1 DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Child 1 Aadhaar Number</label>}
          name="Child 1 Aadhaar"
        >
          <Input placeholder="Enter Child 1 Aadhaar" />
        </Form.Item>
      </div>

      <div className="child">
        <Form.Item
          label={<label className="custom-label">Child 2 Name</label>}
          name="Child 2 Name"
        >
          <Input placeholder="Enter Child 2 Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Child 2 Date of birth</label>}
          name="Child 2 DOB"
        >
          <Input placeholder="Enter Child 2 DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Child 2 Aadhaar Number</label>}
          name="Child 2 Aadhaar"
        >
          <Input placeholder="Enter Child 2 Aadhaar" />
        </Form.Item>
      </div>

      <div className="child">
        <Form.Item
          label={<label className="custom-label">Child 3 Name</label>}
          name="Child 3 Name"
        >
          <Input placeholder="Enter Child 3 Name" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Child 3 Date of birth</label>}
          name="Child 3 DOB"
        >
          <Input placeholder="Enter Child 3 DOB" />
        </Form.Item>

        <Form.Item
          label={<label className="custom-label"> Child 3 Aadhaar Number</label>}
          name="Child 3 Aadhaar"
        >
          <Input placeholder="Enter Child 3 Aadhaar" />
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
