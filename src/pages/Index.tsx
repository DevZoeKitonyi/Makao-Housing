import React from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Home, Users, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import AnimationWrapper from '@/components/AnimationWrapper';
import MakaoNav from "@/components/MakaoNav";

// Kenyan flag: black #000, red #d32f2f, green #388e3c, white accent
const kenyanColors = {
  bgTop: "bg-gradient-to-r from-black via-red-700 to-green-700",
  textPrimary: "text-green-700",
  textAccent: "text-red-700",
  borderAccent: "border-green-700",
  brandMain: "text-black",
  cta: "bg-red-700 hover:bg-red-800"
};

const Index = () => {
  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Nairobi Apartment',
      price: 'Ksh 250,000/month',
      location: 'Westlands, Nairobi',
      bedrooms: 2,
      bathrooms: 2,
      image: 'https://images.unsplash.com/photo-1466721591366-2d5fba72006d?auto=format&fit=facearea&w=600&q=80',
      amenities: ['Gym', 'Pool', 'Parking']
    },
    {
      id: 2,
      title: 'Luxury Karen Villa',
      price: 'Ksh 420,000/month',
      location: 'Karen, Nairobi',
      bedrooms: 4,
      bathrooms: 3,
      image: 'https://images.unsplash.com/photo-1493962853295-0fd70327578a?auto=format&fit=facearea&w=600&q=80',
      amenities: ['Garden', 'Garage', 'Security']
    },
    {
      id: 3,
      title: 'Cozy Studio Near Kenyatta University',
      price: 'Ksh 180,000/month',
      location: 'Kahawa, Nairobi',
      bedrooms: 1,
      bathrooms: 1,
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=facearea&w=600&q=80',
      amenities: ['WiFi', 'Laundry', 'Pet Friendly']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Header */}
      <MakaoNav />

      {/* Hero Section */}
      <AnimationWrapper delay={200}>
        <section className="relative bg-gradient-to-r from-black via-red-700 to-green-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in font-sans">
                Discover Your Perfect Home
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-white">
                Find the best houses in Kenya's top locations
              </p>
              {/* Quick Search Bar */}
              <div className="max-w-4xl mx-auto bg-white rounded-lg p-6 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input 
                      placeholder="Location (e.g. Nairobi, Kisumu, Mombasa)" 
                      className="pl-10 text-gray-900"
                    />
                  </div>
                  <select className="px-4 py-2 border border-green-700 rounded-md text-gray-900">
                    <option>House Type</option>
                    <option>Apartment</option>
                    <option>Bungalow</option>
                    <option>Studio</option>
                    <option>Villa</option>
                  </select>
                  <select className="px-4 py-2 border border-green-700 rounded-md text-gray-900">
                    <option>Budget</option>
                    <option>Ksh 100,000 - 200,000</option>
                    <option>Ksh 200,000 - 300,000</option>
                    <option>Ksh 300,000 - 500,000</option>
                    <option>Ksh 500,000+</option>
                  </select>
                  <Button className="bg-red-700 hover:bg-green-700 w-full text-white">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimationWrapper>

      {/* Featured Properties */}
      <AnimationWrapper delay={400}>
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-black mb-4">Featured Properties</h3>
              <p className="text-lg text-gray-600">Explore a curated selection of exceptional homes</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-green-700">
                  <div className="relative">
                    <img 
                      src={property.image} 
                      alt={property.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Button size="sm" variant="secondary" className="bg-white/90 hover:bg-green-100 text-green-700">
                        <Star className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="text-xl font-semibold text-black">{property.title}</h4>
                      <span className="text-2xl font-bold text-green-700">{property.price}</span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-4">
                      <MapPin className="h-4 w-4 mr-1 text-red-700" />
                      {property.location}
                    </div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm text-gray-600">
                        {property.bedrooms} bedrooms • {property.bathrooms} bathrooms
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {property.amenities.map((amenity, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded">
                          {amenity}
                        </span>
                      ))}
                    </div>
                    <Link to={`/property/${property.id}`}>
                      <Button className="w-full bg-black hover:bg-green-700 text-white">
                        View Details
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Link to="/properties">
                <Button size="lg" variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                  View All Properties
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </AnimationWrapper>

      {/* Stats Section */}
      <AnimationWrapper delay={600}>
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">500+</div>
                <div className="text-gray-600">Listed Properties</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">1,200+</div>
                <div className="text-gray-600">Happy Tenants</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">300+</div>
                <div className="text-gray-600">Verified Landlords</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-700 mb-2">50+</div>
                <div className="text-gray-600">Cities Covered</div>
              </div>
            </div>
          </div>
        </section>
      </AnimationWrapper>

      {/* Footer - Hidden on mobile */}
      <footer className="hidden md:block bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-green-700" />
                <h3 className="text-xl font-bold">Makao</h3>
              </div>
              <p className="text-gray-400">
                Your trusted companion for finding the best homes in Kenya.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/properties" className="text-gray-400 hover:text-green-400">Properties</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-green-400">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-green-400">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-green-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Users</h4>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-green-400">Login</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-green-400">Register</Link></li>
                <li><Link to="/wishlist" className="text-gray-400 hover:text-green-400">Wishlist</Link></li>
                <li><Link to="/dashboard" className="text-gray-400 hover:text-green-400">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>P.O. Box 1234</p>
                <p>Nairobi, Kenya</p>
                <p>Phone: +254 712 345678</p>
                <p>Email: info@makao.co.ke</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Makao. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
