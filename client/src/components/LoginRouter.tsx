import { useContext } from "react";
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { TokenContext } from "../context/TokenContext";
import Home from "../Home";

const LoginRoter = () => {
  const { loginToken } = useContext(TokenContext);
  const token = loginToken;
  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <Routes>
      <Route path="*" element={<Home />} />
    </Routes>
  );
};

export default LoginRoter;
