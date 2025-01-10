import "./Hero.css";
import data from "../data/data.json"; // Import static data

function Hero() {
  const { title, arrowIcon, subtitle, buttons } = data.hero;

  return (
    <section className="hero">
      <h1 className="hero-title">
        {title.split(",")[0]}, {title.split(",")[1]}
        <div className="hero-title-row">
          <div className="arrow-icon">{arrowIcon}</div>
        </div>
      </h1>
      <p className="hero-subtitle">{subtitle}</p>
      <div className="hero-buttons">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={
              button.type === "primary" ? "btn-primary" : "btn-secondary"
            }
          >
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
}

export default Hero;
