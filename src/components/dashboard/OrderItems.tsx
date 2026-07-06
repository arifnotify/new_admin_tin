"use client";

import Image from "next/image";
import { Minus, Plus } from "lucide-react";

const items = [
  {
    id: 1,
    name: "Chicken Burger",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    qty: 2,
    price: 8.5,
    addons: "Extra Cheese",
  },
  {
    id: 2,
    name: "French Fries",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=300",
    qty: 1,
    price: 4,
    addons: "Large Size",
  },
  {
    id: 3,
    name: "Coca Cola",
    image: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=300",
    qty: 2,
    price: 2,
    addons: "500ml",
  },
];

export default function OrderItems() {
  const subtotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );

  const delivery = 3;
  const tax = 2;
  const discount = 5;

  const grandTotal =
    subtotal + delivery + tax - discount;

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

      {/* Header */}

      <div className="px-5 py-4 border-b">

        <h2 className="text-lg font-semibold text-gray-800">
          Order Items
        </h2>

      </div>

      {/* Items */}

      <div className="p-5 space-y-4">

        {items.map((item) => (

          <div
            key={item.id}
            className="flex gap-4 border rounded-xl p-3 hover:bg-gray-50 transition"
          >

            <Image
              src={item.image}
              alt={item.name}
              width={70}
              height={70}
              className="rounded-lg object-cover"
            />

            <div className="flex-1">

              <h3 className="font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                {item.addons}
              </p>

              <div className="flex items-center gap-2 mt-3">

                <button className="w-7 h-7 rounded-lg border flex items-center justify-center hover:bg-gray-100">

                  <Minus size={14} />

                </button>

                <span className="font-medium">
                  {item.qty}
                </span>

                <button className="w-7 h-7 rounded-lg border flex items-center justify-center hover:bg-gray-100">

                  <Plus size={14} />

                </button>

              </div>

            </div>

            <div className="text-right">

              <p className="font-bold text-gray-800">
                $
                {(item.qty * item.price).toFixed(2)}
              </p>

              <p className="text-xs text-gray-400 mt-2">
                ${item.price} each
              </p>

            </div>

          </div>

        ))}

      </div>

      {/* Summary */}

      <div className="border-t p-5 space-y-3">

        <div className="flex justify-between text-sm">

          <span className="text-gray-500">
            Subtotal
          </span>

          <span>
            ${subtotal.toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between text-sm">

          <span className="text-gray-500">
            Delivery Fee
          </span>

          <span>
            ${delivery.toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between text-sm">

          <span className="text-gray-500">
            Tax
          </span>

          <span>
            ${tax.toFixed(2)}
          </span>

        </div>

        <div className="flex justify-between text-sm text-green-600">

          <span>
            Discount
          </span>

          <span>
            -${discount.toFixed(2)}
          </span>

        </div>

        <div className="border-t pt-4 flex justify-between text-lg font-bold">

          <span>
            Grand Total
          </span>

          <span className="text-pink-600">
            ${grandTotal.toFixed(2)}
          </span>

        </div>

      </div>

    </div>
  );
}