import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Calendar, Home, DollarSign, Bell } from 'lucide-react';

interface Tenant {
  id: number;
  name: string;
  email: string;
  phone: string;
  property: string;
  rentAmount: number;
  paymentStatus: 'Paid' | 'Pending' | 'Overdue';
  leaseStart: string;
  leaseEnd: string;
  lastPayment: string;
}

interface TenantModalProps {
  tenant: Tenant | null;
  isOpen: boolean;
  onClose: () => void;
}

const TenantModal = ({ tenant, isOpen, onClose }: TenantModalProps) => {
  if (!tenant) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const sendNotification = (type: string) => {
    console.log(`Sending ${type} notification to ${tenant.name}`);
    // In a real app, this would call an API to send the notification
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Tenant Information</DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-2">
              {tenant.name.split(' ').map(n => n[0]).join('')}
            </div>
            <h3 className="text-xl font-semibold">{tenant.name}</h3>
            <Badge className={getStatusColor(tenant.paymentStatus)}>
              {tenant.paymentStatus}
            </Badge>
          </div>

          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Mail className="h-5 w-5 text-gray-400" />
              <span>{tenant.email}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="h-5 w-5 text-gray-400" />
              <span>{tenant.phone}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Home className="h-5 w-5 text-gray-400" />
              <span>{tenant.property}</span>
            </div>
            
            <div className="flex items-center space-x-3">
              <DollarSign className="h-5 w-5 text-gray-400" />
              <span>${tenant.rentAmount}/month</span>
            </div>
          </div>

          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Lease Information</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Lease Start:</span>
                <span>{tenant.leaseStart}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Lease End:</span>
                <span>{tenant.leaseEnd}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Last Payment:</span>
                <span>{tenant.lastPayment}</span>
              </div>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button variant="outline" className="flex-1" onClick={() => sendNotification('message')}>
              <Mail className="h-4 w-4 mr-2" />
              Send Message
            </Button>
            <Button className="flex-1" onClick={() => sendNotification('payment')}>
              <DollarSign className="h-4 w-4 mr-2" />
              Request Payment
            </Button>
          </div>
          
          <div className="border-t pt-4">
            <h4 className="font-medium mb-2">Quick Actions</h4>
            <div className="grid grid-cols-2 gap-2">
              <Button variant="outline" size="sm" onClick={() => sendNotification('maintenance')}>
                <Bell className="h-4 w-4 mr-1" />
                Maintenance
              </Button>
              <Button variant="outline" size="sm" onClick={() => sendNotification('lease')}>
                <Calendar className="h-4 w-4 mr-1" />
                Lease Info
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TenantModal;
