import { motion } from 'framer-motion';
import StandardRoom from '../../image/Standard Room.jpg'
import DeluxeRoom from '../../image/Deluxe Suite.jpg'
import PersidentialRoom from '../../image/Presidential Suite.jpg'
const RoomsSection = () => (
  <div className="container mx-auto px-4 py-16">
    <motion.section
      className="mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-5xl font-bold text-center mb-24 font-greatvibes">Our Rooms</h2>
      <div className="space-y-16">
        {[
          { id: 1, img: DeluxeRoom, title: 'Deluxe Suite', desc: 'Experience luxury and comfort in our deluxe suite.' },
          { id: 2, img: PersidentialRoom, title: 'Presidential Suite', desc: 'The ultimate luxury for the most discerning guests.' },
          { id: 3, img: StandardRoom, title: 'Standard Room', desc: 'Cozy and well-equipped for a perfect stay.' },
        ].map((room, index) => (
          <motion.div
            key={room.id}
            className="bg-white overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={`flex flex-col lg:flex-row ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
              {/* Image */}
              <div className="w-full">
                <img
                  src={room.img}
                  alt={room.title}
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Room Details */}
              <div className="p-4 flex flex-col justify-center lg:w-1/2">
                <h3 className="text-xl font-bold mb-2">{room.title}</h3>
                <p className="text-gray-600">{room.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  </div>
);

export default RoomsSection;
