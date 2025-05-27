
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Users, FileImage, Briefcase, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      icon: <Search className="h-8 w-8 text-blue-600" />,
      title: 'Property Search',
      description: 'Find your ideal property with our advanced search features. Filter by location, price, amenities, and more to discover properties that match your criteria.',
      link: '/properties'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: 'Tenant & Landlord Matching',
      description: 'Our platform connects quality tenants with trusted landlords, ensuring perfect matches and hassle-free rental experiences.',
      link: '/register'
    },
    {
      icon: <FileImage className="h-8 w-8 text-blue-600" />,
      title: 'Property Management',
      description: 'Landlords can easily manage their properties, track inquiries, and communicate with tenants all in one centralized dashboard.',
      link: '/dashboard'
    },
    {
      icon: <Briefcase className="h-8 w-8 text-blue-600" />,
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
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">PropertyHub</h1>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-blue-600">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-blue-600">Properties</Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
              <Link to="/services" className="text-blue-600 font-medium">Services</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
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
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-2 bg-blue-50 rounded-full">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="outline" className="flex items-center">
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
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Tenants</h3>
              <ul className="space-y-4">
                {forTenants.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/register">
                  <Button className="flex items-center">
                    Sign up as a Tenant
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">For Landlords</h3>
              <ul className="space-y-4">
                {forLandlords.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/register">
                  <Button className="flex items-center">
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Transparent Pricing</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in complete transparency with our pricing structure.
              No hidden fees, just straightforward costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-6 border-b">
                <h4 className="text-xl font-semibold text-gray-900">For Tenants</h4>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">Free</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Property search</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Save favorites</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Contact landlords</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Application submission</span>
                  </li>
                </ul>
                <Link to="/register" className="block mt-6">
                  <Button variant="outline" className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden shadow-lg border-blue-200">
              <div className="bg-blue-50 p-6 border-b border-blue-200">
                <h4 className="text-xl font-semibold text-gray-900">Landlord Basic</h4>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>List up to 5 properties</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Basic analytics</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Tenant screening tools</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Online rent collection</span>
                  </li>
                </ul>
                <Link to="/register" className="block mt-6">
                  <Button className="w-full">Get Started</Button>
                </Link>
              </div>
            </div>

            <div className="border rounded-lg overflow-hidden">
              <div className="bg-gray-50 p-6 border-b">
                <h4 className="text-xl font-semibold text-gray-900">Landlord Pro</h4>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-gray-900">$59</span>
                  <span className="text-gray-600">/month</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Unlimited property listings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Advanced analytics & reporting</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Featured listings</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Priority support</span>
                  </li>
                </ul>
                <Link to="/register" className="block mt-6">
                  <Button variant="outline" className="w-full">Get Started</Button>
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our services? Find quick answers below.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">How do I list my property on PropertyHub?</h4>
              <p className="text-gray-600">
                Sign up for a landlord account, navigate to your dashboard, and click on "Add Property." Fill in the details, upload photos, and your listing will be live after a quick review process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold mb-2">Is there a fee for tenants to use PropertyHub?</h4>
              <p className="text-gray-600">
                No, PropertyHub is completely free for tenants to search for properties, save favorites, and contact landlords. Application fees may apply when submitting rental applications.
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Get Started?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Join PropertyHub today and transform your property rental experience.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/properties">
              <Button variant="secondary" size="lg">
                Browse Properties
              </Button>
            </Link>
            <Link to="/register">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-blue-700 hover:text-white">
                Create an Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Home className="h-8 w-8 text-blue-400" />
                <h3 className="text-xl font-bold">PropertyHub</h3>
              </div>
              <p className="text-gray-400">
                Your trusted partner in finding the perfect home.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/properties" className="text-gray-400 hover:text-white">Properties</Link></li>
                <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                <li><Link to="/services" className="text-gray-400 hover:text-white">Services</Link></li>
                <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">For Users</h4>
              <ul className="space-y-2">
                <li><Link to="/login" className="text-gray-400 hover:text-white">Login</Link></li>
                <li><Link to="/register" className="text-gray-400 hover:text-white">Register</Link></li>
                <li><Link to="/wishlist" className="text-gray-400 hover:text-white">Wishlist</Link></li>
                <li><Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>123 Real Estate St.</p>
                <p>City, State 12345</p>
                <p>Phone: (555) 123-4567</p>
                <p>Email: info@propertyhub.com</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 PropertyHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Services;
