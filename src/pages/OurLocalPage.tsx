import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import AppleHist from "../image/History.png";
import AppleJuice from "../image/OurLocal/AppleJuice.jpg";
import AppleBrandy from "../image/OurLocal/AppleBrandy.jpg";
import AppleCrumble from "../image/OurLocal/AppleCrumble.jpg";
import PlumWine from "../image/OurLocal/PlumWine.jpg";
import ApricotJuice from "../image/OurLocal/AprictJuice.jpg";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Data {
  products: Product[];
  history: string;
}
// Sample data simulating what might come from an API or database
const mockData: Data = {
  products: [
    {
      id: 1,
      name: "Apple Juice",
      description:
        "Made from the freshest apples grown in our orchards, our apple juice is a refreshing treat for any time of the day. It’s naturally sweet, with no added preservatives, offering a pure taste of Marpha’s best apples.",
      image: AppleJuice,
    },
    {
      id: 2,
      name: "Plum Wine",
      description:
        "Our locally produced plum wine is crafted using the finest plums and apples from our farms. This unique beverage offers a smooth, fruity taste with a hint of Marpha’s distinct terroir, perfect for those seeking something authentic and local.",
      image: PlumWine,
    },
    {
      id: 3,
      name: "Apple Brandy",
      description:
        "Distilled to perfection, our apple brandy is a traditional product that reflects the craftsmanship passed down through generations. With a rich, full-bodied flavor, it’s an ideal drink for connoisseurs looking to savor a true taste of Marpha’s apple-growing tradition.",
      image: AppleBrandy,
    },
    {
      id: 4,
      name: "Apple Crumble",
      description:
        "Made with fresh apples from our orchard, our Apple Crumble is a Dutch recipe loved by trekkers and locals alike. With a perfect blend of sweet, tart apples and a golden, buttery topping, it’s a comforting treat that’s become famous along the trail. A taste of Holland in the heart of Marpha!",
      image: AppleCrumble,
    },
    {
      id: 5,
      name: "Apricot Juice",
      description:
        "Sourced from the finest apricots grown in our orchard, our Apricot Juice is a refreshing and naturally sweet drink. Packed with vitamins and antioxidants, it’s the perfect drink to quench your thirst after a long trek. The rich, fruity flavor of the apricots is balanced with a hint of tanginess, offering a rejuvenating experience in every sip. A local favorite that captures the essence of Marpha’s bountiful harvest!",
      image: ApricotJuice,
    },
  ],

  history:
    "Marpha, known as the Apple Capital of Nepal, has a rich history of apple cultivation that dates back generations. The unique climate and soil composition in this region make it the ideal place for growing apples. The apples grown here are naturally sweeter, crisper, and juicier, and have become a symbol of Marpha's agricultural heritage.",
};

const OurLocalPage = () => {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    // Simulate fetching data with setTimeout (e.g., from an API)

    setData(mockData);
  }, []);

  if (!data) {
    return <div>Loading...</div>; // Show a loading message until the data is available
  }

  return (
    <div className="bg-gray-50">
      {/* History of Marpha Section */}
      <div className="py-16 px-6 md:px-32">
        <motion.img
          src={AppleHist}
          alt="Map of Marpha"
          className="mx-auto w-full max-w-lg sm:max-w-sm md:max-w-lg lg:max-w-lg h-auto"
          initial={{ scale: 0.8, opacity: 0 }} // Start smaller and hidden
          animate={{ scale: 1, opacity: 1 }} // Grow to full size and become visible
          transition={{
            type: "spring", // Adds a spring animation
            stiffness: 80, // Adjusts the spring stiffness
            damping: 10, // Adjusts the damping effect
            duration: 0.8, // Time to complete the animation
          }}
        />
        <h2 className="text-3xl text-center font-roboto-flex text-gray-800">
          The History of Marpha
        </h2>
        <p className="text-lg text-gray-700 mt-6 text-center font-lora">
          {data.history}
        </p>
      </div>

      {/* Products Section */}
      <div className="py-8 px-6 md:px-32">
        <h2 className="text-3xl text-center font-roboto-flex text-gray-800 pb-8">
          Our Marpha Special
        </h2>
        {data.products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col sm:flex-row items-center my-10 gap-8 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full sm:w-1/2 h-64 object-contain bg-none"
            />
            <div className="sm:w-1/2 text-center sm:text-left">
              {" "}
              {/* Center text for mobile */}
              <h3 className="text-2xl font-roboto-flex text-gray-800">
                {product.name}
              </h3>
              <p className="text-sm font-lora text-gray-600 mt-2">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurLocalPage;
