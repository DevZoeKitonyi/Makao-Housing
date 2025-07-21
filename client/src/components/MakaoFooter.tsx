
import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

const MakaoFooter = () => (
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
            <li>
              <Link to="/properties" className="text-gray-400 hover:text-green-400">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-400 hover:text-green-400">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-gray-400 hover:text-green-400">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-400 hover:text-green-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">For Users</h4>
          <ul className="space-y-2">
            <li>
              <Link to="/login" className="text-gray-400 hover:text-green-400">
                Login
              </Link>
            </li>
            <li>
              <Link to="/register" className="text-gray-400 hover:text-green-400">
                Register
              </Link>
            </li>
            <li>
              <Link to="/wishlist" className="text-gray-400 hover:text-green-400">
                Wishlist
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className="text-gray-400 hover:text-green-400">
                Dashboard
              </Link>
            </li>
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
);

export default MakaoFooter;
