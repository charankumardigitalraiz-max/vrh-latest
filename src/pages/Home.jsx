import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Users, Trophy, Briefcase, Heart, ShoppingBag, ArrowRight, Lightbulb, ShieldCheck, Handshake } from 'lucide-react';
import './Home.css';
import productsData from '../data/products.json';

const AnimatedCounter = ({ value, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
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

const Home = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [activeProdCategory, setActiveProdCategory] = useState('poultry');

    const featuredProducts = {
        poultry: ['avigrow', 'avit', 'calciboost', 'avicure-fs'].map(slug => productsData.products.find(p => p.slug === slug)).filter(Boolean),
        aquaculture: ['humifyaqua', 'quatsure', 'ligabind', 'oxyenrich'].map(slug => productsData.products.find(p => p.slug === slug)).filter(Boolean)
    };

    const slides = [
        { id: 1, image: '/images/heroes/banner1.jpg', title: "Elevating Standards in\nPoultry Healthcare", subtitle: "Advanced nutritional and disease management solutions for optimal flock performance" },
        { id: 2, image: '/images/heroes/fish_group_water.png', title: "Sustainable Aqua\nCulture Solutions", subtitle: "Expertise in boosting productivity with advanced biosecurity and pond management" },
        // { id: 3, image: '/images/heroes/fish_in_water.png', title: "Innovating Marine\nHealth & Wellness", subtitle: "Comprehensive products for enhanced growth and disease resistance in aquaculture" },
        { id: 4, image: 'https://plus.unsplash.com/premium_photo-1661963032593-f1318e153cb8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', title: "Science, experience, \ncompassion together", subtitle: "Dedicated for providing advanced solutions for sustainable farming" }
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
        'sneha.png', 'suguna.png', 'vh-group.png', '4-1.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg',
        '9-1.jpg', '10-1.jpg', '11.jpg', '12-1.jpg', '13.jpg', '14.jpg'
    ];

    const coreValues = [
        { title: "Innovation", desc: "Look beyond the obvious to discover anew", icon: <Lightbulb size={18} /> },
        { title: "Commitment", desc: "Always with you – Nurturing, Empowering, Caring", icon: <Heart size={18} /> },
        { title: "Integrity", desc: "Values determine the direction of your success path", icon: <ShieldCheck size={18} /> },
        { title: "Teamwork", desc: "Togetherness in our strength – Catalyst for growth", icon: <Users size={18} /> },
        { title: "Excellence", desc: "Steer steadily on the path of success", icon: <Trophy size={18} /> }
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
                                        {/* <div className="hm-hero__badge">Leading Care Since 2016</div> */}
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

            {/* Features Section — Horizontal Showcase */}
            <section className="expertise-section">
                <div className="container">
                    <div className="expertise-header">
                        <span className="expertise-eyebrow">What We Do</span>
                        <h2 className="expertise-title">Our <span>Expertise</span></h2>
                        <p className="expertise-desc">Comprehensive veterinary healthcare solutions tailored for every segment of animal farming.</p>
                    </div>
                </div>

                <div className="expertise-showcase">
                    {[
                        {
                            id: 'poultry',
                            num: '01',
                            name: 'Poultry',
                            // label: 'Veterinary Solutions',
                            img: '/poultry_showcase.avif',
                            color: '#e8f5e9',
                            accent: '#2e7d32',
                            desc: 'Providing End-to-End Health Management for Broilers, Layers and Parents-emphasize on Bio Security and Growth Optimization Strategy '
                        },
                        {
                            id: 'aquaculture',
                            num: '02',
                            name: 'Aquaculture',
                            // label: 'Water Health',
                            img: '/images/fish.png',
                            color: '#e3f2fd',
                            accent: '#0277bd',
                            desc: 'A precision water quality and disease management solution for thriving aquatic growth.'
                        },

                        // {
                        //     id: 'large-animals',
                        //     num: '03',
                        //     name: 'Large Animals',
                        //     label: 'Livestock Care',
                        //     img: '/images/large-animals.png',
                        //     color: '#fff8e1',
                        //     accent: '#f57f17',
                        //     desc: 'Nutritional and pharmaceutical support for cattle, horses, and working livestock.'
                        // },
                        // {
                        //     id: 'sheep-goat',
                        //     num: '04',
                        //     name: 'Sheep & Goat',
                        //     label: 'Small Ruminants',
                        //     img: '/images/sheep.png',
                        //     color: '#fce4ec',
                        //     accent: '#ad1457',
                        //     desc: 'Specialized health programs for small ruminant farmers focused on productivity and welfare.'
                        // },
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



            {/* Modernized About Section */}
            <section className="premium-about" id="about">
                <div className="container">
                    <div className="premium-about__wrapper">

                        {/* Left: Visual/Image side with Floating Badge */}
                        <div className="premium-about__visual">
                            <div className="premium-about__img-wrap">
                                <img src="https://images.unsplash.com/photo-1614120263669-43911b47f0b2?q=80&w=520&auto=format&fit=crop" alt="RR Veterinary Healthcare" className="premium-about__img" />
                                <div className="premium-about__overlay-shape"></div>
                            </div>
                            {/* <div className="premium-about__badge">
                                <div className="premium-about__badge-year">15+</div>
                                <div className="premium-about__badge-text">Years of<br />Excellence</div>
                            </div> */}
                        </div>

                        {/* Right: Content side */}
                        <div className="premium-about__content">
                            <div className="premium-about__header">
                                <span className="premium-about__eyebrow">Company Profile</span>
                                <h2 className="premium-about__title">Who <span>We Are</span></h2>
                            </div>

                            <div className="premium-about__text-block">
                                <p className="premium-about__text">
                                    RR Veterinary Healthcare Pvt. Ltd. is one of the leading veterinary health care solution providers in India. Our presence is known to the world as RR Health Care Private Limited which has provided quality service to the Poultry, Aquaculture and Animal Healthcare segments in recent times. Reorganized in the year 2016, RR Veterinary Healthcare Pvt. Ltd. is driven by relentless pursuit for Quality products at a better price and persistent dedication to serve its clientele in the field of health care.
                                </p>

                                <Link to="/about-us" className="premium-about__btn">
                                    <span>Read Our Story</span>
                                    <ChevronRight size={18} />
                                </Link>

                                <div className="premium-about__info-row">
                                    <div className="premium-about__values">
                                        {coreValues.map((val, i) => (
                                            <div key={i} className="value-item">
                                                <div className="value-icon">{val.icon}</div>
                                                <div className="value-content">
                                                    <h4 className="value-title">{val.title}</h4>
                                                    <p className="value-desc">{val.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
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
                                            {activeProdCategory === 'poultry' ? 'Poultry' : 'Aqua'}
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
                            <span>Explore All {activeProdCategory === 'poultry' ? 'Poultry' : 'Aquaculture'} Products</span>
                            <ShoppingBag size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Productivity & Delivery Section (Video Gallery) */}
            {/* Productivity & Delivery Section (Video Gallery) - Cinematic Dark Mode */}
            <section className="premium-video-gallery" id="productivity">
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
            </section>

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
                            { icon: <Users size={32} />, count: '1200+', label: 'Happy Clients', color: '#0dcaf0' },
                            { icon: <Handshake size={32} />, count: '30+', label: 'Supporters', color: '#ffc107' },
                            { icon: <Trophy size={32} />, count: '10+', label: 'Experience', color: '#048a81' },
                            { icon: <Heart size={32} />, count: '35+', label: 'Employees', color: '#f43f5e' }
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
                    <Link to="/quality-policy" className="premium-about__btn premium-about__btn--centered">
                        <span>View Quality Policy</span>
                        <ChevronRight size={18} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
