import "./Pricing.css";
import data from "../data/data.json";

function Pricing() {
  const { label, title, plans } = data.pricing;

  return (
    <section className="pricing">
      <div className="pricing-container">
        <div className="pricing-label">{label}</div>
        <h2 className="pricing-title">{title}</h2>
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card ${
                plan.variant === "primary" ? "primary" : ""
              }`}
            >
              <div className="pricing-card-header">
                <h3 className="plan-name">{plan.name}</h3>
                <p className="plan-description">{plan.description}</p>
                <div className="plan-price">
                  <span className="currency">$</span>
                  <span className="amount">{plan.price}</span>
                  <span className="period">/Month</span>
                </div>
              </div>
              <button
                className={`plan-button ${
                  plan.variant === "primary" ? "primary" : "default"
                }`}
              >
                {plan.buttonText}
              </button>
              <ul className="feature-list">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="feature-item">
                    <span className="check-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
