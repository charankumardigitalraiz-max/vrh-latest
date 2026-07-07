import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Trophy, Briefcase, Heart, ShoppingBag, ArrowRight, Lightbulb, ShieldCheck, Handshake } from 'lucide-react';
import './Home.css';
import productsData from '../data/products.json';

const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const countRef = useRef(null);

    const target = parseInt(value, 10) || 0;
    const suffix = value.toString().replace(/[0-9]/g, '');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                setHasAnimated(true);
                let startTimestamp = null;
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    // easeOut effect
                    const easeProgress = 1 - Math.pow(1 - progress, 4);
                    setCount(Math.floor(easeProgress * target));
                    if (progress < 1) {
                        window.requestAnimationFrame(step);
                    } else {
                        setCount(target);
                    }
                };
                window.requestAnimationFrame(step);
            }
        }, { threshold: 0.1 });

        const currentRef = countRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) observer.unobserve(currentRef);
        };
    }, [target, duration, hasAnimated]);

    return (
        <span ref={countRef}>
            {count}{suffix}
        </span>
    );
};

const ClientName = [
    { id: 1, name: 'Sneha', logo: '/product-brands/sneha1.png' },
    { id: 2, name: 'Sneha Farms', logo: '/product-brands/hitech.png' },
    { id: 3, name: 'VH Group', logo: '/product-brands/komar.png' },
    { id: 4, name: 'Hitech', logo: '/product-brands/ppl.png' },
    { id: 5, name: 'Shalimar Group', logo: '/product-brands/shalimar.png' },
    { id: 6, name: 'Premier', logo: '/product-brands/srinivasa.png' },
    { id: 7, name: 'Komarla', logo: '/product-brands/sugunafoods.png' },
    { id: 8, name: 'Srinivasa Hatcheries', logo: '/product-brands/venky.png' },
    { id: 9, name: 'vhgroup ', logo: '/product-brands/vhgroup.png' },
    { id: 10, name: 'SR Groups', logo: '/product-brands/srgroup.jpg' }
];

const testimonials = [
    {
        quote: "We have been using RR Veterinary's biosecurity and nutritional products for our poultry flocks since 2018. The flock uniformity and health have improved drastically, and their customer support is outstanding.",
        name: "Dr. Rajesh Kumar",
        designation: "Poultry Consultant & Farm Owner",
        location: "Hyderabad, Telangana",
        avatar: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=150&auto=format&fit=crop"
    },
    {
        quote: "Their aquaculture water sanitizers like Quatsure and Pond probiotics have helped us maintain excellent water quality parameters in our shrimp ponds, resulting in higher survival rates and better yields.",
        name: "M. Srinivasa Rao",
        designation: "Aquaculture Hatchery Manager",
        location: "Bhimavaram, Andhra Pradesh",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=150&auto=format&fit=crop"
    },
    {
        quote: "Switching to Succical Vet and Qualimin Vet for our dairy cattle led to a visible increase in daily milk yield and improved the overall health of our herd. Highly recommend their livestock range.",
        name: "Suresh Patel",
        designation: "Managing Director, Patel Dairy Farms",
        location: "Anand, Gujarat",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&auto=format&fit=crop"
    }
];

const ClientCard = ({ client }) => {
    const [imgFailed, setImgFailed] = React.useState(false);
    return (
        <div className="client-card">
            {!imgFailed && client.logo ? (
                <img
                    src={client.logo}
                    alt={client.name}
                    className="client-card__img"
                    onError={() => setImgFailed(true)}
                />
            ) : (
                <div className="client-card__text">{client.name}</div>
            )}
        </div>
    );
};

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeProdCategory, setActiveProdCategory] = useState('poultry');

    const featuredProducts = {
        poultry: ['avigrow', 'rr-eliminator', 'thermiquit-fs', 'spoton'].map(slug => productsData.products.find(p => p.slug === slug)).filter(Boolean),
        aquaculture: ['humifyaqua', 'quatsure', 'ligabind', 'oxyenrich'].map(slug => productsData.products.find(p => p.slug === slug)).filter(Boolean),
        livestock: ['toxelim-b-gold', 'succical-gold', 'trimectin-z', 'qualimin-vet'].map(slug => productsData.products.find(p => p.slug === slug)).filter(Boolean),
        canine: ['quit-stress', 'succical-c', 'qualimin-c', 'proboon'].map(slug => productsData.products.find(p => p.slug === slug)).filter(Boolean)
    };

    const slides = [
        { id: 1, image: '/banners/Poultry.jpg', title: "Sustainable Aqua\nCulture Solutions", subtitle: "Expertise in boosting productivity with advanced biosecurity and pond management" },
        { id: 2, image: '/banners/Aqua.jpg', title: "Elevating Standards in\nPoultry Health Care", subtitle: "Advanced nutritional and disease management solutions for optimal flock performance" },
        { id: 3, image: '/banners/Shrimp.jpg', title: "Shrimp", subtitle: "Comprehensive products for enhanced growth and disease resistance in aquaculture" },
        { id: 4, image: '/banners/Livestock.jpg', title: "Innovating Marine\nHealth & Wellness", subtitle: "Comprehensive products for enhanced growth and disease resistance in aquaculture" },
        { id: 5, image: '/banners/canine2.jpg', title: "Science, experience, \ncompassion together", subtitle: "Dedicated for providing advanced solutions for sustainable farming" },

    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => setCurrentSlide(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    const prevSlide = () => setCurrentSlide(prev => (prev === 0 ? slides.length - 1 : prev - 1));

    const brands = [
        '4-1.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
        '9-1.jpg', '10-1.jpg', '11.jpg', '12-1.jpg', '13.jpg', '14.jpg'
    ];

    const coreValues = [
        { title: "Innovation", desc: "Look beyond the obvious to discover better solutions", icon: <Lightbulb size={18} /> },
        { title: "Commitment", desc: "Always with you – Nurturing, Empowering, Caring", icon: <Heart size={18} /> },
        { title: "Integrity", desc: "Values determine the direction of your success path", icon: <ShieldCheck size={18} /> },
        { title: "Teamwork", desc: "Togetherness in our strength – Catalyst for growth", icon: <Users size={18} /> },
        { title: "Excellence", desc: "Steer steadily on the path of success", icon: <Trophy size={18} /> }
    ];

    return (
        <div className="home-page page-content-offset animate-fade-in">
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
                                        {/* <div className="hm-hero__badge">Leading Care Since 2016</div> */}
                                        {/* <h1 className="hm-hero__title">{slide.title}</h1>
                                        <p className="hm-hero__subtitle">{slide.subtitle}</p> */}
                                        {/* <div className="hm-hero__actions">
                                            <Link to="/about-us" className="hm-hero__btn hvr-bounce-to-right">
                                                <span>Discover More</span>
                                                <ChevronRight size={20} />
                                            </Link>
                                        </div> */}
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

            {/* Features Section — Horizontal Showcase */}
            <section className="expertise-section">
                <div className="container">
                    <div className="expertise-header">
                        <span className="expertise-eyebrow">What We Do</span>
                        <h2 className="expertise-title">Our <span>Expertise</span></h2>
                        <p className="expertise-desc">Comprehensive veterinary Health Care solutions tailored for every segment of animal farming.</p>
                    </div>
                </div>

                <div className="expertise-showcase">
                    {[
                        {
                            id: 'poultry',
                            num: '01',
                            name: 'Poultry',
                            // label: 'Veterinary Solutions',
                            img: '/images/Banners/Segment wise pics/poultry.png',
                            color: '#e8f5e9',
                            accent: '#2e7d32',
                            desc: 'Providing End-to-End Health Management for Broilers, Layers and Parents-emphasize on Bio Security and Growth Optimization Strategy '
                        },
                        {
                            id: 'aquaculture',
                            num: '02',
                            name: 'Aquaculture',
                            // label: 'Water Health',
                            img: '/about/Aquaculture.png',
                            color: '#e3f2fd',
                            accent: '#0277bd',
                            desc: 'A precision water quality and disease management solution for thriving aquatic growth.'
                        },

                        {
                            id: 'livestock',
                            num: '03',
                            name: 'Livestock',
                            // label: 'Livestock Care',
                            img: '/images/Banners/Image 2.png',
                            color: '#fff8e1',
                            accent: '#f57f17',
                            desc: 'Comprehensive health solutions for cattle, horses, and working livestock.'
                        },
                        {
                            id: 'canine',
                            num: '04',
                            name: 'Canine',
                            // label: 'Dog Care',
                            img: '/images/Banners/Segment wise pics/Canine.png',
                            color: '#fce4ec',
                            accent: '#ad1457',
                            desc: 'Targeted veterinary care and nutrition for dogs across breeds.'
                        },
                    ].map((item) => (
                        <Link
                            to={`/category/${item.id}`}
                            key={item.id}
                            className="showcase-panel"
                            style={{ '--panel-bg': item.color, '--panel-accent': item.accent }}
                        >
                            <div className="showcase-panel__number">{item.num}</div>
                            <div className="showcase-panel__img-wrap">
                                <img src={item.img} alt={item.name} className="showcase-panel__img" />
                            </div>
                            <div className="showcase-panel__content">
                                <span className="showcase-panel__label">{item.label}</span>
                                <h3 className="showcase-panel__name">{item.name}</h3>
                                <p className="showcase-panel__desc">{item.desc}</p>
                                <div className="showcase-panel__cta">
                                    <span>Explore Range</span>
                                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                                        <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>



            {/* Standardized "Who We Are" Section */}
            <section className="premium-about section-padding" id="about">
                <div className="container">
                    <div className="premium-about__wrapper">

                        {/* Left: Standard Visual with Accent */}
                        <div className="premium-about__visual">
                            <div className="premium-about__img-container">
                                <div className="item-main">
                                    {/* <img src="https://images.unsplash.com/photo-1614120263669-43911b47f0b2?q=80&w=1200&auto=format&fit=crop" alt="RR Veterinary Health Care" /> */}
                                    <img src="/images/Banners/_Image 1.png" alt="" />
                                    <div className="item-main__overlay"></div>
                                </div>
                                <div className="premium-about__experience-badge">
                                    <div className="badge-value">18+</div>
                                    <div className="badge-label">Years of<br />Excellence</div>
                                </div>
                            </div>
                        </div>

                        {/* Right: Content consistent with Global Design Tokens */}
                        <div className="premium-about__content">
                            <div className="premium-about__header">
                                <span className="section-subtitle-premium">Established Excellence</span>
                                <h2 className="section-title-premium">Who <span>We Are</span></h2>
                            </div>

                            <div className="premium-about__narrative">
                                <p className="premium-about__text">
                                    RR Veterinary Health Care Pvt. Ltd. is one of the leading veterinary health care solution providers in India. Our presence is known to the world as RR Health Care Private Limited which has provided quality service to the Poultry, Aquaculture and Livestock and Canine segments since 2008.

                                    {/* <p className="premium-about__text highlighted"> */}
                                    Reorganized in the year 2016, RR Veterinary Health Care Pvt. Ltd. is driven by relentless pursuit for Quality products at a better price and persistent dedication to serve its clientele.
                                </p>

                                <div className="premium-about__actions">
                                    <Link to="/about-us" className="btn btn-theme">
                                        <span>Read Our Story</span>
                                        <ArrowRight size={18} />
                                    </Link>
                                </div>

                                <div className="premium-about__core-values-grid">
                                    {coreValues.map((val, i) => (
                                        <div key={i} className="premium-value-card">
                                            <div className="premium-value-card__icon">{val.icon}</div>
                                            <div className="premium-value-card__info">
                                                <h4 className="premium-value-card__title">{val.title}</h4>
                                                <p className="premium-value-card__desc">{val.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            {/* Featured Products Section - Highlighting Key Categories */}
            <section className="featured-products">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Premium Selections</span>
                        <h2 className="section-title">Featured <span>Products</span></h2>
                        <div className="category-tabs">
                            <button
                                className={`category-tab ${activeProdCategory === 'poultry' ? 'active' : ''}`}
                                onClick={() => setActiveProdCategory('poultry')}
                            >
                                Poultry
                            </button>
                            <button
                                className={`category-tab ${activeProdCategory === 'aquaculture' ? 'active' : ''}`}
                                onClick={() => setActiveProdCategory('aquaculture')}
                            >
                                Aquaculture
                            </button>
                            <button
                                className={`category-tab ${activeProdCategory === 'livestock' ? 'active' : ''}`}
                                onClick={() => setActiveProdCategory('livestock')}
                            >
                                Livestock
                            </button>
                            <button
                                className={`category-tab ${activeProdCategory === 'canine' ? 'active' : ''}`}
                                onClick={() => setActiveProdCategory('canine')}
                            >
                                Canine
                            </button>
                        </div>
                    </div>

                    <div className="products-grid-wrapper">
                        <div className={`products-grid ${activeProdCategory}`}>
                            {featuredProducts[activeProdCategory].map((product, idx) => (
                                <Link
                                    to={`/product/${product.slug}`}
                                    key={product.slug}
                                    className="prod-card"
                                    style={{ animationDelay: `${idx * 100}ms` }}
                                >
                                    <div className="prod-card__img-wrap">
                                        <img src={product.image} alt={product.title} className="prod-card__img" />
                                        <div className="prod-card__badge">
                                            {activeProdCategory === 'aquaculture' ? 'Aqua' : activeProdCategory.charAt(0).toUpperCase() + activeProdCategory.slice(1)}
                                        </div>
                                    </div>
                                    <div className="prod-card__content">
                                        <h3 className="prod-card__title">{product.title}</h3>
                                        <p className="prod-card__subtitle">{product.subtitle}</p>
                                        <div className="prod-card__footer">
                                            <span className="prod-card__view">
                                                View Details
                                                <ArrowRight size={14} />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="featured-products__action text-center">
                        <Link to={`/category/${activeProdCategory}`} className="view-all-btn">
                            <span>Explore All {activeProdCategory === 'aquaculture' ? 'Aquaculture' : activeProdCategory.charAt(0).toUpperCase() + activeProdCategory.slice(1)} Products</span>
                            <ShoppingBag size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Productivity & Delivery Section (Video Gallery) */}
            {/* Productivity & Delivery Section (Video Gallery) - Cinematic Dark Mode */}
            {/* <section className="premium-video-gallery" id="productivity">
                <div className="premium-video__bg-glow"></div>
                <div className="container">
                    <div className="premium-video__header text-center">
                        <span className="premium-video__subtitle">Real Impact</span>
                        <h2 className="premium-video__title">Productivity & <span>Delivery on Ground</span></h2>
                        <p className="premium-video__desc">Watch our industry-leading solutions in action.</p>
                    </div>

                    <div className="premium-video__grid">
                        {[
                            { id: 'gniEV7wDjNA', title: 'Main Video' },
                            { id: 'jzX4s0uK0qo', title: 'Video 2' },
                            { id: 'EeDUiPJIy8Q', title: 'Video 3' },
                            { id: '0KzQgYVDcRg', title: 'Video 4' },
                            { id: '8DGo_HlHCJ8', title: 'Video 5' },
                            { id: 'OfeGs-uhqeQ', title: 'Video 6' }
                        ].map((vid, idx) => (
                            <div key={vid.id} className="premium-video__item" style={{ animationDelay: `${idx * 150}ms` }}>
                                <iframe
                                    src={`https://www.youtube.com/embed/${vid.id}?feature=oembed&modestbranding=1&rel=0`}
                                    title={vid.title}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* Our Products Brands Section - Premium Redesign */}
            <section className="premium-brands">
                <div className="container">
                    <div className="premium-brands__header text-center">
                        <span className="premium-brands__subtitle">Trusted Quality</span>
                        <h2 className="premium-brands__title">Our <span>Products</span></h2>
                    </div>

                    <div className="premium-brands__marquee">
                        <div className="premium-brands__track">
                            {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
                                <div key={i} className="premium-brands__card">
                                    <img src={`/product-brands/${brand}`} alt={`Product Brand ${i + 1}`} className="premium-brands__img" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            {/* Our Clients Section - Premium Showcase */}
            <section className="our-clients section-padding">
                <div className="container">
                    <div className="premium-brands__header text-center">

                        <h2 className="premium-brands__title">Our <span>Clients</span></h2>
                    </div>

                    {/* Scrollable client cards with logos (repeating like product brands) */}
                    <div className="premium-brands__marquee">
                        <div className="premium-brands__track">
                            {[...ClientName, ...ClientName, ...ClientName, ...ClientName].map((client, i) => (
                                <ClientCard key={`${client.id}-${i}`} client={client} />
                            ))}
                        </div>
                    </div>

                </div>
            </section>

            {/* Testimonials Section */}
            <section className="premium-testimonials section-padding">
                <div className="container">
                    <div className="section-header text-center">
                        <span className="section-subtitle">Client Success Stories</span>
                        <h2 className="section-title">What Our <span>Partners Say</span></h2>
                    </div>

                    <div className="testimonials-grid">
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="testimonial-card">
                                <div className="testimonial-quote-icon">“</div>
                                <p className="testimonial-text">{t.quote}</p>
                                <div className="testimonial-author">
                                    <img src={t.avatar} alt={t.name} className="testimonial-avatar" />
                                    <div className="testimonial-info">
                                        <h4 className="testimonial-name">{t.name}</h4>
                                        <span className="testimonial-desc">{t.designation}</span>
                                        <span className="testimonial-location">{t.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What Makes Us Special Section */}
            {/* <section className="hm-special">
                <div className="container">
                    <div className="hm-special__content text-center">
                        <span className="section-subtitle">Commitment to Quality</span>
                        <h2 className="section-title">What <span>Makes Us Special</span></h2>
                        <div className="hm-special__text-block">
                            <p className="hm-special__text">
                                We are committed to maintain and improve the quality of products that are being manufactured and supplied.

                                We at RR Veterinary Health Care Private Limited follow National and International standards to ensure that the quality is maintained at all systems deployed.
                            </p>
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Stats Section: Premium Counters */}
            <section className="hm-stats">
                <div className="container">
                    <div className="hm-special__content text-center">
                        <span className="section-subtitle">Commitment to Quality</span>
                        <h2 className="section-title">What <span>Makes Us Special</span></h2>
                        <div className="hm-special__text-block">
                            <p className="hm-special__text">
                                We are committed to maintain and improve the quality of products that are being manufactured and supplied.

                                We at RR Veterinary Health Care Private Limited follow National and International standards to ensure that the quality is maintained at all systems deployed.
                            </p>
                        </div>

                    </div>
                    <div className="hm-stats__grid">
                        {[
                            { icon: <Users size={32} />, count: '2000+', label: 'Happy Clients', color: '#0B4A8F' },
                            // { icon: <Handshake size={32} />, count: '30+', label: 'Supporters', color: '#39B54A' },
                            { icon: <Trophy size={32} />, count: '18+', label: 'Experience', color: '#0B4A8F' },
                            // { icon: <Heart size={32} />, count: '35+', label: 'Employees', color: '#39B54A' }
                        ].map((stat, i) => (
                            <div key={i} className="hm-stats__card">
                                <div className="hm-stats__icon" style={{ backgroundColor: `${stat.color}15`, color: stat.color }}>
                                    {stat.icon}
                                </div>
                                <div className="hm-stats__info">
                                    <div className="hm-stats__value">
                                        <AnimatedCounter value={stat.count} />
                                    </div>
                                    <div className="hm-stats__label">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <Link to="/quality-policy" className="premium-about__btn premium-about__btn--centered">
                        <span>View Quality Policy</span>
                        <ChevronRight size={18} />
                    </Link> */}
                </div>
            </section>

        </div>
    );
};

export default Home;
