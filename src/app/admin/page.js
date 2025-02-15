// app/admin/page.js
"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { UserButton } from "@clerk/nextjs";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

// Register Chart.js components
Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement);

export default function AdminDashboard() {
  // Sample chart data for the bar chart (Talent Submissions by Category)
  const [barChartData, setBarChartData] = useState({
    labels: ["Music", "Dance", "Art", "Sports", "Comedy"],
    datasets: [
      {
        label: "Talent Submissions",
        data: [12, 19, 3, 5, 2],
        backgroundColor: "rgba(54, 162, 235, 0.6)",
      },
    ],
  });

  // Sample chart data for the pie chart (Submission Status Distribution)
  const [pieChartData, setPieChartData] = useState({
    labels: ["Approved", "Pending", "Rejected"],
    datasets: [
      {
        data: [50, 20, 10],
        backgroundColor: ["#34D399", "#FBBF24", "#F87171"],
      },
    ],
  });

  // Simulate dynamic data updates (for demonstration purposes)
  useEffect(() => {
    const interval = setInterval(() => {
      setBarChartData((prevData) => {
        const newData = prevData.datasets[0].data.map((val) =>
          Math.max(0, val + Math.floor(Math.random() * 3 - 1))
        );
        return {
          ...prevData,
          datasets: [
            {
              ...prevData.datasets[0],
              data: newData,
            },
          ],
        };
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Sidebar open/close state
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside
        className={`bg-white shadow-lg transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-20"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          {sidebarOpen && <h2 className="text-lg font-bold">Admin Panel</h2>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-600 focus:outline-none"
          >
            {sidebarOpen ? "<" : ">"}
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link href="/admin">
                <Link href="/admin" className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  {/* Dashboard Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 12l2-2m0 0l7-7 7 7M13 5v6h6"
                    />
                  </svg>
                  {sidebarOpen && <span className="ml-2">Dashboard</span>}
                </Link>
              </Link>
            </li>
            <li>
              <Link href="/admin/talents">
                <div className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  {/* Talent Submissions Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7c0 3.866-3.582 7-8 7S0 10.866 0 7a8 8 0 1116 0z"
                    />
                  </svg>
                  {sidebarOpen && (
                    <span className="ml-2">Talent Submissions</span>
                  )}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/chat">
                <div className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  {/* Chat Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M7 8h10M7 12h4m-4 4h10M5 20h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2z"
                    />
                  </svg>
                  {sidebarOpen && <span className="ml-2">Chat</span>}
                </div>
              </Link>
            </li>
            <li>
              <Link href="/admin/settings">
                <div className="flex items-center p-2 text-gray-700 hover:bg-gray-200 rounded">
                  {/* Settings Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  {sidebarOpen && <span className="ml-2">Settings</span>}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-white shadow">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <div className="flex items-center space-x-4">
            <span className="text-gray-600">Welcome, Admin</span>
            <UserButton
              appearance={{
                elements: {
                  userButtonTrigger: "rounded-full bg-gray-200 hover:bg-gray-300 p-1",
                  userButtonDropdown: "bg-white shadow-lg rounded-lg p-4",
                  userButtonDropdownItem: "hover:bg-gray-100 text-gray-800",
                },
              }}
            />
          </div>
        </header>

        {/* Main Body */}
        <main className="p-6 flex-1 overflow-auto">
          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Total Talents</h3>
              <p className="text-3xl">120</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Pending Approvals</h3>
              <p className="text-3xl">15</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-2">Messages</h3>
              <p className="text-3xl">8</p>
            </div>
          </div>

          {/* Chart Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Bar Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">
                Talent Submissions by Category
              </h2>
              <Bar
                data={barChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "top",
                    },
                    title: {
                      display: true,
                      text: "Talent Submissions",
                    },
                  },
                }}
              />
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-2xl font-bold mb-4">
                Submission Status Distribution
              </h2>
              <Pie
                data={pieChartData}
                options={{
                  responsive: true,
                  plugins: {
                    legend: {
                      position: "bottom",
                    },
                    title: {
                      display: true,
                      text: "Submission Status",
                    },
                  },
                }}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
