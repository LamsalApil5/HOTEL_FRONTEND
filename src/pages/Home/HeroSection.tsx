import { motion } from "framer-motion";
import imgHotel from "../../image/Hero.png";
import "../../assets/style/fonts.css";

const HeroSection = () => {
 
  
  return (
    <div className="relative h-screen flex flex-col lg:flex-row items-center justify-between px-0 lg:px-36">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-4 mb-8 lg:mb-0 order-2 lg:order-1">
        <div className="relative z-10 mt-8 md:mt-0">
          <motion.h1
            className="text-5xl lg:text-6xl font-roboto-flex mb-6 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Welcome to
          </motion.h1>
          <motion.h1
            className="text-5xl lg:text-6xl font-roboto-flex mb-6 text-black"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Paradise Guest House
          </motion.h1>
          <motion.p
            className="text-lg lg:text-2xl mb-4 font-lora text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Marpha - Mustang - Nepal
          </motion.p>
         
        </div>
      </div>
      <div
        className="w-full lg:w-1/2 flex items-center justify-center h-full bg-cover bg-center order-1 lg:order-2 pt-8"
        style={{ backgroundImage: `url(${imgHotel})` }}
      ></div>
    </div>
  );
};

export default HeroSection;
