
import React from "react";
import { Bell, AlertCircle } from "lucide-react";

const landlordNotifications = [
  {
    id: 1,
    type: "payment",
    title: "Tenant Paid Rent",
    message: "Alice Johnson paid rent for Modern Downtown Apartment.",
    date: "2024-06-15",
    read: false,
  },
  {
    id: 2,
    type: "info",
    title: "New Inquiry",
    message: "Someone is interested in Luxury Villa with Garden.",
    date: "2024-06-13",
    read: true,
  },
  {
    id: 3,
    type: "reminder",
    title: "Lease Expiring",
    message: "Bob Smith's lease is expiring soon.",
    date: "2024-06-10",
    read: false,
  }
];

const DashboardNotifications = () => (
  <div className="max-w-2xl mx-auto py-8 px-2 sm:px-4 w-full">
    <h1 className="text-2xl font-bold flex items-center gap-2 mb-8 text-green-700">
      <Bell className="h-6 w-6" />
      Landlord Notifications
    </h1>
    <div className="space-y-6">
      {landlordNotifications.map(n => (
        <div
          key={n.id}
          className={`p-6 rounded-lg shadow flex flex-col gap-2 border-l-4 ${
            n.type === "payment"
              ? "border-green-700 bg-green-50"
              : n.type === "reminder"
              ? "border-red-700 bg-red-50"
              : "border-black bg-white"
          }`}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
            <h2 className="text-xl font-semibold">{n.title}</h2>
            <span className="text-xs text-gray-500">
              {new Date(n.date).toLocaleDateString()}
            </span>
          </div>
          <p className="text-gray-700">{n.message}</p>
          {!n.read && (
            <span className="mt-1 text-xs bg-green-700 text-white rounded px-2 py-0.5 w-fit">New</span>
          )}
        </div>
      ))}
    </div>
  </div>
);
export default DashboardNotifications;
