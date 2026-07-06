import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Prepare payload for EmailJS (replace USER_ID, SERVICE_ID, TEMPLATE_ID with your actual values)
    const payload = {
      service_id: 'YOUR_SERVICE_ID',
      template_id: 'YOUR_TEMPLATE_ID',
      user_id: 'YOUR_USER_ID',
      template_params: {
        first_name: firstName,
        last_name: lastName,
        email: email,
        phone: phone,
        message: message,
      },
    };
    try {
      const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        // Show success message and reset form fields
        setShowSuccess(true);
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhone('');
        setMessage('');
        // Hide success after 3 seconds to allow another submission
        setTimeout(() => setShowSuccess(false), 3000);
      } else {
        console.error('EmailJS error:', await response.text());
      }
    } catch (err) {
      console.error('Network error while sending email:', err);
    }
  };

  return (
    <div className="contact-page fade-in">
      {/* Page Banner */}
      <section className="page-banner">
        <div className="banner-overlay"></div>
        <div className="container">
          <div className="banner-content-box slide-up">
            <span className="banner-badge">Get In Touch</span>
            <h1 className="banner-title">Contact Our Team</h1>
            <p className="banner-subtitle">We'd love to hear from you. Professional support for your veterinary needs.</p>
            {/* <nav className="banner-breadcrumb">
              <a href="/">Home</a>
              <span>/</span>
              <span className="active">Contact Us</span>
            </nav> */}
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-grid">

            {/* Contact Information Cards */}
            <div className="contact-info-wrapper slide-up" style={{ animationDelay: '0.1s' }}>
              <h2 className="section-title">Get In Touch</h2>
              <p className="text-muted" style={{ marginBottom: '2rem' }}>
                Have questions about our products or services? Our dedicated team is here to provide you with the support and information you need.
              </p>

              <div className="info-cards">
                <div className="info-card hover-lift">
                  <div className="icon-wrapper">
                    <MapPin size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Head Office</h3>
                    <b>RR VETERINARY HEALTH CARE PRIVATE LIMITED</b>
                    <p>RR Heights, # 5-5-81/5/1, 5th Floor,
                      Sai Baba Nagar Colony, High Tension Line Road,
                      Kukatpally, Hyderabad – 500 072
                    </p>
                  </div>
                </div>
                <div className="info-card hover-lift" style={{ animationDelay: '0.2s' }}>
                  <div className="icon-wrapper">
                    <Mail size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Email ID</h3>
                    {/* <p><a href="mailto:info@rrvhc.in">info@rrvhc.in</a></p> */}
                    <p><a href="mailto:info@rrveterinary.in">info@rrveterinary.in</a></p>
                    {/* <p><a href="mailto:sreekanthdevalraju@rrveterinary.in" >sreekanthdevalraju@rrveterinary.in</a></p> */}
                    {/* <p><a href="mailto:purchase@rrveterinary.in">purchase@rrveterinary.in</a></p> */}
                    {/*<p><a href="mailto:admin@rrveterinary.in">admin@rrveterinary.in</a></p>*/}
                    {/* <p><a href="mailto:hr@rrveterinary.in">hr@rrveterinary.in</a></p> */}
                  </div>
                </div>

                <div className="info-card hover-lift" style={{ animationDelay: '0.2s' }}>
                  <div className="icon-wrapper">
                    <Phone size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Customer Care Number</h3>
                    <p>+91 89784 17078</p>
                    {/* <p>+91 94410 31794</p> */}
                    <p>+91 94904 10562</p>
                  </div>
                </div>

                <div className="info-card hover-lift" style={{ animationDelay: '0.4s' }}>
                  <div className="icon-wrapper">
                    <Clock size={24} />
                  </div>
                  <div className="info-content">
                    <h3>Working Hours</h3>
                    <p>Monday - Saturday: 9:00 AM - 5:30 PM</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {showSuccess && (
              <div className="toast">Message sent successfully!</div>
            )}
            {/* Enquiry Form */}
            {!showSuccess && (
              <div className="contact-form-wrapper slide-up" style={{ animationDelay: '0.3s' }}>
                <div className="glass-panel form-container">
                  <h2 className="enquiry-title">Enquiry Form</h2>
                  <form className="enquiry-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                      <label htmlFor="firstName">First Name</label>
                      <input type="text" id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="lastName">Last Name</label>
                      <input type="text" id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
                    </div>
                    <div className="form-group full-width">
                      <label htmlFor="message">Message</label>
                      <textarea id="message" name="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
                    </div>
                    <button type="submit" className="send-button">Send Message</button>
                  </form>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
