import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import {
  FaBed,
  FaMountain,
  FaUtensils,
  FaSmile,
  FaMapMarkerAlt,
} from "react-icons/fa"; // Import icons

const WhyChooseSection: React.FC = () => {
  return (
    <motion.div
      className="bg-yellow-50 p-8 mt-8 md:p-12 md:mt-8 shadow-md"
      initial={{ opacity: 0 }} // Initial opacity is 0 (invisible)
      whileInView={{ opacity: 1 }} // Change opacity to 1 when the component is in view
      transition={{ duration: 0.5 }} // Duration of the fade-in effect
    >
      <h2 className="text-3xl text-center text-black mb-6 font-roboto-flex">
        Why Choose Paradise Guest House
      </h2>
      <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 font-lora">
        {/* Item 1 */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaBed className="text-yellow-500 text-7xl" />
          <div>
            <strong>Comfortable Rooms:</strong>
            <p>
              Our rooms are designed for maximum comfort and relaxation,
              equipped with modern amenities.
            </p>
          </div>
        </li>

        {/* Scenic Views */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaMountain className="text-yellow-500 text-7xl" />
          <div>
            <strong>Scenic Views:</strong>
            <p>
              Enjoy stunning views of the surrounding nature, offering a
              peaceful environment for your stay.
            </p>
          </div>
        </li>

        {/* Delicious Food */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaUtensils className="text-yellow-500 text-7xl" />
          <div>
            <strong>Delicious Food:</strong>
            <p>
              Savor mouth-watering meals from our restaurant, serving local and
              international dishes.
            </p>
          </div>
        </li>

        {/* Friendly Staff */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaSmile className="text-yellow-500 text-7xl" />
          <div>
            <strong>Friendly Staff:</strong>
            <p>
              Our dedicated and friendly staff is here to make your stay as
              comfortable as possible.
            </p>
          </div>
        </li>

        {/* Prime Location */}
        <li className="flex flex-col items-center text-center space-y-4">
          <FaMapMarkerAlt className="text-yellow-500 text-7xl" />
          <div>
            <strong>Prime Location:</strong>
            <p>
              Situated in a serene area yet close to local attractions,
              shopping, and entertainment.
            </p>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default WhyChooseSection;
