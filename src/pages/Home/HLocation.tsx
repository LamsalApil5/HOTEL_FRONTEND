import { motion } from "framer-motion"; // Import motion from framer-motion
import map from "../../image/map.png";

const Location = () => {
  return (
    <motion.div
      className="text-center md:text-center text-gray-500 mt-auto px-6 md:px-16 py-10 md:py-16"
      initial={{ opacity: 0 }} // Initial state (hidden)
      animate={{ opacity: 1 }} // Final state (fully visible)
      transition={{ duration: 0.8 }} // Duration for the fade-in effect
    >
      <h3 className="text-black text-2xl md:text-4xl mb-6 font-roboto-flex">
        Location
      </h3>
      {/* Animate the image */}
      <motion.img
        src={map}
        alt="Map of Marpha"
        className="mx-auto w-full max-w-xs sm:max-w-72 md:max-w-md lg:max-w-sm h-auto"
        initial={{ scale: 0.8, opacity: 0 }} // Start smaller and hidden
        animate={{ scale: 1, opacity: 1 }} // Grow to full size and become visible
        transition={{
          type: "spring", // Adds a spring animation
          stiffness: 80, // Adjusts the spring stiffness
          damping: 10, // Adjusts the damping effect
          duration: 0.8, // Time to complete the animation
        }}
      />
      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-lora mt-6">
        Nestled in Nepal's Mustang district, Marpha sits at 2,650 meters above sea level. Known as the “Apple Capital of Nepal,” its orchards produce the finest apples and local products like cider and brandy.
        Marpha is a key stop on the Annapurna Circuit and offers stunning views of the Nilgiri and Dhaulagiri peaks, making it a haven for trekkers. The village also blends rich Thakali culture with Tibetan Buddhist traditions, providing a peaceful retreat for those seeking adventure and tranquility.
      </p>
    </motion.div>
  );
};

export default Location;
