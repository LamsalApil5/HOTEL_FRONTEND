import { useState, useEffect } from "react";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface Data {
  products: Product[];
  heroImages: string[];
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
      image: "https://picsum.photos/200?random=1",
    },
    {
      id: 2,
      name: "Plum Wine",
      description:
        "Our locally produced plum wine is crafted using the finest plums and apples from our farms. This unique beverage offers a smooth, fruity taste with a hint of Marpha’s distinct terroir, perfect for those seeking something authentic and local.",
      image: "https://picsum.photos/200?random=2",
    },
    {
      id: 3,
      name: "Apple Brandy",
      description:
        "Distilled to perfection, our apple brandy is a traditional product that reflects the craftsmanship passed down through generations. With a rich, full-bodied flavor, it’s an ideal drink for connoisseurs looking to savor a true taste of Marpha’s apple-growing tradition.",
      image: "https://picsum.photos/200?random=3",
    },
    {
      id: 4,
      name: "Apple Crumble",
      description:
        "Made with fresh apples from our orchard, our Apple Crumble is a Dutch recipe loved by trekkers and locals alike. With a perfect blend of sweet, tart apples and a golden, buttery topping, it’s a comforting treat that’s become famous along the trail. A taste of Holland in the heart of Marpha!",
      image: "https://picsum.photos/200?random=4",
    },
  ],
  heroImages: [
    "https://picsum.photos/200?random=1",
    "https://picsum.photos/200?random=2",
    "https://picsum.photos/200?random=3",
  ],  
  history:
    "Marpha, known as the Apple Capital of Nepal, has a rich history of apple cultivation that dates back generations. The unique climate and soil composition in this region make it the ideal place for growing apples. The apples grown here are naturally sweeter, crisper, and juicier, and have become a symbol of Marpha's agricultural heritage.",
};

const OurLocalPage = () => {
  const [data, setData] = useState<Data | null>(null); // Type the state correctly
  const [bgImage, setBgImage] = useState(mockData.heroImages[0]);

  useEffect(() => {
    // Simulate fetching data with setTimeout (e.g., from an API)
    setTimeout(() => {
      setData(mockData);
    }, 1000);

    const changeBackground = () => {
      const nextImageIndex =
        (mockData.heroImages.indexOf(bgImage) + 1) % mockData.heroImages.length;
      setBgImage(mockData.heroImages[nextImageIndex]);
    };

    const interval = setInterval(changeBackground, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [bgImage]);

  if (!data) {
    return <div>Loading...</div>; // Show a loading message until the data is available
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div
        className="relative h-80 bg-cover bg-center sm:h-96 md:h-112 lg:h-128"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-roboto-flex text-center pt-24 sm:pt-32">
          Welcome to Paradise Guest House Local
        </h1>

        {/* Subcontent Section */}
        <p className="relative text-white text-lg sm:text-xl md:text-2xl font-roboto-flex text-center mt-4 sm:mt-6 px-6 sm:px-12">
          Explore locally crafted products and experience the beauty of our
          community at Paradise Guest House.
        </p>
      </div>
      {/* History of Marpha Section */}
      <div className="py-16 px-6 md:px-32">
        <h2 className="text-3xl text-center font-roboto-flex text-gray-800">
          The History of Marpha
        </h2>
        <p className="text-lg text-gray-700 mt-6 text-center font-lora">{data.history}</p>
      </div>
      
      {/* Products Section */}
      <div className="py-8 px-6 md:px-32">
      <h2 className="text-3xl text-center font-roboto-flex text-gray-800 pb-8">
          Our Marpha Special
        </h2>
        {data.products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col sm:flex-row items-center my-10 gap-6 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full sm:w-1/2 h-auto sm:h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="sm:w-1/2">
              <h2 className="text-xl sm:text-2xl font-roboto-flex text-gray-800">
                {product.name}
              </h2>
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