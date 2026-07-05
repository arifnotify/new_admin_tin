export default function Sidebar() {
  return (
    <div className="w-64 bg-[#0f172a] text-white flex flex-col">

      {/* Logo */}
      <div className="h-16 flex items-center px-6 font-bold text-pink-500 text-xl border-b border-white/10">
        FoodAdmin
      </div>

      {/* Menu */}
      <div className="flex-1 p-4 space-y-2">

        <div className="p-3 rounded-lg bg-white/10 cursor-pointer">
          Dashboard
        </div>

        <div className="p-3 rounded-lg hover:bg-white/10 cursor-pointer">
          Orders
        </div>

        <div className="p-3 rounded-lg hover:bg-white/10 cursor-pointer">
          Customers
        </div>

        <div className="p-3 rounded-lg hover:bg-white/10 cursor-pointer">
          Riders
        </div>

      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 text-sm text-gray-400">
        Admin Panel v1.0
      </div>

    </div>
  );
}