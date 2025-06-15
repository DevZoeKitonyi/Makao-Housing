import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, Shield, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import MakaoNav from "@/components/MakaoNav";
import MakaoFooter from "@/components/MakaoFooter";

const Payment = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expDate, setExpDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [saveCard, setSaveCard] = useState(false);

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle payment submission logic here
    console.log('Payment submitted');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <MakaoNav />
      <div className="flex-1">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-700">Payment Details</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <form onSubmit={handlePaymentSubmit} className="space-y-4">
                <div>
                  <label htmlFor="card-number" className="block text-sm font-medium text-green-900 mb-1">
                    Card Number
                  </label>
                  <Input
                    id="card-number"
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="card-name" className="block text-sm font-medium text-green-900 mb-1">
                    Name on Card
                  </label>
                  <Input
                    id="card-name"
                    type="text"
                    placeholder="John Doe"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
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
                      type="text"
                      placeholder="MM/YY"
                      value={expDate}
                      onChange={(e) => setExpDate(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="cvv" className="block text-sm font-medium text-green-900 mb-1">
                      CVV
                    </label>
                    <Input
                      id="cvv"
                      type="text"
                      placeholder="123"
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full"
                      required
                    />
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="save-card" checked={saveCard} onCheckedChange={() => setSaveCard(!saveCard)} />
                  <label htmlFor="save-card" className="text-sm text-gray-600">
                    Save card for future payments
                  </label>
                </div>
                <Button type="submit" className="w-full bg-red-700 hover:bg-green-700 text-white">
                  Submit Payment
                </Button>
              </form>
            </CardContent>
          </Card>
          <div className="mt-8 text-center">
            <Link to="/dashboard" className="text-green-700 hover:underline">
              Return to Dashboard
            </Link>
          </div>
        </div>
      </div>
      <MakaoFooter />
    </div>
  );
};

export default Payment;
