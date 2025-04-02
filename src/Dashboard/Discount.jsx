import React, { useState } from "react";

export const Discount = () => {
  const [discountName, setDiscountName] = useState("");
  const [discountType, setDiscountType] = useState("percentage");
  const [discountValue, setDiscountValue] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eligibleProducts, setEligibleProducts] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("Discount successfully created!");
  };
  return (
    <>
     <div className="min-h-screen bg-[#fffcdc] p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-4">
          Create a Discount
        </h2>
        
        {message && (
          <div className="mb-4 p-2 text-green-600 bg-green-100 rounded">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="discountName" className="block text-gray-700">
              Discount Name
            </label>
            <input
              type="text"
              id="discountName"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={discountName}
              onChange={(e) => setDiscountName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="discountType" className="block text-gray-700">
              Discount Type
            </label>
            <select
              id="discountType"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={discountType}
              onChange={(e) => setDiscountType(e.target.value)}
            >
              <option value="percentage">Percentage</option>
              <option value="fixed">Fixed Amount</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="discountValue" className="block text-gray-700">
              Discount Value
            </label>
            <input
              type="number"
              id="discountValue"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={discountValue}
              onChange={(e) => setDiscountValue(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="startDate" className="block text-gray-700">
              Start Date
            </label>
            <input
              type="date"
              id="startDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="endDate" className="block text-gray-700">
              End Date
            </label>
            <input
              type="date"
              id="endDate"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="eligibleProducts" className="block text-gray-700">
              Eligible Products or Categories
            </label>
            <input
              type="text"
              id="eligibleProducts"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              value={eligibleProducts}
              onChange={(e) => setEligibleProducts(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-[#14281d] text-white rounded-md hover:text-[#fffcdc] transition"
            >
              Save Discount
            </button>
          </div>
        </form>
      </div>
    </div>

    </>
  )
}
