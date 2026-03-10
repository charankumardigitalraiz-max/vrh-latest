import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Map, ChevronDown, Quote, Star, Award, Users, Globe, TrendingUp } from 'lucide-react';
import './About.css';

const About = () => {
    const [openAccordion, setOpenAccordion] = useState(null);
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const testimonials = [
        {
            id: 1,
            author: "Sravan Breeders",
            role: "Partner",
            content: "Eliminator is one of the best Rat controls I have used till know. I have always maintained my farm because of this wonderful product.",
            image: "/images/logo.png",
            rating: 5
        },
        {
            id: 2,
            author: "Sravan Breeders",
            role: "Partner",
            content: "Thermiquit such an excellent product! And properly dissolves in water without any sedimentation, very good for health of my animals in summer.",
            image: "/images/logo.png",
            rating: 5
        },
        {
            id: 3,
            author: "Varun Aakash",
            role: "Customer",
            content: "I bought the products of RR veterinary. Good quality item and great price !!!",
            image: "/images/logo.png",
            rating: 5
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
        }, 5000);
        return () => clearInterval(timer);
    }, [testimonials.length]);

    const toggleAccordion = (id) => {
        setOpenAccordion(openAccordion === id ? null : id);
    };

    return (
        <div className="about-page">

            {/* ── HERO ── */}
            <section className="about-hero" style={{ backgroundImage: "url('/images/heroes/about.jpg')" }}>
                <div className="about-hero__overlay" />
                <div className="container about-hero__inner">
                    <div className="about-hero__content-box">
                        <span className="about-hero__badge">Established 2016</span>
                        <h1 className="about-hero__title">Pioneering Veterinary <br /><span className="text-secondary text-gold">Healthcare Solutions</span></h1>
                        <nav className="about-hero__breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span className="active">About Us</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="wwa-section">
                <div className="container">
                    <div className="wwa-grid">

                        {/* Left – Image */}
                        <div className="wwa-visual">
                            <div className="wwa-img-frame">
                                <img src="/about/rrvcorevalues.jpg" alt="RRV Core Values" />
                            </div>
                            <div className="wwa-xp-badge">
                                <span className="xp-number">10+</span>
                                <span className="xp-label">Years of<br />Excellence</span>
                            </div>
                        </div>

                        {/* Right – Content */}
                        <div className="wwa-content">
                            <div className="section-label">Behind the Scenes</div>
                            <h2 className="section-heading">Who We Are?</h2>
                            <p className="wwa-lead">
                                RR Veterinary Healthcare Pvt. Ltd. is one of the leading veterinary health care solution providers in India. Better known in the Poultry Industry across India earlier as RR Health Care Private Limited for providing quality service.
                            </p>
                            <p className="wwa-body">
                                RR Veterinary Healthcare Pvt. Ltd. has been incorporated to serve Aquaculture and Animal Healthcare segments additionally. Ever since our reorganization in the year 2016 our products in the different verticals have found increasing acceptance and we hope to meet the industry requirements at a better price than competitors.
                            </p>
                            <p className="wwa-body">
                                Head quartered at Hyderabad-India, the company incessantly strives to produce and supply quality products that are efficacious, safe, highly reliable and improves the quality of life in animals.
                            </p>

                            {/* Accordion */}
                            <div className="wwa-accordion">
                                {/* Accordion 1 */}
                                <div className={`acc-item ${openAccordion === 1 ? 'open' : ''}`}>
                                    <button className="acc-header" onClick={() => toggleAccordion(1)}>
                                        <div className="acc-icon"><ShieldCheck size={20} /></div>
                                        <span>Read More About RR Veterinary Health Care</span>
                                        <ChevronDown className="acc-arrow" size={18} />
                                    </button>
                                    <div className="acc-body">
                                        <p>
                                            RR Veterinary Health Care Private Limited, through its meticulous and strategic planning created a marketing policy that generates an asset which eventually provides a distinct and enduring competitive advantage over others in the same arena. The effort is supported by a team of qualified professionals drawn from both scientific and management disciplines, who have an experience spanning over two decades especially in the segments of poultry, aquaculture and large animal health care. The company is optimistic about its future, having identified the potential areas that will usher in constant growth and success.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='second-collapse'>
                        {/* Accordion 2 */}
                        <div className={`acc-item ${openAccordion === 2 ? 'open' : ''}`}>
                            <button className="acc-header" onClick={() => toggleAccordion(2)}>
                                <div className="acc-icon"><Map size={20} /></div>
                                <span>Roadmap</span>
                                <ChevronDown className="acc-arrow" size={18} />
                            </button>
                            <div className="acc-body acc-body--image">
                                <img src="/about/roadmap.jpg" alt="RRV Roadmap" className="acc-roadmap-img" />
                            </div>
                        </div>

                        {/* Accordion 3 */}
                        <div className={`acc-item ${openAccordion === 3 ? 'open' : ''}`}>
                            <button className="acc-header" onClick={() => toggleAccordion(3)}>
                                <div className="acc-icon"><Target size={20} /></div>
                                <span>Vision & Mission</span>
                                <ChevronDown className="acc-arrow" size={18} />
                            </button>
                            <div className="acc-body">
                                <p>
                                    <strong>Vision:</strong> We aim to be a global leader in the development of innovative and quality products for animal healthcare. We want to feature ourselves as the strongest organization best known for undertaking ethical business.
                                </p>
                                <p className="mt-2">
                                    <strong>Mission:</strong> Our mission is also to establish the company as one of the most trustworthy name for delivery of distinguished health care products of high quality. Our thrust is mainly on quality, for which we give utmost importance. Our strategy is to educate and develop our team in all respects by motivating them and helping them work with complete dedication and confidence in order to accomplish our commitments and in a manner that always wins the appreciation of our clients. Our idea is to set up a new benchmark by working together and growing together with all the stake holders.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── STATS STRIP ── */}
            <section className="stats-strip">
                <div className="container">
                    <div className="stats-strip__grid">
                        <div className="stat-card">
                            <div className="stat-icon"><Award size={30} /></div>
                            <div className="stat-body">
                                <strong>Quality</strong>
                                <span>International Standards</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Users size={30} /></div>
                            <div className="stat-body">
                                <strong>Expert Team</strong>
                                <span>Science & Management Professionals</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Globe size={30} /></div>
                            <div className="stat-body">
                                <strong>Pan-India</strong>
                                <span>Nationwide Coverage & Reach</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><TrendingUp size={30} /></div>
                            <div className="stat-body">
                                <strong>10+ Years</strong>
                                <span>Consistent Growth & Innovation</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── TEAM + TESTIMONIALS ── */}
            <section className="tt-section">
                <div className="container">
                    <div className="tt-grid">

                        {/* Team */}
                        <div className="tt-team">
                            <div className="section-label">Management</div>
                            <h2 className="section-heading">Our <span className="text-accent">Team</span></h2>
                            <div className="team-cards">
                                <div className="team-card">
                                    <div className="team-card__photo">
                                        <img src="/images/Rammohan_DirectorA-443x600.jpg" alt="Mr. Y. Ram Mohan Rao" />
                                        <div className="team-card__badge">Director</div>
                                    </div>
                                    <div className="team-card__info">
                                        <h4>Mr. Y. Ram Mohan Rao</h4>
                                        <p>Founder & Director</p>
                                    </div>
                                </div>

                                <div className="team-card">
                                    <div className="team-card__photo">
                                        <img src="/images/srikanth.jpg" alt="Dr. Sreekanth Devalraju" />
                                        <div className="team-card__badge gold">Managing Director</div>
                                    </div>
                                    <div className="team-card__info">
                                        <h4>Dr. Sreekanth Devalraju</h4>
                                        <p>Managing Director</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Testimonials */}
                        <div className="tt-testimonials">
                            <div className="section-label">Client Feedback</div>
                            <h2 className="section-heading">Our <span className="text-accent">Testimonials</span></h2>
                            <div className="testi-card">
                                <div className="testi-quote-icon"><Quote size={36} /></div>
                                <div className="testi-slides">
                                    {testimonials.map((t, i) => (
                                        <div key={t.id} className={`testi-slide ${currentTestimonial === i ? 'show' : ''}`}>
                                            <p className="testi-text">"{t.content}"</p>
                                            <div className="testi-author">
                                                <img src={t.image} alt={t.author} className="testi-avatar" />
                                                <div>
                                                    <strong>{t.author}</strong>
                                                    <br />
                                                    <span className="testi-role">{t.role}</span>
                                                    <div className="testi-stars">
                                                        {[...Array(t.rating)].map((_, i) => <Star key={i} size={13} fill="#e6a727" color="#e6a727" />)}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="testi-dots">
                                    {testimonials.map((_, i) => (
                                        <button key={i} className={`tdot ${currentTestimonial === i ? 'active' : ''}`} onClick={() => setCurrentTestimonial(i)} />
                                    ))}
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </section>

            {/* Productivity & Delivery Section (Video Gallery) */}
            <section className="video-gallery-section" id="productivity">
                <div className="container">
                    <div className="section-header text-center mb-5">
                        <span className="section-subtitle">Real Impact</span>
                        <h2 className="section-title">Productivity and <span className="text-theme">Delivery on Ground</span></h2>
                    </div>

                    <div className="video-master-grid">
                        <div className="row g-4">
                            {/* Featured Large Video & Side Stack */}
                            <div className="col-lg-8">
                                <div className="video-card large animate-slide-up">
                                    <div className="video-wrapper">
                                        <iframe
                                            src="https://www.youtube.com/embed/gniEV7wDjNA?feature=oembed"
                                            title="Main Video"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                    <div className="video-info">
                                        <h4>RR Veterinary Health Care | Poultry India 2016</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="video-stack">
                                    <div className="video-card small animate-slide-up" style={{ animationDelay: '200ms' }}>
                                        <div className="video-wrapper">
                                            <iframe src="https://www.youtube.com/embed/jzX4s0uK0qo?feature=oembed" title="Video 2" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="video-card small animate-slide-up" style={{ animationDelay: '400ms' }}>
                                        <div className="video-wrapper">
                                            <iframe src="https://www.youtube.com/embed/EeDUiPJIy8Q?feature=oembed" title="Video 3" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Grid Row */}
                        <div className="row g-4 mt-2">
                            {[
                                { id: '0KzQgYVDcRg', title: 'Video 4' },
                                { id: '8DGo_HlHCJ8', title: 'Video 5' },
                                { id: 'OfeGs-uhqeQ', title: 'Video 6' }
                            ].map((vid, idx) => (
                                <div key={vid.id} className="col-lg-4 col-md-6">
                                    <div className="video-card animate-slide-up" style={{ animationDelay: `${(idx + 3) * 200}ms` }}>
                                        <div className="video-wrapper">
                                            <iframe src={`https://www.youtube.com/embed/${vid.id}?feature=oembed`} title={vid.title} allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
