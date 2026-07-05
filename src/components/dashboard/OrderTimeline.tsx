"use client";

import { CheckCircle,  Truck, Package } from "lucide-react";

const steps = [
  {
    title: "Order Placed",
    desc: "Customer placed the order",
    icon: CheckCircle,
    active: true,
  },
  {
    title: "Preparing Food",
    desc: "Restaurant is cooking",
    icon: Package,
    active: true,
  },
  {
    title: "On the Way",
    desc: "Rider picked up order",
    icon: Truck,
    active: false,
  },
  {
    title: "Delivered",
    desc: "Order completed",
    icon: CheckCircle,
    active: false,
  },
];

export default function OrderTimeline() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">
      
      <h2 className="text-lg font-semibold text-gray-800 mb-5">
        Order Timeline
      </h2>

      <div className="space-y-6 relative">

        {/* vertical line */}
        <div className="absolute left-3 top-2 bottom-2 w-[2px] bg-gray-100" />

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div key={i} className="flex items-start gap-3 relative">

              {/* ICON */}
              <div
                className={`w-6 h-6 rounded-full flex items-center justify-center z-10
                ${step.active ? "bg-pink-600 text-white" : "bg-gray-200 text-gray-500"}`}
              >
                <Icon size={14} />
              </div>

              {/* CONTENT */}
              <div>
                <p
                  className={`text-sm font-medium ${
                    step.active ? "text-gray-800" : "text-gray-400"
                  }`}
                >
                  {step.title}
                </p>

                <p className="text-xs text-gray-400">
                  {step.desc}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}