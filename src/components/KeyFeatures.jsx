import "./KeyFeatures.css";
import data from "../data/data.json";

function KeyFeatures() {
  const { label, title, features } = data.keyFeatures;

  return (
    <section className="key-features">
      <div className="key-features-container">
        <div className="key-features-label">{label}</div>
        <h2 className="key-features-title">{title}</h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-content">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
              <div className="feature-visual">
                {feature.image && (
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="feature-image"
                  />
                )}
                {feature.icons && (
                  <div className="integration-icons">
                    {feature.icons.map((icon, i) => (
                      <div key={i} className="icon-circle">
                        <img src={icon.src} alt={icon.alt} />
                      </div>
                    ))}
                  </div>
                )}
                {feature.avatars && (
                  <div className="collaboration-avatars">
                    {feature.avatars.map((avatar, i) => (
                      <div key={i} className="avatar">
                        <img src={avatar.src} alt={avatar.alt} />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
