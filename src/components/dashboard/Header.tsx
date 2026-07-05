"use client";

import { Bell, Search, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [search, setSearch] = useState("");

  return (
    <div className="h-16 w-full bg-white border-b flex items-center justify-between px-6 shadow-sm">
      
      {/* LEFT: Title / Breadcrumb */}
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-gray-800">
          Orders Dashboard
        </h1>
        <p className="text-xs text-gray-400">
          Manage all restaurant orders
        </p>
      </div>

      {/* CENTER: Search */}
      <div className="hidden md:flex items-center bg-gray-100 px-3 py-2 rounded-lg w-[380px]">
        <Search size={18} className="text-gray-500" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search orders, customers..."
          className="bg-transparent outline-none px-2 text-sm w-full"
        />
      </div>

      {/* RIGHT: Actions */}
      <div className="flex items-center gap-4">

        {/* Notification */}
        <div className="relative cursor-pointer">
          <Bell className="text-gray-600" size={20} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-gray-200"></div>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gray-300"></div>

          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">Admin User</p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>

          <ChevronDown size={18} className="text-gray-500" />
        </div>

      </div>
    </div>
  );
}