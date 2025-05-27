
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapPin, Star, Heart, Users, Calendar, CheckCircle, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [saved, setSaved] = useState(false);

  // Mock property data
  const property = {
    id: 1,
    title: 'Modern Downtown Apartment',
    price: 2500,
    location: 'Downtown, City Center',
    bedrooms: 2,
    bathrooms: 2,
    area: 850,
    type: 'Apartment',
    images: ['/placeholder.svg', '/placeholder.svg', '/placeholder.svg', '/placeholder.svg'],
    amenities: ['Gym', 'Pool', 'Parking', 'WiFi', 'Laundry', 'Pet Friendly', 'Security', 'Elevator'],
    available: true,
    buildingType: 'High-rise',
    description: 'Beautiful modern apartment in the heart of downtown. Features stunning city views, high-end finishes, and access to premium building amenities. Perfect for professionals seeking luxury living in a prime location.',
    landlord: {
      name: 'John Smith',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567',
      rating: 4.8,
      properties: 12
    },
    features: [
      'Floor-to-ceiling windows',
      'Hardwood floors',
      'Stainless steel appliances',
      'In-unit washer/dryer',
      'Walk-in closet',
      'Balcony with city view'
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Star className="h-8 w-8 text-blue-600" />
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
            <div className="flex items-center space-x-4">
              <Button 
                variant="outline" 
                onClick={() => setSaved(!saved)}
                className="flex items-center gap-2"
              >
                <Heart className={`h-4 w-4 ${saved ? 'fill-red-500 text-red-500' : ''}`} />
                {saved ? 'Saved' : 'Save'}
              </Button>
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <span>/</span>
          <Link to="/properties" className="hover:text-blue-600">Properties</Link>
          <span>/</span>
          <span className="text-gray-900">{property.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Gallery */}
            <div className="mb-8">
              <div className="mb-4">
                <img 
                  src={property.images[currentImageIndex]} 
                  alt={property.title}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {property.images.map((image, index) => (
                  <img 
                    key={index}
                    src={image} 
                    alt={`${property.title} ${index + 1}`}
                    className={`w-full h-20 object-cover rounded cursor-pointer border-2 ${
                      currentImageIndex === index ? 'border-blue-500' : 'border-transparent'
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            {/* Property Info */}
            <Card className="mb-8">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{property.title}</h1>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      {property.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 mb-1">
                      ${property.price}/month
                    </div>
                    <div className={`inline-flex items-center px-2 py-1 rounded text-sm ${
                      property.available 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      <CheckCircle className="h-4 w-4 mr-1" />
                      {property.available ? 'Available' : 'Not Available'}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{property.bedrooms}</div>
                    <div className="text-sm text-gray-600">Bedrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{property.bathrooms}</div>
                    <div className="text-sm text-gray-600">Bathrooms</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900">{property.area}</div>
                    <div className="text-sm text-gray-600">sq ft</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-lg font-bold text-gray-900">{property.type}</div>
                    <div className="text-sm text-gray-600">Property Type</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Description</h3>
                  <p className="text-gray-600 leading-relaxed">{property.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {property.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Amenities</h3>
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Landlord Info */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Landlord Information</h3>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex items-center justify-center">
                    <Users className="h-8 w-8 text-gray-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{property.landlord.name}</h4>
                    <div className="flex items-center space-x-1 mb-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{property.landlord.rating} rating</span>
                    </div>
                    <p className="text-sm text-gray-600">{property.landlord.properties} properties listed</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-700">{property.landlord.phone}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 text-gray-400 mr-2" />
                    <span className="text-gray-700">{property.landlord.email}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Inquiry Form */}
            <Card className="sticky top-4 mb-8">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Send Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <Input placeholder="Your Name" />
                  </div>
                  <div>
                    <Input placeholder="Your Email" type="email" />
                  </div>
                  <div>
                    <Input placeholder="Your Phone" type="tel" />
                  </div>
                  <div>
                    <Textarea 
                      placeholder="I'm interested in this property. Please provide more details..."
                      rows={4}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4 text-gray-400" />
                    <Input placeholder="Preferred viewing date" type="date" />
                  </div>
                  <Button className="w-full">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Landlord
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Tour
                  </Button>
                  <Link to="/payment" className="block">
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
