"use client";

export default function OrderStatusCard() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">

      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Order Status
      </h2>

      <div className="space-y-4 text-sm">

        {/* STEP 1 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Order Placed</span>
          <span className="text-green-600 font-medium">Done</span>
        </div>

        {/* STEP 2 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Preparing Food</span>
          <span className="text-blue-600 font-medium">Active</span>
        </div>

        {/* STEP 3 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Rider Picked Up</span>
          <span className="text-yellow-500 font-medium">Waiting</span>
        </div>

        {/* STEP 4 */}
        <div className="flex items-center justify-between">
          <span className="text-gray-500">Delivered</span>
          <span className="text-gray-400 font-medium">Pending</span>
        </div>

      </div>

      {/* PROGRESS LINE */}
      <div className="mt-4 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[55%] h-full bg-gradient-to-r from-pink-500 to-red-500"></div>
      </div>

    </div>
  );
}