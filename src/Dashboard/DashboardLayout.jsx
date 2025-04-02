import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onLogout={handleLogout} />

      <div className="flex-1 p-6 ml-64"> 
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;