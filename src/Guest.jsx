import React, { useContext } from "react";
import { Auth } from "./AuthContext";
import { Navigate, Outlet } from "react-router-dom";

const Guest = () => {
  const { user } = useContext(Auth);

  return !user ? <Outlet /> : <Navigate to="/dashboard" />;
};

export default Guest
