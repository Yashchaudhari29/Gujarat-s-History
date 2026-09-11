import { memo } from "react";

export default memo(function GujaratGaurav() {
  return (
    <section className="gaurav-section section-wrap" id="gaurav">
      <div className="gaurav-hero">
        <div className="section-heading">
          <div>
            <span className="eyebrow">GUJARAT GAURAV</span>
            <h2>ગુજરાત ગૌરવ:<br /><em>વારસો, નેતૃત્વ અને વિકાસ</em></h2>
          </div>
          <p>
            An immersive civic documentary showcasing Gujarat's deep heritage, the documented
            public journey of Narendra Modi, and the modern development resilience shaping the state.
          </p>
        </div>
      </div>

      <div className="gaurav-entry-points">
        <div className="gaurav-card leader-main-card" id="gaurav-leadership">
          <img src="assets/narendra-modi.jpg" alt="Portrait of Narendra Modi" className="gaurav-card-img" loading="lazy" />
          <div className="gaurav-card-content">
            <h3>નેતૃત્વ અને જનસેવા</h3>
            <span>Leadership & Icons</span>
            <p>Trace Narendra Modi’s public journey from Vadnagar to the global stage, alongside key civic leaders from all fields (science, arts, education, and governance).</p>
            <button onClick={() => window.location.hash = '#personalities'} className="primary" style={{marginTop: 'auto'}}>Explore Luminaries</button>
          </div>
        </div>

        <div className="gaurav-card" id="gaurav-districts">
          <div className="gaurav-card-content">
            <h3>જિલ્લાનું ગૌરવ</h3>
            <span>District contributions</span>
            <p>Explore the heritage, local economy, and historical connections of all 34 districts.</p>
            <button data-gaurav="districts" className="primary" style={{marginTop: 'auto'}}>Explore 34 Districts</button>
          </div>
        </div>

        <div className="gaurav-card" id="gaurav-development">
          <div className="gaurav-card-content">
            <h3>વિકાસ અને સક્ષમતા</h3>
            <span>Development & resilience</span>
            <p>Investigate documented development projects, public services, and thematic initiatives shaping Gujarat.</p>
            <button data-gaurav="development" className="primary" style={{marginTop: 'auto'}}>Explore Initiatives</button>
          </div>
        </div>
      </div>
    </section>
  );
});
