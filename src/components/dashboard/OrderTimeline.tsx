"use client";

import {
  CheckCircle2,
  ChefHat,
  Bike,
  PackageCheck,
} from "lucide-react";

const timeline = [
  {
    id: 1,
    title: "Order Placed",
    time: "10:15 AM",
    completed: true,
    icon: CheckCircle2,
    color: "text-green-600",
    bg: "bg-green-100",
  },
  {
    id: 2,
    title: "Preparing Food",
    time: "10:22 AM",
    completed: true,
    icon: ChefHat,
    color: "text-orange-500",
    bg: "bg-orange-100",
  },
  {
    id: 3,
    title: "Rider Picked Up",
    time: "10:40 AM",
    completed: true,
    icon: Bike,
    color: "text-blue-600",
    bg: "bg-blue-100",
  },
  {
    id: 4,
    title: "Delivered",
    time: "Estimated 11:05 AM",
    completed: false,
    icon: PackageCheck,
    color: "text-gray-400",
    bg: "bg-gray-100",
  },
];

export default function OrderTimeline() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

      {/* Header */}
      <div className="px-5 py-4 border-b">
        <h2 className="text-lg font-semibold text-gray-800">
          Order Timeline
        </h2>
      </div>

      {/* Timeline */}
      <div className="p-5">

        <div className="relative">

          {timeline.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.id}
                className="relative flex gap-4 pb-8 last:pb-0"
              >

                {/* Vertical Line */}
                {index !== timeline.length - 1 && (
                  <div className="absolute left-5 top-12 w-[2px] h-full bg-gray-200"></div>
                )}

                {/* Icon */}
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${step.bg}`}
                >
                  <Icon
                    size={18}
                    className={step.color}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">

                  <div className="flex justify-between">

                    <h3 className="font-medium text-gray-800">
                      {step.title}
                    </h3>

                    <span className="text-xs text-gray-400">
                      {step.time}
                    </span>

                  </div>

                  <p
                    className={`text-sm mt-1 ${
                      step.completed
                        ? "text-green-600"
                        : "text-gray-400"
                    }`}
                  >
                    {step.completed
                      ? "Completed"
                      : "Waiting"}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}