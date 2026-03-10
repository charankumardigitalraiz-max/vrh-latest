import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page fade-in">
            {/* Page Banner */}
            <section className="page-banner" style={{ backgroundImage: "url('/images/heroes/poultry-4.jpg')" }}>
                {/* <div className="banner-overlay"></div> */}
                <div className="container">
                    <div className="banner-content-box slide-up">
                        <span className="banner-badge">Get In Touch</span>
                        <h1 className="banner-title">Contact <span className="text-gold">Our Team</span></h1>
                        <p className="banner-subtitle">We'd love to hear from you. Professional support for your veterinary needs.</p>
                        <nav className="banner-breadcrumb">
                            <a href="/">Home</a>
                            <span>/</span>
                            <span className="active">Contact Us</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="contact-section">
                <div className="container">
                    <div className="contact-grid">

                        {/* Contact Information Cards */}
                        <div className="contact-info-wrapper slide-up" style={{ animationDelay: '0.1s' }}>
                            <h2 className="section-title">Get In Touch</h2>
                            <p className="text-muted" style={{ marginBottom: '2rem' }}>
                                Have questions about our products or services? Our dedicated team is here to provide you with the support and information you need.
                            </p>

                            <div className="info-cards">
                                <div className="info-card hover-lift">
                                    <div className="icon-wrapper">
                                        <MapPin size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Head Office</h3>
                                        <p>H.No. 5-5-81/5/1, 5th Floor,<br />
                                            Sangeeta colony, Hitension Rd,<br />
                                            Near Nallachervu,<br />
                                            Kukatpally, Hyderabad - 500072.
                                        </p>
                                    </div>
                                </div>

                                <div className="info-card hover-lift" style={{ animationDelay: '0.2s' }}>
                                    <div className="icon-wrapper">
                                        <Phone size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Phone Numbers</h3>
                                        <p>+91 94904 10562</p>
                                        <p>+91 40 2970 5562</p>
                                    </div>
                                </div>

                                <div className="info-card hover-lift" style={{ animationDelay: '0.3s' }}>
                                    <div className="icon-wrapper">
                                        <Mail size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Email Addresses</h3>
                                        <p><a href="mailto:info@rrvhc.in">info@rrvhc.in</a></p>
                                        <p><a href="mailto:info@rrveterinary.in">info@rrveterinary.in</a></p>
                                        <p><a href="mailto:purchase@rrveterinary.in">purchase@rrveterinary.in</a></p>
                                        <p><a href="mailto:admin@rrveterinary.in">admin@rrveterinary.in</a></p>
                                        <p><a href="mailto:hr@rrveterinary.in">hr@rrveterinary.in</a></p>
                                    </div>
                                </div>

                                <div className="info-card hover-lift" style={{ animationDelay: '0.4s' }}>
                                    <div className="icon-wrapper">
                                        <Clock size={24} />
                                    </div>
                                    <div className="info-content">
                                        <h3>Working Hours</h3>
                                        <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                                        <p>Sunday: Closed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form OR Map */}
                        <div className="contact-map-wrapper slide-up" style={{ animationDelay: '0.3s' }}>
                            <div className="glass-panel map-container">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3176.14126468879!2d78.41766907421196!3d17.487283799921478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99873e24690d%3A0x33799185df144b72!2sRR%20VETERINARY%20HEALTH%20CARE%20PVT.LTD.!5e1!3m2!1sen!2sin!4v1773066563764!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="RR Veterinary Location Map"
                                ></iframe>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
