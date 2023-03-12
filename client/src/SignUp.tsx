import React, { useState } from "react";
import { Form, Input, Button, message, Typography } from "antd";
import { useMutation } from "@apollo/client";
import { useSignUpMutation } from "./generated/graphql";
import { useNavigate } from "react-router-dom";

const { Title } = Typography;

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
    <>
      <Form
        {...layout}
        name="signup"
        onFinish={onFinish}
        autoComplete="off"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
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

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Sign Up
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default SignUp;
