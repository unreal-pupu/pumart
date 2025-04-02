import React, { useState } from "react";

const Customers = () => {
  const [customerDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    address: "123 Main Street, City, Country, 12345",
    orders: [
      { orderId: "#001", date: "2024-03-30", total: "$120.00", status: "Delivered" },
      { orderId: "#002", date: "2024-03-28", total: "$250.50", status: "Shipped" },
      { orderId: "#003", date: "2024-03-27", total: "$89.99", status: "Processing" },
    ],
  });

  return (
    <>
     <div className="min-h-screen bg-[#fffcdc] p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Customer Profile</h2>
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700">Customer Information</h3>
          <div className="space-y-2 mt-4">
            <p><strong>Name:</strong> {customerDetails.name}</p>
            <p><strong>Email:</strong> {customerDetails.email}</p>
            <p><strong>Phone:</strong> {customerDetails.phone}</p>
            <p><strong>Address:</strong> {customerDetails.address}</p>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-700">Recent Orders</h3>
          <div className="overflow-x-auto mt-4">
            <table className="w-full border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 border border-gray-200">Order ID</th>
                  <th className="p-3 border border-gray-200">Date</th>
                  <th className="p-3 border border-gray-200">Total</th>
                  <th className="p-3 border border-gray-200">Status</th>
                </tr>
              </thead>
              <tbody>
                {customerDetails.orders.map((order, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="p-3 border border-gray-200">{order.orderId}</td>
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
    </div>
    </>
  )
}

export default Customers