import React from 'react'
import { Line, Pie } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from "chart.js";



ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export const Analytics = () => {
  const salesData = {
    totalSales: {
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          label: "Total Sales",
          data: [1200, 1900, 2500, 2300, 2800, 3200],
          borderColor: "rgba(75,192,192,1)",
          backgroundColor: "rgba(75,192,192,0.2)",
          fill: true,
        },
      ],
    },
    salesByCategory: {
      labels: ["Electronics", "Fashion", "Home", "Books", "Toys"],
      datasets: [
        {
          label: "Sales by Category",
          data: [1200, 1900, 1500, 800, 1000],
          backgroundColor: ["#FF5733", "#33FF57", "#3357FF", "#FF33A8", "#FF9933"],
        },
      ],
    },
  };
  return (
    <>
     <div className="min-h-screen bg-[#fffcdc] p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">Vendor Sales Analytics</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Total Sales</h2>
            <Line data={salesData.totalSales} />
          </div>
          <div className="bg-white p-6 shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold text-center mb-4">Sales by Category</h2>
            <Pie data={salesData.salesByCategory} />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
