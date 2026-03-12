import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ChevronRight, Map } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="footer-top-border"></div>

            <div className="footer-main">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-brand">
                            <img
                                src="/images/logo.png"
                                alt="RR Veterinary Logo"
                                className="footer-logo"
                            />
                            <div className="footer-contact-list mt-2">
                                <div className="footer-contact-item">
                                    <MapPin size={20} className="footer-icon" />
                                    <span>
                                        H.No. 5-5-81/5/1, 5th Floor,<br />
                                        Sangeeta colony, Hitension Rd,<br />
                                        Near Nallachervu, Kukatpally - 500072.
                                    </span>
                                </div>
                                <div className="footer-contact-item">
                                    <Mail size={18} className="footer-icon" />
                                    <a href="mailto:info@rrveterinary.in" className="footer-contact-link">info@rrveterinary.in</a>
                                    {/* <a href="mailto:purchase@rrveterinary.in" className="footer-contact-link">purchase@rrveterinary.in</a>
                                    <a href="mailto:admin@rrveterinary.in" className="footer-contact-link">admin@rrveterinary.in</a>
                                    <a href="mailto:hr@rrveterinary.in" className="footer-contact-link">hr@rrveterinary.in</a> */}
                                </div>
                                <div className="footer-contact-item">
                                    <Phone size={18} className="footer-icon" />
                                    <span>+91 9490410562, +91-40 2970 5562</span>
                                </div>
                            </div>
                        </div>

                        <div className="footer-widget">
                            <h4 className="footer-heading">Quick Links</h4>
                            <ul className="footer-links">
                                <li className="footer-link-item">
                                    <Link to="/quality-policy" className="footer-custom-link">
                                        <ChevronRight size={16} className="footer-chevron" /> Quality Policy
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/careers" className="footer-custom-link">
                                        <ChevronRight size={16} className="footer-chevron" /> Careers
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/contact-us" className="footer-custom-link">
                                        <ChevronRight size={16} className="footer-chevron" /> Contact Us
                                    </Link>
                                </li>
                                <li className="footer-link-item">
                                    <Link to="/gallery" className="footer-custom-link">
                                        <ChevronRight size={16} className="footer-chevron" /> Gallery
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="footer-widget">
                            <h4 className="footer-heading">Find Us</h4>
                            <div className="map-placeholder">
                                <span className="map-text d-flex align-items-center gap-2">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.14126468879!2d78.41766907421196!3d17.487283799921478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99873e24690d%3A0x33799185df144b72!2sRR%20VETERINARY%20HEALTH%20CARE%20PVT.LTD.!5e1!3m2!1sen!2sin!4v1773066563764!5m2!1sen!2sin" width="400" height="250"></iframe>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

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
