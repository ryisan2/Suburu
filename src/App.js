import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/navigation/nav';
import Hero from './components/Hero/Hero';
import Info from './components/Info/info';
import Gallery from './components/Gallery/Gallery';
import Booth from './components/Photobooth/booth';
import Footer from './components/Footer/Footer';
import 'aos/dist/aos.css'; 
import AOS from 'aos';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Easing function
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <div>
      <Gallery />
      <Nav />
      <Hero />
      <Info />
      < Booth/>
      <Footer/>
    </div>
  );
}

export default App;
