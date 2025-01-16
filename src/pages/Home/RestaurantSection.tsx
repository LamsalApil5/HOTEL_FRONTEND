import { motion } from "framer-motion";

const RestaurantSection = () => {
  return (
    <motion.div
      className="restaurant-section bg-white px-6 md:px-16 py-10 md:py-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title Section */}
      <h3 className="text-black text-2xl md:text-4xl mb-10 text-center font-roboto-flex">
        Restaurant
      </h3>

      {/* Content Section */}
      <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 text-gray-500">
        {/* Image Section */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 h-auto relative group">
          <img
            src="https://picsum.photos/200?random=1"
            alt="Restaurant"
            className="rounded-lg shadow-lg w-full h-auto object-cover transition-transform transform group-hover:scale-105 group-hover:shadow-2xl group-hover:opacity-70"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left h-full flex flex-col justify-between">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6 font-lora">
            Indulge in a delightful culinary experience at our in-house
            restaurant. Savor traditional Nepali Thakali dishes, freshly
            prepared with locally sourced ingredients. From our famous apple
            cider to hearty meals that reflect the rich flavors of the Mustang
            region, every dish is crafted to perfection.
          </p>
          <button
            onClick={() => window.open("https://wa.me/9779805839753", "_blank")}
            className="bg-yellow-50 hover:bg-yellow-100 text-black px-6 py-3 rounded-lg text-md md:text-base flex items-center justify-center"
          >
            Contact for Reservations
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default RestaurantSection;
