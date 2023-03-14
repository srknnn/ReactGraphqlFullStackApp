import React, { useContext, useEffect, useState } from "react";
import { Form, Input, Button, message } from "antd";
import { ApolloError } from "@apollo/client";
import { useLoginMutation } from "./generated/graphql";
import { useNavigate } from "react-router-dom";
import { TokenContext } from "./context/TokenContext";
import "./auth.css";

const Login = () => {
  const { loginToken, updateLoginToken } = useContext(TokenContext);
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loginMutation, { data, loading, error }] = useLoginMutation({
    onCompleted: (data) => {
      updateLoginToken(data.login);
      message.success("Successfully logged in!");
      navigate("/");
      form.resetFields();
    },
    onError: (error) => {
      onFinishFailed(error);
    },
  });

  useEffect(() => {}, [data, loginToken]);

  const onFinish = async (values: any) => {
    loginMutation({ variables: { email, password } });
  };

  const onFinishFailed = (error: ApolloError) => {
    message.error(error.message);
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
          <p className="form-title">Welcome back</p>
          <p>Login to the Dashboard</p>
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
              LOGIN
            </Button>
          </Form.Item>
          <Form.Item>
            <Button
              className="login-form-button"
              type="primary"
              onClick={() => navigate("/signUp")}
              style={{ background: "green", borderColor: "yellow" }}
            >
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
