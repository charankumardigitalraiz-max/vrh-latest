import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ChevronDown, Mail, Users, Award, X, FileText, Send } from 'lucide-react';
import './Careers.css';

const jobs = [
    {
        title: "Business Development Manager (BDM) – Poultry",
        positions: "3 Vacancies",
        location: "Hyderabad, Vijayawada, Bangalore, Coimbatore",
        experience: "Min 4+ Years",
        department: "Poultry",
        responsibilities: [
            "Team Leadership & Performance: Lead, mentor, and manage a high-performing team of 5 to 8 Business Development Executives (BDEs) to consistently meet and exceed regional sales and collection targets.",
            "Strategic Market Development: Direct team initiatives to identify high-potential markets for RRVHC products, driving strategic planning for aggressive new client acquisition.",
            "Key Account Oversight: Guide the team in maintaining robust, long-term relationships with key clients, serving as an escalation point to ensure top-tier service delivery.",
            "Supply Chain Optimization: Oversee the team’s evaluation and appointment of strategic dealers and distributors to expand and strengthen the regional supply chain network.",
            "Data-Driven Market Intelligence: Synthesize field insights gathered by the team to deliver actionable market intelligence, improving overall product positioning and sales strategies.",
            "People Development: Conduct regular performance reviews, identify skill gaps, and provide active coaching to maximize individual sales capabilities and foster a collaborative team culture."
        ]
    },
    {
        title: "Business Development Executives (BDE) – Poultry",
        positions: "9 Vacancies",
        location: "Telangana, Andhra Pradesh, Karnataka, Tamilnadu (Multiple Locations)",
        experience: "Min 2+ Years",
        department: "Poultry",
        responsibilities: [
            "Sales & Collections: Manage and drive sales and collection activities within the assigned territory.",
            "Market Development: Identify potential customers for RRVHC products and actively acquire new client accounts.",
            "Client Relations: Maintain regular contact with identified customers to promote brand products and services.",
            "Supply Chain Expansion: Source, evaluate, and appoint dealers or distributors to strengthen the supply chain network.",
            "Market Intelligence: Monitor market trends and developments to provide continuous feedback for strategic improvements."
        ]
    },
    {
        title: "Business Development Manager (BDM) – Aquaculture",
        positions: "1 Vacancy",
        location: "Bhimavaram (Andhra Pradesh)",
        experience: "Min 4+ Years",
        department: "Aquaculture",
        responsibilities: [
            "Team Leadership & Performance: Lead, mentor, and manage a high-performing team of 5 to 8 Business Development Executives (BDEs) to consistently meet and exceed regional sales and collection targets.",
            "Strategic Market Development: Direct team initiatives to identify high-potential markets for RRVHC products, driving strategic planning for aggressive new client acquisition.",
            "Key Account Oversight: Guide the team in maintaining robust, long-term relationships with key clients, serving as an escalation point to ensure top-tier service delivery.",
            "Supply Chain Optimization: Oversee the team’s evaluation and appointment of strategic dealers and distributors to expand and strengthen the regional supply chain network.",
            "Data-Driven Market Intelligence: Synthesize field insights gathered by the team to deliver actionable market intelligence, improving overall product positioning and sales strategies.",
            "People Development: Conduct regular performance reviews, identify skill gaps, and provide active coaching to maximize individual sales capabilities and foster a collaborative team culture."
        ]
    },
    {
        title: "Business Development Executives (BDE) – Aquaculture",
        positions: "6 Vacancies",
        location: "Bhimavaram, Kakinada, Ganapavaram, Akavidu, Kaikaluru, Gudivada",
        experience: "Min 2+ Years",
        department: "Aquaculture",
        responsibilities: [
            "Sales & Collections: Manage and drive sales and collection activities within the assigned territory.",
            "Market Development: Identify potential customers for RRVHC products and actively acquire new client accounts.",
            "Client Relations: Maintain regular contact with identified customers to promote brand products and services.",
            "Supply Chain Expansion: Source, evaluate, and appoint dealers or distributors to strengthen the supply chain network.",
            "Market Intelligence: Monitor market trends and developments to provide continuous feedback for strategic improvements."
        ]
    },
    {
        title: "Purchase Executive",
        positions: "1 Vacancy",
        location: "Corporate Office (Hyderabad)",
        experience: "Min 3+ Years",
        department: "Office",
        responsibilities: [
            "Vendor Management: Source, evaluate, and establish strong relationships with reliable suppliers and vendors.",
            "Procurement Operations: Process purchase orders, negotiate pricing, terms, and delivery schedules to optimize procurement costs.",
            "Inventory & Quality Control: Coordinate with inventory teams to monitor stock levels and ensure received goods meet quality standards.",
            "Documentation & Reporting: Maintain accurate purchase records, invoices, and prepare periodic cost-benefit reports for leadership."
        ]
    }
];

const aquaLocations = ["Bhimavaram", "Kakinada", "Ganapavaram", "Akavidu", "Kaikaluru", "Gudivada"];
const poultryLocations = [
    "Hyderabad", "Karimnagar", "Siddipet", "Warangal",
    "Vijayawada", "Tanuku", "Anaparthy", "Chittoor",
    "Bangalore", "Mysore", "Hospet",
    "Coimbatore", "Namakkal"
];

const deptColors = {
    "Aquaculture": "#009688",
    "Sales": "#00796B",
    "Poultry": "#FFB300",
    "Technical": "#3F51B5",
    "R&D": "#8E24AA",
    "Production": "#F4511E",
    "Finance": "#43A047",
    "Operations": "#1E88E5",
    "Office": "#E91E63",
};


const Careers = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const [isApplying, setIsApplying] = useState(false);

    return (
        <div className="careers-page">

            {/* ── HERO ── */}
            <section className="car-hero" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1567326619821-2664df9c48da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                <div className="car-hero__overlay" />
                <div className="container car-hero__inner">
                    <div className="car-hero__content-box">
                        <span className="car-hero__badge">Join Our Team</span>
                        <h1 className="banner-title">Build Your Future with <br />RR Veterinary Healthcare</h1>
                        <nav className="car-hero__breadcrumb">
                            <Link to="/">Home</Link>
                            <span>/</span>
                            <span className="active">Careers</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* ── PARTNER SECTION ── */}
            <section className="car-partner-section">
                <div className="container">
                    <div className="car-partner-grid">
                        <div className="car-partner-text">
                            <div className="car-label">Join Us</div>
                            <h2 className="car-heading">More than employees,<br /><span>we are looking for growth partners.</span></h2>
                            <p className="car-body">
                                We at RR Veterinary Healthcare Pvt. Ltd. consider our staff as invaluable assets. Resources with an ability to lead the company into new avenue of growth and can work in synergy with the leadership will be equally rewarded. As the company is venturing into new areas, there is a vast potential for the right Minded people to grow and sustain.
                            </p>
                            <p className="car-body">
                                Hiring the best of you, who could drive and ensure the business growth.
                            </p>
                            <p className="car-body">
                                We are a firm believers of <strong>“Company’s Growth = Employee’s Growth “</strong>
                            </p>
                            {/* <h4 className="car-cta-text">Come and Join us if you feel you are challenging enough!</h4>
                            <a href="mailto:careers@rrveterinary.in" className="car-email-btn">
                                <Mail size={18} />
                                Mail Us: careers@rrveterinary.in
                            </a>*/}
                        </div>
                        <div className="car-partner-visual">
                            <div className="car-partner-card">
                                <div className="car-partner-icon"><Users size={32} /></div>
                                <h3>Partner with us</h3>
                                <p>Grow together with RR Veterinary Healthcare.</p>
                            </div>
                            <div className="car-partner-card car-upload-cv-card">
                                <div className="car-partner-icon"><FileText size={32} /></div>
                                <h3>Upload Your CV</h3>
                                <p>Drop your resume directly for opportunities.</p>
                                <button
                                    className="car-apply-btn mt-3"
                                    onClick={() => {
                                        setSelectedJob({

                                            positions: "Open",
                                            location: "Corporate Office (Hyderabad)",
                                            experience: "Any",
                                            department: "Office",
                                            responsibilities: ["Submit your CV for review across all our business domains."]
                                        });
                                        setIsApplying(true);
                                    }}
                                >
                                    Apply Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── DISTRIBUTION OPPORTUNITIES ── */}
            <section className="car-distributor-section">
                <div className="container">
                    <div className="car-distributor-box">
                        <div className="car-distributor-content text-center">
                            <span className="car-distributor-badge">Distribution Opportunities</span>
                            <br />
                            <p className="car-distributor-highlight">
                                We are looking for distributors in unrepresented areas.
                            </p>
                            <p className="car-distributor-desc">
                                Partner with RR Veterinary Health Care Pvt. Ltd. to expand our high-quality veterinary solutions to new markets.
                            </p>
                            <Link to="/contact-us" className="car-distributor-btn" onClick={() => window.scrollTo(0,0)}>
                                Contact Us for Distribution
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map section removed from here to go below Job Listings */}

            {/* ── JOB LISTINGS ── */}
            <section className="car-jobs-section">
                <div className="container">
                    <div className="car-jobs-header">
                        <div className="car-label">Open Positions</div>
                        <h2 className="car-heading car-heading--center">Current <span>Openings</span></h2>
                        <p className="car-jobs-sub">Click on any role to view full details and responsibilities.</p>
                    </div>

                    <div className="car-jobs-list">
                        {jobs.map((job, i) => (
                            <div
                                key={i}
                                className="car-job-item"
                                style={{ "--dept-color": deptColors[job.department] || 'var(--theme-primary)' }}
                            >
                                <button
                                    className="car-job-header"
                                    onClick={() => {
                                        setSelectedJob(job);
                                        setIsApplying(false);
                                    }}
                                >
                                    <div className="car-job-title-group">
                                        <h3 className="car-job-title">{job.title}</h3>
                                        <div className="car-job-meta">
                                            <span className="car-meta-tag"><Briefcase size={14} /> {job.positions}</span>
                                            <span className="car-meta-tag"><Clock size={14} /> {job.experience}</span>
                                            <span className="car-meta-tag"><MapPin size={14} /> {job.location}</span>

                                        </div>
                                    </div>
                                    <div className="car-job-action">
                                        <ChevronDown size={20} />
                                    </div>
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── MAP & LOCATIONS ── */}
            <section className="car-map-section">
                <div className="container">
                    <div className="car-map-header">
                        <div className="car-label">We're Expanding</div>
                        <h2 className="car-heading car-heading--center">Hiring for Poultry & Aquaculture<br /><span>Business Development Teams</span></h2>
                    </div>

                    <div className="car-map-grid">
                        {/* Aqua Locations */}
                        <div className="car-location-card car-location-card--aqua">
                            <h3>Looking for Aqua Super Heroes</h3>
                            <ul>
                                {aquaLocations.map(loc => (
                                    <li key={loc}><MapPin size={14} />{loc}</li>
                                ))}
                            </ul>
                        </div>

                        {/* Map Image */}
                        <div className="car-map-img-wrap">
                            <img src="/career/locationMap-300x238@2x.jpg" alt="India Location Map" />
                        </div>

                        {/* Poultry Locations */}
                        <div className="car-location-card car-location-card--poultry">
                            <h3>Looking for Poultry Super Heroes</h3>
                            <ul>
                                {poultryLocations.map(loc => (
                                    <li key={loc}><MapPin size={14} />{loc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── JOB MODAL ── */}
            {selectedJob && (
                <div className="car-modal-overlay" onClick={() => setSelectedJob(null)}>
                    <div className="car-modal-content" onClick={e => e.stopPropagation()}>
                        <button className="car-modal-close" onClick={() => setSelectedJob(null)}>
                            <X size={24} />
                        </button>

                        <div className="car-modal-header">
                            <div className="car-job-dept-badge" style={{ background: deptColors[selectedJob.department] || 'var(--theme-primary)' }}>
                                {selectedJob.department}
                            </div>
                            <h2>{selectedJob.title}</h2>
                            <div className="car-job-meta">
                                <span><Briefcase size={14} /> {selectedJob.positions}</span>
                                <span><Clock size={14} /> {selectedJob.experience}</span>
                                <span><MapPin size={14} /> {selectedJob.location}</span>

                            </div>
                        </div>

                        <div className="car-modal-body">
                            {!isApplying ? (
                                <div className="car-job-details-view">
                                    <h4>Key Responsibilities</h4>
                                    <ul>
                                        {selectedJob.responsibilities.map((r, ri) => <li key={ri}>{r}</li>)}
                                    </ul>
                                    <div className="car-modal-footer">
                                        <div className="car-job-exp-tag">
                                            <Award size={15} />
                                            <span>Experience: {selectedJob.experience}</span>
                                        </div>
                                        <button className="car-apply-btn" onClick={() => setIsApplying(true)}>
                                            Apply for this Role
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div className="car-job-apply-view">

                                    <form className="car-apply-form" onSubmit={(e) => {
                                        e.preventDefault();
                                        alert("Application Submitted Successfully!");
                                        setIsApplying(false);
                                        setSelectedJob(null);
                                    }}>
                                        <div className="car-form-group">
                                            <label>Full Name</label>
                                            <input type="text" placeholder="Enter your full name" required />
                                        </div>
                                        <div className="car-form-row">
                                            <div className="car-form-group">
                                                <label>Email Address</label>
                                                <input type="email" placeholder="Enter your email" required />
                                            </div>
                                            <div className="car-form-group">
                                                <label>Phone Number</label>
                                                <input type="tel" placeholder="Enter your phone" required />
                                            </div>
                                        </div>
                                        <div className="car-form-group">
                                            <label>Total Experience (Years)</label>
                                            <input type="text" placeholder="e.g. 2+ Years" required />
                                        </div>
                                        <div className="car-form-group">
                                            <label>Upload Resume</label>
                                            <div className="car-file-upload">
                                                <FileText size={20} />
                                                <input type="file" accept=".pdf,.doc,.docx" required />
                                            </div>
                                        </div>
                                        <div className="car-modal-footer dual-btns">
                                            <button type="button" className="car-back-btn" onClick={() => setIsApplying(false)}>
                                                Back to Details
                                            </button>
                                            <button type="submit" className="car-apply-btn submit-btn">
                                                <Send size={16} /> Submit Application
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default Careers;
