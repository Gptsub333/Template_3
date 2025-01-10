import "./Benefits.css";
import data from "../data/data.json";

function Benefits() {
  const { label, title, cards } = data.benefits;

  return (
    <section className="benefits">
      <div className="benefits-container">
        <div className="benefits-label">{label}</div>
        <h2 className="benefits-title">{title}</h2>
        <div className="benefits-grid">
          {cards.map((benefit, index) => (
            <div
              key={index}
              className={`benefit-card ${
                benefit.variant === "primary" ? "primary" : ""
              }`}
            >
              <div className="benefit-icon">
                <span>{benefit.icon}</span>
              </div>
              <h3 className="benefit-card-title">{benefit.title}</h3>
              <p className="benefit-description">{benefit.description}</p>
              <button
                className={`btn-learn-more ${
                  benefit.variant === "primary" ? "light" : "dark"
                }`}
              >
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Benefits;
