
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert('Your message has been sent! We will get back to you soon.');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header (desktop matches Index nav) */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Home className="h-8 w-8 text-green-700" />
              <h1 className="text-2xl font-bold text-black">Makao</h1>
              <span className="ml-2 px-2 py-1 rounded bg-green-700 text-white text-xs hidden sm:inline">Inspired by Kenya</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-700 hover:text-red-700">Home</Link>
              <Link to="/properties" className="text-gray-700 hover:text-red-700">Properties</Link>
              <Link to="/about" className="text-gray-700 hover:text-red-700">About</Link>
              <Link to="/services" className="text-gray-700 hover:text-red-700">Services</Link>
              <Link to="/contact" className="text-red-700 font-medium">Contact</Link>
              <Link to="/notifications" className="text-gray-700 hover:text-red-700">Notifications</Link>
            </nav>
            <div className="hidden md:flex items-center space-x-4">
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

      {/* Hero Section - update colors */}
      <section className="py-16 bg-gradient-to-r from-black via-red-700 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-green-100">
            Have questions or need assistance? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-green-100 rounded-full p-3 text-green-700">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Visit Us</h3>
                      <p className="text-gray-600">
                        Waiyaki Way,Westlands.<br/>
                        City,Nairobi<br/>
                        Kenya
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-green-100 rounded-full p-3 text-green-700">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Call Us</h3>
                      <p className="text-gray-600">
                        Main: (254) 723-4567<br/>
                        Support: (254) 787-6543
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="bg-green-100 rounded-full p-3 text-green-700">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Email Us</h3>
                      <p className="text-gray-600">
                        info@propertyhub.com<br/>
                        support@propertyhub.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-100 rounded-full p-3 text-green-700">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday-Friday: 9am-5pm<br/>
                        Saturday: 10am-3pm<br/>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              {/* Social/Follows keep subtle for theme */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-green-100 text-green-800 p-2 rounded-full hover:bg-green-200">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-green-100 text-green-800 p-2 rounded-full hover:bg-green-200">
                      <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"/>
                      </svg>
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* Contact Form */}
            <div className="md:col-span-2">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-6 text-green-900">Send us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-green-900 mb-1">
                          Your Name
                        </label>
                        <Input id="name" placeholder="John Mutiso" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-green-900 mb-1">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="john@example.com" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-green-900 mb-1">
                        Phone Number (Optional)
                      </label>
                      <Input id="phone" placeholder="+1 (254) 123-4567" />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-green-900 mb-1">
                        Subject
                      </label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-green-900 mb-1">
                        Message
                      </label>
                      <Textarea 
                        id="message"
                        placeholder="Type your message here..."
                        rows={6}
                      />
                    </div>
                    <Button type="submit" className="w-full bg-red-700 hover:bg-green-700 text-white">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
              {/* FAQ Quick Links */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold mb-4 text-green-900">Frequently Asked Questions</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    Looking for quick answers? Check out our FAQs.
                  </p>
                  <Link to="/services#faq">
                    <Button variant="link" className="flex items-center p-0 text-green-800">
                      View FAQs <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Map Section */}
      <section className="py-16 bg-gradient-to-r from-black via-red-700 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold mb-8 text-white">Our Location</h3>
          <div className="h-96 bg-green-50 rounded-lg">
            <div className="h-full flex items-center justify-center text-green-800">
              Interactive Map Placeholder
            </div>
          </div>
        </div>
      </section>
      {/* Footer matches Index (landing) */}
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

export default Contact;
