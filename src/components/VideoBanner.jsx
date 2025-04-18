import React from "react";
import "../assets/video-banner.css";

function VideoBanner({ src = "src/assets/images/banner-video.mp4" }) {
  return (
    <section className="video-banner-container">
      <video
        className="video-banner"
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="video-overlay">
        {/* İsteğe bağlı içerik buraya gelebilir */}
      </div>
    </section>
  );
}

export default VideoBanner;
