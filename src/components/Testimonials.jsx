import "./Testimonials.css";
import data from "../data/data.json";

function Testimonials() {
  const { label, title, data: testimonials } = data.testimonials;

  return (
    <section className="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-label">{label}</div>
        <h2 className="testimonials-title">{title}</h2>
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img
                  src={testimonial.avatar}
                  alt={`${testimonial.name}'s avatar`}
                  className="testimonial-avatar"
                />
                <div className="testimonial-author">
                  <h3 className="author-name">{testimonial.name}</h3>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <p className="testimonial-timestamp">{testimonial.timestamp}</p>
            </div>
          ))}
        </div>
        <button className="view-all-btn">View All Testimonials</button>
      </div>
    </section>
  );
}

export default Testimonials;
