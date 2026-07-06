"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { Rider } from "@/src/types/rider";

interface Props {
  rider: Rider;
  selected: boolean;
  onSelect: () => void;
}

export default function RiderCard({
  rider,
  selected,
  onSelect,
}: Props) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer rounded-xl border p-4 transition-all

      ${
        selected
          ? "border-pink-500 bg-pink-50"
          : "hover:border-pink-300"
      }
      `}
    >
      <div className="flex items-center gap-4">
        <Image
          src={rider.avatar}
          width={50}
          height={50}
          alt={rider.name}
          className="rounded-full"
        />

        <div className="flex-1">
          <h3 className="font-semibold">{rider.name}</h3>

          <p className="text-sm text-gray-500">
            {rider.vehicle}
          </p>

          <p className="text-sm text-gray-400">
            {rider.phone}
          </p>
        </div>

        <div className="text-right">
          <div className="flex items-center gap-1 text-yellow-500">
            <Star size={15} fill="currentColor" />
            {rider.rating}
          </div>

          <span
            className={`text-xs mt-2 inline-block px-2 py-1 rounded-full

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
  );
}