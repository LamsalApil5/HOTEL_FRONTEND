import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "../image/Logo.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import google from "../image/Footer/Google.png";
import booking from "../image/Footer/Booking.png";
import tripAdvisor from "../image/Footer/TripAdvisor.png";
const Footer = () => {
  return (
    <>
      <footer className="z-50 bottom-0 left-0 w-full bg-yellow-50">
        <div className="container mx-auto py-6 px-8 lg:px-36">
          {/* Footer Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Contact Link Section */}
            <div className="text-Left md:text-left text-gray-500">
              <motion.h3
                className="text-black font-roboto-flex text-md mb-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Contact Us
              </motion.h3>
              <p>
                <a
                  href="mailto:riabista27@gmail.com"
                  className="hover:underline text-gray-600"
                >
                  riabista27@gmail.com
                </a>
              </p>
              <p>
                <a
                  href="https://maps.app.goo.gl/m838CYzZaq7Xy2DK7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-gray-600"
                >
                  Marpha, Mustang, Nepal
                </a>
              </p>
              <p>
                <a
                  href="tel:+9779805839753"
                  className="hover:underline text-gray-600"
                >
                  +977 9805839753
                </a>
                ,{" "}
                <a
                  href="tel:+9779842850833"
                  className="hover:underline text-gray-600"
                >
                  9842850833
                </a>
              </p>
              <motion.h3
                className="text-black font-roboto-flex text-md mt-4 mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                Follow Us
              </motion.h3>
              <div className="flex justify-start md:justify-start space-x-4 ">
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

            {/* Quick Links Section */}
            <div className="flex flex-col items-start justify-start">
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

            {/* Logo Section */}
            <div className="flex flex-col items-start md:items-start">
              <div className="flex items-start space-x-3 justify-start md:justify-start">
                <img
                  src={logo}
                  alt="Paradise Guest House Logo"
                  className="h-24 w-24 flex justify-center items-center object-contain"
                />
                <div>
                  <h3 className="text-3xl text-gray-700 font-roboto-flex">
                    Paradise Guest House & Coffee Shop
                  </h3>
                  <p className="font-normal text-sm">
                    Marpha - Mustang - Nepal
                  </p>
                </div>
              </div>

              {/* Logos Section */}
              <div className="flex justify-end items-end gap-6 mt-6">
                <a
                  href="https://www.google.com/maps/place/Paradise+Guest+House+and+Coffee+Shop+-+Hotel+in+Marpha,Mustang/@28.7520432,83.6861221,17z/data=!4m8!3m7!1s0x39be0f2f3b611bf5:0x8911078834ddc8!8m2!3d28.7520432!4d83.6861221!9m1!1b1!16s%2Fg%2F11c1w5h6g1?entry=ttu&g_ep=EgoyMDI1MDExNS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={google}
                    alt="Google Logo"
                    className="h-12 w-12 object-contain"
                  />
                </a>
                <a
                  href="https://www.booking.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={booking}
                    alt="Booking.com Logo"
                    className="h-12 w-12 object-contain"
                  />
                </a>
                <a
                  href="https://www.tripadvisor.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={tripAdvisor}
                    alt="TripAdvisor Logo"
                    className="h-12 w-12 object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
          {/* Copyright */}
        </div>
        <div className="border-t pt-3 mt-6 mb-2 text-center text-sm text-gray-500 bg-white">
          © 2023 Paradise Guest House. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
