import { BedDouble, Coffee, Wifi, Utensils } from "lucide-react";
import { motion } from "framer-motion";
import Guesthouse from "../../image/Accommodations/Accomodation2.jpg";
import coffeeShop from "../../image/Hero.jpeg";

const Services = () => {
  return (
    <motion.section
      id="services"
      className="py-16 bg-gradient-to-r flex justify-center items-center"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-roboto-flex mb-12">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-12 justify-items-center">
          {/* Guesthouse Section */}
          <motion.div
            className="bg-white text-black p-8 shadow-sm transform transition-transform hover:scale-105 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-1/2 mr-6">
              <img
                src={Guesthouse}
                alt="Guesthouse"
                className="rounded-lg w-full h-40 object-cover"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
                Guesthouse
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-start gap-3 text-sm">
                  <BedDouble className="h-4 w-4 text-purple-500" />
                  Comfortable rooms
                </li>
                <li className="flex items-center justify-start gap-3 text-sm">
                  <Wifi className="h-4 w-4 text-purple-500" />
                  Free Wi-Fi
                </li>
                <li className="flex items-center justify-start gap-3 text-sm">
                  <Utensils className="h-4 w-4 text-purple-500" />
                  Breakfast included
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Coffee Shop Section */}
          <motion.div
            className="bg-white text-black p-8 shadow-sm transform transition-transform hover:scale-105 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-1/2 mr-6">
              <img
                src={coffeeShop}
                alt="Coffee Shop"
                className="rounded-lg w-full h-40 object-cover"
              />
            </div>
            <div className="w-1/2">
              <h3 className="text-2xl font-semibold mb-6 flex items-center justify-center">
                Coffee Shop
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center justify-start gap-3 text-sm">
                  <Coffee className="h-4 w-4 text-purple-500" />
                  Specialty coffee
                </li>
                <li className="flex items-center justify-start gap-3 text-sm">
                  <Utensils className="h-4 w-4 text-purple-500" />
                  Fresh pastries
                </li>
                <li className="flex items-center justify-start gap-3 text-sm">
                  <Wifi className="h-4 w-4 text-purple-500" />
                  Cozy seating area
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
