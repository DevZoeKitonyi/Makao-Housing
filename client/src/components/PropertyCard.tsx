
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, ArrowRight, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface PropertyCardProps {
  property: {
    id: number;
    title: string;
    price: number;
    location: string;
    bedrooms: number;
    bathrooms: number;
    type: string;
    image: string;
    amenities: string[];
    available: boolean;
    buildingType: string;
  };
  saved: boolean;
  onSave: (id: number) => void;
}
const PropertyCard: React.FC<PropertyCardProps> = ({ property, saved, onSave }) => (
  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
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
          onClick={(e) => { e.preventDefault(); onSave(property.id); }}
        >
          <Heart 
            className={`h-4 w-4 ${
              saved 
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
        <Button className="w-full bg-green-700 text-white hover:bg-green-800">
          View Details
          <ArrowRight className="h-4 w-4 ml-2" />
        </Button>
      </Link>
    </CardContent>
  </Card>
);
export default PropertyCard;
