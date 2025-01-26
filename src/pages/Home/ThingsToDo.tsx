import React from "react";
import { motion } from "framer-motion";

const ThingsToDo: React.FC = () => {
  return (
    <motion.div
      className="p-8 mt-8 md:p-12 md:mt-8"
      initial={{ opacity: 0 }} // Initial opacity is 0 (invisible)
      whileInView={{ opacity: 1 }} // Change opacity to 1 when the component is in view
      transition={{ duration: 0.5 }} // Duration of the fade-in effect
    >
      <h2 className="text-3xl text-center text-black mb-6 md:mb-12 font-roboto-flex">
        Things to Do in Marpha
      </h2>
      <ul className="list-none grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-gray-600 font-lora">
        {/* Item 1 */}
        <li className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-center text-yellow-600 font-roboto-flex text-lg ">
              <strong>Visit the Horticulture Apple Farm:</strong>
            </div>
            <p className="text-center">
              Established in 1966, this farm helped the local community in organized apple production. Marpha apples are synonymous with top-quality apples throughout the country.
            </p>
          </div>
        </li>

        {/* Item 2 */}
        <li className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-center text-lg text-yellow-600 font-roboto-flex">
              <strong>Take a Tour of the Distillery:</strong>
            </div>
            <p className="text-center">
              Tour local distilleries manufacturing apple brandy. Sample cider or dried apples, which are highly valued in cities.
            </p>
          </div>
        </li>

        {/* Item 3 */}
        
        <li className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-center text-lg  text-yellow-600 font-roboto-flex">
              <strong>Pay a Pilgrimage to the Monastery:</strong>
            </div>
            <p className="text-center">
              Experience spiritual calm during the "Daily Puja" at the samteling
              monastery and enjoy panoramic views of the Gandaki River valley.
            </p>
          </div>
        </li>

        {/* Item 4 */}
        <li className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-center text-lg  text-yellow-600 font-roboto-flex">
              <strong>Explore the Cultural Museum:</strong>
            </div>
            <p className="text-center">
              Visit the heritage museum dedicated to Japanese Zen monk Ekai Kawaguchi, preserving arts, artifacts, and his possessions.
            </p>
          </div>
        </li>

        {/* Item 5 */}
        <li className="flex flex-col items-center space-y-4">
          <div className="flex flex-col items-center space-y-2">
            <div className="text-center text-lg text-yellow-600 font-roboto-flex">
              <strong>Take a Side Trip to Marpha Hill:</strong>
            </div>
            <p className="text-center">
              Explore Mamti cave, visit gompas, and enjoy a spectacular view of the village from the hilltop.
            </p>
          </div>
        </li>
      </ul>
    </motion.div>
  );
};

export default ThingsToDo;
