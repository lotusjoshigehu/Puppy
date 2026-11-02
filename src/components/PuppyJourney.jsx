import React from "react";
import "../PuppyJourney.css";

const defaultPhotos = [
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=500",
  "https://images.unsplash.com/photo-1552053831-71594a27632d?w=500",
  "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=500",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500",
];

export default function PuppyJourney({
  photos = defaultPhotos,
  onHowItWorks,
  whatsappUrl = "https://wa.me/971541676733",
}) {
  const handleHowItWorks = () => {
    if (onHowItWorks) {
      onHowItWorks();
      return;
    }
    document.getElementById("puppies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="puppy-journey-showcase" id="how-it-works">
      <div className="journey-showcase-inner">
        <div className="journey-showcase-copy">
          <h2>Your puppy journey</h2>
          <p className="journey-showcase-intro">
            A premium, step-by-step concierge experience. We make adoption
            simple, secure, and purely joyful.
          </p>

          <div className="journey-showcase-steps">
            <article className="journey-showcase-step is-active">
              <span className="journey-step-badge">1</span>
              <div>
                <h3>Choose your breed</h3>
                <p>
                  Select your preferred breed or tell us what you're looking
                  for. We'll guide you based on availability and your lifestyle.
                </p>
              </div>
            </article>
            <article className="journey-showcase-step is-muted">
              <span className="journey-step-badge">2</span>
              <div>
                <h3>Get photos &amp; details</h3>
                <p>
                  Our team will share real photos, health details, and all
                  necessary information directly on WhatsApp.
                </p>
              </div>
            </article>
            <article className="journey-showcase-step is-muted">
              <span className="journey-step-badge">3</span>
              <div>
                <h3>Secure &amp; safe delivery</h3>
                <p>
                  Once confirmed, we handle everything professionally and
                  ensure your puppy reaches you safely and stress-free.
                </p>
              </div>
            </article>
          </div>

          <button className="journey-how-button" type="button" onClick={handleHowItWorks}>
            How it works
          </button>
        </div>

        <div className="journey-showcase-visual">
          <div className="journey-phone" aria-label="WhatsApp conversation preview">
            <div className="journey-phone-header">
              <span className="journey-brand-mark">🐾</span>
              <span><strong>TeddyPups U.A.E.</strong><small>online</small></span>
            </div>
            <div className="journey-chat">
              <div className="journey-message journey-message-out">
                Hi TeddyPups! I'd love to know more about your puppies.
              </div>
              <div className="journey-message journey-message-in">
                Select your preferred breed or tell us what you're looking for.
                We'll guide you based on availability and your lifestyle.
                <div className="journey-chips">
                  <span>Maltipoo</span><span>Pomeranian</span><span>Poodle</span>
                  <span>Cavapoo</span><span>Shih Tzu</span>
                </div>
              </div>
              <div className="journey-photo-grid">
                {photos.slice(0, 4).map((photo, index) => (
                  <img key={`${photo}-${index}`} src={photo} alt={`Puppy photo ${index + 1}`} />
                ))}
              </div>
              <div className="journey-video-preview">
                <img src={photos[0]} alt="Puppy video preview" />
                <span>▶</span>
              </div>
              <div className="journey-message journey-message-in">
                Our team will share real photos, health details, and all
                necessary information directly on WhatsApp.
              </div>
            </div>
            <a className="journey-phone-input" href={whatsappUrl} target="_blank" rel="noreferrer">
              <span>Say hello on WhatsApp</span><b>➤</b>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
