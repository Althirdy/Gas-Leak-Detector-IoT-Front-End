import React, { createContext, useEffect, useState } from "react";

export const Auth = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Load the user from localStorage during initialization
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Auth.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >
      {children}
    </Auth.Provider>
  );
};
