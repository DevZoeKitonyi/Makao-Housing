
import React, { useState } from "react";
import { Users, Mail, Phone, Home, Info, DollarSign } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogDescription, DialogFooter, DialogClose } from "@/components/ui/dialog";

// Sample tenants
const tenants = [
  {
    id: 1,
    firstName: "Sarah",
    lastName: "Johnson",
    email: "sarah@example.com",
    phone: "+254710112233",
    address: "123 Main St, Downtown, City Center",
    rentAmount: 2500,
    leaseStartDate: new Date("2024-03-01"),
    leaseEndDate: new Date("2025-02-28"),
    notes: "Pays on time. Quiet tenant.",
  },
  {
    id: 2,
    firstName: "Bob",
    lastName: "Smith",
    email: "bobsmith@example.com",
    phone: "+254722334455",
    address: "456 Riverside Ave, Suburban Hills",
    rentAmount: 4200,
    leaseStartDate: new Date("2024-06-05"),
    leaseEndDate: new Date("2025-05-30"),
    notes: "Has a dog, likes gardening.",
  },
];

type Tenant = typeof tenants[number];

const DashboardTenants = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTenant, setSelectedTenant] = useState<Tenant | null>(null);

  const openModal = (tenant: Tenant) => {
    setSelectedTenant(tenant);
    setModalOpen(true);
  };

  const closeModal = () => {
    setSelectedTenant(null);
    setModalOpen(false);
  };

  const sendPaymentReminder = (tenant: Tenant) => {
    // Place your notification logic here (toast, API call, etc.)
    alert(`Payment reminder sent to ${tenant.firstName} ${tenant.lastName}`);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-2 sm:px-4">
      <h1 className="text-2xl md:text-3xl font-bold mb-6 text-green-700 flex items-center gap-2">
        <Users className="h-6 w-6" />
        Tenants
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {tenants.map((tenant) => (
          <Card key={tenant.id} className="relative">
            <CardHeader>
              <CardTitle className="text-lg font-medium flex flex-col sm:flex-row sm:items-center gap-2">
                <span>{tenant.firstName} {tenant.lastName}</span>
                <span className="text-xs text-gray-500 block">{tenant.email}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-2">
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>{tenant.phone}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <Home className="h-4 w-4 mr-2" />
                  <span>{tenant.address}</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mb-1">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>Rent: ${tenant.rentAmount}/month</span>
                </div>
                <div className="flex items-center text-gray-600 text-xs mb-1">
                  <Info className="h-4 w-4 mr-2" />
                  <span>Lease: {tenant.leaseStartDate.toLocaleDateString()} - {tenant.leaseEndDate.toLocaleDateString()}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  size="sm"
                  className="bg-red-700 text-white hover:bg-green-700 w-full sm:w-auto"
                  onClick={() => sendPaymentReminder(tenant)}
                >
                  Send Rent Notification
                </Button>
                <Button
                  size="sm"
                  className="border-green-700 text-green-700 hover:bg-green-100 w-full sm:w-auto"
                  variant="outline"
                  onClick={() => openModal(tenant)}
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      {/* Tenant Detail Modal */}
      <Dialog open={modalOpen} onOpenChange={closeModal}>
        <DialogContent className="max-w-md w-full">
          <DialogHeader>
            <DialogTitle>
              Tenant Details
            </DialogTitle>
            <DialogDescription>
              Detailed info for {selectedTenant?.firstName} {selectedTenant?.lastName}
            </DialogDescription>
          </DialogHeader>
          {selectedTenant && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4" />
                <span className="font-bold">{selectedTenant.firstName} {selectedTenant.lastName}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>{selectedTenant.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>{selectedTenant.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Home className="h-4 w-4" />
                <span>{selectedTenant.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                <span>Rent: ${selectedTenant.rentAmount}/month</span>
              </div>
              <div className="flex items-center gap-2">
                <Info className="h-4 w-4" />
                <span>
                  Lease: {selectedTenant.leaseStartDate.toLocaleDateString()} - {selectedTenant.leaseEndDate.toLocaleDateString()}
                </span>
              </div>
              <div className="bg-green-50 p-2 rounded text-sm text-gray-700">
                Notes: {selectedTenant.notes}
              </div>
            </div>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline" className="border-green-700 text-green-700 w-full">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DashboardTenants;
