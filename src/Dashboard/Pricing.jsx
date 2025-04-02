import React, { useState } from "react";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: "$25/mo",
      yearlyPrice: "$250/year",
      features: [
        "10 inventory locations",
        "2% 3rd-party payment providers",
        "24/7 chat support",
        "Localized global selling (3 markets)",
      ],
    },
    {
      name: "Standard",
      monthlyPrice: "$150/mo",
      yearlyPrice: "$1500/year",
      features: [
        "5 additional staff accounts",
        "1% 3rd-party payment providers",
        "10 inventory locations",
        "24/7 chat support",
        "Localized global selling (3 markets)",
      ],
    },
    {
      name: "Premium",
      monthlyPrice: "$300/mo",
      yearlyPrice: "$3000/year",
      features: [
        "1% 3rd-party payment providers",
        "10 inventory locations",
        "10x checkout capacity",
        "15 additional staff account",
        "Localized global selling (3 markets) + add markets for $59 USD/mo each",
        "Enhanced 24/7 chat support",
        "POS Lite",
      ],
    },
    {
      name: "Plus",
      monthlyPrice: "$1500/mo",
      yearlyPrice: "$15000/year",
      features: [
        "200 inventory locations",
        "Priority 24/7 phone support",
        "Localized global selling (50 markets)",
        "Unlimited staff accounts",
        "Customizable checkout with 40x capacity",
        "Up to 200 POS Pro locations",
        "Sell wholesale/B2B",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#fffcdc] flex flex-col items-center justify-center py-12 px-6">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">Choose the Best Plan for You</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Whether you're an individual or a business, we offer flexible and affordable pricing plans designed to suit your needs. Pick a plan and get started today!
        </p>
      </div>

      <div className="mb-8 flex justify-center space-x-4">
        <button
          onClick={() => setIsYearly(false)}
          className={`py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 ${
            !isYearly ? "bg-[#14281d] text-white shadow-lg" : "bg-white text-gray-600 border border-gray-300"
          }`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`py-2 px-6 rounded-lg text-lg font-medium transition-all duration-300 ${
            isYearly ? "bg-[#14281d] text-white shadow-lg" : "bg-white text-gray-600 border border-gray-300"
          }`}
        >
          Yearly
        </button>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-3xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-3">{plan.name}</h3>
            <p className="text-3xl font-bold text-[#14281d] mb-6">
              {isYearly ? plan.yearlyPrice : plan.monthlyPrice}
            </p>
            <ul className="space-y-3 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2">
                  <span className="text-blue-500">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className="mt-6 w-full py-3 px-6 rounded-lg font-medium transition-colors bg-[#14281d] hover:text-[#fffcdc] text-[#fffcdc]"
            >
              Choose Plan
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;