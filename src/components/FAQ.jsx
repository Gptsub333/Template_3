import "./FAQ.css";
import { useState } from "react";
import data from "../data/data.json";

function FAQ() {
  const { label, title, faqs } = data.faq;
  const [openIndex, setOpenIndex] = useState(3); // Start with the 4th item open

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="faq">
      <div className="faq-container">
        <div className="faq-label">{label}</div>
        <h2 className="faq-title">{title}</h2>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? "open" : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <button className="toggle-btn">
                  {openIndex === index ? "×" : "+"}
                </button>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
