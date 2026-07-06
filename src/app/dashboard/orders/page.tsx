import Header from "@/src/components/dashboard/Header";
import OrderDetails from "@/src/components/dashboard/OrderDetails";
import OrdersList from "@/src/components/dashboard/OrdersList";
import Sidebar from "@/src/components/dashboard/Sidebar";
import StatsCards from "@/src/components/dashboard/StatsCards";

export default function OrdersDashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* HEADER */}
        <Header />

        {/* BODY */}
        <div className="p-6 overflow-y-auto space-y-6">

          {/* STATS */}
          <StatsCards />

          {/* MAIN GRID */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 h-full">

            {/* LEFT SIDE */}
            <div className="xl:col-span-2 space-y-6">

              <OrdersList />

              {/* OPTIONAL SUMMARY (keep or remove) */}
              <div className="bg-white rounded-xl border shadow-sm p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-3">
                  Today Performance
                </h2>

                <div className="grid grid-cols-3 gap-4 text-sm">

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Orders</p>
                    <p className="font-semibold text-gray-800">32</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Revenue</p>
                    <p className="font-semibold text-gray-800">$1,240</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-gray-500">Delivered</p>
                    <p className="font-semibold text-gray-800">18</p>
                  </div>

                </div>
              </div>

            </div>

            {/* RIGHT SIDE */}
            <div className="space-y-6 overflow-y-auto max-h-[calc(100vh-120px)] pr-2">

              <OrderDetails />

              {/* LIVE STATUS */}
              <div className="bg-white rounded-xl border shadow-sm p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-4">
                  Live Status
                </h2>

                <div className="space-y-3 text-sm">

                  <div className="flex justify-between">
                    <span className="text-gray-500">Order Placed</span>
                    <span className="text-green-600 font-medium">Done</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Cooking</span>
                    <span className="text-blue-600 font-medium">Active</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">On Delivery</span>
                    <span className="text-gray-400">Pending</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-gray-500">Delivered</span>
                    <span className="text-gray-400">Waiting</span>
                  </div>

                </div>

                <div className="mt-4 w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-gradient-to-r from-pink-500 to-red-500"></div>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}