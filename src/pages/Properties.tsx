import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';
import PropertyCard from '@/components/PropertyCard';
import FiltersSidebar from '@/components/FiltersSidebar';
import MakaoNav from '@/components/MakaoNav';
import MakaoFooter from "@/components/MakaoFooter";

const Properties = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([1000, 5000]);
  const [savedProperties, setSavedProperties] = useState<number[]>([]);

  const properties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: 2500,
      location: 'Downtown, City Center',
      bedrooms: 2,
      bathrooms: 2,
      type: 'Apartment',
      image: '/placeholder.svg',
      amenities: ['Gym', 'Pool', 'Parking', 'WiFi'],
      available: true,
      buildingType: 'High-rise'
    },
    {
      id: 2,
      title: 'Luxury Villa with Garden',
      price: 4200,
      location: 'Suburban Hills',
      bedrooms: 4,
      bathrooms: 3,
      type: 'Villa',
      image: '/placeholder.svg',
      amenities: ['Garden', 'Garage', 'Security', 'Pool'],
      available: true,
      buildingType: 'Single Family'
    },
    {
      id: 3,
      title: 'Cozy Studio Near University',
      price: 1800,
      location: 'University District',
      bedrooms: 1,
      bathrooms: 1,
      type: 'Studio',
      image: '/placeholder.svg',
      amenities: ['WiFi', 'Laundry', 'Pet Friendly'],
      available: false,
      buildingType: 'Low-rise'
    },
    {
      id: 4,
      title: 'Family House with Backyard',
      price: 3200,
      location: 'Residential Area',
      bedrooms: 3,
      bathrooms: 2,
      type: 'House',
      image: '/placeholder.svg',
      amenities: ['Backyard', 'Garage', 'Fireplace'],
      available: true,
      buildingType: 'Single Family'
    }
  ];

  const toggleSaveProperty = (propertyId: number) => {
    setSavedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MakaoNav />
      {/* Hero: copy landing style */}
      <section className="relative bg-gradient-to-r from-black via-red-700 to-green-700 text-white pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 font-sans">
            Explore Properties Across Kenya
          </h2>
          <p className="text-xl mb-8">Find the best apartments, villas and more—trusted by Kenyans</p>
          {/* Search bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <div className="flex-1 relative w-full">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input 
                  placeholder="Search by location, property type, or keywords..." 
                  className="pl-10 text-gray-900"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 border-green-700 text-green-700"
              >
                <Filter className="h-4 w-4" />
                Filters
              </Button>
              <Button className="bg-red-700 hover:bg-green-700 text-white">Search Properties</Button>
            </div>
          </div>
        </div>
      </section>
      {/* Main content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <FiltersSidebar show={showFilters} priceRange={priceRange} setPriceRange={setPriceRange} />

            {/* Properties Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-black">
                  {properties.length} Properties Found
                </h2>
                <select className="border border-green-700 rounded-md px-3 py-2 text-gray-900">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {properties.map((property) => (
                  <PropertyCard 
                    key={property.id} 
                    property={property} 
                    saved={savedProperties.includes(property.id)}
                    onSave={toggleSaveProperty}
                  />
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center mt-12">
                <div className="flex items-center space-x-2">
                  <Button variant="outline" disabled>Previous</Button>
                  <Button variant="outline" className="bg-green-700 text-white">1</Button>
                  <Button variant="outline">2</Button>
                  <Button variant="outline">3</Button>
                  <Button variant="outline">Next</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MakaoFooter />
    </div>
  );
};

export default Properties;
