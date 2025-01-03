import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { ThemeProvider } from './components/theme-provider';
import Layout from './components/layout';
import HomePage from './pages/HomePage';
import RoomsPage from './pages/RoomsPage';
import ContactPage from './pages/ContactPage';
import logo from './image/Hotel.png'; // Add your logo image here
import GalleryPage from './pages/GalleryPage';

function App() {
  const UpdateTitleAndFavicon = () => {
    const location = useLocation();

    useEffect(() => {
      const titles: Record<string, string> = {
        '/': 'Welcome to Paradise Guest House',
        '/rooms': 'Our Rooms - Paradise Guest House',
        '/gallery': 'Gallery - Paradise Guest House',
        '/contact': 'Contact Us - Paradise Guest House',
      };

      document.title = titles[location.pathname] || 'Paradise Guest House';

      const favicon = document.querySelector<HTMLLinkElement>("link[rel='icon']");
      if (favicon) {
        favicon.href = logo; // Set the favicon to the logo
      } else {
        const newFavicon = document.createElement('link');
        newFavicon.rel = 'icon';
        newFavicon.href = logo;
        document.head.appendChild(newFavicon);
      }
    }, [location]);

    return null;
  };

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <UpdateTitleAndFavicon />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/rooms" element={<RoomsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
