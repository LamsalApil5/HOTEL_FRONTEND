import HeroSection from "./Home/HeroSection";
import Location from "./Home/HLocation";
import RestaurantSection from "./Home/RestaurantSection";
import RoomsSection from "./Home/RoomsSection";
import WhyChooseSection from "./Home/WhyChooseSection";
import SEO from "./SEO/SEO";
import logo from "../image/Logo.png"
const HomePage = () => {
  return (
    <>
      <SEO
        title="Welcome to Paradise Guest House"
        description="Discover Paradise Guest House, your perfect getaway destination offering luxurious rooms, breathtaking views, and exceptional hospitality."
        keywords="Paradise Guest House, luxury guest house, vacation, holiday stay, accommodations"
        author="Paradise Guest House"
        image={logo} // 
        url="https://paradiseguesthouse.vercel.app"
        twitterCardType="summary_large_image"
      />
      <div className="min-h-screen">
        <HeroSection />
        <Location />
        <RoomsSection />
        <WhyChooseSection />
        <RestaurantSection />
        {/* <GoogleReviews placeId="ChIJ9RthOy8PvjkRyN00iAcRiQA" apiKey="AIzaSyBNWSLLP2-ULLvQBGkzwb2WFy2-SiDZEgs" /> */}
      </div>
    </>
  );
};

export default HomePage;
