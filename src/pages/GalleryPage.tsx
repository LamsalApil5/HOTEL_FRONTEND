import { useState } from "react";
import image1 from "../image/Deluxe Suite.jpg"
import image2 from "../image/Presidential Suite.jpg"
import image3 from "../image/Standard Room.jpg"
import image4 from "../image/Hero.png"
interface Image {
  id: number;
  url: string;
}

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const images: Image[] = [
    { id: 1, url: image1 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    { id: 4, url: image4 },
    { id: 2, url: image2 },
    { id: 3, url: image3 },
    
  ];

  const openPopup = (image: Image) => setSelectedImage(image);
  const closePopup = () => setSelectedImage(null);

  return (
    <div className="mx-1 lg:mx-36 h-screen">
      <h1 className="text-center text-5xl my-4 font-roboto-flex py-8">Image Gallery</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {images.map((image) => (
          <div key={image.id} className="cursor-pointer">
            <img
              src={image.url}
              alt={`Gallery Image ${image.id}`}
              className="w-full h-auto object-cover rounded-lg"
              onClick={() => openPopup(image)}
            />
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            <img
              src={selectedImage.url}
              alt={`Selected Image ${selectedImage.id}`}
              className="max-w-full max-h-screen rounded-lg"
            />
            <button
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
