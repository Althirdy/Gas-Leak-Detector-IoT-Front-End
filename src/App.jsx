import React, { useEffect, useState } from "react";
import { database } from "./firebase";
import { ref, onValue } from "firebase/database";
import Stack from "@mui/material/Stack";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";
import toast, { Toaster } from "react-hot-toast";
import Dashboard from "./Dashboard";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Login";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Protected from "./Protected";
import Guest from "./Guest";
import { AppProvider } from "./AuthContext";

function App() {
  return (
    <>
      <Toaster position="bottom-=right" reverseOrder={false} />
      <AppProvider>
        <GoogleOAuthProvider clientId="570104092890-ips03h8iu2cgluo3naa11u9eus5pu42u.apps.googleusercontent.com">
          <BrowserRouter>
            <Routes>
              <Route element={<Guest />}>
                <Route path="/" element={<Login />} />
              </Route>
              <Route element={<Protected />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </GoogleOAuthProvider>
      </AppProvider>
    </>
  );
}

export default App;
