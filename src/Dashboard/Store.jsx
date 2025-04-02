import React from 'react'

const Store = () => {
  return (
    <>
     <div className="min-h-screen bg-gray-100 p-6">
      <header className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h1 className="text-3xl font-semibold">Welcome to Your Online Store</h1>
        <p className="text-gray-600 mt-2">Set up and manage your store effortlessly.</p>
      </header>

      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">🚀 Quick Store Setup</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">1. Add Your Products</h3>
            <p className="text-gray-600">Upload product images, descriptions, and pricing.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">2. Customize Your Store</h3>
            <p className="text-gray-600">Choose a theme, set colors, and personalize your branding.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">3. Set Up Payments</h3>
            <p className="text-gray-600">Enable payment methods like PayPal, credit cards, or local banks.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 shadow-md rounded-lg mb-6">
        <h2 className="text-2xl font-semibold mb-4">🛠️ Manage Your Store</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">📦 Inventory Tracking</h3>
            <p className="text-gray-600">Monitor stock levels and restock automatically.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">📊 Sales Analytics</h3>
            <p className="text-gray-600">View real-time insights on sales, orders, and customer trends.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">📢 Marketing Tools</h3>
            <p className="text-gray-600">Use discounts, email campaigns, and social media integrations.</p>
          </div>
          <div className="p-4 border rounded-lg">
            <h3 className="text-lg font-semibold">📍 Shipping & Delivery</h3>
            <p className="text-gray-600">Set shipping rates and track deliveries in one place.</p>
          </div>
        </div>
      </section>

      <section className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">💡 Store Optimization Tips</h2>
        <ul className="list-disc pl-6 text-gray-600">
          <li>Use high-quality product images.</li>
          <li>Write clear and compelling product descriptions.</li>
          <li>Offer discounts and promotions to attract customers.</li>
          <li>Optimize your store for mobile shoppers.</li>
          <li>Engage customers through email and social media marketing.</li>
        </ul>
      </section>
    </div>
    </>
  )
}

export default Store