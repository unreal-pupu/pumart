import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiHome, FiBox, FiFileText, FiBarChart, FiClipboard, FiUsers, FiLogOut,} from "react-icons/fi";
import { Tag ,  Store ,  BarChart } from "lucide-react";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/login");
  };

  return (
    <aside className="w-64 h-screen bg-gradient-to-b from-[#fffcdc] to-[#14281d] text-[#14281d] fixed">
      <div className="p-5 text-lg font-bold">Dashboard</div>

      <nav className="flex flex-col space-y-4 p-4">
        <NavLink
          to="/dashboard"
          className={({ isActive }) => 
            `flex items-center space-x-2 p-2 rounded-md hover:bg-gray-700 ${
              isActive ? "bg-[#14281d] text-[#fffcdc]" : ""
            }`
          }
        >
          <FiHome /> <span>Home</span>
        </NavLink>

        <NavLink
          to="/dashboard/product"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <FiBox /> <span>Products</span>
        </NavLink>

        <NavLink
          to="/dashboard/blogs"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <FiFileText /> <span>Blogs</span>
        </NavLink>

        <NavLink
          to="/dashboard/marketing"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <FiBarChart /> <span>Marketing</span>
        </NavLink>

        <NavLink
          to="/dashboard/orders"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <FiClipboard /> <span>Orders</span>
        </NavLink>

        <NavLink
          to="/dashboard/discount"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
           <Tag  /> <span>Discount</span>
         
        </NavLink>
        <NavLink
          to="/dashboard/analytics"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <BarChart /> <span>Analytics</span>
        </NavLink>

        <NavLink
          to="/dashboard/store"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc]  ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <Store /> <span>Store</span>
        </NavLink>

        <NavLink
          to="/dashboard/pricing"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <FiClipboard /> <span>Pricing</span>
        </NavLink>

        <NavLink
          to="/dashboard/customers"
          className={({ isActive }) =>
            `flex items-center space-x-2 p-2 rounded-md hover:bg-[#fffcdc] ${
              isActive ? "bg-[#fffcdc]" : ""
            }`
          }
        >
          <FiUsers /> <span>Customers</span>
        </NavLink>

        <button
          onClick={handleLogout}
          className="mt-6 p-2 flex items-center space-x-2 rounded-md bg-[#fffcdc] hover:bg-red-700 text-[#14281d]"
        >
          <FiLogOut /> <span>Logout</span>
        </button>
      </nav>
    </aside>
  );
};

export default Sidebar;