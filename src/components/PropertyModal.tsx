
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';

interface Property {
  id: number;
  title: string;
  price: number;
  location: string;
  status: string;
  interested: number;
  image: string;
  bedrooms?: number;
  bathrooms?: number;
  description?: string;
  amenities?: string[];
}

interface PropertyModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
  mode: 'view' | 'edit' | 'add';
  onSave?: (property: Property) => void;
}

const PropertyModal = ({ property, isOpen, onClose, mode, onSave }: PropertyModalProps) => {
  const [formData, setFormData] = useState({
    title: property?.title || '',
    price: property?.price || 0,
    location: property?.location || '',
    bedrooms: property?.bedrooms || 1,
    bathrooms: property?.bathrooms || 1,
    description: property?.description || '',
    status: property?.status || 'Available'
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    if (onSave) {
      onSave({
        ...property,
        ...formData,
        id: property?.id || Date.now()
      } as Property);
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>
            {mode === 'add' ? 'Add New Property' : mode === 'edit' ? 'Edit Property' : 'Property Details'}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-4">
          {property?.image && (
            <div className="w-full h-48 rounded-lg overflow-hidden">
              <img src={property.image} alt={property.title} className="w-full h-full object-cover" />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">Property Title</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                disabled={mode === 'view'}
              />
            </div>
            
            <div>
              <Label htmlFor="price">Monthly Rent ($)</Label>
              <Input
                id="price"
                type="number"
                value={formData.price}
                onChange={(e) => handleInputChange('price', parseInt(e.target.value))}
                disabled={mode === 'view'}
              />
            </div>
            
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={formData.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                disabled={mode === 'view'}
              />
            </div>
            
            <div>
              <Label htmlFor="status">Status</Label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => handleInputChange('status', e.target.value)}
                disabled={mode === 'view'}
                className="w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="Available">Available</option>
                <option value="Rented">Rented</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
            
            <div>
              <Label htmlFor="bedrooms">Bedrooms</Label>
              <Input
                id="bedrooms"
                type="number"
                value={formData.bedrooms}
                onChange={(e) => handleInputChange('bedrooms', parseInt(e.target.value))}
                disabled={mode === 'view'}
              />
            </div>
            
            <div>
              <Label htmlFor="bathrooms">Bathrooms</Label>
              <Input
                id="bathrooms"
                type="number"
                value={formData.bathrooms}
                onChange={(e) => handleInputChange('bathrooms', parseInt(e.target.value))}
                disabled={mode === 'view'}
              />
            </div>
          </div>
          
          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              disabled={mode === 'view'}
              rows={4}
            />
          </div>

          {mode !== 'view' && (
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={onClose}>Cancel</Button>
              <Button onClick={handleSave}>
                {mode === 'add' ? 'Add Property' : 'Save Changes'}
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PropertyModal;
