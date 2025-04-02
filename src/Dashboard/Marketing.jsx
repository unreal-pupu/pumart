import React from 'react'
import { motion } from "framer-motion";
import { Megaphone, TrendingUp, ShoppingBag, BarChart, DollarSign, Tag } from "lucide-react";
import { FaSnapchat, FaShoppingCart, FaEnvelope, FaSms, FaStar, FaPaperPlane } from "react-icons/fa";
const Marketing = () => {
  return (
    <>
      <div className="min-h-screen bg-[#fffcdc] p-8 flex flex-col items-center">
      <div className="max-w-4xl w-full">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-gray-900">
            Grow Your Business with Ease
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Powerful marketing tools to reach more customers and increase sales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Megaphone className="w-12 h-12 text-blue-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Online store sessions</h2>
            <p className="text-gray-600 mt-2">3</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Online store conversion rate</h2>
            <p className="text-gray-600 mt-2">—</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <ShoppingBag className="w-12 h-12 text-yellow-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Average order value</h2>
            <p className="text-gray-600 mt-2">—</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <BarChart className="w-12 h-12 text-purple-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Total sales</h2>
            <p className="text-gray-600 mt-2">—</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <DollarSign className="w-12 h-12 text-red-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Sales attributed to marketing</h2>
            <p className="text-gray-600 mt-2">—</p>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <Tag className="w-12 h-12 text-indigo-500 mx-auto" />
            <h2 className="text-xl font-semibold mt-4">Orders attributed to marketing</h2>
            <p className="text-gray-600 mt-2">—</p>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Top Marketing Channels</h2>
          <p className="text-gray-600 text-center">Discover the best ways to market your products and reach new customers.</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Marketing Apps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaEnvelope className="w-12 h-12 text-blue-600 mx-auto" />
              <h3 className="text-xl font-semibold">Zoho Mail</h3>
              <p className="text-gray-600 mt-2">Reach customers via professional email marketing campaigns.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaSnapchat className="w-12 h-12 text-yellow-500 mx-auto" />
              <h3 className="text-xl font-semibold">Snapchat Ads</h3>
              <p className="text-gray-600 mt-2">Engage younger audiences with targeted Snapchat advertisements.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaShoppingCart className="w-12 h-12 text-green-600 mx-auto" />
              <h3 className="text-xl font-semibold">Shop</h3>
              <p className="text-gray-600 mt-2">Sell your products on the Shop app and reach more customers.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaSms className="w-12 h-12 text-red-500 mx-auto" />
              <h3 className="text-xl font-semibold">Omnisend Email Marketing & SMS</h3>
              <p className="text-gray-600 mt-2">Increase sales with automated email and SMS marketing.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaStar className="w-12 h-12 text-purple-500 mx-auto" />
              <h3 className="text-xl font-semibold">Yotpo Email Marketing & SMS</h3>
              <p className="text-gray-600 mt-2">Boost conversions with powerful email and SMS campaigns.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <FaPaperPlane className="w-12 h-12 text-indigo-500 mx-auto" />
              <h3 className="text-xl font-semibold">Seguno Email</h3>
              <p className="text-gray-600 mt-2">Simplify your email marketing with Seguno’s automation tools.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Marketing