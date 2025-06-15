
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Home } from "lucide-react";

const properties = [
  {
    id: 1,
    title: 'Modern Downtown Apartment',
    price: 2500,
    location: 'Downtown, City Center',
    status: 'Available',
    interested: 12,
    image: '/placeholder.svg',
    bedrooms: 2,
    bathrooms: 2,
    description: 'Beautiful modern apartment with city views'
  },
  {
    id: 2,
    title: 'Luxury Villa with Garden',
    price: 4200,
    location: 'Suburban Hills',
    status: 'Rented',
    interested: 8,
    image: '/placeholder.svg',
    bedrooms: 4,
    bathrooms: 3,
    description: 'Spacious villa with private garden'
  }
];

const DashboardProperties = () => (
  <div className="max-w-4xl mx-auto py-8 px-2 sm:px-4 w-full">
    <h1 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">
      <Home className="h-6 w-6" /> All Properties
    </h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {properties.map((property) => (
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
);
export default DashboardProperties;
