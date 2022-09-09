import React from "react";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
const ProtectRoute = ({ children }) => {
  const { user } = UserAuth();

  return user && user.email ? children : <Navigate to="/" />;
};

export default ProtectRoute;
