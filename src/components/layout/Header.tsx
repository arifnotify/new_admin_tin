export default function Header() {
  return (
    <div className="h-16 bg-white border-b flex items-center justify-between px-6">

      {/* Left */}
      <div>
        <h1 className="font-semibold text-lg">Orders Dashboard</h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        <input
          className="border rounded-lg px-3 py-1 text-sm"
          placeholder="Search orders..."
        />

        <div className="w-9 h-9 rounded-full bg-gray-300" />

      </div>

    </div>
  );
}