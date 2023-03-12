import React, { useState } from "react";
import { Form, Input, Button, message } from "antd";
import { useMutation } from "@apollo/client";
import { useLoginMutation } from "./generated/graphql";
import { useNavigate } from "react-router-dom";
import { setAccessToken } from "./accessToken";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const Login = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMutation, { data, loading, error }] = useLoginMutation({
    onCompleted: (data) => {
      setStateLoading(false);
      setAccessToken(data.login);
      message.success("Successfully logged in!");
      console.log("token", data.login);
      navigate("/");
      form.resetFields();
    },
    onError: (error) => {
      setStateLoading(false);
      message.error(error.message);
    },
  });

  const [stateLoading, setStateLoading] = useState(false);

  const onFinish = async (values: any) => {
    setStateLoading(true);
    loginMutation({ variables: { email, password } });
  };

  return (
    <>
      <Form
        {...layout}
        name="login"
        onFinish={onFinish}
        autoComplete="off"
        style={{ maxWidth: "500px", margin: "0 auto" }}
      >
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
            Login
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
