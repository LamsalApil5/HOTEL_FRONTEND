import FAQ from "./Home/FAQ";
import HeroSection from "./Home/HeroSection";
import Location from "./Home/HLocation";
import RestaurantSection from "./Home/RestaurantSection";
import RoomsSection from "./Home/RoomsSection";
import WhyChooseSection from "./Home/WhyChooseSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <Location />
      <RoomsSection />
      <WhyChooseSection />
      <RestaurantSection/>
      <FAQ/>
      {/* <GoogleReviews placeId="ChIJ9RthOy8PvjkRyN00iAcRiQA" apiKey="AIzaSyBNWSLLP2-ULLvQBGkzwb2WFy2-SiDZEgs" /> */}
    </div>
  );
};

export default HomePage;
