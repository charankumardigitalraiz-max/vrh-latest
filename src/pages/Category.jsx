import React, { useMemo, useState, useEffect, useCallback } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import productData from '../data/products.json';
import { productCategories } from '../data/categories';
import { ChevronRight, ChevronDown, Filter, X } from 'lucide-react';
import './Category.css';

const Category = () => {
    const { slug } = useParams();
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const subCategory = queryParams.get('sub');

    // Find current category from our defined structure
    const currentCategory = useMemo(() =>
        productCategories.find(c => c.slug === slug),
        [slug]);

    // ──────────────────────────────
    // Tree Helper Functions
    // ──────────────────────────────
    const findNodeById = useCallback((nodes, targetId) => {
        if (!nodes) return null;
        for (let node of nodes) {
            if (node.id === targetId || node.slug === targetId) return node;
            const children = node.items || node.subCategories;
            if (children) {
                const found = findNodeById(children, targetId);
                if (found) return found;
            }
        }
        return null;
    }, []);

    const getProductSlugsFromNode = useCallback((node) => {
        let slugs = [];
        const children = node.items || node.subCategories;
        if (children && children.length > 0) {
            // It's a category, go deeper
            children.forEach(child => {
                slugs = [...slugs, ...getProductSlugsFromNode(child)];
            });
        } else {
            // It's a leaf (product)
            slugs.push(node.id || node.slug);
        }
        return slugs;
    }, []);

    // ──────────────────────────────
    // NEW: Recursive Interactive State for Accordion Sidebar
    // ──────────────────────────────
    const [openGroups, setOpenGroups] = useState(new Set());
    const [isFilterOpen, setIsFilterOpen] = useState(false);

    // Helper to recursively check if an item or its children contains the active ID
    const containsActiveItem = useCallback((item, activeId) => {
        if (item.id === activeId) return true;
        const children = item.items || item.subCategories;
        if (children) {
            return children.some(child => containsActiveItem(child, activeId));
        }
        return false;
    }, []);

    // Auto-open accordion to the active sub-category on load
    useEffect(() => {
        if (currentCategory && subCategory) {
            const newOpenGroups = new Set(openGroups);

            const openActivePaths = (items) => {
                items.forEach(item => {
                    const children = item.items || item.subCategories;
                    if (children && containsActiveItem(item, subCategory)) {
                        newOpenGroups.add(item.id);
                        openActivePaths(children); // check deeper
                    }
                });
            };

            openActivePaths(currentCategory.subCategories);
            setOpenGroups(newOpenGroups);
        }
    }, [currentCategory, subCategory, containsActiveItem]);

    // Handle toggling
    const toggleGroup = (id) => {
        setOpenGroups(prev => {
            const newGroups = new Set(prev);
            if (newGroups.has(id)) {
                newGroups.delete(id);
            } else {
                newGroups.add(id);
            }
            return newGroups;
        });
    };

    // Recursive SidebarNode Component
    const SidebarNode = ({ node, level = 0 }) => {
        const isOpen = openGroups.has(node.id);
        const isActive = subCategory === node.id;

        // A node should only act as a folder (accordion) if it contains actual sub-categories, not just products.
        // We assume an item is a sub-category if it contains its own 'items'. 
        // If it doesn't have 'items', it's a leaf product, meaning the current node is a Leaf Category.
        const children = node.items || node.subCategories;
        const isCategoryContainer = children && children.some(child => child.items && child.items.length > 0);

        // Removed programmatic padding to let Category.css handle clean indentation naturally.

        if (isCategoryContainer) {
            return (
                <div className={`sidebar-group level-${level}`}>
                    <div className="sidebar-sub-group">
                        <div
                            className={`sidebar-label accordion-trigger level-${level} ${isOpen ? 'open' : ''}`}
                            onClick={() => toggleGroup(node.id)}
                            style={{
                                cursor: 'pointer',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center'
                            }}
                        >
                            <span>{node.name}</span>
                            <ChevronRight
                                size={14}
                                className={`chevron-toggle ${isOpen ? 'open' : ''}`}
                                style={{
                                    transition: 'transform 0.3s ease',
                                    transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)'
                                }}
                            />
                        </div>

                        {isOpen && (
                            <div className="sidebar-sub-items animate-fade-in-down">
                                {children.map(child => (
                                    <SidebarNode key={child.id} node={child} level={level + 1} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            );
        }

        // Leaf Node Category (does not render its "items" which are products into the sidebar)
        return (
            <Link
                to={`/category/${slug}?sub=${node.id}`}
                className={`sidebar-link sub-link level-${level} ${isActive ? 'active' : ''}`}
            >
                {node.name}
            </Link>
        );
    };

    if (!currentCategory) {
        return <div className="p-5 text-center">Category not found</div>;
    }

    // Filter products based on category slug and sub-category tree
    const products = useMemo(() => {
        let allowedSlugs = null;

        if (subCategory && currentCategory) {
            const activeNode = findNodeById([currentCategory], subCategory);
            if (activeNode) {
                // Extracts all product IDs that live under this selected category node!
                allowedSlugs = getProductSlugsFromNode(activeNode);
            }
        }

        return productData.products.filter(p => {
            if (!slug) return true;

            const searchStr = (p.title + p.subtitle + p.slug + (p.image || '')).toLowerCase();
            const isInMainCategory = searchStr.includes(slug.toLowerCase()) ||
                (slug.toLowerCase() === 'aquaculture' && searchStr.includes('aqua'));

            if (!isInMainCategory) return false;
            if (!subCategory) return true;

            // Direct mapping based on the categories.js exact tree structure
            if (allowedSlugs && allowedSlugs.length > 0) {
                const isExactMatch = allowedSlugs.some(s => s === p.slug || s === p.id);
                if (isExactMatch) return true;

                // Relaxed string match if slugs differ slightly from IDs
                const isRelaxedMatch = allowedSlugs.some(s => {
                    const cleanS = s.toLowerCase().replace(/-/g, '');
                    const cleanP = (p.slug || '').toLowerCase().replace(/-/g, '');
                    return cleanS.includes(cleanP) || cleanP.includes(cleanS);
                });
                if (isRelaxedMatch) return true;
            }

            // Fallback: Check if the subCategory name/id appears in the image path or title
            const subCatId = subCategory.toLowerCase().replace(/-/g, '');
            const normalizedPath = (p.image || '').toLowerCase().replace(/[^a-z0-9]/g, '');

            return normalizedPath.includes(subCatId) || searchStr.includes(subCategory.toLowerCase());
        });
    }, [slug, subCategory, currentCategory, findNodeById, getProductSlugsFromNode]);

    const categoryTitle = currentCategory ? currentCategory.name : (slug ? slug.charAt(0).toUpperCase() + slug.slice(1) : "Our Products");

    return (
        <div className="category-page animate-fade-in">
            {/* Minimalist Top Header */}
            <div className="category-header-section">
                <div className="container">
                    <ul className="category-breadcrumb">
                        <li><Link to="/" className="breadcrumb-link">Home</Link></li>
                        <li className="breadcrumb-divider">/</li>
                        <li><Link to="/products" className="breadcrumb-link">Products</Link></li>
                        <li className="breadcrumb-divider">/</li>
                        <li className="breadcrumb-current">{categoryTitle}</li>
                    </ul>
                    <h1 className="category-display-title">{categoryTitle}</h1>
                    <div className="category-underline"></div>
                </div>
            </div>

            <div className="container products-container">

                {/* Mobile Filter Toggle Bar */}
                {slug !== 'aquaculture' && (
                    <div className="mobile-filter-toggle-bar">
                        <button
                            className={`mobile-filter-btn ${isFilterOpen ? 'open' : ''}`}
                            onClick={() => setIsFilterOpen(prev => !prev)}
                        >
                            <Filter size={16} />
                            <span>Filter by Category</span>
                            {currentCategory?.subCategories?.length > 0 && (
                                <span className="filter-count-badge">{currentCategory.subCategories.length}</span>
                            )}
                            <ChevronDown
                                size={16}
                                className={`filter-chevron ${isFilterOpen ? 'rotate' : ''}`}
                            />
                        </button>
                        {subCategory && (
                            <span className="active-filter-pill">
                                {subCategory.replace(/-/g, ' ')}
                                <Link to={`/category/${slug}`} className="remove-filter-pill">
                                    <X size={12} />
                                </Link>
                            </span>
                        )}
                    </div>
                )}

                <div className={`category-layout ${slug === 'aquaculture' ? 'no-sidebar' : ''}`}>
                    {/* Sidebar Navigator */}
                    {slug !== 'aquaculture' && (
                        <aside className={`category-sidebar ${isFilterOpen ? 'filter-open' : ''}`}>
                            <div className="sidebar-section">
                                <h4 className="sidebar-title">
                                    <Filter size={18} className="me-2" />
                                    Filter by Category
                                    {/* Close button — visible only on mobile */}
                                    <button
                                        className="sidebar-close-btn"
                                        onClick={() => setIsFilterOpen(false)}
                                        aria-label="Close filters"
                                    >
                                        <X size={18} />
                                    </button>
                                </h4>
                                <div className="sidebar-menu">
                                    <Link
                                        to={`/category/${slug}`}
                                        className={`sidebar-link ${!subCategory ? 'active' : ''}`}
                                    >
                                        All {categoryTitle || ""}
                                    </Link>

                                    {(currentCategory?.subCategories || []).map(sub => (
                                        <SidebarNode key={sub.id} node={sub} />
                                    ))}
                                </div>
                            </div>

                            {/* <div className="sidebar-cta">
                                <h5>Need Assistance?</h5>
                                <p>Our experts are here to help you find the right solution.</p>
                                <Link to="/contact-us" className="cta-link">Contact Us</Link>
                            </div> */}
                        </aside>
                    )}

                    {/* Product Listing Area */}
                    <div className="category-content">
                        {subCategory && (
                            <div className="active-filter-bar">
                                <span className="filter-label">Showing results for:</span>
                                <span className="filter-tag">
                                    {subCategory.replace(/-/g, ' ')}
                                    <Link to={`/category/${slug}`} className="remove-filter">×</Link>
                                </span>
                            </div>
                        )}

                        <div className="product-grid">
                            {products.map((product, i) => (
                                <div key={product.slug} className="animate-slide-up" style={{ animationDelay: `${(i % 5 + 1) * 100}ms` }}>
                                    <Link to={`/product/${product.slug}`} className="product-card-premium">
                                        <div className="card-accent"></div>
                                        <div className="product-content">
                                            <div className="product-type-badge">{slug || 'Product'}</div>
                                            <h3 className="product-title-premium">{product.title}</h3>
                                            <p className="product-description-premium">
                                                {product.subtitle || "Premium healthcare solution for veterinary needs."}
                                            </p>
                                            <div className="product-footer-premium">
                                                <span className="view-link">View Details</span>
                                                <div className="arrow-icon">→</div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>

                        {products.length === 0 && (
                            <div className="empty-state-premium animate-fade-in">
                                <div className="empty-icon">!</div>
                                <h3 className="empty-title">No products found</h3>
                                <p className="empty-text">We couldn't find any products matching your selection in this category.</p>
                                <Link to={`/category/${slug}`} className="btn-premium">Clear All Filters</Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
