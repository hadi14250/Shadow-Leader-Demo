import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Hero />
      <TrustBadge />
      <LogoCarousel />
      <Problem />
      <ValueProps />
      <Services />
      <WhyDeliver />
      <Testimonials />
      <Results />
      <CTA />
      <Footer />
    </div>
  );
};

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">Shadow Leaders</div>
          <nav className="nav">
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#contact" className="cta-button">Get Started</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <span className="hero-label">Unlock Strategic Growth</span>
          <h1 className="hero-title">
            Work together with leaders who have been in your <span className="hero-highlight">shoes before</span>
          </h1>
          <p className="hero-subtitle">
            For visionary entrepreneurs and directors who want more than just advice.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="button button-primary">Schedule Your Confidential Growth Meeting</a>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBadge = () => {
  return (
    <section className="trust-badge">
      <div className="container">
        <div className="trust-content">
          <div className="trust-card">
            <h4>Shadow Leaders is your invisible force</h4>
            <p>Experienced leaders, entrepreneurs and experts who stand beside you, not above you. We help you grow faster and smarter – without the egos and corporate hassle.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const LogoCarousel = () => {
  return (
    <section className="logo-carousel">
      <div className="container">
        <div className="carousel-header">
          <span className="carousel-label">Companies growing faster with our help</span>
        </div>
        <div className="logo-grid">
          <div className="logo-item">Trimble</div>
          <div className="logo-item">Linkcard</div>
          <div className="logo-item">BrandAI</div>
          <div className="logo-item">AxonIQ</div>
          <div className="logo-item">AVP</div>
          <div className="logo-item">Europartners</div>
        </div>
      </div>
    </section>
  );
};

const Problem = () => {
  return (
    <section className="problem">
      <div className="container">
        <div className="problem-content">
          <h2 className="problem-title">
            Overwhelmed by Growth Challenges? <span className="problem-highlight">Not anymore!</span>
          </h2>
          <p className="problem-description">
            The founder's journey is demanding: critical decisions, scaling complexities, and relentless pressure can lead to stalled growth or strategic dead ends. We understand the weight of this responsibility. Shadow Leaders stands with you, providing the clarity and strategic foresight to transform these challenges into confidently made decisions, leading to sustainable progress.
          </p>
        </div>
      </div>
    </section>
  );
};

const ValueProps = () => {
  return (
    <section className="value-props">
      <div className="container">
        <div className="value-grid">
          <div className="value-card">
            <div className="icon-circle">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 11l3 3L22 4"/>
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
              </svg>
            </div>
            <h3>Strategic Clarity</h3>
          </div>
          <div className="value-card">
            <div className="icon-circle">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Leadership Support</h3>
          </div>
          <div className="value-card">
            <div className="icon-circle">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Sustainable Growth</h3>
          </div>
          <div className="value-card">
            <div className="icon-circle">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
              </svg>
            </div>
            <h3>Increased Confidence</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-intro">
          <p className="services-intro">We are a network of top advisors, former CEOs, investors and entrepreneurs with proven success. We work in the shadows so that you can shine in the spotlight.</p>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <div className="service-content">
              <h3>Shadow Leaders Advisory</h3>
              <p className="service-description">
                Access a private collective of 20+ top professionals for honest, strategic, and practical answers. We provide <strong>tailor-made advice</strong> and <strong>hands-on implementation</strong> for founders who demand direct impact.
              </p>
              <a href="#contact" className="button button-secondary">Yes, I Want To Get An Adviser</a>
            </div>
          </div>

          <div className="service-card">
            <div className="service-image">
              <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
            </div>
            <div className="service-content">
              <h3>Non-Executive Director Services</h3>
              <p className="service-description">
                Unlock your company's next phase of growth. We provide the <strong>strategic guidance</strong> and <strong>senior board expertise</strong> needed to confidently navigate critical investor and client meetings.
              </p>
              <a href="#contact" className="button button-secondary">Yes, I Need Board Expertise</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhyDeliver = () => {
  return (
    <section id="why" className="why-deliver">
      <div className="container">
        <div className="section-header">
          <h2>Why We Deliver <span className="why-highlight">Unmatched Value</span></h2>
        </div>

        <div className="why-grid-5">
          <div className="why-card-large why-card-teal">
            <div className="why-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
            </div>
            <h3>Real-life experience</h3>
            <p>We have built, sold, failed and won (20+ years experience).</p>
          </div>

          <div className="why-card-large">
            <div className="why-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
            <h3>No nonsense</h3>
            <p>Direct, to the point, with humour where possible.</p>
          </div>

          <div className="why-card-large">
            <div className="why-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
              </svg>
            </div>
            <h3>Exclusive</h3>
            <p>By invitation only. Because not everyone is ready for faster growth.</p>
          </div>

          <div className="why-card-large">
            <div className="why-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
            </div>
            <h3>No fluff</h3>
            <p>This is not a trick like popular playbooks and gurus tell you.</p>
          </div>

          <div className="why-card-large">
            <div className="why-icon">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <h3>Time and effort</h3>
            <p>This takes time and money and yields a multiple return.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="testimonials-grid">
          <div className="testimonial-card testimonial-featured">
            <div className="testimonial-header">
              <div className="company-logo">XRDAM</div>
              <h4>Game changing impact</h4>
            </div>
            <p className="testimonial-text">
              "Working with Shadow Leaders and with Stefan in particular has been a game-changer. Sharp, insightful, and brutally honest—he cuts through the noise like no one else. His advisory style blends strategic depth with real-world grit, always pushing you to think bigger while staying grounded. In Iberia or beyond, he's the mentor startups and scaleups dream of. Highly recommend trusting him with your vision."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">DS</div>
              <div>
                <div className="author-name">Derrick Swanepoel</div>
                <div className="author-title">Founder and CEO XRDAM<br />Robotic and AI startup in Portugal</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <h4>Excellent cooperation with Shadow Leaders</h4>
            </div>
            <p className="testimonial-text">
              "I've had the pleasure of collaborating with Shadow Leaders through my startup, Linkcard.app. Stefan's deep knowledge and extensive experience in SaaS growth marketing make his recommendations, advice, and insights both impactful and intuitive. It's as if Stefan has written the playbook on growing a SaaS business. I highly recommend him to founders looking to drive growth using best practices grounded in a solid foundation of expertise."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">ML</div>
              <div>
                <div className="author-name">Matthijs Langenberg</div>
                <div className="author-title">Founder Linkcard.app</div>
              </div>
            </div>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-header">
              <h4>SaaS revenue growth</h4>
            </div>
            <p className="testimonial-text">
              "Stefan is the ideal advisor for founders who need a blend of vision and structure. He's not just about big ideas—he shows you how to make them real with clear, step-by-step tactics. He's been an amazing advisor since the early days. His deep understanding of digital marketing and SaaS growth combined with his hands-on approach make him invaluable to any founder trying to scale smartly."
            </p>
            <div className="testimonial-author">
              <div className="author-avatar">MH</div>
              <div>
                <div className="author-name">Menno Haarman</div>
                <div className="author-title">Founder Salesflare</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Results = () => {
  return (
    <section className="results">
      <div className="container">
        <div className="section-header">
          <h2>Results</h2>
        </div>
        <div className="results-grid">
          <div className="result-card">
            <div className="result-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </div>
            <h3>Clarity in decision-making</h3>
          </div>
          <div className="result-card">
            <div className="result-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Smarter teams and a stronger leadership team</h3>
          </div>
          <div className="result-card">
            <div className="result-icon">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="20" x2="12" y2="10"/>
                <line x1="18" y1="20" x2="18" y2="4"/>
                <line x1="6" y1="20" x2="6" y2="16"/>
              </svg>
            </div>
            <h3>Growth you couldn't have achieved on your own</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section id="contact" className="cta-section">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to unlock strategic growth?</h2>
          <p>Schedule a confidential consultation to see if we're the right fit.</p>
          <a href="mailto:hello@shadowleaders.com" className="button button-primary">Schedule Your Confidential Growth Meeting</a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">Shadow Leaders</div>
            <p>Executive growth partners for visionary founders.</p>
          </div>
          <div className="footer-right">
            <p>&copy; 2025 Shadow Leaders. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;
