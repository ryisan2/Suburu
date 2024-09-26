import React from 'react'; // Ensure this line is present
import './nav.css'; // Import the CSS file for styling

function Nav() {
  const handleClick = (e) => {
    e.preventDefault(); // Prevent the default anchor behavior
  };

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-light navbar-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          <img
          className='Suburu'
            id="Suburu"
            src="/assets/Suburu.png"  // Corrected path
            alt="Suburu"
            draggable="false"
            height="30"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link mx-2" href="#" onClick={handleClick}>
                <i className="fas fa-solid fa-paint-roller "></i>Design
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#gallery" onClick={handleClick}>
                <i className="fas fa-solid fa-camera-retro"></i> Gallery
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="#" onClick={handleClick}>
                <i className="fas fa-regular fa-credit-card"></i> Order
              </a>
            </li>
            <li className="nav-item ms-3">
              <a className="btn btn-black btn-rounded" href="#!" onClick={handleClick}>My Account</a>
            </li>
              </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;