
import React from "react";
import "../HappyFamilies.css";

const defaultFamilies = [
  ["./assets/1.png", "Lulu 🧸 with her new mummy 💗"],
  ["./assets/2.png", "Adorable Maltipoo baby 🧸 💗"],
  ["./assets/3.png", "My new teddy puppy 🥰 🧸"],
  ["./assets/4.png", "Our new puppies 🧸 🥰"],
  ["./assets/5.png", "New puppy 🧸 😍"],
  ["./assets/6.png", "Gang of 3 😍 🧸"],
  ["./assets/7.png", "So happy 😍😍"],
  ["./assets/8.png", "New pup 🥰"],
];

export default function HappyFamilies({
  families = defaultFamilies,
  onSeeAll,
}) {
  return (
    <section
      className="happy-families-section"
      id="happy-families"
    >
      {/* Section heading and testimonial */}
      <header className="happy-families-header">
        <div>
          <h2>Happy families &amp; puppies</h2>

          <p>
            We are truly honored to see our puppies become
            cherished members of loving families. These
            heartwarming moments have been shared by our
            valued clients who welcomed a Teddy Pup into
            their homes and hearts.
          </p>
        </div>

        <blockquote>
          “TeddyPups truly made our dream a reality. They
          supported us at every step of the import journey.
          Our Maltipoo arrived healthy, cheerful, and
          absolutely perfect. Having 24/7 support throughout
          the process gave us complete peace of mind.”

          <cite>Sarah M., Dubai, UAE</cite>
        </blockquote>
      </header>

      {/* Wooden photo gallery */}
      <div className="happy-families-shelf">
        <div className="happy-families-photos">
          {families.map(([image, caption], index) => (
            <figure
              className="happy-family-photo"
              key={`${image}-${index}`}
            >
              <img
                src={image}
                alt={`Happy family with puppy ${index + 1}`}
                loading="lazy"
              />

              <figcaption>{caption}</figcaption>

              <span
                className="photo-tape"
                aria-hidden="true"
              />
            </figure>
          ))}
        </div>

        {/* Shelf bottom and button */}
        <div className="happy-shelf-bottom">
          <span
            className="happy-lamp"
            aria-hidden="true"
          />

          <span
            className="happy-door"
            aria-hidden="true"
          />

          <button
            type="button"
            onClick={onSeeAll}
          >
            See every happy family
          </button>
        </div>
      </div>

      {/* Decorative floor */}
      <div
        className="happy-families-floor"
        aria-hidden="true"
      >
      
      </div>
    </section>
  );
}
