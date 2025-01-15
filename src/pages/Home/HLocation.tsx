import { motion } from "framer-motion"; // Import motion from framer-motion

const Location = () => {
  return (
    <motion.div
      className="text-center md:text-left text-gray-500 mt-auto px-4 py-16"
      initial={{ opacity: 0 }}  // Initial state (hidden)
      animate={{ opacity: 1 }}   // Final state (fully visible)
      transition={{ duration: 0.8 }}  // Duration for the fade-in effect
    >
      <h3 className="text-black font-bold text-xl md:text-4xl mb-4 text-center  font-greatvibes">Location</h3>
      <p className="text-center md:text-left text-gray-600 text-sm md:text-base leading-relaxed px-16">
        Nestled in Nepal's Mustang district, Marpha sits at 2,650 meters above sea level. Known as the “Apple Capital of Nepal,” its orchards produce the finest apples and local products like cider and brandy. 
        Marpha is a key stop on the Annapurna Circuit and offers stunning views of the Nilgiri and Dhaulagiri peaks, making it a haven for trekkers. The village also blends rich Thakali culture with Tibetan Buddhist traditions, providing a peaceful retreat for those seeking adventure and tranquility.
      </p>
    </motion.div>
  );
};

export default Location;
