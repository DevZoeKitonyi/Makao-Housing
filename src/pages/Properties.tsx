
import React, { useState } from 'react';
import { Search, Filter, MapPin, Star, ArrowRight, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header - Same as Index */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Search className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/properties" className="text-blue-600 font-medium">Properties</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input 
                placeholder="Search by location, property type, or keywords..." 
                className="pl-10"
              />
            </div>
            <Button 
              variant="outline" 
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2"
            >
              <Filter className="h-4 w-4" />
              Filters
            </Button>
            <Button>Search Properties</Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-80 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-6">Filter Properties</h3>
              
              {/* Property Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Property Type</h4>
                <div className="space-y-2">
                  {['Apartment', 'House', 'Studio', 'Villa'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bedrooms */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Bedrooms</h4>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 3, '4+'].map((num) => (
                    <Button key={num} variant="outline" size="sm">{num}</Button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="px-2">
                  <Slider
                    value={priceRange}
                    onValueChange={setPriceRange}
                    max={10000}
                    min={500}
                    step={100}
                    className="mb-4"
                  />
                  <div className="flex justify-between text-sm text-gray-600">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Availability</h4>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="available" />
                    <label htmlFor="available" className="text-sm">Available Now</label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="soon" />
                    <label htmlFor="soon" className="text-sm">Available Soon</label>
                  </div>
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Amenities</h4>
                <div className="space-y-2">
                  {['Gym', 'Pool', 'Parking', 'WiFi', 'Laundry', 'Pet Friendly', 'Garden', 'Security'].map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox id={amenity} />
                      <label htmlFor={amenity} className="text-sm">{amenity}</label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Building Type */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Building Type</h4>
                <div className="space-y-2">
                  {['High-rise', 'Low-rise', 'Single Family', 'Townhouse'].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm">{type}</label>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full">Apply Filters</Button>
            </div>
          </div>

          {/* Properties Grid */}
          <div className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {properties.length} Properties Found
              </h2>
              <select className="border border-gray-300 rounded-md px-3 py-2">
                <option>Sort by: Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Newest First</option>
              </select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Button 
                        size="sm" 
                        variant="secondary" 
                        className="bg-white/90 hover:bg-white"
                        onClick={() => toggleSaveProperty(property.id)}
                      >
                        <Heart 
                          className={`h-4 w-4 ${
                            savedProperties.includes(property.id) 
                              ? 'fill-red-500 text-red-500' 
                              : ''
                          }`} 
                        />
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 text-xs rounded text-white ${
                        property.available ? 'bg-green-500' : 'bg-red-500'
                      }`}>
                        {property.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-gray-900">{property.title}</h4>
                      <span className="text-2xl font-bold text-blue-600">
                        ${property.price}/month
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">
                        {property.bedrooms} bed • {property.bathrooms} bath
                      </span>
                      <span className="text-sm text-gray-600">{property.type}</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.amenities.slice(0, 3).map((amenity, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          {amenity}
                        </span>
                      ))}
                      {property.amenities.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                          +{property.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                    <Link to={`/property/${property.id}`}>
                      <Button className="w-full">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <Button variant="outline" disabled>Previous</Button>
                <Button variant="outline" className="bg-blue-600 text-white">1</Button>
                <Button variant="outline">2</Button>
                <Button variant="outline">3</Button>
                <Button variant="outline">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
