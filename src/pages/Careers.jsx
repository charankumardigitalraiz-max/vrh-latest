import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ChevronDown, Mail, Users, Award } from 'lucide-react';
import './Careers.css';

const jobs = [
    {
        title: "Business Development Executives (BDE) – Poultry",
        positions: "9 Vacancies",
        location: "Siddhipet (covering Warangal), Hyderabad commercials with Mahboobnagar, Namakkal, Coimbatore, Hospete (covering Davangare), Bangalore (covering Mysore), Vijayawada (covering Guntur), Tanuku, Anaparthy (covering Vizag)",
        experience: "As per role",
        department: "Poultry",
        responsibilities: [
            "Arrange business meetings with prospective clients",
            "Promote the company's products/services addressing or predicting clients' objectives",
            "Keep records of sales, revenue, invoices etc.",
            "Provide trustworthy feedback and after-sales support",
            "Build long-term relationships with new and existing customers",
            "Develop entry level staff into valuable salespeople"
        ]
    },
    {
        title: "Business Development Manager (BDM) – Poultry",
        positions: "3 Vacancies",
        location: "Telangana & AP, Karnataka (Bangalore), Tamilnadu (Namakkal & Coimbatore)",
        experience: "As per role",
        department: "Poultry",
        responsibilities: [
            "Develop a growth strategy focused both on financial gain and customer satisfaction",
            "Conduct research to identify new markets and customer needs",
            "Arrange business meetings with prospective clients",
            "Promote the company's products/services addressing or predicting clients' objectives",
            "Keep records of sales, revenue, invoices etc.",
            "Provide trustworthy feedback and after-sales support",
            "Build long-term relationships with new and existing customers",
            "Develop entry level staff into valuable salespeople"
        ]
    },
    {
        title: "Business Development Executives (BDE) – Aquaculture",
        positions: "6 Vacancies",
        location: "Bhimavaram, Aakiveedu, Ganapavaram, Kaikaluru or Gudivada, Amalapuram, Kakinada",
        experience: "As per role",
        department: "Aquaculture",
        responsibilities: [
            "Arrange business meetings with prospective clients",
            "Promote the company's products/services addressing or predicting clients' objectives",
            "Keep records of sales, revenue, invoices etc.",
            "Provide trustworthy feedback and after-sales support",
            "Build long-term relationships with new and existing customers",
            "Develop entry level staff into valuable salespeople"
        ]
    },
    {
        title: "Business Development Manager (BDM) – Aquaculture",
        positions: "1 Vacancy",
        location: "Bhimavaram",
        experience: "As per role",
        department: "Aquaculture",
        responsibilities: [
            "Develop a growth strategy focused both on financial gain and customer satisfaction",
            "Conduct research to identify new markets and customer needs",
            "Arrange business meetings with prospective clients",
            "Promote the company's products/services addressing or predicting clients' objectives",
            "Keep records of sales, revenue, invoices etc.",
            "Provide trustworthy feedback and after-sales support",
            "Build long-term relationships with new and existing customers",
            "Develop entry level staff into valuable salespeople"
        ]
    }
];

const aquaLocations = ["Bhimavaram", "Aakiveedu", "Ganapavaram", "Kaikaluru/Gudivada", "Amalapuram", "Kakinada"];
const poultryLocations = ["Siddhipet", "Hyderabad", "Namakkal", "Coimbatore", "Hospete", "Bangalore", "Vijayawada", "Tanuku", "Anaparthy"];

const deptColors = {
    "Aquaculture": "#0e9f8d",
    "Sales": "#048a81",
    "Poultry": "#e6a727",
    "Technical": "#5c80cc",
    "R&D": "#9b59b6",
    "Production": "#e67e22",
    "Finance": "#27ae60",
    "Operations": "#2980b9",
};

const Careers = () => {
    const [openJob, setOpenJob] = useState(null);

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
                            <h2 className="car-heading">Not an employee!<br /><span>We are looking for Partners!</span></h2>
                            <p className="car-lead">
                                We at RR Veterinary Healthcare Pvt. Ltd. consider our staff as invaluable assets. Resources with an ability to lead the company into new avenue of growth and can work in synergy with the leadership will be equally rewarded.
                            </p>
                            <p className="car-body">
                                As the company is venturing into new areas, there is a vast potential for the right minded people to grow and sustain. Hiring the best of you, who could drive and ensure the business growth.
                            </p>
                            <p className="car-body">
                                We are firm believers of <strong>"Company's Growth = Employee's Growth"</strong>
                            </p>
                            <h4 className="car-cta-text">Come and Join us if you feel you are challenging enough!</h4>
                            <a href="mailto:careers@rrveterinary.in" className="car-email-btn">
                                <Mail size={18} />
                                careers@rrveterinary.in
                            </a>
                        </div>
                        <div className="car-partner-visual">
                            <div className="car-partner-card">
                                <div className="car-partner-icon"><Users size={56} /></div>
                                <h3>Be a Partner</h3>
                                <p>in RR Veterinary's Growth Story</p>
                                <div className="car-stats-row">
                                    <div className="car-stat"><strong>19+</strong><span>Open Positions</span></div>
                                    <div className="car-stat"><strong>10+</strong><span>Years Legacy</span></div>
                                </div>
                            </div>
                        </div>
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
                                className={`car-job-item ${openJob === i ? 'open' : ''}`}
                            >
                                <button
                                    className="car-job-header"
                                    onClick={() => setOpenJob(openJob === i ? null : i)}
                                >
                                    <div className="car-job-dept-badge" style={{ background: deptColors[job.department] || '#048a81' }}>
                                        {job.department}
                                    </div>
                                    <div className="car-job-title-group">
                                        <h3 className="car-job-title">{job.title}</h3>
                                        <div className="car-job-meta">
                                            <span><Briefcase size={14} /> {job.positions}</span>
                                            <span><MapPin size={14} /> {job.location}</span>
                                            <span><Clock size={14} /> {job.experience}</span>
                                        </div>
                                    </div>
                                    {/* <div className="car-job-arrow">
                                        <ChevronDown size={20} className={openJob === i ? 'rotated' : ''} />
                                    </div> */}
                                </button>

                                {/* <div className="car-job-body">
                                    <div className="car-job-body-inner">
                                        <h4>Key Responsibilities</h4>
                                        <ul>
                                            {job.responsibilities.map((r, ri) => <li key={ri}>{r}</li>)}
                                        </ul>
                                        <div className="car-job-apply-row">
                                            <div className="car-job-exp-tag">
                                                <Award size={15} />
                                                <span>Experience: {job.experience}</span>
                                            </div>
                                            <a href="http://rrvhc.in/resume.php" target="_blank" rel="noopener noreferrer" className="car-apply-btn">
                                                Apply Now
                                            </a>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Careers;
