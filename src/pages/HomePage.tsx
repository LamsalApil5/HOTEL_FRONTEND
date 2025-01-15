import HeroSection from "./Home/HeroSection";
import RoomsSection from "./Home/RoomsSection";
import WhyChooseSection from "./Home/WhyChooseSection";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyChooseSection/>
      <RoomsSection />
      {/* <GoogleReviews placeId="ChIJ9RthOy8PvjkRyN00iAcRiQA" apiKey="AIzaSyBNWSLLP2-ULLvQBGkzwb2WFy2-SiDZEgs" /> */}
    </div>
  );
};

export default HomePage;
