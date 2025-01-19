import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import { ThemeProvider } from "./components/theme-provider";
import Layout from "./components/layout";
import HomePage from "./pages/HomePage";
import RoomsPage from "./pages/RoomsPage";
import ContactPage from "./pages/ContactPage";
import logo from "./image/Logo.png"; // Add your logo image here
import GalleryPage from "./pages/GalleryPage";
import TeamPage from "./pages/TeamPage";
import OurLocalPage from "./pages/OurLocalPage";
import ScrollToTop from "./components/ScrollToTop";
import { FaArrowAltCircleUp, FaWhatsapp } from "react-icons/fa";

function App() {
  const UpdateTitleAndFavicon = () => {
    const location = useLocation();

    useEffect(() => {
      const titles: Record<string, string> = {
        "/": "Welcome to Paradise Guest House",
        "/rooms": "Our Rooms - Paradise Guest House",
        "/locals": "Our Local - Paradise Guest House",
        "/gallery": "Gallery - Paradise Guest House",
        "/teams": "Our Team - Paradise Guest House",
        "/contact": "Contact Us - Paradise Guest House",
      };

      document.title = titles[location.pathname] || "Paradise Guest House";

      const favicon =
        document.querySelector<HTMLLinkElement>("link[rel='icon']");
      if (favicon) {
        favicon.href = logo; // Set the favicon to the logo
      } else {
        const newFavicon = document.createElement("link");
        newFavicon.rel = "icon";
        newFavicon.href = logo;
        document.head.appendChild(newFavicon);
      }
    }, [location]);

    return null;
  };
  const handleWhatsApp = () => {
    const phoneNumber = "9779805839753"; // Replace with your WhatsApp number
    const message = "Hello! I would like to inquire about Paradise guesthouse."; // Customize your message
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappURL, "_blank");
  };
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <UpdateTitleAndFavicon />
        <ScrollToTop />
        <Layout>
          <div className="relative">
            {/* Container to keep both buttons at the bottom of the screen */}
            <div className="fixed bottom-4 left-0 right-0 z-50 flex justify-between items-center px-4">
              {/* Left Arrow Button */}
              <button
                className="p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700"
                onClick={() => window.scrollTo(0, 0)} // Scroll to the top
              >
                <FaArrowAltCircleUp size={24} />
              </button>

              {/* WhatsApp Button */}
              <button
                className="p-3 rounded-full bg-green-600 text-white shadow-lg hover:bg-green-700"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp size={24} />
              </button>
            </div>
          </div>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/locals" element={<OurLocalPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/teams" element={<TeamPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
