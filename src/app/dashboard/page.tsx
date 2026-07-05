import DashboardLayout from "@/src/components/layout/DashboardLayout";


export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-3 gap-4">

        <div className="bg-white p-4 rounded-xl shadow">
          Total Orders
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          Pending Orders
        </div>

        <div className="bg-white p-4 rounded-xl shadow">
          Revenue
        </div>

      </div>
    </DashboardLayout>
  );
}