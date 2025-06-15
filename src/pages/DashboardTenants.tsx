
import React, { useState } from "react";
import { Eye, DollarSign, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import TenantModal from "@/components/TenantModal";

const tenants = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    phone: '(555) 123-4567',
    property: 'Modern Downtown Apartment',
    rentAmount: 2500,
    paymentStatus: 'Paid' as const,
    leaseStart: '2024-01-01',
    leaseEnd: '2024-12-31',
    lastPayment: '2024-05-01'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@example.com',
    phone: '(555) 987-6543',
    property: 'Luxury Villa with Garden',
    rentAmount: 4200,
    paymentStatus: 'Pending' as const,
    leaseStart: '2024-03-01',
    leaseEnd: '2025-02-28',
    lastPayment: '2024-04-01'
  },
];

const DashboardTenants = () => {
  const [selectedTenant, setSelectedTenant] = useState<any>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const handleViewDetails = (tenant: any) => {
    setSelectedTenant(tenant);
    setModalOpen(true);
  };

  const handleNotify = (tenant: any) => {
    alert(`Sent rent payment notification to ${tenant.name}!`);
  };

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">
        <Bell className="h-6 w-6" /> All Tenants
      </h1>
      <div className="bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Property</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Rent</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-800">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tenants.map(tenant => (
              <tr key={tenant.id} className="border-b">
                <td className="px-4 py-3">{tenant.name}</td>
                <td className="px-4 py-3">{tenant.property}</td>
                <td className="px-4 py-3">${tenant.rentAmount}</td>
                <td className="px-4 py-3 flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => handleViewDetails(tenant)}>
                    <Eye className="h-4 w-4 mr-1" /> View
                  </Button>
                  <Button size="sm" onClick={() => handleNotify(tenant)}>
                    <DollarSign className="h-4 w-4 mr-1" /> Request Rent Payment
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <TenantModal tenant={selectedTenant} isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};
export default DashboardTenants;
