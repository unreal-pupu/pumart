import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaShoppingCart } from 'react-icons/fa';
import { FaShippingFast, FaLock, FaPalette } from "react-icons/fa";
import { FaStore, FaShieldAlt } from "react-icons/fa";
import { FaCogs, FaBoxes, } from "react-icons/fa";
import { motion } from "framer-motion";


const Home = () => {
  const [email, setEmail] = useState("");
  const [activeIndex, setActiveIndex] = useState(null); 
  const navigate = useNavigate();

  const handleEmailSubmit = () => {
    if (email) {
      navigate("/login");
    } else {
      alert("Please enter a valid email address");
    }
  };

  const handleNavigation = () => {
    const isAuthenticated = localStorage.getItem("user");

    if (isAuthenticated) {
      navigate("/pricing"); 
    } else {
      navigate("/register"); 
    }
  };

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const plans = [
    { plan: "Basic Plan", price: "$25/month", color: "[#14281d]" },
    { plan: "Standard Plan", price: "$150/month", color: "[#14281d]" },
    { plan: "Premium Plan", price: "$300/month", color: "[#14281d]" },
    { plan: "Plus Plan", price: "$1500/month", color: "[#14281d]" },
  ];

  return (
    <>
    <div>
    <div className="relative flex items-center justify-center h-screen bg-[#fffcdc] text-center">
      <div className="absolute inset-0 bg-gradient-to-tr from-[#14281d] to-transparent"></div>

      <div className="relative z-10 px-6 flex flex-col items-center text-center">
        <motion.div  initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }}viewport={{ once: true }} >
         <FaShoppingCart className="text-[100px] text-[#352208] mb-4" /> </motion.div> <motion.h2 initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}  className="text-5xl font-bold text-black"  >
          Launch Your Online Store in Minutes!
        </motion.h2>
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl text-black mt-4"
        >
          Everything You Need to Succeed
        </motion.h2>

        <motion.p initial={{ opacity: 0, y: 50 }}   whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}  viewport={{ once: true }}  className="text-lg text-black mt-2 max-w-2xl mx-auto" >
          Start selling online with ease using our powerful platform.
        </motion.p>

        <div className="max-w-md mx-auto mt-10">
          <div className="relative w-full">
            <input
              type="email"
              className="w-full p-4 text-lg rounded-full bg-[#f4f1de] text-black pr-36 outline-none"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-[#fffcdc] text-black py-3 px-6 rounded-full font-semibold hover:bg-[#e1bb80] transition duration-300"
              onClick={handleEmailSubmit}
            >
              Start
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="py-16 px-6 bg-[#f4f1de] text-[#352208] text-center">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPalette className="text-6xl text-[#e1bb80] mb-4" />
          </motion.div>
          <h3 className="text-3xl font-semibold text-gray-800">Flexible & Easy-to-Use Templates</h3>
          <p className="text-lg mt-4 text-gray-600">
            Get started fast with free, customizable website templates for your store.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaShippingFast className="text-6xl text-[#e1bb80] mb-4" />
          </motion.div>
          <h3 className="text-3xl font-semibold text-gray-800">Unified Business Solution</h3>
          <p className="text-lg mt-4 text-gray-600">
            PuMart handles everything for you, including marketing, payments, secure transactions, and shipping.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLock className="text-6xl text-[#e1bb80] mb-4" />
          </motion.div>
          <h3 className="text-3xl font-semibold text-gray-800">A Reliable and Safe Platform</h3>
          <p className="text-lg mt-4 text-gray-600">
            PuMart is the trusted choice of millions for managing online stores.
          </p>
        </motion.div>
      </div>
    </div>
    
    <section className="py-24 bg-[#f4f1de] text-center">
  <div className="container mx-auto">
    <div className="flex flex-col md:flex-row items-center justify-center">
      <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center">
        <FaShoppingCart className="text-7xl text-gray-700" />
      </div>
      <div className="w-full md:w-1/2 text-left">
        <h2 className="text-4xl font-bold mb-4 text-gray-900">Build your dream business for $1/month</h2>
        <p className="text-lg text-gray-700 mb-4">
          PuMart takes care of everything from marketing and payments to secure transactions and shipping.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="py-24 text-center bg-[#f4f1de]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold mb-12"
        >
          Why PuMart?
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: [-5, 5, -5, 0] }}
              transition={{ duration: 0.4 }}
            >
              <FaPalette className="text-6xl text-[#e1bb80] mx-auto mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">Customizable Templates</h3>
            <p>
              Free, highly customizable website designs to launch your store quickly and easily. Choose from a wide variety of stunning templates!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: [-5, 5, -5, 0] }}
              transition={{ duration: 0.4 }}
            >
              <FaStore className="text-6xl text-[#e1bb80] mx-auto mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">All-in-One Platform</h3>
            <p>
              PuMart manages everything from marketing and payments to secure transactions and shipping, so you can focus on growing your business.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <motion.div
              whileHover={{ rotate: [-5, 5, -5, 0] }}
              transition={{ duration: 0.4 }}
            >
              <FaShieldAlt className="text-6xl text-[#e1bb80] mx-auto mb-6" />
            </motion.div>
            <h3 className="text-2xl font-bold mb-4">A Safe and Efficient Platform</h3>
            <p>
              Millions of users trust PuMart to securely manage their online stores with top-tier security and encrypted transactions.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
    
    <section className="py-16 bg-[#f4f1de] text-gray-900">
      <div className="container mx-auto px-6">
      <div className="text-center mb-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4"
      >
        How It Works
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="p-6 shadow-lg rounded-lg bg-gray-50 flex flex-col items-center"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaShoppingCart className="text-6xl text-[#e1bb80] mb-4" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-2">Sign Up</h3>
          <p>Create an account and start setting up your online store easily.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="p-6 shadow-lg rounded-lg bg-gray-50 flex flex-col items-center"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaPalette className="text-6xl text-[#e1bb80] mb-4" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-2">Customize</h3>
          <p>Choose from our customizable templates to design your store.</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-6 shadow-lg rounded-lg bg-gray-50 flex flex-col items-center"
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaCogs className="text-6xl text-[#e1bb80] mb-4" />
          </motion.div>
          <h3 className="text-2xl font-semibold mb-2">Launch</h3>
          <p>Start selling your products and grow your business.</p>
        </motion.div>

      </div>
    </div>
        <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }} 
      >
        <h2 className="text-4xl font-bold mb-4">A Safe and Efficient Platform</h2>
        <div className="p-8 shadow-lg rounded-lg bg-gray-50 flex flex-col items-center">
          <FaLock className="text-6xl text-[#e1bb80] mb-4" />
          <p className="text-lg">Millions of users trust our secure platform for their online stores.</p>
        </div>
      </motion.div>
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.5 }} 
      >
        <h2 className="text-4xl font-bold mb-4">All-in-One Shipping & Payments</h2>
        <div className="p-8 shadow-lg rounded-lg bg-gray-50 flex flex-col items-center">
          <FaBoxes className="text-6xl text-yellow-600 mb-4" />
          <p className="text-lg">We handle everything from secure transactions to shipping logistics.</p>
        </div>
      </motion.div>
        <div className="text-center mb-12 overflow-hidden">
      <h2 className="text-4xl font-bold mb-8 text-gray-800">Simple Pricing</h2>
      <motion.div
        className="flex space-x-8"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ repeat: Infinity, duration: 8, ease: "linear" }} 
      >
        {plans.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }} 
            className="p-8 shadow-xl rounded-lg bg-[] border border-gray-200 hover:shadow-2xl transition duration-300 w-80 flex-shrink-0"
          >
            <h3 className="text-2xl font-semibold mb-2 text-gray-900">{item.plan}</h3>
            <p className="text-lg mb-6 text-gray-600">{item.price}</p>
            <button
              onClick={handleNavigation}
              className={`bg-${item.color} text-[#f4f1de] px-6 py-3 rounded-lg font-medium shadow-md hover:bg-opacity-90 transition`}
            >
              Choose Plan
            </button>
          </motion.div>
        ))}
      </motion.div>
    </div>

      </div>
    </section>
       
    <section className="py-24 bg-[#3b5a47]">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center text-[#343a40] mb-8">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-6">
            <div className="bg-white shadow-md rounded-lg border border-gray-200 pb-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <button
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-800 py-4 px-6"
                onClick={() => toggleFAQ(0)}
              >
                <span>How does PuMart work?</span>
                <span
                  className={`${
                    activeIndex === 0 ? 'bg-[#e1bb80] text-black' : 'bg-gray-800 text-white'
                  } w-8 h-8 flex items-center justify-center rounded-full text-3xl transition-all`}
                >
                  {activeIndex === 0 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </button>
              {activeIndex === 0 && (
                <p className="mt-2 text-gray-600 px-6 pb-4">
                  PuMart is an all-in-one platform that helps you create and manage an online store. We handle everything from hosting to payments and shipping, so you can focus on growing your business.
                </p>
              )}
            </div>

            <div className="bg-white shadow-md rounded-lg border border-gray-200 pb-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <button
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-800 py-4 px-6"
                onClick={() => toggleFAQ(1)}
              >
                <span>How much does it cost to start?</span>
                <span
                  className={`${
                    activeIndex === 1 ? 'bg-[#e1bb80] text-black' : 'bg-gray-800 text-white'
                  } w-8 h-8 flex items-center justify-center rounded-full text-3xl transition-all`}
                >
                  {activeIndex === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </button>
              {activeIndex === 1 && (
                <p className="mt-2 text-gray-600 px-6 pb-4">
                  You can start with our $1/month plan, which includes all the essential features to build and grow your business online. We also offer a free trial to get you started.
                </p>
              )}
            </div>
            <div className="bg-white shadow-md rounded-lg border border-gray-200 pb-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <button
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-800 py-4 px-6"
                onClick={() => toggleFAQ(2)}
              >
                <span>Is there a free trial available?</span>
                <span
                  className={`${
                    activeIndex === 2 ? 'bg-[#e1bb80] text-black' : 'bg-gray-800 text-white'
                  } w-8 h-8 flex items-center justify-center rounded-full text-3xl transition-all`}
                >
                  {activeIndex === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </button>
              {activeIndex === 2 && (
                <p className="mt-2 text-gray-600 px-6 pb-4">
                  Yes, we offer a free trial for 3 days. No credit card is required, and you can explore all the features before deciding if PuMart is right for you.
                </p>
              )}
            </div>

            <div className="bg-white shadow-md rounded-lg border border-gray-200 pb-4 transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
              <button
                className="flex items-center justify-between w-full text-left text-xl font-semibold text-gray-800 py-4 px-6"
                onClick={() => toggleFAQ(3)}
              >
                <span>Can I cancel my subscription anytime?</span>
                <span
                  className={`${
                    activeIndex === 3 ? 'bg-[#e1bb80] text-black' : 'bg-gray-800 text-white'
                  } w-8 h-8 flex items-center justify-center rounded-full text-3xl transition-all`}
                >
                  {activeIndex === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </span>
              </button>
              {activeIndex === 3 && (
                <p className="mt-2 text-gray-600 px-6 pb-4">
                  Yes, you can cancel your subscription at any time. We believe in no strings attached, and you can stop using PuMart whenever you like.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
      </div>
    
    </>
  );
};

export default Home;