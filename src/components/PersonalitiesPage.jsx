import { memo, useEffect, useRef, useState } from "react";
import personalitiesData from "../data/personalities-data.json";

export default memo(function PersonalitiesPage() {
  const [activeId, setActiveId] = useState(personalitiesData[0].id);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id.replace('card-', ''));
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.6 }
    );

    const cards = document.querySelectorAll('.premium-card');
    cards.forEach(card => observerRef.current.observe(card));

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const scrollToCard = (id) => {
    const el = document.getElementById(`card-${id}`);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section className="premium-section" id="personalities">
      {/* Background Image */}
      <div className="premium-bg"></div>

      <div className="premium-container">
        
        {/* Decorative Divider */}
        <div className="decorative-divider">
          <div className="divider-circle"></div>
          <div className="divider-line"></div>
          <div className="divider-circle"></div>
        </div>

        {/* Bottom Area (Header) */}
        <div className="premium-header">
          <div className="premium-logo-area">
            <svg viewBox="0 0 256 256" width="40" height="40" fill="#321C04">
              <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,88,88,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"/>
            </svg>
            <span className="premium-label">CALM<br/>AMPLIFIED</span>
          </div>
          <h2 className="premium-headline">
            We make tools to uncover history. But, most importantly, we help you remember what civic pride looks like when heritage moves with you, not over you.
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="premium-grid">
          
          {/* Left Column (Sticky) */}
          <div className="premium-sidebar">
            <h3 className="sidebar-title">Luminaries that flow with time, not over it</h3>
            <div className="sidebar-nav">
              {personalitiesData.map(p => (
                <button 
                  key={p.id} 
                  className={`sidebar-nav-btn ${activeId === p.id ? 'active' : ''}`}
                  onClick={() => scrollToCard(p.id)}
                >
                  {p.name}
                </button>
              ))}
            </div>
            <div className="sidebar-footer">
              <p>No noise. Just their legacy, gently sorted.</p>
              <a href="#explore-deeper" className="button primary">Explore More Hub</a>
            </div>
          </div>

          {/* Right Column (Scrolling Cards) */}
          <div className="premium-cards-wrapper">
            {personalitiesData.map(p => (
              <div key={p.id} id={`card-${p.id}`} className="premium-card">
                <div className="card-logo">
                  <svg viewBox="0 0 256 256" width="32" height="32" fill="rgba(255,255,255,0.8)">
                    <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM128,216a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z"/>
                  </svg>
                </div>
                <h3 className="card-title">{p.name}</h3>
                <span className="card-meta">{p.born} • {p.place}</span>
                <div className="card-media">
                  <img src={p.image} alt={p.name} loading="lazy" />
                </div>
                <p className="card-desc">{p.relevance}</p>
                <div className="card-deep-dive">
                  <h4>Contributions</h4>
                  <p>{p.details.contributions_gujarat}</p>
                  <h4>Vision & Legacy</h4>
                  <p>{p.details.vision}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
});
