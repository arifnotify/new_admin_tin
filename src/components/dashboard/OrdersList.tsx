"use client";

import { Eye } from "lucide-react";

const orders = [
  {
    id: "1001",
    customer: "John Doe",
    items: 2,
    price: 24.5,
    status: "Pending",
    time: "10:30 AM",
  },
  {
    id: "1002",
    customer: "Sarah Khan",
    items: 3,
    price: 40.0,
    status: "Processing",
    time: "11:00 AM",
  },
  {
    id: "1003",
    customer: "Mike Ross",
    items: 1,
    price: 12.99,
    status: "Delivered",
    time: "09:15 AM",
  },
  {
    id: "1004",
    customer: "Emma Watson",
    items: 4,
    price: 55.2,
    status: "Pending",
    time: "12:20 PM",
  },
];

function getStatusColor(status: string) {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-600";
    case "Processing":
      return "bg-blue-100 text-blue-600";
    case "Delivered":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

export default function OrdersList() {
  return (
    <div className="bg-white rounded-xl shadow-sm border p-5">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold text-gray-800">
          Recent Orders
        </h2>

        <button className="text-sm text-pink-600 hover:underline">
          View all
        </button>
      </div>

      {/* Table Header */}
      <div className="hidden md:grid grid-cols-5 text-xs text-gray-400 border-b pb-2">
        <p>Order ID</p>
        <p>Customer</p>
        <p>Status</p>
        <p>Time</p>
        <p className="text-right">Action</p>
      </div>

      {/* Rows */}
      <div className="space-y-3 mt-3">
        {orders.map((order, i) => (
          <div
            key={i}
            className="grid grid-cols-1 md:grid-cols-5 items-center gap-2 p-3 rounded-lg hover:bg-gray-50 transition border md:border-0"
          >
            {/* Order ID */}
            <p className="font-medium text-gray-800">
              #{order.id}
            </p>

            {/* Customer */}
            <div>
              <p className="text-sm font-medium text-gray-700">
                {order.customer}
              </p>
              <p className="text-xs text-gray-400">
                {order.items} items
              </p>
            </div>

            {/* Status */}
            <span
              className={`text-xs px-3 py-1 rounded-full w-fit ${getStatusColor(
                order.status
              )}`}
            >
              {order.status}
            </span>

            {/* Time */}
            <p className="text-sm text-gray-500">
              {order.time}
            </p>

            {/* Action */}
            <div className="flex justify-end">
              <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-pink-600">
                <Eye size={16} />
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}