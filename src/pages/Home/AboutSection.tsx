import { motion } from 'framer-motion';

const AboutSection = () => (
  <div className="container mx-auto px-4 py-16">
    <motion.section
      className="text-center mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-4xl font-bold mb-4">About Us</h2>
      <p className="text-gray-600 text-lg">
        Discover a sanctuary of sophistication and unparalleled service at our luxury hotel. Whether traveling for leisure or business, we promise an unforgettable experience.
      </p>
    </motion.section>
  </div>
);

export default AboutSection;
