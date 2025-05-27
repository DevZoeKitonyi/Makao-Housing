
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, Plus, Heart, Users, BarChart, Settings, LogOut, Edit, Trash2, Eye, DollarSign, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import PropertyModal from '@/components/PropertyModal';
import TenantModal from '@/components/TenantModal';

const Dashboard = () => {
  const [userType] = useState('landlord');
  const [propertyModal, setPropertyModal] = useState({ isOpen: false, property: null, mode: 'view' });
  const [tenantModal, setTenantModal] = useState({ isOpen: false, tenant: null });

  // Mock data
  const landlordProperties = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: 2500,
      location: 'Downtown, City Center',
      status: 'Available',
      interested: 12,
      image: '/placeholder.svg',
      bedrooms: 2,
      bathrooms: 2,
      description: 'Beautiful modern apartment with city views'
    },
    {
      id: 2,
      title: 'Luxury Villa with Garden',
      price: 4200,
      location: 'Suburban Hills',
      status: 'Rented',
      interested: 8,
      image: '/placeholder.svg',
      bedrooms: 4,
      bathrooms: 3,
      description: 'Spacious villa with private garden'
    }
  ];

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
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@example.com',
      phone: '(555) 456-7890',
      property: 'City Center Condo',
      rentAmount: 1800,
      paymentStatus: 'Overdue' as const,
      leaseStart: '2023-06-01',
      leaseEnd: '2024-05-31',
      lastPayment: '2024-03-01'
    }
  ];

  const tenantWishlist = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      price: 2500,
      location: 'Downtown, City Center',
      image: '/placeholder.svg'
    },
    {
      id: 2,
      title: 'Cozy Studio Near University',
      price: 1800,
      location: 'University District',
      image: '/placeholder.svg'
    }
  ];

  const openPropertyModal = (property: any, mode: string) => {
    setPropertyModal({ isOpen: true, property, mode });
  };

  const closePropertyModal = () => {
    setPropertyModal({ isOpen: false, property: null, mode: 'view' });
  };

  const openTenantModal = (tenant: any) => {
    setTenantModal({ isOpen: true, tenant });
  };

  const closeTenantModal = () => {
    setTenantModal({ isOpen: false, tenant: null });
  };

  const getPaymentStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'bg-green-100 text-green-800';
      case 'Pending': return 'bg-yellow-100 text-yellow-800';
      case 'Overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const LandlordDashboard = () => (
    <div className="space-y-6">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-blue-600">15</div>
            <p className="text-gray-600">Total Properties</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-green-600">12</div>
            <p className="text-gray-600">Rented</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-orange-600">3</div>
            <p className="text-gray-600">Available</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-purple-600">47</div>
            <p className="text-gray-600">Total Inquiries</p>
          </CardContent>
        </Card>
      </div>

      {/* Properties Management */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>My Properties</CardTitle>
          <Button onClick={() => openPropertyModal(null, 'add')}>
            <Plus className="h-4 w-4 mr-2" />
            Add Property
          </Button>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {landlordProperties.map((property) => (
              <div key={property.id} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold">{property.title}</h4>
                    <p className="text-gray-600">{property.location}</p>
                    <p className="text-blue-600 font-medium">${property.price}/month</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="text-center">
                    <div className="text-lg font-bold text-orange-600">{property.interested}</div>
                    <p className="text-xs text-gray-600">Interested</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-sm ${
                    property.status === 'Available' 
                      ? 'bg-green-100 text-green-800'
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {property.status}
                  </span>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => openPropertyModal(property, 'view')}>
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => openPropertyModal(property, 'edit')}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  const TenantsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">Tenant Management</h3>
        <Link to="/subscription-payment">
          <Button variant="outline">
            <DollarSign className="h-4 w-4 mr-2" />
            Upgrade Plan
          </Button>
        </Link>
      </div>

      {/* Payment Status Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">
              {tenants.filter(t => t.paymentStatus === 'Paid').length}
            </div>
            <p className="text-sm text-gray-600">Paid This Month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {tenants.filter(t => t.paymentStatus === 'Pending').length}
            </div>
            <p className="text-sm text-gray-600">Pending Payments</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">
              {tenants.filter(t => t.paymentStatus === 'Overdue').length}
            </div>
            <p className="text-sm text-gray-600">Overdue Payments</p>
          </CardContent>
        </Card>
      </div>

      {/* Tenants Table */}
      <Card>
        <CardHeader>
          <CardTitle>Current Tenants</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tenant</TableHead>
                <TableHead>Property</TableHead>
                <TableHead>Rent</TableHead>
                <TableHead>Payment Status</TableHead>
                <TableHead>Last Payment</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tenants.map((tenant) => (
                <TableRow key={tenant.id}>
                  <TableCell>
                    <div>
                      <div className="font-medium">{tenant.name}</div>
                      <div className="text-sm text-gray-500">{tenant.email}</div>
                    </div>
                  </TableCell>
                  <TableCell>{tenant.property}</TableCell>
                  <TableCell>${tenant.rentAmount}</TableCell>
                  <TableCell>
                    <Badge className={getPaymentStatusColor(tenant.paymentStatus)}>
                      {tenant.paymentStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>{tenant.lastPayment}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm" onClick={() => openTenantModal(tenant)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      {tenant.paymentStatus !== 'Paid' && (
                        <Button variant="ghost" size="sm">
                          <AlertCircle className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );

  const TenantDashboard = () => (
    <div className="space-y-6">
      {/* Payment Due Notice */}
      <Card className="border-orange-200 bg-orange-50">
        <CardContent className="p-4">
          <div className="flex items-center">
            <AlertCircle className="h-5 w-5 text-orange-600 mr-2" />
            <div>
              <p className="font-medium text-orange-800">Rent Payment Due</p>
              <p className="text-sm text-orange-600">Your rent payment of $2,500 is due on June 1st, 2024</p>
            </div>
            <Link to="/payment" className="ml-auto">
              <Button size="sm">Pay Now</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      {/* Wishlist */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>My Wishlist</CardTitle>
          <Link to="/subscription-payment">
            <Button variant="outline" size="sm">
              <DollarSign className="h-4 w-4 mr-2" />
              Upgrade Account
            </Button>
          </Link>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {tenantWishlist.map((property) => (
              <div key={property.id} className="flex border rounded-lg overflow-hidden">
                <img 
                  src={property.image} 
                  alt={property.title}
                  className="w-24 h-24 object-cover"
                />
                <div className="p-4 flex-1">
                  <h4 className="font-semibold">{property.title}</h4>
                  <p className="text-gray-600 text-sm">{property.location}</p>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-blue-600 font-medium">${property.price}/month</p>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-sm hidden md:block">
        <div className="p-6 border-b">
          <Link to="/" className="flex items-center space-x-2">
            <Home className="h-6 w-6 text-blue-600" />
            <h1 className="text-lg font-bold text-gray-900">PropertyHub</h1>
          </Link>
        </div>
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <Link to="/dashboard" className="flex items-center space-x-2 p-2 rounded-md bg-blue-50 text-blue-700">
                <BarChart className="h-5 w-5" />
                <span>Dashboard</span>
              </Link>
            </li>
            {userType === 'landlord' ? (
              <>
                <li>
                  <Link to="/dashboard/properties" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Home className="h-5 w-5" />
                    <span>My Properties</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/tenants" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700">
                    <Users className="h-5 w-5" />
                    <span>Tenants</span>
                  </Link>
                </li>
              </>
            ) : (
              <li>
                <Link to="/dashboard/wishlist" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </Link>
              </li>
            )}
            <li>
              <Link to="/subscription-payment" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700">
                <DollarSign className="h-5 w-5" />
                <span>Subscription</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard/settings" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700">
                <Settings className="h-5 w-5" />
                <span>Settings</span>
              </Link>
            </li>
            <li>
              <Link to="/logout" className="flex items-center space-x-2 p-2 rounded-md hover:bg-gray-100 text-gray-700">
                <LogOut className="h-5 w-5" />
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Dashboard
            </h2>
            <div className="flex items-center space-x-4">
              <div className="text-right">
                <p className="text-sm text-gray-600">Welcome back,</p>
                <p className="font-semibold">
                  {userType === 'landlord' ? 'John Smith' : 'Sarah Johnson'}
                </p>
              </div>
              <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                {userType === 'landlord' ? 'JS' : 'SJ'}
              </div>
            </div>
          </div>

          <Tabs defaultValue="overview">
            <TabsList className="mb-6">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              {userType === 'landlord' && (
                <>
                  <TabsTrigger value="properties">Properties</TabsTrigger>
                  <TabsTrigger value="tenants">Tenants</TabsTrigger>
                </>
              )}
              {userType === 'tenant' && (
                <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
              )}
            </TabsList>
            <TabsContent value="overview">
              {userType === 'landlord' ? <LandlordDashboard /> : <TenantDashboard />}
            </TabsContent>
            {userType === 'landlord' && (
              <>
                <TabsContent value="properties">
                  <LandlordDashboard />
                </TabsContent>
                <TabsContent value="tenants">
                  <TenantsTab />
                </TabsContent>
              </>
            )}
            {userType === 'tenant' && (
              <TabsContent value="wishlist">
                <TenantDashboard />
              </TabsContent>
            )}
          </Tabs>
        </div>
      </div>

      {/* Modals */}
      <PropertyModal
        property={propertyModal.property}
        isOpen={propertyModal.isOpen}
        onClose={closePropertyModal}
        mode={propertyModal.mode as any}
        onSave={(property) => {
          console.log('Saving property:', property);
          closePropertyModal();
        }}
      />

      <TenantModal
        tenant={tenantModal.tenant}
        isOpen={tenantModal.isOpen}
        onClose={closeTenantModal}
      />
    </div>
  );
};

export default Dashboard;
