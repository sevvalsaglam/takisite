import { useState } from "react";

const images = [
  "/assets/banner1.jpg",
  "/assets/banner2.jpg",
  "/assets/banner3.jpg",
];

function Slider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <button className="prev" onClick={prevSlide}>❮</button>
      <img src={images[currentIndex]} alt="Banner" className="slide-image" />
      <button className="next" onClick={nextSlide}>❯</button>
    </div>
  );
}

export default Slider;
