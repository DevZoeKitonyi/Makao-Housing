
import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import { Home, Bell, Users, Building } from "lucide-react";
import MakaoFooter from "@/components/MakaoFooter";
// Import Card components (from shadcn/ui)
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Demo property data (copied from DashboardProperties)
const demoProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: 2500,
    location: "Downtown, City Center",
    status: "Available",
    interested: 12,
    image: "/placeholder.svg",
    bedrooms: 2,
    bathrooms: 2,
    description: "Beautiful modern apartment with city views"
  },
  {
    id: 2,
    title: "Luxury Villa with Garden",
    price: 4200,
    location: "Suburban Hills",
    status: "Rented",
    interested: 8,
    image: "/placeholder.svg",
    bedrooms: 4,
    bathrooms: 3,
    description: "Spacious villa with private garden"
  }
];

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
            {/* Dashboard Welcome and Quick Stats */}
            {location.pathname === "/dashboard" && (
              <div className="mb-8">
                <div className="rounded-lg bg-gradient-to-r from-green-100 via-green-50 to-white border border-green-100 p-6 mb-6">
                  <h1 className="text-2xl sm:text-3xl font-bold text-green-800 mb-2 flex items-center gap-2">
                    <Home className="w-7 h-7" /> Welcome to your Makao Dashboard!
                  </h1>
                  <p className="text-gray-700 mb-2">
                    Use the menu on the left to navigate to Properties, Tenants, or Notifications. Your stats at a glance:
                  </p>
                  <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                      <div className="text-gray-500 text-xs mb-1">Properties</div>
                      <div className="text-xl font-bold text-green-700">2</div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
                      <div className="text-gray-500 text-xs mb-1">Tenants</div>
                      <div className="text-xl font-bold text-blue-700">2</div>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                      <div className="text-gray-500 text-xs mb-1">Notifications</div>
                      <div className="text-xl font-bold text-red-700">3</div>
                    </div>
                  </div>
                </div>
                {/* New: Show properties directly below stats */}
                <div>
                  <h2 className="text-xl font-bold mb-4 text-green-700">Your Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {demoProperties.map((property) => (
                      <Card key={property.id}>
                        <CardHeader>
                          <CardTitle>{property.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col sm:flex-row items-center mb-3 gap-2">
                            <img
                              src={property.image}
                              alt={property.title}
                              className="w-24 h-24 object-cover rounded mr-0 sm:mr-4 mb-2 sm:mb-0"
                            />
                            <div>
                              <p className="mb-1 font-semibold">
                                {property.bedrooms} Bed / {property.bathrooms} Bath
                              </p>
                              <p className="mb-1">{property.location}</p>
                              <span className={`inline-block rounded text-white px-2 py-1 text-xs ${
                                property.status === 'Available' ? 'bg-green-500' : 'bg-blue-500'
                              }`}>
                                {property.status}
                              </span>
                            </div>
                          </div>
                          <p className="mb-2">{property.description}</p>
                          <div className="font-bold text-green-700">${property.price}/month</div>
                          <div className="text-xs text-gray-500 mt-2">{property.interested} people interested</div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            )}
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
