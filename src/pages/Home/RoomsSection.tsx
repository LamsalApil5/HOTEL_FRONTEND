import { motion } from "framer-motion";
import OurHouse from "../../image/Accommodations/Accmodarion1.jpg";

const RoomsSection = () => (
  <div className="container mx-auto px-4 py-16">
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl md:text-4xl text-center mb-0 md:mb-10 font-roboto-flex">
        Our Accommodations
      </h2>
      <div className="space-y-16">
        {[
          {
            id: 1,
            img: OurHouse,
            title: "Traditional Courtyard Guesthouse",
            desc: "This image captures the rustic charm of a traditional guesthouse with vibrant blue balconies, whitewashed walls, and bright blue doors. Stone steps lead to an open-air courtyard framed by red wooden railings. The flat-stone roof adds durability, and the space exudes warmth and simplicity, making it an inviting retreat for travelers.",
          },          
        ].map((room, index) => (
          <motion.div
            key={room.id}
            className="bg-white overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div
              className={`flex flex-col lg:flex-row ${
                index % 2 === 0 ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 ">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Room Details */}
              <div className="w-full lg:w-1/2 px-4 py-8 md:py-0 flex flex-col justify-start">
                <h3 className="text-xl mb-2 font-roboto-flex">
                  {room.title}
                </h3>
                <p className="text-gray-600 font-lora">{room.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </div>
);

export default RoomsSection;
