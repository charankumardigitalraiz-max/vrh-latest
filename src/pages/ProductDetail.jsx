import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import productData from '../data/products.json';
import { Download, ChevronRight } from 'lucide-react';
import './ProductDetail.css';

const ProductDetail = () => {
    const { slug } = useParams();
    const product = productData.products.find(p => p.slug === slug);
    const [activeTab, setActiveTab] = useState(0);

    if (!product) {
        return (
            <div className="container py-5 text-center mt-5">
                <h2 className="text-muted">Product not found.</h2>
                <Link to="/" className="btn btn-theme mt-3">Return to Home</Link>
            </div>
        );
    }

    const tabKeys = Object.keys(product.tabs);

    return (
        <div className="product-detail-page animate-fade-in">
            {/* Page Banner */}
            {/* <div className="product-banner" style={{ backgroundImage: "url('/images/banner.jpg')" }}>
                <div className="product-overlay"></div>
                <div className="container product-header-content animate-slide-up">
                    <h1 className="product-title-banner">{product.title}</h1>
                    <ul className="product-breadcrumb">
                        <li><Link to="/" className="breadcrumb-link">Home</Link></li>
                        <li>/</li>
                        <li className="breadcrumb-current">{product.title}</li>
                    </ul>
                </div>
            </div> */}

            <div className="container pb-5">
                <div className="row row-gap-4">
                    <div className="col-lg-8 animate-slide-up delay-100">
                        <div className="product-content-wrapper">
                            <h2 className="product-main-title">{product.title}</h2>
                            <p className="product-subtitle">{product.subtitle}</p>

                            {product.brochure && (
                                <div className="download-section">
                                    <div className="download-icon">
                                        <div className="pdf-icon-placeholder" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '48px', height: '48px', background: 'rgba(220, 53, 69, 0.1)', borderRadius: '8px' }}>
                                            <Download size={28} color="#dc3545" />
                                        </div>
                                    </div>
                                    <div className="download-info">
                                        <h3 className="download-title">{product.title} Brochure</h3>
                                        <div className="download-subtitle">Click to view/download PDF</div>
                                    </div>
                                    <a
                                        href={product.brochure}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="download-btn text-decoration-none"
                                    >
                                        <Download size={18} className="me-2" /> Download
                                    </a>
                                </div>
                            )}

                            {/* Tabs Implementation */}
                            {tabKeys.length > 0 && (
                                <div className="tabs-container">
                                    <div className="tab-buttons">
                                        {tabKeys.map((key, index) => (
                                            <button
                                                key={key}
                                                className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                                                onClick={() => setActiveTab(index)}
                                            >
                                                {product.tabs[key].title}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="tab-content animate-fade-in">
                                        <div
                                            dangerouslySetInnerHTML={{ __html: product.tabs[tabKeys[activeTab]].content }}
                                        />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-lg-4 animate-scale-in delay-200">
                        <div className="sticky-sidebar">
                            <div className="product-image-box">
                                <img
                                    src={product.image || '/images/no_image.png'}
                                    alt={product.title}
                                    className="product-image-large"
                                />
                            </div>

                            <div className="help-box">
                                <div className="help-box-decor"></div>
                                <div className="help-box-content">
                                    <h3 className="help-title">
                                        <ChevronRight className="help-icon" /> Need Help?
                                    </h3>
                                    <p className="help-text">Contact our experts for customized nutritional solutions regarding {product.title}.</p>
                                    <Link to="/contact-us" className="help-btn">
                                        Inquiry Now
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
