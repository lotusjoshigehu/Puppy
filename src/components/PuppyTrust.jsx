
import React from "react";
import "../PuppyTrust.css";

const items = [
  [
    "♡",
    "Vet-checked & healthy",
    "Every puppy comes vaccinated, dewormed, and with a verified health certificate.",
  ],
  [
    "✈",
    "Korea to Dubai, safely",
    "Trusted breeders, safe travel, and premium care from start to finish.",
  ],
  [
    "▤",
    "Support 24/7",
    "Always here to help, from choosing your puppy to post-delivery support.",
  ],
  [
    "◎",
    "Trusted by families worldwide",
    "Puppies delivered to loving homes all around the world.",
  ],
];

export default function PuppyTrust() {
  return (
    <section className="puppy-trust-section">
      <div className="puppy-trust-book">

        {/* Left book cover */}
        <div className="puppy-trust-cover">
          <small>puppy passport</small>

          <h2>
            Why
            <br />
            families trust
            <br />
            TeddyPups
          </h2>

          <span aria-hidden="true">🐶</span>
        </div>

        {/* Right book pages */}
        <div className="puppy-trust-pages">
          {items.map(([icon, title, desc]) => (
            <article
              className="puppy-trust-item"
              key={title}
            >
              <div className="puppy-trust-stamp">
                <b>{icon}</b>

                <strong>{title}</strong>
              </div>

              <p>{desc}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
