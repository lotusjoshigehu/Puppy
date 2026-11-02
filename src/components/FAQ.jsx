
import React from "react";
import "../FAQ.css";

const questions = [
  {
    question: "Are your puppies vaccinated and health-checked?",
    answer:
      "Yes. All our puppies come with a verified health certificate from licensed vets. Every puppy is vaccinated, dewormed, and thoroughly checked before joining your family."
  },
  {
    question: "Can I meet a puppy before I decide?",
    answer:
      "Yes. Come meet our locally available puppies in our Downtown Dubai showroom and spend time bonding before making your decision."
  },
  {
    question: "Can I take my puppy home the same day?",
    answer:
      "Local puppies are available immediately, so you can take your puppy home the same day."
  }
];

export default function FAQ() {
  return (
    <section className="faq-section" id="faqs">
      <div className="faq-left">
        <h2>Questions,<br />answered</h2>

        <a href="#faqs" className="faq-button">
          Read questions
        </a>

        
      </div>

      <div className="faq-right">
        {questions.map((item, index) => (
          <article className="faq-item" key={index}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
