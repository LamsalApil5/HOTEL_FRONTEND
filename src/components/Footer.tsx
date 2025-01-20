import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "../image/Logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="z-50 bottom-0 left-0 w-full bg-white">
      <div className="container mx-auto px-4 py-6">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-3 justify-center md:justify-start">
            <img
              src={logo}
              alt="Paradise Guest House Logo"
              className="h-24 w-24 flex justify-center items-center object-contain"
            />
            <div>
              <h3 className="text-3xl text-gray-700 font-roboto-flex">
                Paradise Guest House
              </h3>
              <p className="font-normal text-sm">Marpha - Mustang - Nepal</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center justify-start">
            <h3 className="text-black font-roboto-flex">Quick Link</h3>
            <Link to="/" className="hover:text-yellow-500">
              <Button
                variant="ghost"
                className="text-sm text-gray-600 hover:bg-yellow-50 rounded-lg"
              >
                Home
              </Button>
            </Link>
            <Link to="/locals" className="hover:text-yellow-500">
              <Button
                variant="ghost"
                className="text-sm text-gray-600 hover:bg-yellow-50 rounded-lg"
              >
                Our Local
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

          {/* Contact Link Section */}
          <div className="text-center md:text-right text-gray-500">
            <motion.h3
              className="text-black font-roboto-flex text-md mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Contact Us
            </motion.h3>
            <p>
              <a href="mailto:riabista27@gmail.com">
                riabista27@gmail.com
              </a>
            </p>
            <p>Marpha, Mustang, Nepal</p>
            <p>+977 9805839753, 9842850833</p>
              <motion.h3
                className="text-blue-600 font-roboto-flex text-md mt-4 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Follow Us
              </motion.h3>
            <div className="flex justify-center md:justify-end space-x-4 ">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800"
              >
                <FaFacebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-3 mt-6 text-center text-sm text-gray-500">
          © 2023 Paradise Guest House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
