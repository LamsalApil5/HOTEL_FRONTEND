import { motion } from "framer-motion";
import imgHotel from "../../image/Hero.jpg";
import "../../assets/style/fonts.css";

const HeroSection = () => {
  // const handleBookNow = () => {
  //   const phoneNumber = "9779805839753"; // Replace with your WhatsApp number
  //   const message = "Hello! I would like to inquire about Paradise guesthouse."; // Customize your message
  //   const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  //   // Open WhatsApp in a new tab
  //   window.open(whatsappURL, "_blank");
  // };

  return (
    <div
      className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
      style={{ backgroundImage: `url(${imgHotel})` }}
    >
      {/* Brown shadow overlay */}
      <div className="absolute inset-0 bg-gray-50 opacity-50 hover:bg-none"></div>

      {/* Left Section: Text Overlay */}
      <div className="relative px-4 lg:px-36 w-full">
        {/* <motion.h1
          className="text-5xl lg:text-6xl font-roboto-flex mb-6 text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to
        </motion.h1> */}
        <motion.h1
          className="text-5xl lg:text-6xl font-roboto-flex mb-2 md:mb-6 font-semibold text-wrap text-brown"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Paradise 
        </motion.h1>
        <motion.h1
          className="text-5xl lg:text-5xl font-roboto-flex mb-2 md:mb-6 font-semibold text-wrap text-brown"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Guesthouse & Coffee Shop
        </motion.h1>
        <motion.p
          className="text-lg lg:text-2xl mb-4 font-lora font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Marpha, Mustang, Nepal
        </motion.p>
        {/* <motion.p
          className="text-sm lg:text-xl italic mb-8 font-lora"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          One of the highest-rated staycations on the trail.
        </motion.p> */}

        {/* <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="shadow-lg bg-yellow-50 hover:bg-yellow-100 text-black font-roboto-flex"
            onClick={handleBookNow}
          >
            Book Now
          </Button>
        </motion.div> */}
      </div>
    </div>
  );
};

export default HeroSection;
