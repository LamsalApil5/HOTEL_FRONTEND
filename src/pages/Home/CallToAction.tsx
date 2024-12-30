import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const CallToAction = () => (
  <div className="bg-gray-800 py-16">
    <div className="text-center text-white">
      <motion.h2
        className="text-3xl lg:text-4xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Plan Your Stay Today
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
          Contact Us
        </Button>
      </motion.div>
    </div>
  </div>
);

export default CallToAction;
