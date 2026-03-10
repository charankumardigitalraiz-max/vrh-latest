import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Users, Trophy, Briefcase, Heart, ChevronLeft } from 'lucide-react';
import './Home.css';

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        { id: 1, image: '/images/heroes/banner1.jpg', title: 'Helping to prolong\nthe quality of life', subtitle: 'Advanced solutions for modern poultry and livestock healthcare' },
        { id: 2, image: '/images/heroes/banner2.jpg', title: 'Medicine, experience, \ncompassion together', subtitle: 'Committed to excellence in animal health since 2016' },
        { id: 3, image: '/images/heroes/banner3.jpg', title: 'Sustainable Aqua\nCulture Solutions', subtitle: 'Expertise in biosecurity and water quality management' }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

    const brands = [
        '4-1.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
        '9-1.jpg', '10-1.jpg', '11.jpg', '12-1.jpg', '13.jpg', '14.jpg'
    ];

    return (
        <div className="home-page animate-fade-in">
            {/* Premium Hero Section */}
            <section className="hm-hero">
                <div className="hm-hero__slider">
                    {slides.map((slide, index) => (
                        <div key={slide.id} className={`hm-hero__slide ${currentSlide === index ? 'active' : ''}`}>
                            <div className="hm-hero__bg-wrapper">
                                <img src={slide.image} className="hm-hero__bg-img" alt="" />
                                <div className="hm-hero__overlay"></div>
                            </div>
                            <div className="container h-100">
                                <div className="hm-hero__content">
                                    <div className="hm-hero__text-box">
                                        <div className="hm-hero__badge">Leading Care Since 2016</div>
                                        <h1 className="hm-hero__title">{slide.title}</h1>
                                        <p className="hm-hero__subtitle">{slide.subtitle}</p>
                                        <div className="hm-hero__actions">
                                            <Link to="/about-us" className="hm-hero__btn hvr-bounce-to-right">
                                                <span>Discover More</span>
                                                <ChevronRight size={20} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="hm-hero__controls">
                    <button className="hm-hero__nav-btn" onClick={prevSlide} aria-label="Previous slide">
                        <ChevronLeft size={24} />
                    </button>
                    <div className="hm-hero__dots">
                        {slides.map((_, i) => (
                            <div
                                key={i}
                                className={`hm-hero__dot ${currentSlide === i ? 'active' : ''}`}
                                onClick={() => setCurrentSlide(i)}
                            ></div>
                        ))}
                    </div>
                    <button className="hm-hero__nav-btn" onClick={nextSlide} aria-label="Next slide">
                        <ChevronRight size={24} />
                    </button>
                </div>
            </section>

            {/* Features Section */}
            <section className="features-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Our Expertise</span>
                        <h2 className="section-title">Veterinary Branches</h2>
                    </div>
                    <div className="features-grid">
                        {[
                            { id: 'poultry', name: 'Poultry', img: 'hen.png' },
                            { id: 'aquaculture', name: 'Aquaculture', img: 'aqua.png' },
                            { id: 'large-animals', name: 'Large Animals', img: 'large-animals.png' },
                            { id: 'sheep-goat', name: 'Sheep & Goat', img: 'sheep.png' }
                        ].map((feature, i) => (
                            <Link to={`/category/${feature.id}`} key={feature.id} className="feature-card animate-slide-up" style={{ animationDelay: `${(i + 1) * 100}ms` }}>
                                <div className="feature-icon-wrapper">
                                    <img src={`/images/${feature.img}`} alt={feature.name} className="feature-img" />
                                </div>
                                <h3 className="feature-title">{feature.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>



            {/* Modernized About Section */}
            <section className="hm-about">
                <div className="hm-about__bg"></div>
                <div className="container">
                    <div className="hm-about__grid">

                        {/* Column 1: Our Pledge */}
                        <div className="hm-about__col hm-about__col--pledge">
                            <div className="hm-about__label">Quality First</div>
                            <h2 className="hm-about__title">Our <span>Pledge</span></h2>
                            <div className="hm-about__pledge-wrapper">
                                <div className="hm-about__pledge-card hm-about__pledge-card--primary">
                                    <img src="/images/15-years.png" alt="15 Years of Excellence" className="hm-about__pledge-img" />
                                    {/* <div className="hm-about__pledge-badge">Since 2016</div> */}
                                </div>
                                {/* <div className="hm-about__pledge-card hm-about__pledge-card--secondary">
                                    <img src="/images/about-one.png" alt="Our Quality Commitment" className="hm-about__pledge-img" />
                                </div> */}
                            </div>
                        </div>

                        {/* Column 2: Who We Are (Main) */}
                        <div className="hm-about__col hm-about__col--main">
                            <h2 className="hm-about__title">Who <span>We Are</span></h2>
                            <p className="hm-about__text">
                                RR Veterinary Healthcare Pvt. Ltd. is one of the leading veterinary health care solution providers in India. Our presence is known to the world as RR Health Care Private Limited.
                            </p>
                            <p className="hm-about__text">
                                Reorganized in the year 2016, we are driven by relentless pursuit for quality products at a better price and persistent dedication to serve our clientele.
                            </p>
                            <Link to="/about-us" className="hm-about__btn">
                                <span>Read Our Story</span>
                                <ChevronRight size={18} />
                            </Link>
                            {/* 
                            <div className="hm-about__values">
                                {[
                                    { name: 'Innovation', desc: 'Look beyond the obvious', color: '#0dcaf0' },
                                    { name: 'Commitment', desc: 'Always with you - Nurturing', color: '#ffc107' },
                                    { name: 'Integrity', desc: 'Values determine direction', color: '#048a81' },
                                    { name: 'Teamwork', desc: 'Togetherness is strength', color: '#8b5cf6' }
                                ].map(v => (
                                    <div key={v.name} className="hm-about__value-card">
                                        <div className="hm-about__value-accent" style={{ backgroundColor: v.color }}></div>
                                        <div className="hm-about__value-name" style={{ color: v.color }}>{v.name}</div>
                                        <div className="hm-about__value-desc">{v.desc}</div>
                                    </div>
                                ))}
                            </div> */}
                        </div>

                        {/* Column 3: Latest Updates */}
                        <div className="hm-about__col hm-about__col--updates">
                            <h2 className="hm-about__title">Latest <span>Updates</span></h2>
                            <div className="hm-about__updates-container">
                                <div className="hm-about__updates-list">
                                    {[
                                        "Latest Poultry Solutions 2024 launched internally.",
                                        "New Aqua Biosecurity Range testing phase completed.",
                                        "Expanding our distribution centers to North India.",
                                        "Award Winning Feeds recognized globally."
                                    ].map((update, idx) => (
                                        <div key={idx} className="hm-about__update-item">
                                            <div className="hm-about__update-dot"></div>
                                            <p>{update}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="hm-about__updates-footer">
                                <p>Stay connected for more news</p>
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

            {/* Our Products Brands Section */}
            <section className="product-brands-section">
                <div className="container">
                    <div className="section-header">
                        <span className="section-subtitle">Trusted Quality</span>
                        <h2 className="section-title">Our Products</h2>
                    </div>
                    <div className="brands-carousel-container">
                        <div className="brands-carousel-track">
                            {[...brands, ...brands].map((brand, i) => (
                                <div key={i} className="brand-logo-card">
                                    <img src={`/product-brands/${brand}`} alt={`Product Brand ${i + 1}`} className="brand-logo-img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section: Premium Counters */}
            <section className="hm-stats">
                <div className="container">
                    <div className="hm-stats__grid">
                        {[
                            { icon: <Users size={32} />, count: '1200+', label: 'Happy Clients', color: '#0dcaf0' },
                            { icon: <Briefcase size={32} />, count: '30+', label: 'Years Experience', color: '#ffc107' },
                            { icon: <Trophy size={32} />, count: '35+', label: 'Awards Won', color: '#048a81' },
                            { icon: <Heart size={32} />, count: '100%', label: 'Satisfaction', color: '#f43f5e' }
                        ].map((stat, i) => (
                            <div key={i} className="hm-stats__card">
                                <div className="hm-stats__icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                                    {stat.icon}
                                </div>
                                <div className="hm-stats__info">
                                    <div className="hm-stats__value">{stat.count}</div>
                                    <div className="hm-stats__label">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
