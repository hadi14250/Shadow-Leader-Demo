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
          <div className="value-card value-card-purple">
            <div className="value-icon">
              <div className="icon-circle icon-purple">📋</div>
            </div>
            <h3>Strategic<br />Clarity</h3>
          </div>
          <div className="value-card value-card-orange">
            <div className="value-icon">
              <div className="icon-circle icon-orange">📊</div>
            </div>
            <h3>Leadership Support by experienced leaders</h3>
          </div>
          <div className="value-card value-card-pink">
            <div className="value-icon">
              <div className="icon-circle icon-pink">📈</div>
            </div>
            <h3>Sustainable<br />Growth</h3>
          </div>
          <div className="value-card value-card-blue">
            <div className="value-icon">
              <div className="icon-circle icon-blue">⭐</div>
            </div>
            <h3>Increased<br />Confidence</h3>
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
          <div className="service-card service-card-purple">
            <div className="service-image">
              <div className="service-placeholder">👥</div>
            </div>
            <div className="service-content">
              <h3>Shadow Leaders Advisory</h3>
              <p className="service-description">
                Access a private collective of 20+ top professionals for honest, strategic, and practical answers. We provide <strong>tailor-made advice</strong> and <strong>hands-on implementation</strong> for founders who demand direct impact.
              </p>
              <a href="#contact" className="button button-secondary">Yes, I Want To Get An Adviser</a>
            </div>
          </div>

          <div className="service-card service-card-blue">
            <div className="service-image">
              <div className="service-placeholder">💼</div>
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
            <h3>Real-life experience</h3>
            <p>We have built, sold, failed and won (20+ years experience).</p>
          </div>

          <div className="why-card-large">
            <h3>No nonsense</h3>
            <p>Direct, to the point, with humour where possible.</p>
          </div>

          <div className="why-card-large">
            <h3>Exclusive</h3>
            <p>By invitation only. Because not everyone is ready for faster growth.</p>
          </div>

          <div className="why-card-large">
            <h3>No fluff</h3>
            <p>This is not a trick like popular playbooks and gurus tell you.</p>
          </div>

          <div className="why-card-large">
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
            <h3>Clarity in decision-making</h3>
          </div>
          <div className="result-card">
            <h3>Smarter teams and a stronger leadership team</h3>
          </div>
          <div className="result-card">
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
