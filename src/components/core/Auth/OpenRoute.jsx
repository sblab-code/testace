import React, { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";

function OpenRoute({ children }) {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
  }, []);

  if (token === null) {
    return children;
  } else {
    return <Navigate to="/dashboard/my-profile" />;
  }
}

export default OpenRoute;