// App.jsx
import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import { Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
import Login from "./pages/Login.jsx";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="w-screen min-h-screen flex flex-col">
      {/* Page Content */}
      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
