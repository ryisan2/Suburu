import React from 'react';
import './Info.css';

function Info() {
    return (
      <div className="info-container"> 
        <div className="information-area">
          {infoData.map((info, index) => (
            <div className="info-item" key={index}>
              <img
                src={info.image}
                alt={`Crosstrek ${index + 4}`}
                className="info-image"
                data-aos={info.aos}
                data-aos-duration="5000"
              />
              <div className="info-text">{info.text}</div>
            </div>
          ))}
        </div>
      </div>
    );
}

// Ensure the last object in infoData has a text property
const infoData = [
    {
      image: '/assets/crosstrek4.jpg',
      text: 'Upgrade your driving experience with our cutting-edge Apple CarPlay system—seamlessly integrating your iPhone for hands-free calls, navigation, music, and more, all from your car\'s dashboard.',
      aos: 'fade-right', // AOS animation
    },
    {
      image: '/assets/crosstrek5.jpg',
      text: 'Experience the ultimate comfort with spacious seating for five—our car offers ample legroom and headspace, ensuring every ride is as relaxing as it is roomy.',
      aos: 'fade-left', // AOS animation
    },
    {
      image: '/assets/crosstrek7.jpg',
      text: 'Turn your backseats into a rugged truck bed for all of your rugged stuff and camping equipment!', // Added missing text property
    },
    // ... existing code ...
];

export default Info;