import React, { useContext } from "react";
import { Auth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const { user } = useContext(Auth);

  return user ? <Outlet /> : <Navigate to="/" />;
};

export default Protected
