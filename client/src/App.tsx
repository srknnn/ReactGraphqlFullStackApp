import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { UserOutlined } from "@ant-design/icons";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Avatar, Dropdown, Layout } from "antd";
import SignUp from "./SignUp";
import Login from "./Login";
import LoginRoter from "./components/LoginRouter";
import { LoginTokenProvider } from "./context/TokenContext";

const { Header, Content } = Layout;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <LoginTokenProvider>
        <Router>
          <Layout>
            <Header>
              <h1 style={{ color: "white", margin: 2 }}>Todo List</h1>
            </Header>
            <Content style={{ padding: "50px" }}>
              <Routes>
                <Route path="*" element={<LoginRoter />} />
                <Route path="/signUp" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </Content>
          </Layout>
        </Router>
      </LoginTokenProvider>
    </ApolloProvider>
  );
}

export default App;
