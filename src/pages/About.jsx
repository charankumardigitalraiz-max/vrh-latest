import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Target, Map, ChevronDown, Quote, Star, Award, Users, Globe, TrendingUp } from 'lucide-react';
import './About.css';
import { useMediaQuery } from 'react-responsive';

const About = () => {
    const [expandedCards, setExpandedCards] = useState({ history: false, vision: false, mission: false });
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 790px)' });

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

    const toggleCard = (card) => {
        setExpandedCards(prev => ({ ...prev, [card]: !prev[card] }));
    };

    const truncate = (text, isExpanded, limit = 180) => {
        if (!text) return "";
        if (text.length <= limit || isExpanded) return text;
        return text.substring(0, limit) + "...";
    };

    const historyText = "RR Veterinary Health Care Private Limited, through its meticulous and strategic planning created a marketing policy that generates an asset which eventually provides a distinct and enduring competitive advantage over others in the same arena. The effort is supported by a team of qualified professionals drawn from both scientific and management disciplines, who have an experience spanning over two decades especially in the segments of poultry, aquaculture and Livestock & Canine Healthcare. The company is optimistic about its future, having identified the potential areas that will usher in constant growth and success.";
    const visionText = "We aim to be a global leader in the development of innovative and quality products for animal healthcare. We want to feature ourselves as the strongest organization best known for undertaking ethical business.";
    const missionText = "Our mission is also to establish the company as one of the most trustworthy name for delivery of distinguished health care products of high quality. Our thrust is mainly on quality, for which we give utmost importance. Our strategy is to educate and develop our team in all respects by motivating them and helping them work with complete dedication and confidence in order to accomplish our commitments and in a manner that always wins the appreciation of our clients. Our idea is to set up a new benchmark by working together and growing together with all the stake holders.";

    return (
        <div className="about-page">
            {/* ── HERO ── */}
            <section className="about-hero about-hero--modern" style={{ backgroundImage: isMobile ? "url('/images/poultry3.jpg')" : "url('/images/heroes/about.jpg')" }}>
                <div className="about-hero__overlay" />
                <div className="about-hero__glow" />
                <div className="container about-hero__inner">
                    <div className="about-hero__grid">
                        <div className="about-hero__content">
                            {/* <span className="about-hero__eyebrow">Established 2016</span> */}
                            <h1 className="about-hero__title">Pioneering Veterinary Healthcare Solutions</h1>
                            <p className="about-hero__lead">
                                Keen on delivering reliable and high-quality healthcare solutions for the poultry, aquaculture, Livestock and Canine Segments.
                            </p>
                            <div className="about-hero__meta">
                                <div className="meta-pill">Pan-India Reach</div>
                                <div className="meta-pill">Quality Assured</div>
                                <div className="meta-pill">Trusted by Farmers</div>
                            </div>
                            <nav className="about-hero__breadcrumb">
                                <Link to="/">Home</Link>
                                <span>/</span>
                                <span className="active">About Us</span>
                            </nav>
                        </div>
                        <div className="about-hero__feature">
                            <div className="about-hero__card">
                                <div className="about-hero__card-head">Precision Care</div>
                                <div className="about-hero__stat">18+ <span>Years</span></div>
                                <div className="about-hero__list">
                                    <div className="about-hero__list-item">Poultry, Aquaculture, Livestock & Canine</div>
                                    <div className="about-hero__list-item">Nationwide Distribution Channels</div>
                                    <div className="about-hero__list-item">Products of high repute</div>
                                </div>
                            </div>
                            <div className="about-hero__card about-hero__card--accent">
                                <div className="about-hero__card-head">Trusted Network</div>
                                <div className="about-hero__stat">2000+ <span>Clients</span></div>
                                <div className="about-hero__signal">
                                    <span className="signal-dot" />
                                    <span>On-ground teams accross key regions of poultry, aquaculture, livestock and canine</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── WHO WE ARE ── */}
            <section className="wwa-section">
                <div className="container">
                    <div className="wwa-grid">
                        <div className="wwa-visual">
                            <div className="wwa-img-frame">
                                <img src="/images/home-2.jpg" alt="Who We Are" />
                            </div>
                            <div className="wwa-xp-badge">
                                <div className="xp-number">18+</div>
                                <div className="xp-label">Years of<br />Excellence</div>
                            </div>
                        </div>

                        <div className="wwa-content">
                            <div className="section-label">Company Profile</div>
                            <h2 className="section-heading">Who <span>We Are</span></h2>
                            <p className="wwa-body">
                                RR Veterinary Healthcare Pvt. Ltd. is one of the leading veterinary health care solution providers in India. Better known in the Poultry Industry across India earlier as RR Health Care Private Limited for providing quality service.
                                RR Veterinary Healthcare Pvt. Ltd. has been incorporated to serve Aquaculture Livestock & Canine. Ever since our reorganization in the year 2016 our products in the different verticals have found
                                increasing acceptance and we hope to meet the industry requirements at a better price than competitors. We are driven by the relentless pursuit of Quality in our products and persistently dedicated to serve our clientele in the field of animal health care.
                            </p>
                            <p className="wwa-body">
                                Head quartered at Hyderabad-India, the company incessantly strives to produce and supply quality products that are efficacious, safe, highly reliable and improves the quality of life in animals. Our emphasis is basically on understanding the animal diseases deeply and focusing on unmet nutritional/clinical needs in animals. Products emanating from RR Veterinary Healthcare Pvt. Ltd. are specially designed and formulated to provide instant solutions for animal health concerns and exceeds client expectations in all respects.
                            </p>
                        </div>
                    </div>

                    {/* ── STANDARDIZED CARD GRID (History, Vision, Mission) ── */}
                    <div className="vm-grid">
                        {/* History Card */}
                        <div className={`vm-card ${expandedCards.history ? 'expanded' : ''}`}>
                            <div className="vm-card__header">
                                <ShieldCheck size={32} className="vm-card__icon gold" />
                                <h3>Our History</h3>
                            </div>
                            <p className="vm-card__text">
                                {truncate(historyText, expandedCards.history)}
                            </p>
                            {historyText.length > 180 && (
                                <button className="vm-card__toggle" onClick={() => toggleCard('history')}>
                                    {expandedCards.history ? 'Read Less' : 'Read More'}
                                </button>
                            )}
                        </div>

                        {/* Vision Card */}
                        <div className={`vm-card ${expandedCards.vision ? 'expanded' : ''}`}>
                            <div className="vm-card__header">
                                <Globe size={32} className="vm-card__icon teal" />
                                <h3>Our Vision</h3>
                            </div>
                            <p className="vm-card__text">
                                {truncate(visionText, expandedCards.vision)}
                            </p>
                            {visionText.length > 180 && (
                                <button className="vm-card__toggle" onClick={() => toggleCard('vision')}>
                                    {expandedCards.vision ? 'Read Less' : 'Read More'}
                                </button>
                            )}
                        </div>

                        {/* Mission Card */}
                        <div className={`vm-card ${expandedCards.mission ? 'expanded' : ''}`}>
                            <div className="vm-card__header">
                                <Target size={32} className="vm-card__icon slate" />
                                <h3>Our Mission</h3>
                            </div>
                            <p className="vm-card__text">
                                {truncate(missionText, expandedCards.mission)}
                            </p>
                            {missionText.length > 180 && (
                                <button className="vm-card__toggle" onClick={() => toggleCard('mission')}>
                                    {expandedCards.mission ? 'Read Less' : 'Read More'}
                                </button>
                            )}
                        </div>
                    </div>


                    {/* ── ROADMAP FEATURE ── */}
                    <div className="roadmap-feature">
                        <div className="roadmap-feature__header text-center">
                            <div className="section-label">Our Journey</div>
                            <h2 className="section-heading">Strategic <span className="text-theme">Roadmap</span></h2>
                            <p className="roadmap-feature__desc">Tracking our milestones and future continuous growth in providing the best veterinary healthcare solutions.</p>
                        </div>
                        <div className="roadmap-feature__img-wrapper">
                            <img src="images\Road-Map.png" alt="RRV Roadmap" className="roadmap-feature__img" />
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
                                <span className='stacs-cards-value'>International Standards</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Users size={30} /></div>
                            <div className="stat-body">
                                <strong>Expert Team</strong>
                                <span className='stacs-cards-value'>Science & Management Professionals</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><Globe size={30} /></div>
                            <div className="stat-body">
                                <strong>Pan-India</strong>
                                <span className='stacs-cards-value'>Nationwide Coverage & Reach</span>
                            </div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-icon"><TrendingUp size={30} /></div>
                            <div className="stat-body">
                                <strong>18+ Years</strong>
                                <span className='stacs-cards-value' >Consistent Growth & Innovation</span>
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
                                        <div className="team-card__glow" />
                                        <img src="/images/Rammohan_DirectorA-443x600.jpg" alt="Mr. Y. Ram Mohan Rao" />
                                    </div>
                                    <div className="team-card__info">
                                        <h4>Mr. Y. Ram Mohan Rao</h4>
                                        <div className="team-card__divider" />
                                        <p>Founder & Director</p>
                                    </div>
                                </div>

                                <div className="team-card">
                                    <div className="team-card__photo">
                                        <div className="team-card__glow" />
                                        <img src="/images/srikanth.jpg" alt="Dr. Sreekanth Devalraju" />
                                    </div>
                                    <div className="team-card__info">
                                        <h4>Dr. Sreekanth Devalraju</h4>
                                        <div className="team-card__divider" />
                                        <p>Senior Consultant (Techno-Legal)</p>
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

            {/* Productivity & Delivery Section (Compact Video Gallery) */}
            <section className="compact-video-gallery" id="productivity">
                <div className="container">
                    <div className="compact-video__header text-center">
                        <span className="compact-video__subtitle">Real Impact</span>
                        <h2 className="compact-video__title">Productivity & <span>Delivery on Ground</span></h2>
                        <p className="compact-video__desc">Watch our industry-leading solutions in action across diverse environments.</p>
                    </div>

                    <div className="compact-video__grid">
                        {[
                            { id: 'gniEV7wDjNA', title: 'Main Video' },
                            { id: 'jzX4s0uK0qo', title: 'Video 2' },
                            { id: 'EeDUiPJIy8Q', title: 'Video 3' },
                            { id: '0KzQgYVDcRg', title: 'Video 4' },
                            { id: '8DGo_HlHCJ8', title: 'Video 5' },
                            { id: 'OfeGs-uhqeQ', title: 'Video 6' }
                        ].map((vid, idx) => (
                            <div key={vid.id} className="compact-video__card animate-slide-up" style={{ animationDelay: `${idx * 150}ms` }}>
                                <div className="compact-video__wrapper">
                                    <iframe src={`https://www.youtube.com/embed/${vid.id}?feature=oembed`} title={vid.title} allowFullScreen></iframe>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default About;
