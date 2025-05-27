
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Shield, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const RentPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  // Mock rental data for the current tenant
  const rentalInfo = {
    propertyTitle: 'Modern Downtown Apartment',
    propertyAddress: '123 Main St, Apt 4B, Downtown, City Center',
    landlordName: 'John Smith',
    landlordEmail: 'john.smith@example.com',
    monthlyRent: 2500,
    dueDate: '2024-06-01',
    lateFee: 50,
    isLate: false,
    image: '/placeholder.svg'
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  const handleCardNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCardNumber(formatCardNumber(value));
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle rent payment submission
    console.log('Processing rent payment...');
    window.location.href = "/receipt";
  };

  const totalAmount = rentalInfo.monthlyRent + (rentalInfo.isLate ? rentalInfo.lateFee : 0);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2" />
                  Rent Payment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number
                    </label>
                    <div className="relative">
                      <Input
                        id="card-number"
                        value={cardNumber}
                        onChange={handleCardNumberChange}
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        className="w-full pl-10"
                        required
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <CreditCard className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card
                    </label>
                    <Input
                      id="card-name"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="exp-date" className="block text-sm font-medium text-gray-700 mb-1">
                        Expiration Date
                      </label>
                      <Input
                        id="exp-date"
                        value={expDate}
                        onChange={(e) => setExpDate(e.target.value)}
                        placeholder="MM/YY"
                        className="w-full"
                        maxLength={5}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                        CVV
                      </label>
                      <Input
                        id="cvv"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                        type="password"
                        className="w-full"
                        maxLength={4}
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="save-card"
                      checked={saveCard}
                      onCheckedChange={(checked) => setSaveCard(checked as boolean)}
                    />
                    <label htmlFor="save-card" className="text-sm text-gray-600">
                      Save card for future rent payments
                    </label>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">Secure Payment:</span> Your payment information is encrypted and secure. Your landlord will be notified once payment is processed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Pay Rent - ${totalAmount.toLocaleString()}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Rental Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Rental Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img 
                    src={rentalInfo.image} 
                    alt={rentalInfo.propertyTitle}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{rentalInfo.propertyTitle}</h4>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{rentalInfo.propertyAddress}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Landlord Information</h5>
                      <p className="text-sm text-gray-600">{rentalInfo.landlordName}</p>
                      <p className="text-sm text-gray-600">{rentalInfo.landlordEmail}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Payment Details</h5>
                      <div className="flex items-center text-sm text-gray-600 mb-1">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>Due Date: {new Date(rentalInfo.dueDate).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly Rent</span>
                      <span>${rentalInfo.monthlyRent.toLocaleString()}.00</span>
                    </div>
                    {rentalInfo.isLate && (
                      <div className="flex justify-between text-red-600">
                        <span>Late Fee</span>
                        <span>${rentalInfo.lateFee.toLocaleString()}.00</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total Amount</span>
                    <span>${totalAmount.toLocaleString()}.00</span>
                  </div>
                </div>

                {rentalInfo.isLate && (
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-red-800">
                      <span className="font-semibold">Late Payment Notice:</span> Your rent payment is overdue. A late fee of ${rentalInfo.lateFee} has been added.
                    </p>
                  </div>
                )}

                <div className="pt-4 border-t text-sm text-gray-600">
                  <p className="mb-2">
                    Payment will be processed immediately and your landlord will be notified.
                  </p>
                  <p>
                    Need help? <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact support</Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Steps Indicator */}
        <div className="mt-12">
          <div className="flex items-center justify-center">
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center text-white">
                1
              </div>
              <div className="ml-2 text-blue-600 font-medium">Rental Details</div>
            </div>
            <ChevronRight className="mx-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-blue-600 rounded-full h-8 w-8 flex items-center justify-center text-white">
                2
              </div>
              <div className="ml-2 text-blue-600 font-medium">Payment</div>
            </div>
            <ChevronRight className="mx-4 text-gray-400" />
            <div className="flex items-center">
              <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center text-gray-600">
                3
              </div>
              <div className="ml-2 text-gray-600">Confirmation</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RentPayment;
