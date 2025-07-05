
import React from "react";
import MakaoNav from "@/components/MakaoNav";
import MakaoFooter from "@/components/MakaoFooter";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const notifications = [
  {
    id: 1,
    type: "payment",
    title: "Rent Payment Received",
    message: "Your payment for Modern Downtown Apartment has been received.",
    date: "2024-06-14",
    read: false,
  },
  {
    id: 2,
    type: "reminder",
    title: "Rent Due Soon",
    message: "Your June rent is due in 3 days. Avoid late fees by paying before June 1st.",
    date: "2024-05-30",
    read: false,
  },
  {
    id: 3,
    type: "info",
    title: "Profile Update",
    message: "Your contact information was updated successfully.",
    date: "2024-05-24",
    read: true,
  },
  // Added a payment request notification as an example
  {
    id: 4,
    type: "paymentRequest",
    title: "Rent Payment Request",
    message: "Your landlord has requested you to pay rent for Modern Downtown Apartment.",
    date: "2024-06-15",
    read: false,
  },
];

const Notifications = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Updated navigation (same as landing) */}
      <MakaoNav />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-12">
        <h1 className="text-3xl font-bold mb-8 text-green-700">Notifications</h1>
        <div className="space-y-6">
          {notifications.map((n) => (
            <div
              key={n.id}
              className={`p-6 rounded-lg shadow flex flex-col gap-2 border-l-4 ${
                n.type === "payment"
                  ? "border-green-700 bg-green-50"
                  : n.type === "reminder"
                  ? "border-red-700 bg-red-50"
                  : n.type === "paymentRequest"
                  ? "border-yellow-700 bg-yellow-50"
                  : "border-black bg-white"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-black">{n.title}</h2>
                <span className="text-xs text-gray-500">{new Date(n.date).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700">{n.message}</p>
              {!n.read && (
                <span className="mt-1 text-xs bg-green-700 text-white rounded px-2 py-0.5 w-fit">
                  New
                </span>
              )}
              {n.type === "paymentRequest" && (
                <div className="mt-2">
                  <Link to="/rent-payment">
                    <Button className="bg-red-700 hover:bg-green-700 text-white">
                      Pay Now
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </main>
      {/* Add landing page footer */}
      <MakaoFooter />
    </div>
  );
};

export default Notifications;

