import HeroSection from "./Home/HeroSection";
import Location from "./Home/HLocation";
import WhyChooseSection from "./Home/WhyChooseSection";
import SEO from "./SEO/SEO";
import logo from "../image/Logo.png";
import { TestimonialSection } from "./Home/TestimonialSection";
import ThingsToDo from "./Home/ThingsToDo";
import { DelicaciesSection } from "./Home/DelicaciesSection";
const HomePage = () => {
  return (
    <>
      <SEO
        title="Welcome to Paradise Guest House"
        description="Discover Paradise Guest House, your perfect getaway destination offering luxurious rooms, breathtaking views, and exceptional hospitality."
        keywords="Paradise Guest House, luxury guest house, vacation Nepal, holiday in Nepal, accommodations, Marpha Guest House, hotel Mustang, guest hotel, family hotel, chilling hotel, Nepal mountain hotel, Himalayan guest house, Mustang mountain stay, cozy hotel in Nepal, boutique mountain hotel, trekking accommodations Nepal, scenic hotel Nepal, eco-friendly mountain lodge, adventure stay Mustang, mountain retreat Nepal, nature hotel Nepal"
        author="Paradise Guest House"
        image={logo}
        url="https://paradiseguesthouse.vercel.app"
        twitterCardType="summary_large_image"
      />
      <div className="min-h-screen px-0 lg:px-36">
        <HeroSection />
        <Location />
        <WhyChooseSection />
        <ThingsToDo/>
        <DelicaciesSection/>
        <TestimonialSection />
      </div>
    </>
  );
};

export default HomePage;
