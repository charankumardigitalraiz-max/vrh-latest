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

// Video entries – using mp4 files placed under /videos folder
const galleryVideos = [
    {  id: 'gniEV7wDjNA', title: 'Main Video', category: 'events', type: 'video' },
    { id: 'jzX4s0uK0qo', title: 'Video 2', category: 'events', type: 'video' },
    { id: 'EeDUiPJIy8Q', title: 'Video 3', category: 'events', type: 'video' },
    { id: '0KzQgYVDcRg', title: 'Video 4', category: 'events', type: 'video' },
    { id: '8DGo_HlHCJ8', title: 'Video 5', category: 'events', type: 'video' },
    { id: 'OfeGs-uhqeQ', title: 'Video 6', category: 'events', type: 'video' },
];





// Unified media list
const galleryMedia = [...galleryImages, ...galleryVideos];

const Gallery = () => {
    const [filter, setFilter] = useState('all'); const [mediaTab, setMediaTab] = useState('photos');
    const [lightboxImg, setLightboxImg] = useState(null);

    const openLightbox = (imgSrc) => {
        setLightboxImg(imgSrc);
        document.body.style.overflow = 'hidden'; // Prevent scrolling when lightbox is open
    };

    const closeLightbox = () => {
        setLightboxImg(null);
        document.body.style.overflow = 'auto';
    };

    const renderPhoto = (item) => (
        <div key={item.id} className="gallery-item slide-up" style={{ animationDelay: `${0.1 * (item.id % 6 + 1)}s` }} onClick={() => openLightbox(item.src)}>
            <div className="gallery-img-wrapper">
                <img src={item.src} alt={item.alt} className="gallery-img" loading="lazy" />
                <div className="gallery-overlay"><span className="view-text">Click to View</span></div>
            </div>
        </div>
    );

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

                    {/* Media Tabs */}
                    <div className="gallery-filters">
                        <button
                            className={`filter-btn ${mediaTab === 'photos' ? 'active' : ''}`}
                            onClick={() => setMediaTab('photos')}
                        >
                            Photos
                        </button>
                        <button
                            className={`filter-btn ${mediaTab === 'videos' ? 'active' : ''}`}
                            onClick={() => setMediaTab('videos')}
                        >
                            Videos
                        </button>
                    </div>
                    {/* Gallery Grid */}
                    {mediaTab === 'videos' ? (
                        <div className="premium-video__grid">
                            {galleryVideos.map((vid, idx) => (
                                <div key={vid.id} className="premium-video__item" style={{ animationDelay: `${idx * 150}ms` }}>
                                    <iframe
                                        src={`https://www.youtube.com/embed/${vid.id}?feature=oembed&modestbranding=1&rel=0`}
                                        title={vid.title}
                                        allowFullScreen
                                        loading="lazy"
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="gallery-grid">
                            {galleryImages.map(renderPhoto)}

                            {galleryImages.length === 0 && (
                                <div className="col-12 text-center py-5">
                                    <p className="text-muted lead">No images found in this category.</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox Modal */}
            {lightboxImg && (
                <div className="lightbox active" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox} aria-label="Close Lightbox">
                        <X size={32} />
                    </button>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        {lightboxImg.endsWith('.mp4') ? (
                            <video src={lightboxImg} className="lightbox-video" controls autoPlay />
                        ) : (
                            <img src={lightboxImg} alt="Enlarged view" className="lightbox-image" />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Gallery;
