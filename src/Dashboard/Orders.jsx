import React, { useState } from "react";

const Orders = () => {
  const [orders] = useState([
    { id: "#001", customer: "Alice Johnson", date: "2024-03-30", total: "$120.00", status: "Processing" },
    { id: "#002", customer: "John Doe", date: "2024-03-28", total: "$250.50", status: "Shipped" },
    { id: "#003", customer: "Emma Brown", date: "2024-03-27", total: "$89.99", status: "Delivered" },
    { id: "#004", customer: "Michael Smith", date: "2024-03-25", total: "$175.75", status: "Canceled" },
    { id: "#005", customer: "Sophia Davis", date: "2024-03-22", total: "$99.49", status: "Processing" },
  ]);

  return (
    <div className="min-h-screen bg-[#fffcdc] p-6">
      <div className="max-w-6xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Orders</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3 border border-gray-200">Order ID</th>
                <th className="p-3 border border-gray-200">Customer</th>
                <th className="p-3 border border-gray-200">Date</th>
                <th className="p-3 border border-gray-200">Total</th>
                <th className="p-3 border border-gray-200">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="p-3 border border-gray-200">{order.id}</td>
                  <td className="p-3 border border-gray-200">{order.customer}</td>
                  <td className="p-3 border border-gray-200">{order.date}</td>
                  <td className="p-3 border border-gray-200">{order.total}</td>
                  <td className={`p-3 border border-gray-200 font-semibold ${
                    order.status === "Delivered" ? "text-green-600" :
                    order.status === "Shipped" ? "text-blue-600" :
                    order.status === "Processing" ? "text-yellow-600" : "text-red-600"}`}
                  >
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
