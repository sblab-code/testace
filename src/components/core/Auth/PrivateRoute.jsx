import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  if (token !== null) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default PrivateRoute;