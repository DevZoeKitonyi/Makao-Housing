
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Download, CheckCircle, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import ReceiptInfoSection from "@/components/ReceiptInfoSection";
import MakaoHeader from "@/components/MakaoHeader";
import MakaoFooter from "@/components/MakaoFooter";
import MakaoNav from "@/components/MakaoNav";

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
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navigation at the top, like other pages */}
      <MakaoNav />

      <div className="flex-1 flex flex-col w-full max-w-4xl mx-auto px-2 sm:px-4 lg:px-8 py-6 sm:py-12 relative">
        {/* Header */}
        <div className="mb-8 text-center">
          <MakaoHeader />
        </div>

        {/* Success Message */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full text-green-600 mb-4">
            <CheckCircle className="h-8 w-8 text-green-700" />
          </div>
          <h2 className="text-2xl font-bold text-green-800 mb-2">Payment Successful!</h2>
          <p className="text-gray-600">
            Your payment for {transaction.property.title} has been completed successfully.
          </p>
        </div>

        {/* Receipt Card */}
        <Card className="mb-8 shadow-lg print:shadow-none">
          <CardHeader className="flex flex-row items-center justify-between border-b print:border-b-black">
            <div>
              <CardTitle className="text-green-900">Receipt</CardTitle>
              <p className="text-sm text-gray-500">Transaction #{transaction.id}</p>
            </div>
            <div className="flex space-x-2 print:hidden">
              <Button variant="outline" onClick={handlePrint} className="border-green-700 text-green-700 hover:bg-green-100">
                Print
              </Button>
              <Button
                variant="outline"
                className="flex items-center space-x-1 border-green-700 text-green-700 hover:bg-green-100"
              >
                <Download className="h-4 w-4" />
                <span>PDF</span>
              </Button>
            </div>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            {/* Date and Status */}
            <ReceiptInfoSection
              date={formatDate(transaction.date)}
              status={transaction.payment.status}
            />

            <Separator />

            {/* Property and People Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-medium text-green-900 mb-2">Property</h3>
                <div className="flex items-start space-x-3">
                  <img 
                    src={transaction.property.image} 
                    alt={transaction.property.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-semibold text-green-900">{transaction.property.title}</p>
                    <p className="text-sm text-gray-600">{transaction.property.address}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-green-900 mb-1">Landlord</h3>
                  <p className="font-semibold text-green-900">{transaction.landlord.name}</p>
                  <p className="text-sm text-gray-600">{transaction.landlord.company}</p>
                  <p className="text-sm text-gray-600">{transaction.landlord.email}</p>
                </div>

                <div>
                  <h3 className="text-sm font-medium text-green-900 mb-1">Tenant</h3>
                  <p className="font-semibold text-green-900">{transaction.tenant.name}</p>
                  <p className="text-sm text-gray-600">{transaction.tenant.email}</p>
                </div>
              </div>
            </div>

            <Separator />

            {/* Payment Details */}
            <div>
              <h3 className="text-sm font-medium text-green-900 mb-4">Payment Details</h3>
              
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
                  <span className="text-green-800">${transaction.payment.total.toLocaleString()}.00</span>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-green-900">Payment Method</h4>
                  <p className="text-gray-600">{transaction.payment.method}</p>
                </div>
                <div>
                  <h4 className="font-medium text-green-900">Next Payment</h4>
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
        <div className="text-center space-y-4 mb-12">
          <p>What would you like to do next?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link to="/dashboard">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-100">Go to Dashboard</Button>
            </Link>
            <Link to="/properties">
              <Button className="bg-red-700 hover:bg-green-700 text-white">Browse More Properties</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* Footer always at the bottom */}
      <MakaoFooter />
    </div>
  );
};

export default Receipt;
