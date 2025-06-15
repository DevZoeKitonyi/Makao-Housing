import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Heart, ArrowRight, Trash2, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Search className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pb-20 md:pb-8">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">My Wishlist</h2>
              <p className="text-gray-600">
                {wishlistProperties.length} {wishlistProperties.length === 1 ? 'property' : 'properties'} saved
              </p>
            </div>
            <Link to="/properties">
              <Button variant="outline">
                Browse More Properties
              </Button>
            </Link>
          </div>
        </div>

        {/* Wishlist Content */}
        {wishlistProperties.length === 0 ? (
          <div className="text-center py-16">
            <Heart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
            <p className="text-gray-600 mb-6">
              Start adding properties to your wishlist to keep track of your favorites
            </p>
            <Link to="/properties">
              <Button>
                Explore Properties
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {wishlistProperties.map((property) => (
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
                      onClick={() => removeFromWishlist(property.id)}
                    >
                      <Heart className="h-4 w-4 fill-red-500 text-red-500" />
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
                  <div className="text-xs text-gray-500 mb-4">
                    Added to wishlist: {formatDate(property.dateAdded)}
                  </div>
                  <div className="flex space-x-2">
                    <Link to={`/property/${property.id}`} className="flex-1">
                      <Button className="w-full">
                        <Eye className="h-4 w-4 mr-2" />
                        View Details
                      </Button>
                    </Link>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => removeFromWishlist(property.id)}
                      className="text-red-600 hover:text-red-700"
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
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                Clear All Wishlist
              </Button>
              <Button variant="outline">
                Share Wishlist
              </Button>
              <Button variant="outline">
                Export as PDF
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
