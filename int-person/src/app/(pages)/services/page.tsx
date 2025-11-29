'use client';

import './styleServices.css';

export default function ServicesPage() {
  return (
    <>
      {/* SERVICES SECTION */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">Our <span>Services</span></h2>
          <p className="section-subtitle">Fast, reliable and global logistics solutions for your business.</p>

          <div className="services-grid">
            <div className="service-card">
              <div className="icon">🚚</div>
              <h3>Express Delivery</h3>
              <p>Fast worldwide shipping with real‑time tracking and guaranteed timing.</p>
            </div>

            <div className="service-card">
              <div className="icon">📦</div>
              <h3>Warehousing</h3>
              <p>Secure and optimized storage solutions tailored for your logistics needs.</p>
            </div>

            <div className="service-card">
              <div className="icon">✈️</div>
              <h3>Air Freight</h3>
              <p>Efficient international air transport for urgent and valuable cargo.</p>
            </div>

            <div className="service-card">
              <div className="icon">🚢</div>
              <h3>Sea Freight</h3>
              <p>Cost‑effective shipping services with global maritime coverage.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
