import {
  ShoppingCart,
  Clock,
  CookingPot,
  Truck,
  DollarSign,
} from "lucide-react";

const stats = [
  {
    title: "Total Orders",
    value: "1,245",
    icon: ShoppingCart,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Pending Orders",
    value: "320",
    icon: Clock,
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Processing",
    value: "180",
    icon: CookingPot,
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Delivered",
    value: "745",
    icon: Truck,
    color: "from-green-400 to-emerald-600",
  },
  {
    title: "Revenue",
    value: "$12,430",
    icon: DollarSign,
    color: "from-purple-500 to-pink-500",
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-4">
      {stats.map((item, i) => {
        const Icon = item.icon;

        return (
          <div
            key={i}
            className="bg-white rounded-xl shadow-sm p-4 border hover:shadow-lg transition duration-300"
          >
            {/* Top Row */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-400">{item.title}</p>
                <h2 className="text-xl font-bold text-gray-800 mt-1">
                  {item.value}
                </h2>
              </div>

              {/* Icon Circle */}
              <div
                className={`p-3 rounded-full text-white bg-gradient-to-r ${item.color}`}
              >
                <Icon size={18} />
              </div>
            </div>

            {/* Bottom glow line */}
            <div className="mt-4 h-1 w-full bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${item.color} w-2/3`}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}