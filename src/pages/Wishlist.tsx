import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Heart, ArrowRight, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MakaoNav from "@/components/MakaoNav";
import MakaoFooter from "@/components/MakaoFooter";

const Wishlist = () => {
  const [wishlistProperties, setWishlistProperties] = useState([
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
      dateAdded: '2024-05-20'
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
      dateAdded: '2024-05-18'
    },
    {
      id: 5,
      title: 'Luxury Penthouse with City View',
      price: 5200,
      location: 'Financial District',
      bedrooms: 3,
      bathrooms: 3,
      type: 'Penthouse',
      image: '/placeholder.svg',
      amenities: ['Concierge', 'Gym', 'Pool', 'Balcony'],
      available: true,
      dateAdded: '2024-05-15'
    }
  ]);

  const removeFromWishlist = (propertyId: number) => {
    setWishlistProperties(prev => prev.filter(property => property.id !== propertyId));
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <MakaoNav />
      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 py-6 sm:py-8 pb-20 md:pb-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-3xl font-bold text-black mb-2">My Wishlist</h2>
                <p className="text-gray-600">
                  {wishlistProperties.length} {wishlistProperties.length === 1 ? 'property' : 'properties'} saved
                </p>
              </div>
              <Link to="/properties">
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Browse More Properties
                </Button>
              </Link>
            </div>
          </div>
          {/* Wishlist Content */}
          {wishlistProperties.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-black mb-2">Your wishlist is empty</h3>
              <p className="text-gray-600 mb-6">
                Start adding properties to your wishlist to keep track of your favorites
              </p>
              <Link to="/properties">
                <Button className="bg-red-700 hover:bg-green-700 text-white">
                  Explore Properties
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
              {wishlistProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-green-700">
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
                        className="bg-white/90 hover:bg-green-100 text-green-700"
                        onClick={() => removeFromWishlist(property.id)}
                      >
                        <Heart className="h-4 w-4 fill-red-500 text-red-500" />
                      </Button>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className={`px-2 py-1 text-xs rounded text-white ${
                        property.available ? 'bg-green-700' : 'bg-red-700'
                      }`}>
                        {property.available ? 'Available' : 'Not Available'}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-black">{property.title}</h4>
                      <span className="text-2xl font-bold text-green-700">
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
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          {amenity}
                        </span>
                      ))}
                      {property.amenities.length > 3 && (
                        <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          +{property.amenities.length - 3} more
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-gray-500 mb-4">
                      Added to wishlist: {formatDate(property.dateAdded)}
                    </div>
                    <div className="flex space-x-2">
                      <Link to={`/property/${property.id}`} className="flex-1">
                        <Button className="w-full bg-black text-white hover:bg-green-700">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </Link>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => removeFromWishlist(property.id)}
                        className="text-red-700 border-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
          {/* Quick Actions */}
          {wishlistProperties.length > 0 && (
            <div className="mt-8 sm:mt-12 bg-white rounded-lg shadow-sm p-4 sm:p-6">
              <h3 className="text-lg font-semibold mb-4 text-black">Quick Actions</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Clear All Wishlist
                </Button>
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Share Wishlist
                </Button>
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  Export as PDF
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
      <MakaoFooter />
    </div>
  );
};

export default Wishlist;
