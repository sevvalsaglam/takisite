import { useState } from "react";

function Slider({ images, fullScreen = false }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`slider ${fullScreen ? "fullscreen-slider" : "standard-slider"}`}>
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt="Banner" className="slide-image" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Slider;
