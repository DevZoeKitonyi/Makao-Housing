import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Shield, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import MakaoFooter from "@/components/MakaoFooter";

const SubscriptionPayment = () => {
  const [selectedPlan, setSelectedPlan] = useState('premium');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');

  const plans = [
    {
      id: 'basic',
      name: 'Basic',
      price: 29,
      features: ['Up to 5 properties', 'Basic analytics', 'Email support', 'Property management'],
      popular: false
    },
    {
      id: 'premium',
      name: 'Premium',
      price: 59,
      features: ['Up to 20 properties', 'Advanced analytics', 'Priority support', 'Tenant screening', 'Payment processing'],
      popular: true
    },
    {
      id: 'enterprise',
      name: 'Enterprise',
      price: 99,
      features: ['Unlimited properties', 'Custom analytics', '24/7 phone support', 'API access', 'White-label solution'],
      popular: false
    }
  ];

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription payment
    console.log('Processing subscription payment...');
  };

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
              <Link to="/notifications" className="text-gray-700 hover:text-red-700">Notifications</Link>
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
      <div className="flex-1">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Plan Selection */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-green-900">Select a Plan</h3>
              <div className="space-y-4">
                {plans.map((plan) => (
                  <Card
                    key={plan.id}
                    className={`cursor-pointer transition-all ${
                      selectedPlan === plan.id ? 'ring-2 ring-green-700 border-green-700' : 'border-green-700'
                    } ${plan.popular ? 'relative' : ''}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="h-4 w-4 mr-1" />
                          Most Popular
                        </span>
                      </div>
                    )}
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h4 className="text-xl font-bold text-green-800">{plan.name}</h4>
                          <div className="text-3xl font-bold text-green-700">
                            ${plan.price}<span className="text-lg text-gray-600">/month</span>
                          </div>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 ${
                          selectedPlan === plan.id 
                            ? 'bg-green-700 border-green-700' 
                            : 'border-gray-300'
                        } flex items-center justify-center`}>
                          {selectedPlan === plan.id && <Check className="h-4 w-4 text-white" />}
                        </div>
                      </div>
                      <ul className="space-y-2">
                        {plan.features.map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <Check className="h-4 w-4 text-green-700 mr-2" />
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            {/* Payment Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-green-900">Payment Information</CardTitle>
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
                          onChange={(e) => setCardNumber(e.target.value)}
                          placeholder="1234 5678 9012 3456"
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
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between text-lg font-semibold">
                        <span>Total (Monthly)</span>
                        <span className="text-green-800">${plans.find(p => p.id === selectedPlan)?.price}/month</span>
                      </div>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start">
                        <Shield className="h-6 w-6 text-green-700 mr-3 mt-0.5" />
                        <p className="text-sm text-gray-600">
                          <span className="font-semibold text-green-900">Secure Payment:</span> Your payment information is encrypted and secure. Cancel anytime.
                        </p>
                      </div>
                    </div>
                    <Button type="submit" className="w-full bg-red-700 hover:bg-green-700 text-white">
                      Subscribe Now
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      {/* Desktop Footer */}
      <footer className="hidden md:block bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-green-700" />
                <h3 className="text-xl font-bold">Makao</h3>
              </div>
              <p className="text-gray-400">
                Your trusted companion for finding the best homes in Kenya.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/properties" className="text-gray-400 hover:text-green-400">Properties</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-green-400">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-green-400">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-green-400">Contact</Link></li>
                <li><Link to="/notifications" className="text-gray-400 hover:text-green-400">Notifications</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Users</h4>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-green-400">Login</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-green-400">Register</Link></li>
                <li><Link to="/wishlist" className="text-gray-400 hover:text-green-400">Wishlist</Link></li>
                <li><Link to="/dashboard" className="text-gray-400 hover:text-green-400">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>P.O. Box 1234</p>
                <p>Nairobi, Kenya</p>
                <p>Phone: +254 712 345678</p>
                <p>Email: info@makao.co.ke</p>
              </div>
            </div>
          </div>
          <div className="border-t border-green-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Makao. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SubscriptionPayment;
