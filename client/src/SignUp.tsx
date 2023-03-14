import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useSignUpMutation } from "./generated/graphql";
import { useNavigate } from "react-router-dom";
import "./auth.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [signUpMutation, { data, loading, error }] = useSignUpMutation({
    onCompleted: () => {
      message.success("Successfully signed up!");
      navigate("/login");
      form.resetFields();
      setStateLoading(false);
    },
    onError: (error) => {
      message.error(error.message);
      setStateLoading(false);
    },
  });
  const [stateLoading, setStateLoading] = useState(false);

  const onFinish = async (values: any) => {
    setStateLoading(true);
    signUpMutation({ variables: { name, email, password } });
  };

  return (
    <div className="login-page">
      <div className="login-box">
        <div className="illustration-wrapper">
          <img
            src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700"
            alt="Login"
          />
        </div>
        <Form
          name="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <p className="form-title">Sign Up</p>
          <p>Sign Up</p>
          <Form.Item
            label="Name"
            name="name"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              { type: "email", message: "Please input a valid email!" },
            ]}
          >
            <Input value={email} onChange={(e) => setEmail(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              loading={loading}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
