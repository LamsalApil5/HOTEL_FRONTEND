import guestHouseImage from "../../image/Accommodations/Accomodation2.jpg";

const AboutAccommodations = () => {
  return (
    <div>
      {/* Single Image with Description */}
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Image */}
        <div className="w-full">
          <img
            src={guestHouseImage}
            alt="Guest House"
            className="w-full h-[200px] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Description */}
        <div className="text-center text-lg text-gray-800 px-4 lg:px-32">
          <h2 className="text-3xl font-roboto-flex mb-4 ld:mb-6">Paradise Guesthouse</h2>
          <p className="text-md font-lora">
            Our Guest House offers a cozy and comfortable stay for all guests. Located in the heart of the city, it provides easy access to local attractions, shopping, and dining. With spacious rooms and modern amenities, you’ll feel right at home. Whether you’re visiting for a short stay or an extended vacation, our Guest House is the perfect choice for relaxation and convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutAccommodations;
