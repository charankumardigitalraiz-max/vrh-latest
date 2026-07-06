import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight, Instagram, Facebook, Linkedin, Youtube, ArrowUpRight } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            {/* Decorative top accent */}
            <div className="footer-top-border"></div>

            {/* Main Footer Content */}
            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">

                        {/* Column 1: Brand & Contact */}
                        <div className="footer-brand">
                            <img
                                src="images/RRVHC Logo copy (1).png"
                                alt="RR Veterinary Logo"
                                className="footer-logo"
                            />
                            <p className="footer-tagline">
                                Committed to excellence in veterinary Health Care solutions.
                            </p>
                            <div className="footer-contact-list">
                                <div className="footer-contact-item">
                                    <div className="footer-icon-wrapper">
                                        <MapPin size={16} />
                                    </div>
                                    <span>
                                        <b>RR VETERINARY HEALTH CARE PRIVATE LIMITED</b>
                                        <br />
                                        RR Heights, # 5-5-81/5/1, 5th Floor,
                                        Sai Baba Nagar Colony, High Tension Line Road,
                                        Kukatpally, Hyderabad – 500 072
                                    </span>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-icon-wrapper">
                                        <Mail size={16} />
                                    </div>
                                    <a href="mailto:info@rrveterinary.in" className="footer-contact-link">info@rrveterinary.in</a>
                                </div>
                                <div className="footer-contact-item">
                                    <div className="footer-icon-wrapper">
                                        <Phone size={16} />
                                    </div>
                                    {/* <span>+91 94410 31794</span> */}
                                    <span>+91 89784 17078</span>
                                    {/* <p>+91 94410 31794</p> */}
                                    <span>+91 94904 10562</span>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Quick Links */}
                        <div className="footer-widget">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                <li className="footer-link-item">
                                    <Link to="/" className="footer-custom-link">
                                        <ChevronRight size={14} className="footer-chevron" /> Home
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/about-us" className="footer-custom-link">
                                        <ChevronRight size={14} className="footer-chevron" /> About Us
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/quality-policy" className="footer-custom-link">
                                        <ChevronRight size={14} className="footer-chevron" /> Quality Policy
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/careers" className="footer-custom-link">
                                        <ChevronRight size={14} className="footer-chevron" /> Careers
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/gallery" className="footer-custom-link">
                                        <ChevronRight size={14} className="footer-chevron" /> Gallery
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/contact-us" className="footer-custom-link">
                                        <ChevronRight size={14} className="footer-chevron" /> Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Column 3: Map */}
                        <div className="footer-widget">
                            <h4 className="footer-heading">Find Us</h4>
                            <div className="map-placeholder">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.14126468879!2d78.41766907421196!3d17.487283799921478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99873e24690d%3A0x33799185df144b72!2sRR%20VETERINARY%20HEALTH%20CARE%20PVT.LTD.!5e1!3m2!1sen!2sin!4v1773066563764!5m2!1sen!2sin"
                                    width="400"
                                    height="220"
                                    title="RR Veterinary Location"
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </div>
                    </div>

                    {/* Follow Us — Full-width below grid */}
                    <div className="footer-social-bar">
                        <h4 className="footer-heading footer-heading--social">Follow Us</h4>
                        <div className="social-links">
                            <a href="https://www.instagram.com/rrveterinary/" target="_blank" rel="noopener noreferrer" className="social-link instagram" aria-label="Instagram">
                                <Instagram size={18} />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61583758705952" target="_blank" rel="noopener noreferrer" className="social-link facebook" aria-label="Facebook">
                                <Facebook size={18} />
                            </a>
                            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-link linkedin" aria-label="LinkedIn">
                                <Linkedin size={18} />
                            </a>
                            <a href="https://youtube.com/channel/yourchannel" target="_blank" rel="noopener noreferrer" className="social-link youtube" aria-label="YouTube">
                                <Youtube size={18} />
                            </a>
                            <a href="https://x.com/Veterinary015" target="_blank" rel="noopener noreferrer" className="social-link twitter" aria-label="Twitter">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                >
                                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-bottom-text">
                        &copy; {new Date().getFullYear()} RR Veterinary Health Care Pvt. Ltd. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
