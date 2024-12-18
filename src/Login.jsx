import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import React, { useContext } from "react";
import { Auth } from "./AuthContext";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const { user, setUser } = useContext(Auth);
  const navigate = useNavigate();
  return (
    <div className="h-screen flex items-center justify-center">
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log("Full Response:", credentialResponse);

          const token = credentialResponse.credential;
          const user = jwtDecode(token); // Decode the JWT token to get user details

          setUser({
            name: user.name,
            email: user.email,
            picture: user.picture,
          });
          navigate("/");
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </div>
  );
};

export default Login;
