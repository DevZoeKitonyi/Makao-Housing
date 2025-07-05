
import React from 'react';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

interface FiltersSidebarProps {
  show: boolean;
  priceRange: number[];
  setPriceRange: (r: number[]) => void;
}

const FiltersSidebar: React.FC<FiltersSidebarProps> = ({ show, priceRange, setPriceRange }) => (
  <div className={`lg:w-80 ${show ? 'block' : 'hidden lg:block'}`}>
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

      <Button className="w-full bg-green-700 text-white mt-2 hover:bg-green-800">Apply Filters</Button>
    </div>
  </div>
);

export default FiltersSidebar;
