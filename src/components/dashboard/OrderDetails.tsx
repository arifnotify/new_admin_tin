"use client";

import {
  User,
  MapPin,
  CreditCard,
  Phone,
  Mail,
} from "lucide-react";

import OrderTimeline from "./OrderTimeline";
import OrderItems from "./OrderItems";
import RiderAssignmentCard from "./RiderAssignmentCard";
import OrderStatusCard from "./OrderStatusCard";
import LiveTrackingCard from "./LiveTrackingCard";

export default function OrderDetails() {
  return (
    <div className="space-y-6">

      {/* ================= CUSTOMER INFO ================= */}

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

        <div className="px-5 py-4 border-b">
          <h2 className="text-lg font-semibold text-gray-800">
            Customer Information
          </h2>
        </div>

        <div className="p-5">

          <div className="flex items-center gap-4">

            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-white text-xl font-bold">
              J
            </div>

            <div>

              <h3 className="font-semibold text-gray-800">
                John Doe
              </h3>

              <p className="text-sm text-gray-500">
                Premium Customer
              </p>

            </div>

          </div>

          <div className="mt-6 space-y-4">

            <div className="flex items-center gap-3">

              <Phone
                size={18}
                className="text-pink-600"
              />

              <span className="text-sm text-gray-600">
                +974 5555 1234
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Mail
                size={18}
                className="text-pink-600"
              />

              <span className="text-sm text-gray-600">
                john@email.com
              </span>

            </div>

            <div className="flex items-center gap-3">

              <User
                size={18}
                className="text-pink-600"
              />

              <span className="text-sm text-gray-600">
                Customer ID : #CUS-1001
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* ================= DELIVERY ADDRESS ================= */}

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

        <div className="px-5 py-4 border-b">

          <h2 className="text-lg font-semibold text-gray-800">
            Delivery Address
          </h2>

        </div>

        <div className="p-5">

          <div className="flex gap-3">

            <MapPin
              size={20}
              className="text-pink-600 mt-1"
            />

            <div>

              <p className="text-gray-700">

                Street 12,
                Building 45,
                Doha,
                Qatar

              </p>

              <p className="text-xs text-gray-400 mt-2">

                Delivery Note:
                Ring the bell twice.

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================= PAYMENT INFO ================= */}

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

        <div className="px-5 py-4 border-b">

          <h2 className="text-lg font-semibold text-gray-800">
            Payment Information
          </h2>

        </div>

        <div className="p-5 space-y-3">

          <div className="flex justify-between">

            <span className="text-sm text-gray-500">
              Payment Method
            </span>

            <span className="font-medium">
              Cash On Delivery
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-sm text-gray-500">
              Payment Status
            </span>

            <span className="text-yellow-600 font-semibold">
              Pending
            </span>

          </div>

          <div className="flex justify-between">

            <span className="text-sm text-gray-500">
              Total Amount
            </span>

            <span className="font-bold text-lg">
              $24.50
            </span>

          </div>

          <div className="pt-3 border-t">

            <div className="flex items-center gap-2 text-green-600">

              <CreditCard size={18} />

              <span className="text-sm">
                Waiting for payment
              </span>

            </div>

          </div>

        </div>

      </div>

      {/* Remaining Components */}

      <OrderTimeline />

      <OrderItems />

      <RiderAssignmentCard />

      <OrderStatusCard />

      <LiveTrackingCard />

    </div>
  );
}