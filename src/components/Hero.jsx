
const puppyImages = [
  {
    src: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=600&auto=format&fit=crop",
    alt: "Cute puppy",
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&auto=format&fit=crop",
    alt: "Golden puppy",
  },
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop",
    alt: "Fluffy golden dog",
  },
  {
    src: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&auto=format&fit=crop",
    alt: "Two adorable dogs",
  },
  {
    src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=600&auto=format&fit=crop",
    alt: "Small dog",
  },
  {
    src: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=600&auto=format&fit=crop",
    alt: "Playful puppy",
  },
];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="paw paw-one">🐾</div>
      <div className="paw paw-two">🐾</div>
      <div className="paw paw-three">🐾</div>
      <div className="paw paw-four">🐾</div>

      <div className="hero-content">
        <p className="tagline">
          every puppy is family
        </p>

        <h1>
          Premium teacup
          <br />
          puppies in Dubai
        </h1>

        <p className="hero-description">
          Meet your new best friend in our Dubai showroom,
          or order a rare miniature breed from trusted
          breeders worldwide.
        </p>

        <div className="hero-buttons">
          <a
            href="#puppies"
            className="primary-btn"
          >
            View available puppies
          </a>

          <a
            href="https://wa.me/971541676733"
            className="secondary-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            Enquire on WhatsApp
          </a>
        </div>
      </div>

      <div className="hero-gallery">
        {puppyImages.map((puppy, index) => (
          <div
            className={`hero-photo photo-${index + 1}`}
            key={puppy.src}
          >
            <img
              src={puppy.src}
              alt={puppy.alt}
              loading={index < 3 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <div className="hero-cloud">
        <div className="cloud-pattern"></div>
      </div>
    </section>
  );
}
