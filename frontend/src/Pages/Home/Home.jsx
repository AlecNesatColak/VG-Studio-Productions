import React, { useState, useEffect } from 'react';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400",
    "https://via.placeholder.com/800x400",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  return (
    <div>
      <div>Home</div>
      <div id="carousel" className="carousel">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item ${
              index === currentIndex ? "active" : ""
            }`}
          >
            <img src={image} alt={`Sample ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
