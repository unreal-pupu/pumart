import React, { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Sidebar from "./Sidebar";
import { FiShoppingCart, FiMenu, FiX } from "react-icons/fi";

const DashboardLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMobileMenuOpen]);

  return (
    <div className="flex min-h-screen">
      <div className="md:hidden w-full p-4 flex justify-between items-center bg-[#14281d] text-white fixed top-0 left-0 z-50">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-bold">Pumart</h2>
          <FiShoppingCart className="text-white text-lg" />
        </div>
        <button onClick={toggleMobileMenu} className="text-white">
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <Sidebar isMobileMenuOpen={isMobileMenuOpen} toggleMobileMenu={toggleMobileMenu} />

      <div className="flex-1 p-6 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;