import React, { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Layout from "./Layout";
import DashboardLayout from "./Dashboard/DashboardLayout";
import Home from "./Pages/Home";
import Product from "./Dashboard/Product";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Dashboard/Dashboard";
import Marketing from "./Dashboard/Marketing";
import Blogs from "./Dashboard/Blogs";
import Orders from "./Dashboard/Orders";
import Customers from "./Dashboard/Customers";
import Pricing from "./Dashboard/Pricing";
import { Analytics } from "./Dashboard/Analytics";
import Store from "./Dashboard/Store";
import { Discount } from "./Dashboard/Discount";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    JSON.parse(localStorage.getItem("isAuthenticated")) || false
  );

  useEffect(() => {
    localStorage.setItem("isAuthenticated", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);

  const handleLogin = (email, password, navigate) => {
    if (email === "admin@admin.com" && password === "password123") {
      setIsAuthenticated(true);
      navigate("/dashboard");
    } else {
      console.log("Invalid credentials");
    }
  };

  const handleRegister = (email, password, navigate) => {
    setIsAuthenticated(true);
    navigate("/dashboard");
  };


  const handleLogout = (navigate) => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout isAuthenticated={isAuthenticated} />,
      children: [
        { index: true, element: <Home /> },
        { path: "login", element: <Login onLogin={handleLogin} /> },
        { path: "register", element: <Register onRegister={handleRegister} /> },
      ],
    },
    {
      path: "/dashboard",
      element: isAuthenticated ? <DashboardLayout onLogout={handleLogout} /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: "product", element: <Product /> },
        { path: "blogs", element: <Blogs /> },
        { path: "marketing", element: <Marketing /> },
        { path: "orders", element: <Orders /> },
        { path: "customers", element: <Customers /> },
        { path: "pricing", element: <Pricing /> },
        { path: "store", element: <Store /> },
        { path: "analytics", element: <Analytics /> },
        { path: "discount", element: <Discount /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;