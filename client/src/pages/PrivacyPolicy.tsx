import React from 'react';
import { Home } from 'lucide-react';
import { Link } from 'react-router-dom';

import { AnimationWrapper } from '@/components/AnimationWrapper';

export const PrivacyPolicy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <AnimationWrapper>
        <div className="prose max-w-none">
          <h1 className="text-3xl font-bold text-green-700 mb-6">Privacy Policy</h1>
          
          <p className="mb-4">
            Makao Properties Limited ("Makao", "we", "us", or "our") values your Personal Data and we are committed 
            to protecting your privacy whenever you interact with us. This privacy policy ("Policy") applies to your 
            use of our website and services.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Data controller</h2>
          <p className="mb-4">
            Makao Properties Limited is the data controller and responsible for your personal data. If you have any 
            questions about this Policy please send an email to <a href="mailto:privacy@makao.co.ke" className="text-red-700">privacy@makao.co.ke</a>
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">The Personal Data that we collect</h2>
          <p className="mb-4">
            We collect Personal Data that you provide to us when you create an account, search for properties, 
            contact agents, or subscribe to our newsletters. We may also automatically collect technical information 
            when you visit our website such as your IP address and browsing behavior.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">What Purpose do we use your Personal Data?</h2>
          <p className="mb-4">
            We process your Personal Data to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Provide and improve our services</li>
            <li>Communicate with you about properties</li>
            <li>Respond to your inquiries</li>
            <li>Comply with legal obligations</li>
            <li>Prevent fraud and ensure security</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Who do we share your Personal Data with?</h2>
          <p className="mb-4">
            We may share your information with:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Property agents and landlords when you express interest in a property</li>
            <li>Service providers who assist with our operations</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners in case of mergers or acquisitions</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Security of your Personal Data</h2>
          <p className="mb-4">
            We implement appropriate technical and organizational measures to protect your personal data against 
            unauthorized access, alteration, or destruction.
          </p>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Your Rights</h2>
          <p className="mb-4">
            You have the right to:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal data</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to processing of your data</li>
            <li>Withdraw consent at any time</li>
          </ul>

          <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-4">Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or wish to exercise your rights, please contact us at:
          </p>
          <address className="not-italic mb-4">
            Makao Properties Limited<br />
            P.O. Box 1234, Nairobi, Kenya<br />
            Email: <a href="mailto:privacy@makao.co.ke" className="text-red-700">privacy@makao.co.ke</a><br />
            Phone: +254 712 345678
          </address>

          <p className="text-sm text-gray-600 mt-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
        </div>
      </AnimationWrapper>
    </div>
  );
};




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
                <li><Link to="/privacy-policy" className="text-gray-400 hover:text-green-400">Privacy Policy</Link></li>
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
            <p>&copy; 2025 Makao. All rights reserved.</p>
          </div>
        </div>
      </footer>