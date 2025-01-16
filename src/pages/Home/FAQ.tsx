import { motion } from 'framer-motion'; // Import framer-motion

const FAQ = () => {
  const faqData = [
    {
      question: "Where is your hotel located?",
      answer: "Our hotel is located in Marpha, Mustang, just a 4-minute walk from the parking area."
    },
    {
      question: "What are your check-in and check-out times?",
      answer: "Check-in is at 2:00 PM, and check-out is at 12:00 PM."
    },
    {
      question: "Do you offer parking facilities?",
      answer: "Yes, we offer parking for four-wheelers located 4 minutes away from the hotel, and parking for two-wheelers is available in front of the hotel."
    },
    {
      question: "Is breakfast included in the room price?",
      answer: "Our room prices do not include breakfast, but we offer a delicious farm-to-table dining experience at our hotel."
    },
    {
      question: "Do you have Wi-Fi access in the hotel?",
      answer: "Yes, we provide Wi-Fi access to all our guests throughout the hotel."
    },
    {
      question: "What kind of hot water system do you use?",
      answer: "We use solar hot water to ensure an eco-friendly and comfortable stay for our guests."
    },
    {
      question: "What type of rooms do you have?",
      answer: "All our rooms are designed to accommodate up to 3 guests with an attached bathroom for your convenience."
    },
    {
      question: "Are pets allowed at the hotel?",
      answer: "Yes, we are a pet-friendly hotel and welcome your furry friends to stay with you."
    },
    {
      question: "What are the nearby attractions?",
      answer: "Nearby attractions include the beautiful Dhumba Lake, the sacred Muktinath Temple, and many scenic trekking routes in the region."
    },
    {
      question: "Do you offer emergency services like cab calling or laundry?",
      answer: "Yes, we offer emergency cab services and laundry services to make your stay as comfortable as possible."
    }
  ];

  return (
    <div className="faq-container py-8 px-6 md:px-32 bg-white">
      <h2 className="text-3xl text-center font-roboto-flex text-gray-800">
        Frequently Asked Questions
      </h2>
      <div className="faq-list mt-8">
        {faqData.map((faq, index) => (
          <motion.div
            key={index}
            className="faq-item mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }} // Delay for staggered appearance
          >
            <h3 className="text-xl font-semibold text-gray-800">{faq.question}</h3>
            <p className="text-gray-700 mt-2">{faq.answer}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
