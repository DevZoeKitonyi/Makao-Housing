import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Users, FileImage, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import MakaoNav from '@/components/MakaoNav';

const kenyanColors = {
  main: 'text-green-700',
  accent: 'text-red-700',
  bgAccent: 'bg-red-700',
  bgPrimary: 'bg-black',
  borderAccent: 'border-green-700',
  btnAccent: 'bg-red-700 hover:bg-green-700 text-white',
  btnOutline: 'border-green-700 text-green-700 hover:bg-green-50',
  section: 'bg-gradient-to-r from-black via-red-700 to-green-700',
  label: 'text-black'
};

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-green-700" />,
      title: 'Property Search',
      description: 'Find your ideal property with our advanced search features. Filter by location, price, amenities, and more to discover properties that match your criteria.',
      link: '/properties'
    },
    {
      icon: <Users className="h-8 w-8 text-green-700" />,
      title: 'Tenant & Landlord Matching',
      description: 'Our platform connects quality tenants with trusted landlords, ensuring perfect matches and hassle-free rental experiences.',
      link: '/register'
    },
    {
      icon: <FileImage className="h-8 w-8 text-green-700" />,
      title: 'Property Management',
      description: 'Landlords can easily manage their properties, track inquiries, and communicate with tenants all in one centralized dashboard.',
      link: '/dashboard'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-green-700" />,
      title: 'Secure Payments',
      description: 'Process rent payments securely through our platform, with automatic receipts and payment history for both tenants and landlords.',
      link: '/payment'
    }
  ];

  const forTenants = [
    'Easy property search with advanced filters',
    'Save favorite properties to wishlist',
    'Direct communication with landlords',
    'Secure online application submission',
    'Schedule property viewings',
    'Convenient rent payment processing'
  ];

  const forLandlords = [
    'List and showcase your properties',
    'Screen potential tenants',
    'Track tenant applications',
    'Manage multiple properties in one dashboard',
    'Receive secure rent payments',
    'Generate reports and track performance'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Kenyan Themed Navigation */}
      <MakaoNav />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-black via-red-700 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Our Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-white">
            We provide comprehensive solutions for property owners and renters,
            making the rental process simple, secure, and enjoyable.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-green-700">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-green-50 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-black">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="outline" className="flex items-center border-green-700 text-green-700 hover:bg-green-50">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For Tenants & Landlords */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-black mb-6">For Tenants</h3>
              <ul className="space-y-4">
                {forTenants.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/register">
                  <Button className="bg-red-700 hover:bg-green-700 text-white flex items-center">
                    Sign up as a Tenant
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-black mb-6">For Landlords</h3>
              <ul className="space-y-4">
                {forLandlords.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/register">
                  <Button className="bg-red-700 hover:bg-green-700 text-white flex items-center">
                    Sign up as a Landlord
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Transparent Pricing</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency with our pricing structure.
              No hidden fees, just straightforward costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden border-green-700">
              <div className="bg-green-50 p-6 border-b border-green-700">
                <h4 className="text-xl font-semibold text-black">For Tenants</h4>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-black">Free</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Property search</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Save favorites</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Contact landlords</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Application submission</span>
                  </li>
                </ul>
                <Link to="/register" className="block mt-6">
                  <Button variant="outline" className="w-full border-green-700 text-green-700 hover:bg-green-50">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden shadow-lg border-green-700">
              <div className="bg-green-50 p-6 border-b border-green-700">
                <h4 className="text-xl font-semibold text-black">Landlord Basic</h4>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-black">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>List up to 5 properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Tenant screening tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Online rent collection</span>
                  </li>
                </ul>
                <Link to="/register" className="block mt-6">
                  <Button className="w-full bg-red-700 hover:bg-green-700 text-white">Get Started</Button>
                </Link>
              </div>
            </div>
            <div className="border rounded-lg overflow-hidden border-green-700">
              <div className="bg-green-50 p-6 border-b border-green-700">
                <h4 className="text-xl font-semibold text-black">Landlord Pro</h4>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-black">$59</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Unlimited property listings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Featured listings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-700 mr-2 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link to="/register" className="block mt-6">
                  <Button variant="outline" className="w-full border-green-700 text-green-700 hover:bg-green-50">Get Started</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Find quick answers below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">How do I list my property on Makao?</h4>
              <p className="text-gray-600">
                Sign up for a landlord account, navigate to your dashboard, and click on "Add Property." Fill in the details, upload photos, and your listing will be live after a quick review process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">Is there a fee for tenants to use Makao?</h4>
              <p className="text-gray-600">
                No, Makao is completely free for tenants to search for properties, save favorites, and contact landlords. Application fees may apply when submitting rental applications.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">How secure is the payment system?</h4>
              <p className="text-gray-600">
                We use bank-level encryption and secure payment processing. All transactions are protected and we never store your credit card details. Both tenants and landlords receive detailed receipts for each transaction.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">Can I cancel my landlord subscription?</h4>
              <p className="text-gray-600">
                Yes, you can cancel your subscription at any time from your account settings. Your subscription will remain active until the end of the current billing period.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black via-red-700 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-green-100 mb-8">
            Join Makao today and transform your property rental experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/properties">
              <Button variant="secondary" size="lg" className="bg-black text-white hover:bg-green-700">
                Browse Properties
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-green-700 hover:text-white">
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-green-700" />
                <h3 className="text-xl font-bold">Makao</h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect home.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/properties" className="text-gray-400 hover:text-green-400">Properties</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-green-400">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-green-400">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-green-400">Contact</Link></li>
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

export default Services;
