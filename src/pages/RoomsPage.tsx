import { motion } from 'framer-motion';
import RoomImage from '../image/Accommodations/doubleBedRoom2.jpg'; 
import { FaShower, FaWifi, FaTshirt, FaSoap, FaToiletPaper, FaSolarPanel } from 'react-icons/fa';
import AboutAccommodations from './Home/AboutAccommodations';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { Button } from '@/components/ui/button';

const RoomsPage = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className='mb-16'>
      <AboutAccommodations />
      <div className="container mx-auto px-4 py-8 flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-4xl mb-16 font-roboto-flex">Our Room</h2>

        {/* Room Details Section */}
        <motion.div
          className="w-full max-w-5xl bg-white overflow-hidden mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center">
            {/* Image */}
            <div className="w-2/4 h-2/4">
              <img
                src={RoomImage}
                alt="Triple Occupancy Room"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            {/* Room Details */}
            <div className="p-8 text-center">
              <h3 className="text-3xl mb-4 font-roboto-flex">Triple Occupancy Room</h3>
              <p className="text-gray-600 font-lora">
                Our room is designed for triple occupancy, featuring cozy warm wooden interiors that offer the perfect blend of comfort and elegance.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Amenities Section */}
        <motion.div
          className="w-full max-w-5xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl text-center font-bold mb-8">Room Amenities</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center mb-8">
            <div className="flex flex-col items-center">
              <FaSolarPanel className="text-4xl mb-2 text-green-500" />
              <span className="text-gray-600">Solar Panel Hot Water</span>
            </div>
            <div className="flex flex-col items-center">
              <FaWifi className="text-4xl mb-2 text-blue-500" />
              <span className="text-gray-600">Wi-Fi</span>
            </div>
            <div className="flex flex-col items-center">
              <FaTshirt className="text-4xl mb-2 text-purple-500" />
              <span className="text-gray-600">Hangers</span>
            </div>
            <div className="flex flex-col items-center">
              <FaSoap className="text-4xl mb-2 text-yellow-500" />
              <span className="text-gray-600">Soap</span>
            </div>
            <div className="flex flex-col items-center">
              <FaToiletPaper className="text-4xl mb-2 text-gray-500" />
              <span className="text-gray-600">Toilet Paper</span>
            </div>
            <div className="flex flex-col items-center">
              <FaShower className="text-4xl mb-2 text-teal-500" />
              <span className="text-gray-600">Private Bathroom</span>
            </div>
          </div>
        </motion.div>

        {/* Booking Button */}
          {/* Booking Button */}
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Button
            size="lg"
            className="shadow-lg bg-yellow-50 hover:bg-yellow-100 text-black"
            onClick={() => navigate('/contact')}
          >
            Book Now
          </Button>
        </motion.div>
        
      </div>
    </div>
  );
};

export default RoomsPage;
