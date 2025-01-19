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
      <h2 className="text-2xl md:text-4xl text-center mb-10 font-roboto-flex">
        Our Accommodations
      </h2>
      <div className="space-y-16">
        {[
          {
            id: 1,
            img: OurHouse,
            title: "Traditional Courtyard Guesthouse",
            desc: "This image captures the serene and rustic charm of a traditional guesthouse centered around an open-air courtyard. The building is designed with two levels of balconies painted in a vibrant blue, which contrasts beautifully with the crisp whitewashed walls. The balconies, supported by sturdy wooden beams, provide access to individual rooms marked by bright blue doors and windows. Stone steps lead down into the courtyard, framed by red wooden railings that add a pop of color to the overall design. The courtyard is open to the sky, allowing natural light to flood the space, creating a bright and airy atmosphere. The roof of the building is constructed with layers of flat stones, adding a unique and practical touch to the architecture, likely to endure local weather conditions. A black water storage tank is placed in the corner, suggesting provisions for essential utilities. The guesthouse exudes a sense of warmth and simplicity, reflecting traditional craftsmanship and offering an inviting space for travelers. This design, blending functionality and cultural authenticity, makes it an ideal retreat for those seeking a peaceful and unique stay.",
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
              <div className="w-full lg:w-1/2">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Room Details */}
              <div className="w-full lg:w-1/2 px-4 flex flex-col justify-start">
                <h3 className="text-xl font-bold mb-2 font-roboto-flex">
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
