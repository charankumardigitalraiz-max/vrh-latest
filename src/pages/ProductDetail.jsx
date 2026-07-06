import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import productData from '../data/products.json';
import { Download, ChevronRight, ArrowLeft, X, Phone, Mail, MessageSquare, ImageOff } from 'lucide-react';
import './ProductDetail.css';

const ProductImage = ({ src, alt, className }) => {
    const [error, setError] = useState(false);

    if (error || !src || src === '/images/no_image.png') {
        return (
            <div className={`fallback-image-wrapper ${className || ''}`}>
                <ImageOff className="fallback-image-icon" />
            </div>
        );
    }

    return (
        <img
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
        />
    );
};


const ProductDetail = () => {
    const { slug } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const product = productData.products.find(p => p.slug === slug);
    const [activeTab, setActiveTab] = useState(0);
    const [showContactModal, setShowContactModal] = useState(false);

    // Scroll to top when product changes
    useEffect(() => {
        window.scrollTo(0, 0);
        setActiveTab(0);
    }, [slug]);

    if (!product) {
        return (
            <div className="container py-5 text-center mt-5">
                <h2 className="text-muted">Product not found.</h2>
                <Link to="/" className="btn btn-theme mt-3">Return to Home</Link>
            </div>
        );
    }

    const tabKeys = Object.keys(product.tabs);

    // Find related products (from same category)
    const getRelatedProducts = () => {
        let categoryKey = 'poultry'; // default
        for (const [key, cat] of Object.entries(productData.categories)) {
            if (cat.products.includes(slug)) {
                categoryKey = key;
                break;
            }
        }

        const categoryProducts = productData.categories[categoryKey].products;
        const relatedSlugs = categoryProducts.filter(s => s !== slug).slice(0, 4);

        return productData.products.filter(p => relatedSlugs.includes(p.slug));
    };

    const relatedProducts = getRelatedProducts();


    console.log(relatedProducts)

    return (
        <div className="product-detail-page animate-fade-in">
            {/* Elegant Header Section */}
            <div className="product-page-header">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between">
                        {/* <ul className="product-breadcrumb">
                            <li><Link to="/" className="breadcrumb-link">Home</Link></li>
                            <li className="breadcrumb-divider">/</li>
                            <li><Link to="/products" className="breadcrumb-link">Products</Link></li>
                            <li className="breadcrumb-divider">/</li>
                            <li className="breadcrumb-current">{product.title}</li>
                        </ul> */}
                        <button onClick={() => navigate(-1)} className="back-to-products">
                            <ArrowLeft size={16} className="me-2" /> Back to Products
                        </button>
                    </div>
                </div>
            </div>

            <div className="container pb-5">
                <div className="row row-gap-5">
                    {/* Sidebar with Image */}
                    <div className="col-lg-4 animate-scale-in">
                        <div className="sticky-sidebar">
                            <div className="product-image-box">
                                <ProductImage
                                    src={product.image}
                                    alt={product.title}
                                    className="product-image-large"
                                />
                                <div className="image-accent-dots"></div>
                            </div>

                            <div className="help-box">
                                <div className="help-box-decor"></div>
                                <div className="help-box-content">
                                    <h3 className="help-title">
                                        <ChevronRight className="help-icon" /> Technical Support
                                    </h3>
                                    <p className="help-text">Expert guidance for using {product.title} in your farm management.</p>
                                    <button
                                        onClick={() => setShowContactModal(true)}
                                        className="help-btn"
                                    >
                                        Ask an Expert
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="col-lg-8 animate-slide-up">
                        <div className="product-content-wrapper">
                            <div className="product-header-badge">Premium Veterinary Solution</div>
                            <h1 className="product-main-title">{product.title}</h1>
                            <p className="product-subtitle">{product.subtitle}</p>

                            {product.brochure && (
                                <div className="download-section">
                                    <div className="download-icon-box">
                                        <Download size={24} />
                                    </div>
                                    <div className="download-info">
                                        <h3 className="download-title">Product Brochure</h3>
                                        <div className="download-subtitle">Technical Specifications (PDF)</div>
                                    </div>
                                    <a
                                        href={product.brochure}
                                        download={product.brochure.split('/').pop()}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="download-btn-compact"
                                    >
                                        Download PDF
                                    </a>
                                </div>
                            )}

                            {/* Enhanced Tabs */}
                            {tabKeys.length > 0 && (
                                <div className="tabs-container-premium">
                                    <div className="tab-buttons-row">
                                        {tabKeys.map((key, index) => (
                                            <button
                                                key={key}
                                                className={`tab-item ${activeTab === index ? 'active' : ''}`}
                                                onClick={() => setActiveTab(index)}
                                            >
                                                {product.tabs[key].title}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tab-pane-content">
                                        <div
                                            className="content-rich-text"
                                            dangerouslySetInnerHTML={{ __html: product.tabs[tabKeys[activeTab]].content }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                {/* {relatedProducts.length > 0 && (
                    <div className="related-products-section mt-5 animate-slide-up">
                        <div className="section-header-centered">
                            <h2 className="related-title">Related Products</h2>
                            <div className="title-divider"></div>
                        </div>
                        <div className="related-grid mt-4">
                            {relatedProducts.map(rel => (
                                <Link to={`/product/${rel.slug}`} key={rel.slug} className="related-card">
                                    <div className="related-image-box">
                                        <ProductImage src={rel.image} alt={rel.title} />
                                    </div>
                                    <div className="related-info">
                                        <h4 className="related-item-title">{rel.title}</h4>
                                        <span className="related-view-btn">View Details <ChevronRight size={14} /></span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                )} */}
            </div>

            {/* ── Contact Modal ── */}
            {showContactModal && createPortal(
                <div className="contact-modal-overlay" onClick={() => setShowContactModal(false)}>
                    <div className="contact-modal-container animate-scale-in" onClick={e => e.stopPropagation()}>
                        <button className="modal-close-btn" onClick={() => setShowContactModal(false)}>
                            <X size={20} />
                        </button>

                        <div className="modal-header">
                            <div className="modal-icon-box">
                                <MessageSquare size={24} />
                            </div>
                            <h2 className="modal-title">Expert Support</h2>
                            <p className="modal-subtitle">Direct line to our technical team for {product.title}.</p>
                        </div>

                        <div className="modal-content-grid">
                            <a href="tel:+91 94410 31794" className="modal-contact-pill hover-lift">
                                <div className="pill-icon-box"><Phone size={20} /></div>
                                <div className="pill-info">
                                    <span className="pill-label">Call Us</span>
                                    <span className="pill-value">+91 94410 31794</span>
                                </div>
                            </a>

                            <a href="mailto:info@rrveterinary.in" className="modal-contact-pill hover-lift">
                                <div className="pill-icon-box"><Mail size={20} /></div>
                                <div className="pill-info">
                                    <span className="pill-label">Email Us</span>
                                    <span className="pill-value">sreekanthdevalraju@rrveterinary.in</span>
                                </div>
                            </a>

                            <div className="modal-footer-note">
                                <p>Available Monday - Saturday: 9:00 AM - 5:30 PM</p>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </div>
    );
};

export default ProductDetail;
