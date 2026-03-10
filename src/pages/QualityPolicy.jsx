import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, CheckCircle, BadgeCheck, X } from 'lucide-react';
import './QualityPolicy.css';

const certificates = [
    { id: 1, src: '/certificate/rrvhcqp1-208x300@2x.jpg', alt: 'RR Veterinary Quality Certificate 1' },
    { id: 2, src: '/certificate/rrvhcqp2-208x300@2x.jpg', alt: 'RR Veterinary Quality Certificate 2' },
    { id: 3, src: '/certificate/rrvhcqp3-208x300@2x.jpg', alt: 'RR Veterinary Quality Certificate 3' },
    { id: 4, src: '/certificate/rrvhcqp4-208x300@2x.jpg', alt: 'RR Veterinary Quality Certificate 4' },
];

const QualityPolicy = () => {
    const [lightbox, setLightbox] = useState(null);

    return (
        <div className="qp-page">

            {/* ── HERO BANNER ── */}
            <section className="qp-hero" style={{ backgroundImage: "url('/images/heroes/aqua-baner.jpg')" }}>
                <div className="qp-hero__overlay" />
                <div className="container qp-hero__inner">
                    <h1 className="qp-hero__title">Quality Policy</h1>
                    <nav className="qp-hero__breadcrumb">
                        <Link to="/">Home</Link>
                        <span>/</span>
                        <span className="active">Quality Policy</span>
                    </nav>
                </div>
            </section>

            {/* ── POLICY SECTION ── */}
            <section className="qp-policy-section">
                <div className="container">
                    <div className="qp-layout">

                        {/* Left — Policy Statement */}
                        <div className="qp-statement">
                            <div className="qp-label">Our Commitment</div>
                            <h2 className="qp-heading">Quality <span>Policy</span></h2>
                            <p className="qp-lead">
                                We are committed to maintain and improve the quality of products that are being manufactured and supplied.
                            </p>
                            <p className="qp-body">
                                We at <strong>RR Veterinary Health Care Private Limited</strong> follows National and International standards to ensure that the quality is maintained at all systems deployed.
                            </p>
                            <p className="qp-body">
                                Our emphasis is to enhance customer satisfaction and to achieve continual improvement and effectiveness of the system through the implementation of Quality Management System and complying with statutory requirements applicable to the products of animal health.
                            </p>

                            {/* Commitment Badges */}
                            <div className="qp-badges">
                                <div className="qp-badge-item">
                                    <div className="qp-badge-icon"><ShieldCheck size={22} /></div>
                                    <span>Quality Assured</span>
                                </div>
                                <div className="qp-badge-item">
                                    <div className="qp-badge-icon"><Award size={22} /></div>
                                    <span>International Standards</span>
                                </div>
                                <div className="qp-badge-item">
                                    <div className="qp-badge-icon"><CheckCircle size={22} /></div>
                                    <span>Statutory Compliance</span>
                                </div>
                                <div className="qp-badge-item">
                                    <div className="qp-badge-icon"><BadgeCheck size={22} /></div>
                                    <span>Continual Improvement</span>
                                </div>
                            </div>
                        </div>

                        {/* Right — Decorative Visual */}
                        <div className="qp-visual">
                            <div className="qp-visual-card">
                                <div className="qp-icon-ring">
                                    <ShieldCheck size={60} />
                                </div>
                                <h3>RR Veterinary</h3>
                                <p>Quality Management System</p>
                                <ul className="qp-checklist">
                                    <li><CheckCircle size={16} /><span>Product Safety & Efficacy</span></li>
                                    <li><CheckCircle size={16} /><span>National Standards Compliance</span></li>
                                    <li><CheckCircle size={16} /><span>International Quality Standards</span></li>
                                    <li><CheckCircle size={16} /><span>Customer Satisfaction Focus</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── CERTIFICATES GALLERY ── */}
            <section className="qp-certificates-section">
                <div className="container">
                    <div className="qp-certs-header">
                        <div className="qp-label">Verified Excellence</div>
                        <h2 className="qp-heading">Our <span>Certificates</span></h2>
                        <p className="qp-certs-sub">Recognized by national and international bodies for maintaining the highest standards in veterinary healthcare.</p>
                    </div>

                    <div className="qp-cert-grid">
                        {certificates.map((cert) => (
                            <div key={cert.id} className="qp-cert-card" onClick={() => setLightbox(cert)}>
                                <div className="qp-cert-img-wrap">
                                    <img src={cert.src} alt={cert.alt} />
                                    <div className="qp-cert-overlay">
                                        <div className="qp-cert-zoom">🔍 View</div>
                                    </div>
                                </div>
                                {/* <div className="qp-cert-footer">
                                    <Award size={18} />
                                    <span>Certificate of Quality</span>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── LIGHTBOX ── */}
            {lightbox && (
                <div className="qp-lightbox" onClick={() => setLightbox(null)}>
                    <div className="qp-lightbox-inner" onClick={e => e.stopPropagation()}>
                        <button className="qp-lightbox-close" onClick={() => setLightbox(null)}>
                            <X size={24} />
                        </button>
                        <img src={lightbox.src} alt={lightbox.alt} />
                    </div>
                </div>
            )}

        </div>
    );
};

export default QualityPolicy;
