import "./CTA.css";
import data from "../data/data.json";

function CTA() {
  const { title, text, buttonText } = data.cta;

  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-card">
          <div className="cta-content">
            <h2 className="cta-title">{title}</h2>
            <div className="cta-right">
              <p className="cta-text">{text}</p>
              <button className="cta-button">{buttonText}</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
