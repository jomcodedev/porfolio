import React, { useState, useEffect } from "react";

const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const storedTheme = localStorage.getItem("theme");

  useEffect(() => {
    generateStars();

    const handleResize = () => {
      generateStars();
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerHeight * window.innerWidth) / 10000
    );
    const newStars = [];
    for (let starsCount = 0; starsCount < numberOfStars; starsCount++) {
      newStars.push({
        id: starsCount,
        size: Math.random() * 3 + 1,
        position: {
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }
    setStars(newStars);
  };

  return (
    <div className="fixed inset-0 overflow:hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.position.x}%`,
            top: `${star.position.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default StarBackground;
