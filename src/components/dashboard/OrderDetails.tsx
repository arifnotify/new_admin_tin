"use client";

import { User, MapPin, CreditCard, Bike } from "lucide-react";
import OrderTimeline from "./OrderTimeline";

export default function OrderDetails() {
  return (
    <div className="space-y-6">

      {/* CUSTOMER INFO */}
      <div className="bg-white rounded-xl border shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Customer Info
        </h2>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gray-300" />

          <div>
            <p className="font-medium text-gray-800">John Doe</p>
            <p className="text-xs text-gray-400">+974 5555 1234</p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
          <User size={16} />
          <span>Regular Customer</span>
        </div>
      </div>

      {/* DELIVERY ADDRESS */}
      <div className="bg-white rounded-xl border shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Delivery Address
        </h2>

        <div className="flex gap-2 text-sm text-gray-600">
          <MapPin size={16} className="mt-1" />
          <p>
            Street 12, Building 45, Doha, Qatar
          </p>
        </div>
      </div>

      {/* PAYMENT INFO */}
      <div className="bg-white rounded-xl border shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Payment Info
        </h2>

        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-500">Method</span>
          <span className="font-medium">Cash on Delivery</span>
        </div>

        <div className="flex items-center justify-between text-sm mt-2">
          <span className="text-gray-500">Total</span>
          <span className="font-semibold text-gray-800">$24.50</span>
        </div>

        <div className="mt-3 flex items-center gap-2 text-green-600 text-sm">
          <CreditCard size={16} />
          <span>Payment Pending</span>
        </div>
      </div>

      {/* RIDER ASSIGNMENT */}
      <div className="bg-white rounded-xl border shadow-sm p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          Assign Rider
        </h2>

        <div className="space-y-3">

          <div className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <Bike size={16} />
              <span className="text-sm">Ali Ahmed</span>
            </div>

            <button className="text-xs bg-pink-600 text-white px-3 py-1 rounded-lg">
              Assign
            </button>
          </div>

          <div className="flex items-center justify-between p-2 border rounded-lg hover:bg-gray-50">
            <div className="flex items-center gap-2">
              <Bike size={16} />
              <span className="text-sm">Rahim Khan</span>
            </div>

            <button className="text-xs bg-pink-600 text-white px-3 py-1 rounded-lg">
              Assign
            </button>

            <OrderTimeline />
          </div>

        </div>
      </div>

    </div>
  );
}