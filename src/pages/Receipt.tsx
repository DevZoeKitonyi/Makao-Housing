
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Download, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const Receipt = () => {
  // Mock property and payment data
  const transaction = {
    id: 'TRX-12345678',
    date: '2024-05-27',
    property: {
      id: 1,
      title: 'Modern Downtown Apartment',
      address: '123 Main St, Downtown, City Center',
      image: '/placeholder.svg'
    },
    landlord: {
      name: 'John Smith',
      email: 'john@example.com',
      company: 'ABC Real Estate'
    },
    tenant: {
      name: 'Sarah Johnson',
      email: 'sarah@example.com'
    },
    payment: {
      rent: 2500,
      securityDeposit: 2500,
      applicationFee: 50,
      total: 5050,
      method: 'Visa ****1234',
      status: 'Completed'
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
          </Link>
        </div>

        {/* Success Message */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-4">
            <CheckCircle className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Successful!</h2>
          <p className="text-gray-600">
            Your payment for {transaction.property.title} has been completed successfully.
          </p>
        </div>

        {/* Receipt Card */}
        <Card className="mb-8 shadow-lg print:shadow-none">
          <CardHeader className="flex flex-row items-center justify-between border-b print:border-b-black">
            <div>
              <CardTitle>Receipt</CardTitle>
              <p className="text-sm text-gray-500">Transaction #{transaction.id}</p>
            </div>
            <div className="flex space-x-2 print:hidden">
              <Button variant="outline" onClick={handlePrint}>
                Print
              </Button>
              <Button 
                variant="outline" 
                className="flex items-center space-x-1"
              >
                <Download className="h-4 w-4" />
                <span>PDF</span>
              </Button>
            </div>
          </CardHeader>
          
          <CardContent className="p-6 space-y-6">
            {/* Date and Status */}
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2 text-gray-600">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(transaction.date)}</span>
              </div>
              <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                {transaction.payment.status}
              </div>
            </div>

            <Separator />

            {/* Property and People Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500 mb-2">Property</h3>
                <div className="flex items-start space-x-3">
                  <img 
                    src={transaction.property.image} 
                    alt={transaction.property.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold">{transaction.property.title}</p>
                    <p className="text-sm text-gray-600">{transaction.property.address}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Landlord</h3>
                  <p className="font-semibold">{transaction.landlord.name}</p>
                  <p className="text-sm text-gray-600">{transaction.landlord.company}</p>
                  <p className="text-sm text-gray-600">{transaction.landlord.email}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Tenant</h3>
                  <p className="font-semibold">{transaction.tenant.name}</p>
                  <p className="text-sm text-gray-600">{transaction.tenant.email}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment Details */}
            <div>
              <h3 className="text-sm font-medium text-gray-500 mb-4">Payment Details</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">First Month's Rent</span>
                  <span>${transaction.payment.rent.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Security Deposit</span>
                  <span>${transaction.payment.securityDeposit.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Application Fee</span>
                  <span>${transaction.payment.applicationFee.toLocaleString()}.00</span>
                </div>
                <div className="flex justify-between font-semibold pt-2 border-t">
                  <span>Total</span>
                  <span>${transaction.payment.total.toLocaleString()}.00</span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium">Payment Method</h4>
                  <p className="text-gray-600">{transaction.payment.method}</p>
                </div>
                <div>
                  <h4 className="font-medium">Next Payment</h4>
                  <p className="text-gray-600">
                    {(() => {
                      const nextMonth = new Date(transaction.date);
                      nextMonth.setMonth(nextMonth.getMonth() + 1);
                      return formatDate(nextMonth.toISOString().split('T')[0]);
                    })()}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <div className="text-center space-y-4">
          <p>What would you like to do next?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/dashboard">
              <Button variant="outline">Go to Dashboard</Button>
            </Link>
            <Link to="/properties">
              <Button>Browse More Properties</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
