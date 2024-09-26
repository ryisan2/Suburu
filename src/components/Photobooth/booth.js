import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import './Booth.css';

function Booth() {
    useEffect(() => {
        AOS.init({
            duration: 3000,
            easing: 'ease-in-out', 
        });
    }, []);

    return (
        <div className="row">
            <div className="col-lg-4 col-md-12 mb-4 mb-lg-0">
                <img
                    src="/assets/crosstrek9.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    data-aos="flip-left"
                />
                <img
                    src="/assets/crosstrek8.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Wintry Mountain Landscape"
                    data-aos="flip-left"
                />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                    src="/assets/crosstrek3.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Mountains in the Clouds"
                    data-aos="flip-left"
                />
                <img
                    src="/assets/crosstrek11.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Boat on Calm Water"
                    data-aos="flip-left"
                />
            </div>

            <div className="col-lg-4 mb-4 mb-lg-0">
                <img
                    src="/assets/crosstrek2.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Waves at Sea"
                    data-aos="flip-left"
                />
                <img
                    src="/assets/crosstrek1.jpg"
                    className="w-100 shadow-1-strong rounded mb-4"
                    alt="Yosemite National Park"
                    data-aos="flip-left"
                />
            </div>
        </div>
    );
}

export default Booth;
