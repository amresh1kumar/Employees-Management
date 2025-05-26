import React from "react";
import "../components/CSS/Emp.css";
import "../components/CSS/common.css";
import { Button, Checkbox, Form, Input, Radio } from "antd";
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const App = () => (
  <Form
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ width: "100%" }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
    layout="vertical"
  >
    <div className="employee">
      <Form.Item
        label={<label className="custom-label">Employee Number</label>}
        name="Employee ID"
        rules={[{ required: true, message: "Please Input Employee Number!" }]}
      >
        <Input placeholder="Enter Employee Number" />
      </Form.Item>

      <Form.Item
        label={<label className="custom-label"> Employee First Name </label>}
        name="First Name"
        rules={[{ required: true, message: "Please Input Employee First Name!" }]}
      >
        <Input placeholder="Enter employee name" />
      </Form.Item>
      <Form.Item
        label={<label className="custom-label"> Employee Middle Name</label>}
        name="Middle Name"
        rules={[{ required: false, message: "Please Input Employee Last Name!" }]}
      >
        <Input placeholder="Enter employee middle name" />
      </Form.Item>
      <Form.Item
        label={<label className="custom-label"> Employee Last Name</label>}
        name="Last Name"
        rules={[{ required: true, message: "Please Input Employee Last Name!" }]}
      >
        <Input placeholder="Enter employee last name" />
      </Form.Item>

      <Form.Item
        label={<label className="custom-label">Date of birth</label>}
        name="Date of birth"
        rules={[{ required: true, message: "Please Input Employee Last Name!" }]}
      >
        <Input placeholder="Enter employee Date of birth" />
      </Form.Item>

      <Form.Item
        name="Gender"
        label={<label className="custom-label">Gender</label>}
        rules={[{ required: true, message: "Please Select Employee Gender!" }]}
      >
        <Radio.Group>
          <Radio value="Male">Male</Radio>
          <Radio value="Female">Female</Radio>
          <Radio value="Other">Other</Radio>
        </Radio.Group>
      </Form.Item>

      <Form.Item
        label={<label className="custom-label">Aadhar Number</label>}
        name="Aadhar Number"
        rules={[{ required: true, message: "Please Input Employee Aadhar Number!" }]}
      >
        <Input placeholder="Enter employee aadhar number" />
      </Form.Item>

      <Form.Item
        label={<label className="custom-label">Permanent Address</label>}
        name="Permanent Address"
        rules={[
          { required: true, message: "Please Input Employee Permanent Address!" },
        ]}
      >
        <Input placeholder="Please Input Employee Permanent Address!" />
      </Form.Item>

      <Form.Item
        label={<label className="custom-label">Temporary Address</label>}
        name="Temporary Address"
        rules={[
          { required: true, message: "Please Input Employee Temporary Address!" },
        ]}
      >
        <Input placeholder="Please Input Employee Temporary Address!" />
      </Form.Item>
    </div>

    <Form.Item name="remember" valuePropName="checked" label={null}>
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item label={null}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default App;
