"use client";

import { MapPin, Navigation } from "lucide-react";

export default function LiveTrackingCard() {
  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-4">

      {/* TITLE */}
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-800">
          Live Tracking
        </h2>

        <Navigation className="text-pink-600" size={18} />
      </div>

      {/* MAP UI PLACEHOLDER */}
      <div className="relative w-full h-40 bg-gray-100 rounded-xl overflow-hidden">

        <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
          Map View (Google Maps UI)
        </div>

        {/* PIN */}
        <div className="absolute top-10 left-10 flex items-center gap-1 text-pink-600 text-xs">
          <MapPin size={14} />
          Restaurant
        </div>

        <div className="absolute bottom-10 right-10 flex items-center gap-1 text-green-600 text-xs">
          <MapPin size={14} />
          Customer
        </div>

      </div>

      {/* STATUS BAR */}
      <div className="space-y-2">

        <div className="flex justify-between text-sm text-gray-600">
          <span>Distance</span>
          <span className="font-medium">3.2 km</span>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span>ETA</span>
          <span className="font-medium">12 min</span>
        </div>

      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div className="w-[60%] h-full bg-gradient-to-r from-pink-500 to-red-500"></div>
      </div>

    </div>
  );
}