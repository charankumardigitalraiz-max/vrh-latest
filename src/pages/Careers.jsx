import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ChevronDown, Mail, Users, Award } from 'lucide-react';
import './Careers.css';

const jobs = [
    {
        title: "Business Development Managers (AQUACULTURE)",
        positions: "2 Positions",
        location: "Bhimavaram & Amalapuram, Kakinada, Nellore, Gudiwada",
        experience: "8 Years",
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
    },
    {
        title: "National Sales Manager",
        positions: "1 Position",
        location: "India",
        experience: "15 Years",
        department: "Sales",
        responsibilities: [
            "Developing and implementing effective sales strategies",
            "Leading nationwide sales team members to achieve sales targets",
            "Establish productive and professional relationships with key personnel in assigned customer accounts",
            "Develop and implement effective sales strategies",
            "Lead nationwide sales team members to achieve sales targets",
            "Establish productive and professional relationships with key personnel in assigned customer accounts",
            "Negotiate and close agreements with large customers",
            "Monitor and analyze performance metrics and suggest improvements",
            "Prepare monthly, quarterly and annual sales forecasts",
            "Perform research and identify new potential customers and new market opportunities",
            "Provide timely and effective solutions aligned with clients' needs",
            "Liaise with Marketing and Product Development departments to ensure brand consistency",
            "Stay up-to-date with new product launches and ensure sales team members are on board"
        ]
    },
    {
        title: "Business Development Managers – POULTRY & RUMINANTS",
        positions: "12 Positions",
        location: "HYDERABAD (2), KARNATAKA (1), CHITOOR (1), CHATTISGARH (1), TAMILNADU (1), PUNJAB (1), UP (1), MP (1), GUJRAT (1), PUNE (1), BIHAR (1)",
        experience: "8 Years",
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
        title: "Assistant Business Development Manager (POULTRY)",
        positions: "10 Positions",
        location: "HYDERABAD, BANGALORE, CHATTISGARH, TN, PUNJAB, UP, MP, GUJRAT, MAHARASHTRA, BIHAR",
        experience: "5 Years",
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
        title: "Business Development Executives – Poultry",
        positions: "11 Positions",
        location: "SIDDIPET (1), HOSPET (1), MYSORE (1), CHATTISGARH (1), TAMILNADU (1), PUNJAB (1), UP (1), MP (1), GUJRAT (1), PUNE (1)",
        experience: "2 Years",
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
        title: "Business Development Executives – AQUACULTURE",
        positions: "4 Positions",
        location: "BHIMAVARAM (1), AMALAPURAM (1), NELLORE (1), KAIKALURU (1)",
        experience: "2 Years",
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
        title: "Zonal Sales Manager",
        positions: "4 Positions",
        location: "EAST ZONE, WEST ZONE, NORTH ZONE, SOUTH ZONE",
        experience: "10 Years",
        department: "Sales",
        responsibilities: [
            "Developing and implementing effective sales strategies",
            "Leading nationwide sales team members to achieve sales targets",
            "Establish productive and professional relationships with key personnel in assigned customer accounts",
            "Negotiate and close agreements with large customers",
            "Monitor and analyze performance metrics and suggest improvements",
            "Prepare monthly, quarterly and annual sales forecasts",
            "Perform research and identify new potential customers and new market opportunities",
            "Provide timely and effective solutions aligned with clients' needs",
            "Liaise with Marketing and Product Development departments to ensure brand consistency",
            "Stay up-to-date with new product launches and ensure sales team members are on board"
        ]
    },
    {
        title: "Manager (Technical)",
        positions: "1 Position",
        location: "Hyderabad",
        experience: "M.V.Sc with 5 Years of relevant experience",
        department: "Technical",
        responsibilities: [
            "Proven experience in working directly with Key Opinion Leaders in a Sales or Marketing role, preferably within Veterinary Pharmaceutical or Life Sciences areas",
            "Experience with marketing strategic planning and advisory boards or consortia",
            "Ability to train sales people with technical know how of products being developed in the company",
            "Demonstrate strong business acumen and ability to develop and manage timelines, processes and procedures",
            "Collaborative spirit and excellent communication and interpersonal skills",
            "Ability to interact effectively with executives and all levels within an organization",
            "Strategic thinker with ability to formulate, develop and execute KOL and customer input into tangible actions",
            "Ability to travel up to 25%"
        ]
    },
    {
        title: "Product Development Manager",
        positions: "1 Position",
        location: "Hyderabad",
        experience: "Graduates or Post Graduates in Sciences with MBA preferred. 5 Years of relevant experience",
        department: "R&D",
        responsibilities: [
            "Proactively managing all aspects of the product line, evolving to stay ahead of the market",
            "Development of business cases to support product development or enhancement",
            "Input into annual marketing plan based on business objectives, franchise strategy and commercial area needs",
            "Develop & execute robust launch plans across multiple functional areas and geographies",
            "Closely documents and reports on launch plan, anticipates and mitigate risk to timing, scope or budget",
            "Act as technical expert/SME for product to business and all key stakeholders",
            "Full responsibility for lifecycle management",
            "Engage and influence commercial area teams, R&D, regulatory etc. to set and meet launch timings and budgets"
        ]
    },
    {
        title: "Production & QC Chemist",
        positions: "1 Position",
        location: "Hyderabad",
        experience: "Graduates or Post Graduates in pharmacy with 10 years of experience in formulations & GMP",
        department: "Production",
        responsibilities: [
            "Issuance and receive of blank Batch Manufacturing Record (BMR) from QA department",
            "Issuance of Raw Material from Raw Material store as per BMR and maintaining updated RM stock record",
            "Maintaining the process parameters as per BMR",
            "Batch manufacturing of Liquid and feed supplements",
            "In process checking of formulations during each stage of processing and recording in BMR",
            "Maintaining all the log books, prepare and maintain cGMP and WHO-GMP documents requirements & SOPs",
            "Daily calibration of electronic weighing balance",
            "To ensure timely preventive / breakdown maintenance of equipment"
        ]
    },
    {
        title: "Accounts Executive",
        positions: "1 Position",
        location: "Hyderabad",
        experience: "2–3 Years",
        department: "Finance",
        responsibilities: [
            "Knowledge in Tally ERP for handling day to day accounts",
            "Closely coordinate with Purchase and Production department for hassle free production and dispatch",
            "Create detailed business plans to facilitate the attainment of goals and quotas",
            "Manage the entire sales cycle from finding a client to securing a deal",
            "Unearth new sales opportunities through networking and turn them into long term partnerships",
            "Respond to complaints and resolve issues aiming to customer contentment",
            "Negotiate agreements and keep records of sales and data"
        ]
    },
    {
        title: "Purchase Executive",
        positions: "1 Position",
        location: "Hyderabad",
        experience: "Graduates or Post Graduates with 5 Years of relevant experience",
        department: "Operations",
        responsibilities: [
            "Experience in procurement of Key Raw material for manufacturing of feed supplements",
            "Familiarity with sourcing and vendor management",
            "Interest in market dynamics along with business sense",
            "A knack for negotiation and networking",
            "Working experience of vendor management software",
            "Ability to gather and analyse data and to work with figures",
            "Solid judgement along with decision making skills",
            "Strong leadership capabilities"
        ]
    },
    {
        title: "Logistics Executive",
        positions: "1 Position",
        location: "Hyderabad",
        experience: "Graduate with 2 Years of relevant experience",
        department: "Operations",
        responsibilities: [
            "Manage the daily activities of the Logistics management as per defined SLA",
            "Planning, organizing and coordinating with different stakeholders for delivery of materials",
            "Ensure all inward materials are checked thoroughly as per delivery challan and stored in the designated areas",
            "Ensure proper inventory management of all stock materials are followed and tracked properly",
            "Generate reports based on need and consumption",
            "Liaise with vendor and Security for smooth entry and exit of materials",
            "Coordinate with the vendor to ensure necessary statutory documents are in place for shipment of materials",
            "Review all check lists / log books and submit required details to the reporting manager for monthly report"
        ]
    }
];

const aquaLocations = ["Odisha", "West Bengal", "Andhra Pradesh", "Gujarat"];
const poultryLocations = ["Odisha", "Mysore", "Pune", "Raipur", "MP", "UP", "Punjab", "Tanaku", "Gujarat"];

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
            <section className="car-hero" style={{ backgroundImage: "url('/images/heroes/career.jpg')" }}>
                <div className="car-hero__overlay" />
                <div className="container car-hero__inner">
                    <div className="car-hero__content-box">
                        <span className="car-hero__badge">Join Our Team</span>
                        <h1 className="car-hero__title">Build Your Future with <br /><span className="text-secondary text-gold">RR Veterinary Healthcare</span></h1>
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
                                    <div className="car-stat"><strong>13+</strong><span>Open Positions</span></div>
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
                        <h2 className="car-heading car-heading--center">Hiring National Sales Manager<br /><span>(Poultry and Aqua)!</span></h2>
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
                                    <div className="car-job-arrow">
                                        <ChevronDown size={20} className={openJob === i ? 'rotated' : ''} />
                                    </div>
                                </button>

                                <div className="car-job-body">
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
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Careers;
