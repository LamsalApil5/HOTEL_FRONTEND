import React from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const WhyChooseSection: React.FC = () => {
  return (
    <motion.div
      className="bg-yellow-50 p-8 mt-8 md:p-12 md:mt-8 shadow-md"
      initial={{ opacity: 0 }} // Initial opacity is 0 (invisible)
      whileInView={{ opacity: 1 }} // Change opacity to 1 when the component is in view
      transition={{ duration: 0.5 }} // Duration of the fade-in effect
    >
      <h2 className="text-3xl text-center text-black mb-6  font-roboto-flex">
        Why Choose to Paradise Guest House
      </h2>
      <p className="text-lg text-gray-700 mb-4 font-lora">
        Welcome to Paradise Guest House, your ideal escape to tranquility and relaxation. We are committed to
        providing you with the best hospitality and experience to make your stay unforgettable.
      </p>
      <ul className="list-disc list-inside space-y-2 text-gray-600 font-lora">
        <li><strong>Comfortable Rooms:</strong> Our rooms are designed for maximum comfort and relaxation, equipped with modern amenities.</li>
        <li><strong>Scenic Views:</strong> Enjoy stunning views of the surrounding nature, offering a peaceful environment for your stay.</li>
        <li><strong>Delicious Food:</strong> Savor mouth-watering meals from our restaurant, serving local and international dishes.</li>
        <li><strong>Friendly Staff:</strong> Our dedicated and friendly staff is here to make your stay as comfortable as possible.</li>
        <li><strong>Prime Location:</strong> Situated in a serene area yet close to local attractions, shopping, and entertainment.</li>
      </ul>
    </motion.div>
  );
};

export default WhyChooseSection;
