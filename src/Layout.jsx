import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import Footer from "./Footer/Footer";
import ScrollToTop from "./ScrollToTop";
import { FaShoppingCart } from 'react-icons/fa';
import { CgMenuLeft } from "react-icons/cg";
import { FiX } from "react-icons/fi";

const Layout = ({ isAuthenticated }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#14281d] bg-opacity-80 backdrop-blur-md  p-4 flex justify-between items-center z-50">
        <div className="flex items-center space-x-2"><FaShoppingCart className="text-[#f4f1de] text-3xl" />
      <h2 className="text-[#f4f1de] text-4xl font-extrabold tracking-wide lowercase"> Pumart </h2>
    </div>
        <button
          onClick={() => setMenuOpen(true)}
          className="text-3xl text-[#f4f1de] transition-transform duration-300" ><CgMenuLeft /></button>
      </nav>

      {menuOpen && (
        <div className="fixed inset-0 bg-[#f4f1de] bg-opacity-80 flex items-center justify-center z-50">
          <button
            onClick={() => setMenuOpen(false)}
            className="absolute top-6 right-6 text-3xl text-[#14281d]"
          >
            <FiX />
          </button>

          <div className=" bg-gradient-to-tr from-[#14281d] to-transparent w-3/4 max-w-sm p-6 rounded-lg shadow-lg text-center">
            <ul className="flex flex-col space-y-4 text-lg font-medium">
              {!isAuthenticated ? (
                <>
                  <li>
                    <Link to="/login" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#fffcdc]">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/register" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#fffcdc]">
                      Register
                    </Link>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/dashboard" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-[#fffcdc]">
                    Go to Dashboard
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
      <main className="pt-16 relative z-10">
        <Outlet />
      </main>
      <Footer />

    </>
  );
};

export default Layout;