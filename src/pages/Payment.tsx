
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Shield, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  // Mock property data
  const property = {
    id: 1,
    title: 'Modern Downtown Apartment',
    address: '123 Main St, Downtown, City Center',
    price: 2500,
    securityDeposit: 2500,
    applicationFee: 50,
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
    // Handle payment submission - in a real app, you'd integrate with a payment processor
    window.location.href = "/receipt";
  };

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
                <CardTitle>Payment Information</CardTitle>
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
                      Save card for future payments
                    </label>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Secure Payment:</span> Your payment information is secure. We use encryption to protect your personal and payment details.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Complete Payment
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Order Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Payment Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{property.title}</h4>
                    <p className="text-sm text-gray-600">{property.address}</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">First Month's Rent</span>
                      <span>${property.price.toLocaleString()}.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Security Deposit</span>
                      <span>${property.securityDeposit.toLocaleString()}.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Application Fee</span>
                      <span>${property.applicationFee.toLocaleString()}.00</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total</span>
                    <span>${(property.price + property.securityDeposit + property.applicationFee).toLocaleString()}.00</span>
                  </div>
                </div>

                <div className="pt-4 border-t text-sm text-gray-600">
                  <p className="mb-2">By completing this payment, you agree to our terms of service.</p>
                  <p>Need help? <Link to="/contact" className="text-blue-600 hover:text-blue-800">Contact us</Link></p>
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
              <div className="ml-2 text-blue-600 font-medium">Property Details</div>
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

export default Payment;
