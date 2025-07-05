import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Shield, ChevronRight, Calendar, MapPin, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Switch } from '@/components/ui/switch';
import MakaoFooter from "@/components/MakaoFooter";

const RentPayment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);
  const [enableAutoPay, setEnableAutoPay] = useState(false);

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
    // Handle rent payment submission with auto-pay setup
    console.log('Processing rent payment with auto-pay:', enableAutoPay);
    window.location.href = "/receipt";
  };

  const totalAmount = rentalInfo.monthlyRent + (rentalInfo.isLate ? rentalInfo.lateFee : 0);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Desktop Nav */}
      <header className="bg-white shadow-sm border-b hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-green-700" />
              <h1 className="text-2xl font-bold text-black">Makao</h1>
              <span className="ml-2 px-2 py-1 rounded bg-green-700 text-white text-xs hidden sm:inline">Inspired by Kenya</span>
            </div>
            <nav className="flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-700">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-red-700">Properties</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-700">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-700">Services</Link>
              <Link to="/contact" className="text-gray-700 hover:text-red-700">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">Login</Button>
              </Link>
              <Link to="/register">
                <Button className="bg-red-700 hover:bg-green-700 text-white">Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
      {/* Responsive Wrapper */}
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8 py-8 sm:py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CreditCard className="h-5 w-5 mr-2 text-green-700" />
                  <span className="text-green-800">Rent Payment</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="card-number" className="block text-sm font-medium text-green-900 mb-1">
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
                    <label htmlFor="card-name" className="block text-sm font-medium text-green-900 mb-1">
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
                      <label htmlFor="exp-date" className="block text-sm font-medium text-green-900 mb-1">
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
                      <label htmlFor="cvv" className="block text-sm font-medium text-green-900 mb-1">
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

                  {/* Auto-Pay Setup */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start">
                        <RefreshCw className="h-6 w-6 text-green-700 mr-3 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-green-900 mb-1">Setup Auto-Pay</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Never miss a payment. We'll automatically charge your card on the 1st of each month.
                          </p>
                          <ul className="text-xs text-gray-500 space-y-1">
                            <li>• Automatic payment on the 1st of each month</li>
                            <li>• Email notifications before each payment</li>
                            <li>• Cancel anytime from your dashboard</li>
                            <li>• Secure and encrypted transactions</li>
                          </ul>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Switch
                          id="auto-pay"
                          checked={enableAutoPay}
                          onCheckedChange={setEnableAutoPay}
                        />
                        <label htmlFor="auto-pay" className="text-sm font-medium text-green-900">
                          Enable
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-green-700 mr-3 mt-0.5" />
                      <div>
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-green-900">Secure Payment:</span> Your payment information is encrypted and secure. Your landlord will be notified once payment is processed.
                          {enableAutoPay && (
                            <span className="block mt-1 text-green-700">
                              Auto-pay will be set up after this payment is processed.
                            </span>
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  <Button type="submit" className="w-full bg-red-700 hover:bg-green-700 text-white" size="lg">
                    {enableAutoPay ? 
                      `Pay ${totalAmount.toLocaleString()} & Setup Auto-Pay` : 
                      `Pay Rent - $${totalAmount.toLocaleString()}`
                    }
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
          {/* Rental Summary */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>
                  <span className="text-green-800">Rental Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start space-x-4">
                  <img 
                    src={rentalInfo.image} 
                    alt={rentalInfo.propertyTitle}
                    className="w-20 h-20 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-semibold text-green-900">{rentalInfo.propertyTitle}</h4>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{rentalInfo.propertyAddress}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="space-y-3">
                    <div>
                      <h5 className="font-medium text-green-900 mb-2">Landlord Information</h5>
                      <p className="text-sm text-gray-600">{rentalInfo.landlordName}</p>
                      <p className="text-sm text-gray-600">{rentalInfo.landlordEmail}</p>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-green-900 mb-2">Payment Details</h5>
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
                    {enableAutoPay && (
                      <div className="flex justify-between text-blue-600">
                        <span>Auto-Pay Setup</span>
                        <span>Included</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-semibold text-lg">
                    <span>Total Amount</span>
                    <span className="text-green-800">${totalAmount.toLocaleString()}.00</span>
                  </div>
                </div>

                {enableAutoPay && (
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-sm text-green-800">
                      <span className="font-semibold">Auto-Pay Benefits:</span> Never miss a payment, avoid late fees, and get email reminders before each charge.
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
        <div className="mt-10 sm:mt-12 px-2 sm:px-0 overflow-x-auto">
          <div className="flex flex-col xs:flex-row items-center justify-center space-y-2 xs:space-y-0 xs:space-x-2 sm:space-x-0 sm:flex-row">
            <div className="flex items-center mb-2 xs:mb-0">
              <div className="bg-red-700 rounded-full h-8 w-8 flex items-center justify-center text-white">
                1
              </div>
              <div className="ml-2 text-red-700 font-medium">Rental Details</div>
            </div>
            <ChevronRight className="mx-2 xs:mx-4 text-gray-400 hidden xs:inline" />
            <div className="flex items-center mb-2 xs:mb-0">
              <div className="bg-green-700 rounded-full h-8 w-8 flex items-center justify-center text-white">
                2
              </div>
              <div className="ml-2 text-green-700 font-medium">Payment</div>
            </div>
            <ChevronRight className="mx-2 xs:mx-4 text-gray-400 hidden xs:inline" />
            <div className="flex items-center">
              <div className="bg-gray-300 rounded-full h-8 w-8 flex items-center justify-center text-gray-600">
                3
              </div>
              <div className="ml-2 text-gray-600">Confirmation</div>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Footer */}
      <MakaoFooter />
    </div>
  );
};

export default RentPayment;
