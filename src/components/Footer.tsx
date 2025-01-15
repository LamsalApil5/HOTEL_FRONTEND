import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="border-t z-50 bottom-0 left-0 w-full bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo Section */}
          <div className="flex items-start space-x-3 justify-center md:justify-start">
            <img
              src="/path-to-logo.png"
              alt="Paradise Guest House Logo"
              className="h-10 w-10 object-contain"
            />
            <span className="font-bold text-lg text-gray-700">
              Paradise Guest House
            </span>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center justify-start">
            <h3 className="text-black font-bold">Quick Link</h3>
            <Link to="/" className="hover:text-yellow-500">
              <Button
                variant="ghost"
                className="text-sm text-gray-600 hover:bg-yellow-50 rounded-lg"
              >
                Home
              </Button>
            </Link>
            <Link to="/rooms" className="hover:text-yellow-500">
              <Button
                variant="ghost"
                className="text-sm text-gray-600 hover:bg-yellow-50 rounded-lg"
              >
                Accommodation
              </Button>
            </Link>
            <Link to="/gallery" className="hover:text-yellow-500">
              <Button
                variant="ghost"
                className="text-sm text-gray-600 hover:bg-yellow-50 rounded-lg"
              >
                Gallery
              </Button>
            </Link>
            <Link to="/teams" className="hover:text-yellow-500">
              <Button
                variant="ghost"
                className="text-sm text-gray-600 hover:bg-yellow-50 rounded-lg"
              >
                Our Teams
              </Button>
            </Link>          
            <Link to="/contact" className="hover:text-yellow-500">
              <Button
                variant="ghost"
                className="text-sm text-gray-600 hover:bg-yellow-50 rounded-lg"
              >
                Contact
              </Button>
            </Link>
          </div>

          {/* About Us Section */}
          <div className="text-center md:text-right text-gray-500 text-sm">
            <h3 className="text-black font-bold">About Us</h3>
            <p>
              Experience the best hospitality in Marpha, Mustang. Perfect for
              travelers seeking comfort and breathtaking views.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 text-center text-sm text-gray-500">
          © 2023 Paradise Guest House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
