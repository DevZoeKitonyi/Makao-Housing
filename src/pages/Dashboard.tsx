import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, Bell, Users, Building } from "lucide-react";
import MakaoFooter from "@/components/MakaoFooter";

const Dashboard = () => {
  const location = useLocation();

  const navItems = [
    {
      icon: Home,
      label: "Dashboard",
      path: "/dashboard",
    },
    {
      icon: Bell,
      label: "Notifications",
      path: "/dashboard/notifications",
    },
    {
      icon: Users,
      label: "Tenants",
      path: "/dashboard/tenants",
    },
    {
      icon: Building,
      label: "Properties",
      path: "/dashboard/properties",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="flex flex-col md:flex-row flex-1 w-full">
        <aside className="w-full md:w-64 bg-white border-r relative z-10">
          <div className="p-4">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-green-700" />
              <span className="text-lg font-bold">Makao</span>
            </Link>
          </div>
          <nav className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`flex items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-100 ${
                  location.pathname === item.path
                    ? "bg-gray-100 font-medium"
                    : "text-gray-600"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            ))}
          </nav>
        </aside>
        <main className="flex-1 px-2 sm:px-4 py-4 sm:py-6 overflow-x-auto w-full">
          <div className="max-w-full mx-auto">
            <Outlet />
          </div>
        </main>
      </div>
      <div className="w-full">
        <MakaoFooter />
      </div>
    </div>
  );
};

export default Dashboard;

// NOTE: This file is getting too long. Please consider refactoring it into smaller components or files!
