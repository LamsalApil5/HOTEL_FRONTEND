import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import {
  FaBed,
  FaMountain,
  FaShoppingBasket,
  FaCoffee,
  FaPaw,
} from "react-icons/fa"; // Import icons, including FaCoffee

const WhyChooseSection: React.FC = () => {
  return (
    <motion.div
      className=" p-8 mt-8 md:p-12 md:mt-8"
      initial={{ opacity: 0 }} // Initial opacity is 0 (invisible)
      whileInView={{ opacity: 1 }} // Change opacity to 1 when the component is in view
      transition={{ duration: 0.5 }} // Duration of the fade-in effect
    >
      <h2 className="text-3xl text-center text-black mb-6 md:mb-12 font-roboto-flex ">
        Why Choose Us
      </h2>
      <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 font-lora">
        {/* Cozy Rooms */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaBed className="text-yellow-600 text-7xl" />
          <div>
            <strong className="font-roboto-flex text-lg font-semibold">
              Cozy Rooms:
            </strong>
            <p className="font-lora">
              Traditionally crafted, comfortable rooms with attached bathrooms,
              hot showers, and complimentary Wi-Fi to ensure a relaxing stay.
            </p>
          </div>
        </li>

        {/* Farm-to-Table Experience */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaShoppingBasket className="text-yellow-600 text-7xl" />
          <div>
            <strong className="font-roboto-flex text-lg font-semibold">
              Farm-to-Table Experience
            </strong>
            <p className="font-lora">
              Savor dishes crafted with love using fresh ingredients sourced
              directly from our own farm.
            </p>
          </div>
        </li>

        {/* Authentic Marpha Experience */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaMountain className="text-yellow-600 text-7xl" />
          <div>
            <strong className="font-roboto-flex text-lg font-semibold">
              Authentic Marpha Experience
            </strong>
            <p className="font-lora">
              Immerse yourself in the unique culture and traditions of Marpha
              village.
            </p>
          </div>
        </li>

        {/* Local Organic Coffee */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaCoffee className="text-yellow-600 text-7xl" />
          <div>
            <strong className="font-roboto-flex text-lg font-semibold">
              Freshly Brewed Coffee
            </strong>
            <p className="font-lora">
              Indulge in freshly brewed coffee at our café made with the finest
              beans. Perfect for coffee lovers
            </p>
          </div>
        </li>
        {/* Pet Friendly */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaPaw className="text-yellow-600 text-7xl" />
          <div>
            <strong className="font-roboto-flex text-lg font-semibold">
              Pet Friendly
            </strong>
            <p className="font-lora">
              Enjoy a pet-friendly stay with us, where your furry friends are
              welcomed with open arms.
            </p>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default WhyChooseSection;
