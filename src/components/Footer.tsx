import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import logo from "../image/Logo.png";

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
              <h3 className=" text-3xl text-gray-700 font-roboto-flex">
                Paradise Guest House
              </h3>
              <p className="font-normal text-sm">Marpha - Mustang - Nepal</p>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="flex flex-col items-center justify-start">
            <h3 className="text-black font-roboto-flex ">Quick Link</h3>
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

          {/* About Us Section */}
          <div className="text-center md:text-right text-gray-500 ">
            <motion.h3
              className="text-black font-roboto-flex text-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              About Us
            </motion.h3>
            <motion.p
              className="text-center md:text-right text-gray-500 text-sm font-lora"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            >
              Nestled in the heart of the Himalayas, our family-owned hotel has
              been a cherished retreat since 1979. Managed by the second
              generation, we offer a blend of authenticity and luxury.
              <br />
              Our farm-to-table philosophy ensures every meal is made with
              fresh, organic ingredients from our backyard. Guests rave about
              our Thakali dishes and Apple Crumble made with handpicked apples
              from our orchard. We’re also the only place in the village serving
              freshly brewed coffee.
              <br />
              Join us for a stay where tradition and hospitality meet, creating
              unforgettable memories.
            </motion.p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t pt-3 mt-6  text-center text-sm text-gray-500">
          © 2023 Paradise Guest House. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
