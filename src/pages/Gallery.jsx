import React, { useState } from 'react';
import { X } from 'lucide-react';
import './Gallery.css';

// Sample gallery images
const galleryImages = [
    { id: 1, src: '/gallary/dM3J5wIsRr.jpg', alt: 'RR Veterinary Facility 1', category: 'facility' },
    { id: 2, src: '/gallary/dymzSRNGJI.jpg', alt: 'RR Veterinary Facility 2', category: 'facility' },
    { id: 3, src: '/gallary/jwY2O7KyqF.jpg', alt: 'RR Veterinary Facility 3', category: 'facility' },
    // Since we don't know the exact images in the previous gallery, we'll use existing slider images
    // as placeholders. These can be easily replaced by adding actual gallery images to the public/images folder.
    { id: 4, src: '/gallary/kw6DLrvFX8.jpg', alt: 'Poultry Products', category: 'products' },
    { id: 5, src: '/gallary/qVdsDZkh5S.jpg', alt: 'Avigrow Product', category: 'products' },
    // { id: 6, src: '/gallery/k4729qQ66x.jpg', alt: 'Flynnil Gold', category: 'products' },
];

const Gallery = () => {
    const [filter, setFilter] = useState('all');
    const [lightboxImg, setLightboxImg] = useState(null);

    const openLightbox = (imgSrc) => {
        setLightboxImg(imgSrc);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    };

    const closeLightbox = () => {
        setLightboxImg(null);
        document.body.style.overflow = 'auto';
    };

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter);

    return (
        <div className="gallery-page fade-in">
            {/* Page Banner */}
            <section className="page-banner gallery-banner" style={{ backgroundImage: "url('/images/heroes/aqua-banner2.jpg')" }}>
                <div className="container">
                    <div className="banner-content slide-up">
                        <h1 className="banner-title">Our Gallery</h1>
                        <p className="banner-subtitle">Take a visual tour of our state-of-the-art facilities and events.</p>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="gallery-content section-padding">
                <div className="container">

                    {/* Gallery Filters */}
                    {/* <div className="gallery-filters slide-up" style={{ animationDelay: '0.1s' }}>
                        <button
                            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
                            onClick={() => setFilter('all')}
                        >
                            All Images
                        </button>
                        <button
                            className={`filter-btn ${filter === 'facility' ? 'active' : ''}`}
                            onClick={() => setFilter('facility')}
                        >
                            Facilities
                        </button>
                        <button
                            className={`filter-btn ${filter === 'products' ? 'active' : ''}`}
                            onClick={() => setFilter('products')}
                        >
                            Products
                        </button>
                        <button
                            className={`filter-btn ${filter === 'events' ? 'active' : ''}`}
                            onClick={() => setFilter('events')}
                        >
                            Events
                        </button>
                    </div> */}

                    {/* Gallery Grid */}
                    <div className="gallery-grid">
                        {filteredImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="gallery-item slide-up"
                                style={{ animationDelay: `${0.1 * (index % 6 + 1)}s` }}
                                onClick={() => openLightbox(image.src)}
                            >
                                <div className="gallery-img-wrapper">
                                    <img src={image.src} alt={image.alt} className="gallery-img" loading="lazy" />
                                    <div className="gallery-overlay">
                                        <span className="view-text">Click to View</span>
                                    </div>
                                </div>
                            </div>
                        ))}

                        {filteredImages.length === 0 && (
                            <div className="col-12 text-center py-5">
                                <p className="text-muted lead">No images found in this category.</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImg && (
                <div className="lightbox active" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
                        <X size={32} />
                    </button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <img src={lightboxImg} alt="Enlarged view" className="lightbox-image" />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
