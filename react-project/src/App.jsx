import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/Button";
export default function App() {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log(images);
  useEffect(() => {
    async function fetchData() {
      const res = await fetch("https://week-6-api.vercel.app/api/images");
      const data = await res.json();
      setImages(data);
    }
    fetchData();
  }, []);

  function handleThumbnailClick(index) {
    setCurrentIndex(index);
  }

  const nextImage = () => {
    setCurrentIndex((current) => (current + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((current) => (current - 1 + images.length) % images.length);
  };
  return (
    <div className="gallery">
      <div className="large-image-container">
        {images.length > 0 && (
          <img
            src={images[currentIndex].url}
            alt="Large view"
            className="large-image"
          />
        )}
      </div>
      <Button info=">" id="next" onClick={nextImage} />
      <Button info="<" id="prev" onClick={prevImage} />
      <div className="thumbnail">
        {images.map((image, index) => (
          <img
            src={image.url}
            alt={`Thumbnail ${index}`}
            onClick={() => handleThumbnailClick(index)}
            className="thumbnail-image"
          />
        ))}
      </div>
    </div>
  );
}
