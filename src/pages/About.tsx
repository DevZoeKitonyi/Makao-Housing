
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Users, Heart, Shield, Star } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      bio: 'With over 15 years of experience in real estate, John founded PropertyHub to make property rental simple and transparent.',
      image: '/placeholder.svg'
    },
    {
      name: 'Emily Johnson',
      role: 'Chief Operations Officer',
      bio: 'Emily ensures all operations run smoothly and our platform delivers excellent service to both tenants and landlords.',
      image: '/placeholder.svg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Technology',
      bio: 'Michael leads our tech team, building innovative solutions to make property searches and management more efficient.',
      image: '/placeholder.svg'
    }
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
              <Link to="/about" className="text-blue-600 font-medium">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">Blog</Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link to="/login">
                <button className="px-4 py-2 rounded border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            About PropertyHub
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-600">
            We're on a mission to simplify property rental and management,
            connecting landlords with the perfect tenants and helping people
            find their dream homes.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  PropertyHub was founded in 2018 with a simple idea: make property rental and management easier for everyone involved.
                </p>
                <p>
                  Our founder, John Smith, experienced the frustrations of both renting and leasing properties firsthand. The lengthy paperwork, difficulty in finding reliable information, and lack of transparency in the process led him to create a solution.
                </p>
                <p>
                  Today, PropertyHub serves thousands of tenants and landlords across the country, with a dedicated team working to improve the rental experience every day.
                </p>
              </div>
            </div>
            <div className="bg-gray-200 h-96 rounded-lg">
              {/* Image placeholder */}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Heart className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Trust & Transparency</h4>
              <p className="text-gray-600">
                We believe in full transparency in all transactions and communications between landlords and tenants.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-4">User-Focused</h4>
              <p className="text-gray-600">
                Every feature we build starts with understanding the real needs of landlords and tenants.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h4 className="text-xl font-semibold mb-4">Security & Reliability</h4>
              <p className="text-gray-600">
                We maintain strict security standards and ensure our platform is reliable for all users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Meet Our Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-40 h-40 rounded-full overflow-hidden mx-auto mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                <p className="text-blue-600 mb-4">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "PropertyHub made finding my new apartment so easy. The filters helped me narrow down exactly what I was looking for, and I was able to schedule viewings directly through the platform."
              </p>
              <div>
                <p className="font-semibold">Sarah Johnson</p>
                <p className="text-sm text-gray-500">Tenant</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "As a landlord with multiple properties, PropertyHub has simplified my management process significantly. The dashboard gives me all the information I need at a glance."
              </p>
              <div>
                <p className="font-semibold">Robert Chang</p>
                <p className="text-sm text-gray-500">Landlord</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? 'fill-current' : ''}`} />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                "The payment system is secure and hassle-free. I love being able to pay my rent online and having a record of all transactions. It's made my life much easier."
              </p>
              <div>
                <p className="font-semibold">Amanda Rodriguez</p>
                <p className="text-sm text-gray-500">Tenant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl font-bold mb-6">Ready to Find Your Perfect Property?</h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied users and simplify your property search today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/properties">
              <button className="px-8 py-3 rounded bg-white text-blue-600 hover:bg-gray-100 font-semibold">
                Browse Properties
              </button>
            </Link>
            <Link to="/register">
              <button className="px-8 py-3 rounded border-2 border-white text-white hover:bg-blue-700 font-semibold">
                Create an Account
              </button>
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

export default About;
