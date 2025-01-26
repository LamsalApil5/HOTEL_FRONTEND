import { useState } from "react";
import image1 from "../image/Gallery/image1.jpg";
import image2 from "../image/Gallery/image2.jpg";
import image3 from "../image/Gallery/image3.jpg";
import image5 from "../image/Gallery/image5.jpeg";
import image6 from "../image/Gallery/image6.jpeg";
import image7 from "../image/Gallery/image7.jpeg";
import image8 from "../image/Gallery/image8.jpeg";
import image9 from "../image/Gallery/image9.jpg";
import image10 from "../image/Gallery/image10.jpg";
import image11 from "../image/Gallery/Image11.jpg";
import image12 from "../image/Gallery/image12.jpg";
import image13 from "../image/Gallery/image13.jpg";
import image14 from "../image/Gallery/image14.jpg";
import image15 from "../image/Gallery/image15.mp4";
import image16 from "../image/Gallery/image16.jpg";

interface Media {
  id: number;
  url: string;
  type: "image" | "video";
}

const GalleryPage = () => {
  const [selectedMedia, setSelectedMedia] = useState<Media | null>(null);

  const media: Media[] = [
    { id: 1, url: image1, type: "image" },
    { id: 2, url: image2, type: "image" },
    { id: 3, url: image3, type: "image" },
    { id: 5, url: image5, type: "image" },
    { id: 6, url: image6, type: "image" },
    { id: 7, url: image7, type: "image" },
    { id: 8, url: image8, type: "image" },
    { id: 9, url: image9, type: "image" },
    { id: 10, url: image10, type: "image" },
    { id: 11, url: image11, type: "image" },
    { id: 12, url: image12, type: "image" },
    { id: 13, url: image13, type: "image" },
    { id: 14, url: image14, type: "image" },
    { id: 15, url: image15, type: "video" }, // Video
    { id: 16, url: image16, type: "image" },
  ];

  const openPopup = (media: Media) => setSelectedMedia(media);
  const closePopup = () => setSelectedMedia(null);

  return (
    <div className="mx-1 lg:mx-36 ">
      <h1 className="text-center text-5xl my-4 font-roboto-flex py-8">
        Image Gallery
      </h1>

      {/* Image/Video Grid */}
      {/* Image/Video Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {media.map((item) => (
          <div
            key={item.id}
            className="cursor-pointer relative w-full h-0 pb-[100%] rounded-lg overflow-hidden"
          >
            {item.type === "image" ? (
              <img
                src={item.url}
                alt={`Gallery Media ${item.id}`}
                className="absolute top-0 left-0 w-full h-full object-cover"
                onClick={() => openPopup(item)}
              />
            ) : (
              <video
                src={item.url}
                className="absolute top-0 left-0 w-full h-full object-cover"
                onClick={() => openPopup(item)}
                controls
              />
            )}
          </div>
        ))}
      </div>

      {/* Popup Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="relative">
            {selectedMedia.type === "image" ? (
              <img
                src={selectedMedia.url}
                alt={`Selected Media ${selectedMedia.id}`}
                className="max-w-full max-h-screen rounded-lg"
              />
            ) : (
              <video
                src={selectedMedia.url}
                className="max-w-full max-h-screen rounded-lg"
                controls
              />
            )}
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
