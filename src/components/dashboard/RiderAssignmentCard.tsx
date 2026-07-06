"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, Bike } from "lucide-react";

const riders = [
  {
    id: 1,
    name: "John Smith",
    phone: "+880171111111",
    vehicle: "Bike",
    rating: 4.9,
    status: "Available",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Rahim Ahmed",
    phone: "+880181111111",
    vehicle: "Scooter",
    rating: 4.8,
    status: "Available",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Michael",
    phone: "+880191111111",
    vehicle: "Bike",
    rating: 4.7,
    status: "Busy",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
];

export default function RiderAssignmentCard() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5">

      <div className="flex items-center justify-between mb-5">
        <h2 className="text-lg font-semibold">
          Rider Assignment
        </h2>

        <Bike className="text-pink-600" size={20} />
      </div>

      <div className="space-y-4">

        {riders.map((rider) => (

          <div
            key={rider.id}
            onClick={() => setSelected(rider.id)}
            className={`border rounded-xl p-3 cursor-pointer transition

            ${
              selected === rider.id
                ? "border-pink-500 bg-pink-50"
                : "hover:border-pink-300"
            }
            `}
          >

            <div className="flex items-center gap-3">

              <Image
                src={rider.avatar}
                alt={rider.name}
                width={50}
                height={50}
                className="rounded-full"
              />

              <div className="flex-1">

                <h3 className="font-semibold">
                  {rider.name}
                </h3>

                <p className="text-xs text-gray-500">
                  {rider.phone}
                </p>

                <p className="text-xs text-gray-400">
                  {rider.vehicle}
                </p>

              </div>

              <div className="text-right">

                <div className="flex items-center gap-1 text-yellow-500">
                  <Star fill="currentColor" size={15} />
                  {rider.rating}
                </div>

                <span
                  className={`text-xs px-2 py-1 rounded-full mt-2 inline-block

                  ${
                    rider.status === "Available"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-600"
                  }

                  `}
                >
                  {rider.status}
                </span>

              </div>

            </div>

          </div>

        ))}

      </div>

      <button
        disabled={!selected}
        className={`mt-5 w-full py-3 rounded-xl font-semibold transition

        ${
          selected
            ? "bg-pink-600 text-white hover:bg-pink-700"
            : "bg-gray-200 text-gray-400 cursor-not-allowed"
        }

        `}
      >
        Assign Rider
      </button>

    </div>
  );
}