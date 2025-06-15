
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/properties", label: "Properties" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
  { to: "/notifications", label: "Notifications" }, // Notifications link
];

const MakaoNav = () => {
  const location = useLocation();

  return (
    <header className="bg-white shadow-sm border-b hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Home className="h-8 w-8 text-black" />
            <h1 className="text-2xl font-bold text-black">Makao</h1>
            <span className="ml-2 px-2 py-1 rounded bg-green-700 text-white text-xs hidden sm:inline">
              Inspired by Kenya
            </span>
          </div>
          <nav className="flex items-center space-x-8">
            {navLinks.map((nav) => (
              <Link
                key={nav.to}
                to={nav.to}
                className={`text-gray-700 hover:text-red-700 ${
                  location.pathname === nav.to
                    ? "text-green-700 font-bold"
                    : ""
                }`}
              >
                {nav.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-green-700 text-green-700 hover:bg-green-50">
                Login
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-red-700 hover:bg-green-700 text-white">
                Register
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default MakaoNav;
