import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa"; // Import icons
import FAQ from "./Home/FAQ";
import SEO from "./SEO/SEO";
import contactSEO from "../image/SEO/ContactSEO.png";
const ContactPage = () => {
  return (
    <>
      <SEO
        title="Contact Paradise Guest House | Reach Us Anytime"
        description="Get in touch with Paradise Guest House for inquiries, bookings, or assistance. We're here to provide exceptional service in Marpha, Mustang, Nepal."
        keywords="Contact Paradise Guest House, reach Paradise Guest House, Marpha Mustang hotel contact, guest house bookings Nepal, family-friendly hotel inquiries, Mustang guest house support, contact mountain lodge Nepal, get in touch hotel Mustang, luxury guest house contact, travel assistance Nepal"
        author="Paradise Guest House contact Team"
        image={contactSEO}
        url="https://paradiseguesthouse.vercel.app/contact"
        twitterCardType="summary_large_image"
      />

      <div className="mx-1 lg:mx-36 my-8 lg:mt-0">
        <h1 className="text-4xl text-center text-gray-800 font-roboto-flex py-8">
          Contact Us
        </h1>

        <div className="flex items-center justify-center px-2 md:px-6 py-2 md:py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-7xl">
            {/* Contact Form Section */}
            <motion.form
              className="w-full max-w-md space-y-6 bg-white p-3 md:p-8 duration-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div>
                <Label htmlFor="name" className="text-lg text-gray-800">
                  Name
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  className="border-2 border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 h-15"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-lg text-gray-800">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  className="border-2 border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 h-15"
                />
              </div>

              <div>
                <Label htmlFor="message" className="text-lg text-gray-800">
                  Message
                </Label>
                <Textarea
                  id="message"
                  placeholder="Enter your message"
                  className="border-2 border-gray-300 p-3 rounded-md w-full focus:ring-2 focus:ring-blue-500 h-60"
                />
              </div>

              <Button
                type="submit"
                className="bg-blue-600 text-white py-3 px-6 rounded-lg w-full hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              >
                Send Message
              </Button>
            </motion.form>

            {/* Contact Details and Map Section */}
            <div className="w-full space-y-6 bg-white p-3 md:p-8 duration-300">
              {/* Social Media Links Section */}
              <div className="flex space-x-6 text-4xl">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/9779805839153"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-700"
                >
                  <FaWhatsapp />
                </a>

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  <FaFacebook />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/yourpage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-600 hover:text-pink-800"
                >
                  <FaInstagram />
                </a>
              </div>
              <div className="text-left">
                <p className="text-lg mb-2 text-gray-600">
                  <strong className="font-semibold">Hotline:</strong> +977
                  9842850833
                </p>
                <p className="text-lg mb-2 text-gray-600">
                  <strong className="font-semibold">Phone:</strong> +977
                  9805839153
                </p>
                <p className="text-lg mb-2 text-gray-600">
                  <strong className="font-semibold">Email:</strong>{" "}
                  riabista27@gmail.com
                </p>
                <p className="text-lg mb-4 text-gray-600">
                  <strong className="font-semibold">Address:</strong> Marpha,
                  Mustang, Nepal
                </p>
              </div>

              {/* Google Map Embed */}
              <div className="w-full h-96">
                <h2 className="text-2xl font-semibold text-center mb-4 text-gray-800">
                  Find Us on the Map
                </h2>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3361.274846657613!2d83.68390983751078!3d28.75204318198885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39be0f2f3b611bf5%3A0x8911078834ddc8!2sParadise%20Guest%20House%20and%20Coffee%20Shop%20-%20Hotel%20in%20Marpha%2CMustang!5e1!3m2!1sen!2snp!4v1735574855708!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <FAQ />
      </div>
    </>
  );
};

export default ContactPage;
