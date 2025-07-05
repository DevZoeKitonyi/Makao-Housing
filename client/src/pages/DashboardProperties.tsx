
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Plus } from "lucide-react";
import PropertyModal from "@/components/PropertyModal";

// Initial properties (demo purpose)
const initialProperties = [
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

const DashboardProperties = () => {
  const [properties, setProperties] = useState(initialProperties);
  const [addModalOpen, setAddModalOpen] = useState(false);

  // Simple stats
  const total = properties.length;
  const available = properties.filter(p => p.status === "Available").length;
  const rented = properties.filter(p => p.status === "Rented").length;

  const handleAddProperty = (property) => {
    setProperties(prev => [
      { ...property, id: Date.now(), interested: 0, image: '/placeholder.svg' },
      ...prev,
    ]);
  };

  return (
    <div className="max-w-4xl mx-auto py-8 px-2 sm:px-4 w-full">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-4">
        <h1 className="text-2xl font-bold text-green-700 flex items-center gap-2">
          <Home className="h-6 w-6" /> All Properties
        </h1>
        <Button
          onClick={() => setAddModalOpen(true)}
          className="gap-2"
        >
          <Plus className="w-4 h-4" /> Add Property
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
          <div className="text-gray-500 text-xs mb-1">Total Properties</div>
          <div className="text-xl font-bold text-green-700">{total}</div>
        </div>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-center">
          <div className="text-gray-500 text-xs mb-1">Available</div>
          <div className="text-xl font-bold text-blue-700">{available}</div>
        </div>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
          <div className="text-gray-500 text-xs mb-1">Rented</div>
          <div className="text-xl font-bold text-gray-700">{rented}</div>
        </div>
      </div>

      {/* Add Property Modal */}
      <PropertyModal
        property={null}
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        mode="add"
        onSave={handleAddProperty}
      />

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
};

export default DashboardProperties;
