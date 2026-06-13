import React, { useEffect, useState, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mail, Phone, Menu, X, ChevronDown, Search } from 'lucide-react';
import productData from '../data/products.json';
import './Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    // Filter products based on search query
    const searchResults = searchQuery.trim().length > 1
        ? productData.products.filter(p =>
            p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
        ).slice(0, 6)
        : [];

    // Close search on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (searchRef.current && !searchRef.current.contains(e.target)) {
                setIsSearchOpen(false);
                setSearchQuery('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        setOpenDropdown(null);
        setIsSearchOpen(false);
        setSearchQuery('');
    }, [location]);

    // Lock/unlock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [isMobileMenuOpen]);

    return (
        <>
            {/* Fixed floating pill header that becomes full-width sticky on scroll */}
            <div className={`header-wrapper ${isScrolled ? 'scrolled' : ''}`}>
                <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`}>
                    {/* Logo */}
                    <Link className="header-logo" to="/">
                        <img src="images/RRVHC Logo copy (1).png" alt="RR Veterinary Logo" className="logo-img" />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="desktop-nav">
                        <ul className="nav-list">
                            <li>
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === '/about-us' ? 'active' : ''}`} to="/about-us">
                                    About Us
                                </Link>
                            </li>
                            <li className="has-dropdown">
                                <button
                                    className={`nav-link nav-btn ${(location.pathname.startsWith('/category') || location.pathname.startsWith('/product')) ? 'active' : ''}`}
                                >
                                    Products <ChevronDown size={14} style={{ marginLeft: '4px' }} />
                                </button>
                                <div className="dropdown-menu">
                                    <Link className="dropdown-item" to="/category/poultry">Poultry</Link>
                                    <Link className="dropdown-item" to="/category/aquaculture">Aquaculture</Link>
                                    <Link className="dropdown-item" to="/category/large-animals">Large Animals</Link>
                                    <Link className="dropdown-item" to="/category/canine">Canine</Link>

                                </div>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === '/quality-policy' ? 'active' : ''}`} to="/quality-policy">
                                    Quality Policy
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === '/careers' ? 'active' : ''}`} to="/careers">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`} to="/gallery">
                                    Gallery
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    {/* Search Bar */}
                    <div className="header-search" ref={searchRef}>
                        <div className="search-bar">
                            <Search size={16} className="search-bar-icon" />
                            <input
                                type="text"
                                className="search-bar-input"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                onFocus={() => setIsSearchOpen(true)}
                                onKeyDown={(e) => {
                                    if (e.key === 'Escape') {
                                        setIsSearchOpen(false);
                                        setSearchQuery('');
                                        e.target.blur();
                                    }
                                }}
                            />
                        </div>
                        {isSearchOpen && searchQuery.trim().length > 1 && (
                            <div className="search-results-dropdown">
                                {searchResults.length > 0 ? (
                                    searchResults.map((product) => (
                                        <Link
                                            key={product.slug}
                                            to={`/product/${product.slug}`}
                                            className="search-result-item"
                                            onClick={() => {
                                                setIsSearchOpen(false);
                                                setSearchQuery('');
                                            }}
                                        >
                                            <img
                                                src={product.image || '/images/no_image.png'}
                                                alt={product.title}
                                                className="search-result-img"
                                            />
                                            <div className="search-result-info">
                                                <span className="search-result-title">{product.title}</span>
                                                <span className="search-result-sub">{product.subtitle}</span>
                                            </div>
                                        </Link>
                                    ))
                                ) : (
                                    <div className="search-no-results">No products found</div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Right side actions */}
                    <div className="header-actions">
                        <Link to="/contact-us" className="contact-cta">
                            Contact Us
                        </Link>
                        {/* Mobile hamburger */}
                        <button
                            className="hamburger-btn"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle navigation"
                        >
                            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
                        </button>
                    </div>
                </header>
            </div>

            {/* Mobile full-screen overlay */}
            <div className={`mobile-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
                <div className="mobile-overlay-header">
                    <Link className="header-logo" to="/" onClick={() => setIsMobileMenuOpen(false)}>
                        <img src="/images/logo.png" alt="RR Veterinary Logo" className="logo-img" style={{ maxHeight: '55px' }} />
                    </Link>
                    <button className="hamburger-btn" onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu">
                        <X size={22} />
                    </button>
                </div>

                <ul className="mobile-nav-list">
                    <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about-us" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link></li>
                    <li className="mobile-has-dropdown">
                        <button onClick={() => setOpenDropdown(openDropdown === 'products' ? null : 'products')}>
                            Products
                            <ChevronDown size={18} className={openDropdown === 'products' ? 'chevron-open' : ''} />
                        </button>
                        <ul className={`mobile-submenu ${openDropdown === 'products' ? 'open' : ''}`}>
                            <li><Link to="/category/poultry" onClick={() => setIsMobileMenuOpen(false)}>Poultry</Link></li>
                            <li><Link to="/category/aquaculture" onClick={() => setIsMobileMenuOpen(false)}>Aquaculture</Link></li>
                            <li><Link to="/category/large-animals" onClick={() => setIsMobileMenuOpen(false)}>Large Animals</Link></li>
                            <li><Link to="/category/canine" onClick={() => setIsMobileMenuOpen(false)}>Canine</Link></li>
                            <li><Link to="/category/sheep-goat" onClick={() => setIsMobileMenuOpen(false)}>Sheep & Goat</Link></li>
                        </ul>
                    </li>
                    <li><Link to="/quality-policy" onClick={() => setIsMobileMenuOpen(false)}>Quality Policy</Link></li>
                    <li><Link to="/careers" onClick={() => setIsMobileMenuOpen(false)}>Careers</Link></li>
                    <li><Link to="/gallery" onClick={() => setIsMobileMenuOpen(false)}>Gallery</Link></li>
                    <li><Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                </ul>

                <div className="mobile-contact-strip">
                    <a href="tel:+919490410562"><Phone size={18} /> +91 9490410562</a>
                    <a href="mailto:info@rrveterinary.in"><Mail size={18} /> info@rrveterinary.in</a>
                </div>
            </div>
        </>
    );
};

export default Header;
