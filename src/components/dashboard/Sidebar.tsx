"use client";

import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Users,
  Truck,
  Settings,
  LogOut,
} from "lucide-react";

type MenuItem = {
  name: string;
  icon: any;
  active?: boolean; // optional → TS error fix
};

type MenuSection = {
  title: string;
  items: MenuItem[];
};

const menuSections: MenuSection[] = [
  {
    title: "MAIN",
    items: [
      { name: "Dashboard", icon: LayoutDashboard },
      { name: "Orders", icon: ShoppingCart, active: true },
    ],
  },
  {
    title: "MANAGEMENT",
    items: [
      { name: "Products", icon: Package },
      { name: "Customers", icon: Users },
      { name: "Riders", icon: Truck },
    ],
  },
  {
    title: "SYSTEM",
    items: [{ name: "Settings", icon: Settings }],
  },
];

export default function Sidebar() {
  return (
    <div className="w-72 h-screen bg-[#0B1220] text-white flex flex-col justify-between border-r border-white/10">
      
      {/* TOP LOGO */}
      <div>
        <div className="px-6 py-5 text-xl font-bold text-pink-500 border-b border-white/10">
          FoodPanda Admin
        </div>

        {/* MENU */}
        <div className="p-3 space-y-6">
          {menuSections.map((section, i) => (
            <div key={i}>
              
              {/* SECTION TITLE */}
              <p className="text-[11px] text-gray-500 px-3 mb-2 tracking-wider">
                {section.title}
              </p>

              {/* ITEMS */}
              <div className="space-y-1">
                {section.items.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={index}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition
                      ${
                        item.active
                          ? "bg-pink-600 text-white shadow-md"
                          : "text-gray-400 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">
                        {item.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM PROFILE */}
      <div className="p-4 border-t border-white/10">
        
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-600" />

          <div>
            <p className="text-sm font-semibold">Admin User</p>
            <p className="text-xs text-gray-400">Super Admin</p>
          </div>
        </div>

        <div className="flex items-center gap-2 text-red-400 hover:text-red-300 cursor-pointer">
          <LogOut size={16} />
          <span className="text-sm">Logout</span>
        </div>
      </div>
    </div>
  );
}