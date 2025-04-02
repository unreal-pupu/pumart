import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales Revenue',
      data: [3000, 4000, 3500, 5000, 4200, 6000],
      borderColor: '#4CAF50',
      backgroundColor: 'rgba(76, 175, 80, 0.2)',
      fill: true,
    },
  ],
};

const Dashboard = () => {
  const [tasksCompleted, setTasksCompleted] = useState([]);

  const handleTaskClick = (task) => {
    setTasksCompleted((prev) =>
      prev.includes(task) ? prev.filter((item) => item !== task) : [...prev, task]
    );
  };

  const tasks = [
    'Add your first product',
    'Write a description, add photos, and set pricing for the products you plan to sell.',
    'Design your online store in seconds',
    'Add a custom domain',
    'Name your store',
    'Confirm your shipping rates',
    'Set up a payment provider',
    'Place a test order',
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      <div className="flex-1 p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Welcome to Your Dashboard</h1>
          <button className="bg-[#14281d] text-white px-4 py-2 rounded-lg">Add New Product</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Get Ready to Sell</h3>
          <p className="text-gray-600 mb-4">
            Here’s a guide to get started. As your business grows, you’ll get fresh tips and insights here.
          </p>
          <div className="mb-4">
            <p className="font-semibold text-gray-700">0 of 7 tasks complete</p>
            <div className="mt-2">
              <h4 className="text-lg font-semibold">Setup guide</h4>
              <p className="text-gray-600">
                Use this personalized guide to get your store up and running.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <ul className="list-none pl-0 space-y-2">
              {tasks.map((task, index) => (
                <li
                  key={index}
                  className={`flex items-center cursor-pointer space-x-3 ${
                    tasksCompleted.includes(task)
                      ? 'text-green-500 line-through'
                      : 'text-gray-700'
                  }`}
                  onClick={() => handleTaskClick(task)}
                >
                  <span
                    className={`w-4 h-4 rounded-full border-2 border-dotted mr-3 ${
                      tasksCompleted.includes(task) ? 'bg-green-500' : ''
                    }`}
                  ></span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Sales</h3>
            <p className="text-2xl font-bold text-green-500">$20,000</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Products Sold</h3>
            <p className="text-2xl font-bold text-blue-500">150</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Pending Orders</h3>
            <p className="text-2xl font-bold text-red-500">5</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold">Total Customers</h3>
            <p className="text-2xl font-bold text-purple-500">250</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
          <h3 className="text-xl font-semibold mb-4">Sales & Analytics</h3>
          <div className="h-96">
            <Line data={salesData} />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Recent Orders</h3>
          <ul className="space-y-4">
            <li className="flex justify-between items-center">
              <p className="text-lg">Order #12345</p>
              <p className="text-gray-600">Status: Pending</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-lg">Order #12346</p>
              <p className="text-gray-600">Status: Shipped</p>
            </li>
            <li className="flex justify-between items-center">
              <p className="text-lg">Order #12347</p>
              <p className="text-gray-600">Status: Delivered</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;