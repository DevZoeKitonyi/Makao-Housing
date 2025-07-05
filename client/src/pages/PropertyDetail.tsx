import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { MapPin, Star, Heart, Users, Calendar, CheckCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import MakaoNav from "@/components/MakaoNav";
import MakaoFooter from "@/components/MakaoFooter";

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
    <div className="min-h-screen bg-green-50 flex flex-col">
      {/* Kenyan Themed Navigation */}
      <MakaoNav />

      <div className="flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-700 mb-6">
            <Link to="/" className="hover:text-red-700">Home</Link>
            <span>/</span>
            <Link to="/properties" className="hover:text-red-700">Properties</Link>
            <span>/</span>
            <span className="text-black">{property.title}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Image Gallery */}
              <div className="mb-8">
                <div className="mb-4 rounded-lg border-4 border-green-700 bg-white animate-fade-in">
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
                        currentImageIndex === index
                          ? "border-red-700"
                          : "border-gray-200"
                      }`}
                      onClick={() => setCurrentImageIndex(index)}
                    />
                  ))}
                </div>
              </div>

              {/* Property Info */}
              <Card className="mb-8 border-green-700 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h1 className="text-3xl font-bold text-black mb-2">
                        {property.title}
                      </h1>
                      <div className="flex items-center text-green-700">
                        <MapPin className="h-4 w-4 mr-1" />
                        {property.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-red-700 mb-1">
                        ${property.price}/month
                      </div>
                      <div
                        className={`inline-flex items-center px-2 py-1 rounded text-sm ${
                          property.available
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        <CheckCircle className="h-4 w-4 mr-1" />
                        {property.available ? "Available" : "Not Available"}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-4 bg-green-50 rounded-lg border">
                      <div className="text-2xl font-bold text-black">
                        {property.bedrooms}
                      </div>
                      <div className="text-sm text-green-700">Bedrooms</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg border">
                      <div className="text-2xl font-bold text-black">
                        {property.bathrooms}
                      </div>
                      <div className="text-sm text-green-700">Bathrooms</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg border">
                      <div className="text-2xl font-bold text-black">
                        {property.area}
                      </div>
                      <div className="text-sm text-green-700">sq ft</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-lg border">
                      <div className="text-lg font-bold text-black">
                        {property.type}
                      </div>
                      <div className="text-sm text-green-700">Property Type</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-red-700 mb-3">
                      Description
                    </h3>
                    <p className="text-gray-800 leading-relaxed">
                      {property.description}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-red-700 mb-3">Key Features</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {property.features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-green-700 mr-2" />
                          <span className="text-gray-900">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-red-700 mb-3">Amenities</h3>
                    <div className="flex flex-wrap gap-2">
                      {property.amenities.map((amenity, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Landlord Info */}
              <Card className="border-red-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-green-700 mb-4">
                    Landlord Information
                  </h3>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                      <Users className="h-8 w-8 text-green-700" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-black">
                        {property.landlord.name}
                      </h4>
                      <div className="flex items-center space-x-1 mb-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-800">{property.landlord.rating} rating</span>
                      </div>
                      <p className="text-sm text-gray-600">{property.landlord.properties} properties listed</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-red-700 mr-2" />
                      <span className="text-gray-800">{property.landlord.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-red-700 mr-2" />
                      <span className="text-gray-800">{property.landlord.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Inquiry Form */}
              <Card className="sticky top-4 mb-8 border-green-700 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Send Inquiry
                  </h3>
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
                      <Calendar className="h-4 w-4 text-green-700" />
                      <Input placeholder="Preferred viewing date" type="date" />
                    </div>
                    <Button className="w-full bg-red-700 hover:bg-green-700 text-white">
                      Send Inquiry
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="border-green-700">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-black mb-4">
                    Quick Actions
                  </h3>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full border-green-700 text-green-700">
                      <Phone className="h-4 w-4 mr-2" />
                      Call Landlord
                    </Button>
                    <Button variant="outline" className="w-full border-green-700 text-green-700">
                      <Calendar className="h-4 w-4 mr-2" />
                      Schedule Tour
                    </Button>
                    <Link to="/payment" className="block">
                      <Button className="w-full bg-red-700 hover:bg-green-700 text-white">
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
      <MakaoFooter />
    </div>
  );
};

export default PropertyDetail;
