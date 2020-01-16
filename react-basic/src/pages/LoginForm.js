import React from "react";
import { Form, Input, Button } from "antd";

const App = props => {
  const { form } = props;
  const { getFieldDecorator } = form;

  const handleSubmit = e => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Item>
        {getFieldDecorator("username", {
          rules: [{ required: true, message: "กรุณาระบุ username" }]
        })(<Input placeholder="Username" />)}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator("password", {
          rules: [{ required: true }]
        })(<Input placeholder="Password" />)}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Form.create({ name: "login_form" })(App);
