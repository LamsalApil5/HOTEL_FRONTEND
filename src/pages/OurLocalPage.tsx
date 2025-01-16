import { useState, useEffect } from "react";

const products = [
  {
    id: 1,
    name: "Apple Juice",
    description:
      "Made from the freshest apples grown in our orchards, our apple juice is a refreshing treat with no added preservatives. It’s the pure taste of Marpha’s best apples.",
    image: "https://picsum.photos/200?random=1", // Replace with your local image path
  },
  {
    id: 2,
    name: "Plum Wine",
    description:
      "Our locally produced plum wine is crafted using the finest plums and apples from our farms. This smooth, fruity beverage offers a unique taste with a hint of Marpha’s terroir.",
    image: "https://picsum.photos/200?random=2", // Replace with your local image path
  },
  {
    id: 3,
    name: "Apple Brandy",
    description:
      "Distilled to perfection, our apple brandy reflects the craftsmanship passed down through generations. It’s a full-bodied drink that brings out the true taste of Marpha’s apple-growing tradition.",
    image: "https://picsum.photos/200?random=3", // Replace with your local image path
  },
  {
    id: 4,
    name: "Apple Cider",
    description:
      "Our apple cider is fermented to create a crisp, tangy beverage with the perfect balance of sweetness and acidity. It offers a refreshing effervescence, bringing out the natural flavors of Marpha apples.",
    image: "https://picsum.photos/200?random=4", // Replace with your local image path
  },
];

const heroImages = [
  "https://picsum.photos/200?random=1",
  "https://picsum.photos/200?random=2",
  "https://picsum.photos/200?random=3",
];

const OurLocalPage = () => {
  const [bgImage, setBgImage] = useState(heroImages[0]);

  useEffect(() => {
    const changeBackground = () => {
      const nextImageIndex =
        (heroImages.indexOf(bgImage) + 1) % heroImages.length;
      setBgImage(heroImages[nextImageIndex]);
    };

    const interval = setInterval(changeBackground, 5000); // Change every 5 seconds
    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [bgImage]);

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

      {/* Products Section */}
      <div className="py-8 px-6 md:px-32">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={`flex flex-col sm:flex-row items-center my-10 ${
              index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
            }`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full sm:w-48 h-auto sm:h-48 object-cover rounded-lg shadow-lg"
            />
            <div className="mt-4 sm:mt-0 sm:ml-6 flex-1">
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
