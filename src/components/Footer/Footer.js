import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; // Import your CSS file for styling

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-links">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/about">Our Company</a></li>
                        <li><a href="/corporate-responsibility">Corporate Responsibility</a></li>
                        <li><a href="/company-news">Company News</a></li>
                        <li><a href="/sitemap">Site Map</a></li>
                        <li><a href="/accessibility">Accessibility</a></li>
                        <li><a href="/careers">Careers</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
                <div className="footer-social">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
