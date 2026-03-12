import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Mail, Phone, Facebook, Twitter, Linkedin, Menu, X, ChevronDown } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openSubDropdown, setOpenSubDropdown] = useState(null);
    const [openSubSubDropdown, setOpenSubSubDropdown] = useState(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        setOpenSubDropdown(null);
        setOpenSubSubDropdown(null);
    }, [location]);

    const toggleDropdown = (name) => {
        if (window.innerWidth < 992) {
            setOpenDropdown(openDropdown === name ? null : name);
            setOpenSubDropdown(null);
            setOpenSubSubDropdown(null);
        }
    };

    const toggleSubDropdown = (e, name) => {
        if (window.innerWidth < 992) {
            e.preventDefault();
            e.stopPropagation();
            setOpenSubDropdown(openSubDropdown === name ? null : name);
            setOpenSubSubDropdown(null);
        }
    };

    const toggleSubSubDropdown = (e, name) => {
        if (window.innerWidth < 992) {
            e.preventDefault();
            e.stopPropagation();
            setOpenSubSubDropdown(openSubSubDropdown === name ? null : name);
        }
    };

    return (
        <div className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
            {/* Top Bar */}
            <div className={`top-bar ${isScrolled ? 'hidden' : ''}`}>
                <div className="container">
                    <div className="top-bar-inner">
                        <div className="contact-info d-flex gap-4">
                            <a href="mailto:info@rrvhc.in" className="top-bar-link">
                                <Mail size={16} className="text-warning" /> info@rrveterinary.in
                            </a>
                            <div className="top-bar-link">
                                <Phone size={16} className="text-warning" /> +91 9490410562, +91-40 2970 5562
                            </div>
                        </div>
                        <div className="social-links">
                            <span className="me-2 text-white text-opacity-75" style={{ fontSize: '0.8rem' }}>Connect with us:</span>
                            <a href="https://www.facebook.com/RR-Veterinary-896662690480674/" aria-label="Facebook"><Facebook size={15} /></a>
                            <a href="https://x.com/RrVeterinary" aria-label="Twitter"><Twitter size={15} /></a>
                            <a href="https://www.linkedin.com/in/rr-veterinary-124445163/" aria-label="LinkedIn"><Linkedin size={15} /></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`site-header ${isScrolled ? 'scrolled-pill' : ''}`}>
                <div className="container">
                    <div className="header-inner">
                        <Link className="logo-link" to="/">
                            <img src="/images/logo.png" alt="RR Veterinary Logo" className="logo-img" />
                        </Link>

                        <button
                            className="mobile-toggle"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle navigation"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>

                        <nav className={`nav-container`}>
                            <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about-us">About Us</Link>
                                </li>
                                <li className={`nav-item dropdown ${openDropdown === 'products' ? 'open' : ''}`}
                                    onMouseEnter={() => window.innerWidth >= 992 && setOpenDropdown('products')}
                                    onMouseLeave={() => window.innerWidth >= 992 && setOpenDropdown(null)}
                                >
                                    <button
                                        className="nav-link w-100 bg-transparent border-0"
                                        onClick={() => toggleDropdown('products')}
                                    >
                                        Products <ChevronDown size={14} className="ms-1" />
                                    </button>
                                    <div className="dropdown-menu">
                                        <Link className="dropdown-item" to="/category/poultry">Poultry</Link>
                                        <Link className="dropdown-item" to="/category/aquaculture">Aquaculture</Link>
                                        <Link className="dropdown-item" to="/category/large-animals">Large Animals</Link>
                                        <Link className="dropdown-item" to="/category/canine">Canine</Link>
                                        <Link className="dropdown-item" to="/category/sheep-goat">Sheep & Goat</Link>
                                    </div>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/quality-policy">Quality Policy</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/careers">Careers</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/gallery">Gallery</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contact-us">Contact Us</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
