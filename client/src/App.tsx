import "./App.css";
import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Layout } from "antd";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRoter from "./components/LoginRouter";
import { LoginTokenProvider } from "./context/TokenContext";
import Login from "./Login";
import SignUp from "./SignUp";

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
