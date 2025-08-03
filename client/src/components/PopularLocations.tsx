import React from 'react';
import { MapPin } from 'lucide-react';

export const PopularLocations = () => {
  const popularAreas = [
    {
      name: "Lavington",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&auto=format&fit=crop&q=60",
      description: "Upscale residential neighborhood with beautiful homes"
    },
    {
      name: "Syokimau",
      image: "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?w=600&auto=format&fit=crop&q=60",
      description: "Fast-growing area with modern apartments"
    },
    {
      name: "Kilimani",
      image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=600&auto=format&fit=crop&q=60",
      description: "Trendy urban neighborhood with vibrant lifestyle"
    },
    {
      name: "Karen",
      image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=600&auto=format&fit=crop&q=60",
      description: "Exclusive suburb with luxurious properties"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-green-700 mb-4">
            Most Sought After Areas in Nairobi
          </h3>
          <div className="w-20 h-1 bg-red-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {popularAreas.map((area, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src={area.image} 
                alt={area.name}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 text-white">
                <div className="flex items-center mb-2">
                  <MapPin className="h-5 w-5 text-red-500 mr-2" />
                  <h4 className="text-xl font-bold">{area.name}</h4>
                </div>
                <p className="text-sm opacity-90">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};