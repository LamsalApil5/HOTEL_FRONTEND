import { motion } from "framer-motion";
import imgHotel from "../../image/Hero.jpg";
import "../../assets/style/fonts.css";
import flagImage from "../../image/prayer-flags.png";

const HeroSection = () => {
  return (
    <>
      <div className="relative flex flex-col lg:flex-row items-center justify-between">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center text-center px-4 mb-8 lg:mb-0 order-2 lg:order-1">
          {/* Mobile Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20 lg:hidden -z-10"
            style={{
              backgroundImage: `url(${flagImage})`,
            }}
          ></div>
          <div className="relative mt-16 md:mt-0">
            <motion.h1
              className="text-5xl lg:text-6xl font-roboto-flex mb-6 text-black"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Paradise Guest House & Coffee Shop
            </motion.h1>
            <motion.p
              className="text-lg lg:text-2xl mb-4 font-lora text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Marpha - Mustang - Nepal
            </motion.p>
            <motion.p
              className="text-sm lg:text-lg mt-4 lg:mt-8 font-lora text-gray-700"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Nestled in the heart of the majestic Himalayas, our family-owned
              hotel has been a cherished retreat since 1979. Now managed by the
              second generation, we take pride in blending authenticity with
              luxury to offer a truly memorable stay.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 flex items-center justify-center h-full bg-cover bg-center order-1 lg:order-2">
          <img
            src={imgHotel}
            className="rounded-lg shadow-xl shadow-gray-500/50"
            alt="Hotel"
          />
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20 -z-10"
        style={{
          backgroundImage: `url(${flagImage})`,
        }}
      ></div>
    </>
  );
};

export default HeroSection;
