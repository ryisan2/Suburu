import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import './Hero.css'; // Ensure this is imported

function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    AOS.init(); // Initialize AOS
    const timer = setTimeout(() => {
      setIsVisible(true); // Set visibility to true after a delay
    }, 300); // Adjust the delay as needed
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <div className={`hero-container ${isVisible ? 'fade-in' : 'fade-out'}`}>
      <div className="hero-text" data-aos="fade-up"> {/* AOS attribute for fade-up effect */}
        <h1 className="experience">Experience the 2024 Subaru Crosstrek</h1>
        <p>
          Experience the newly redesigned 2024 Subaru Crosstrek, where rugged capability meets everyday comfort.
        </p>
        <h3>
            Starting at $25,195 MSRP
        </h3>
      </div>
      <div className="hero-image">
        <img
          src="/assets/crosstrek2.png" // Ensure this path is correct
          alt="2024 Subaru Crosstrek"
          draggable="false"
        />
      </div>
    </div>
  );
}

export default Hero;
