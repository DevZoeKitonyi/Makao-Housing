
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Shield, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

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
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <Link to="/" className="inline-flex items-center justify-center space-x-2">
            <Home className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
          </Link>
          <h2 className="text-3xl font-bold text-gray-900 mt-4">Choose Your Plan</h2>
          <p className="text-gray-600 mt-2">Select the perfect plan for your property management needs</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Select a Plan</h3>
            <div className="space-y-4">
              {plans.map((plan) => (
                <Card
                  key={plan.id}
                  className={`cursor-pointer transition-all ${
                    selectedPlan === plan.id ? 'ring-2 ring-blue-600 border-blue-600' : ''
                  } ${plan.popular ? 'relative' : ''}`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                        <Star className="h-4 w-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold">{plan.name}</h4>
                        <div className="text-3xl font-bold text-blue-600">
                          ${plan.price}<span className="text-lg text-gray-600">/month</span>
                        </div>
                      </div>
                      <div className={`w-6 h-6 rounded-full border-2 ${
                        selectedPlan === plan.id 
                          ? 'bg-blue-600 border-blue-600' 
                          : 'border-gray-300'
                      } flex items-center justify-center`}>
                        {selectedPlan === plan.id && <Check className="h-4 w-4 text-white" />}
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {plan.features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="h-4 w-4 text-green-500 mr-2" />
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
                    <label htmlFor="card-name" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="exp-date" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
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
                      <span>${plans.find(p => p.id === selectedPlan)?.price}/month</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <Shield className="h-6 w-6 text-blue-600 mr-3 mt-0.5" />
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Secure Payment:</span> Your payment information is encrypted and secure. Cancel anytime.
                      </p>
                    </div>
                  </div>

                  <Button type="submit" className="w-full">
                    Subscribe Now
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionPayment;
