import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Layout } from "antd";
import { getAccessToken } from "./accessToken";
import SignUp from "./SignUp";
import Login from "./Login";
import Home from "./Home";

const { Header, Content } = Layout;

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const accessToken = getAccessToken();

  return (
    <ApolloProvider client={client}>
      <Router>
        <Layout>
          <Header>
            <h1 style={{ color: "white" }}>Todo List</h1>
          </Header>
          <Content style={{ padding: "50px" }}>
            <Routes>
              {/* <Route exact path="/">
                {accessToken ? <Home /> : <Navigate to="/login" />}
              </Route> */}
              <Route
                path="/"
                element={accessToken ? <Navigate to="/login" /> : <Home />}
              />
              <Route exact path="/" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </Content>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;
