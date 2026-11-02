
import { useState } from "react";
import "../PuppyFooter.css";
import { ArrowLeft, Check, PawPrint } from "lucide-react";

const WHATSAPP_NUMBER = "971541676733";

const puppies = [
  {
    name: "Max",
    breed: "Maltipoo",
    gender: "Boy",
    age: "3 months",
    details: "Maltipoo, boy, 3 months, with video",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1000",
    gallery: [
    "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1000",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000",
  ],
    color: "#a94b19",
  },
  {
    name: "Korean Teacup Maltipoo",
    breed: "Maltipoo",
    gender: "Girl",
    age: "2 months",
    details: "girl, 2 months, with video",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1000",
    gallery: [
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1000",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1000",
    "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=1000",
  ],
    color: "#67412f",
  },
  {
    name: "Korean Teacup Poodle",
    breed: "Poodle",
    gender: "Girl",
    age: "2 months",
    details: "girl, 2 months",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000",
    gallery: [
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000",
    "https://images.unsplash.com/photo-1552053831-71594a27632d?w=1000",
  ],
    color: "#d28b40",
  },
  {
    name: "Maltipoo & Cavapoo",
    breed: "Maltipoo & Cavapoo",
    gender: "Boy or girl",
    age: "2–3 months",
    details: "boy, 3 months Maltipoo & 2 months Cavapoo",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000",
    gallery: [
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000",
    "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1000",
  ],
    color: "#b96650",
  },
  {
    name: "Toy Poodle",
    breed: "Toy Poodle",
    gender: "Boy or girl",
    age: "2 months",
    details: "boy & girl, 2 months",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1000",
    gallery :
    [
     "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1000",
     "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1000",
     "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=1000"
    ],
    color: "#75472e",
  },
  {
    name: "Maltipoo",
    breed: "Maltipoo",
    gender: "Girl",
    age: "3 months",
    details: "girl, 3 months, with video",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1000",
    gallery:
    [
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1000",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1000",
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1000"
    ],
    color: "#a94b19",
  },
  {
    name: "Pomeranian",
    breed: "Pomeranian",
    gender: "Girl",
    age: "3 months",
    details: "boy, 2 months",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=1000",
    gallery:
    [
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=1000",
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=1000",
      "https://images.unsplash.com/photo-1537151625747-768eb6cf92b2?w=1000"
    ],
    color: "#67412f",
  },
  {
    name: "Cute Cavapoo",
    breed: "Cavapoo",
    gender: "Girl",
    age: "3 months",
    details: "girl, 3 months",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1000",
    gallery:[
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1000",
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1000",
      "https://images.unsplash.com/photo-1561037404-61cd46aa615b?w=1000"
    ],
    color: "#d28b40",
  },
  {
    name: "Fluffy Poodle",
    breed: "Poodle",
    gender: "Boy",
    age: "2 months",
    details: "boy, 2 months",
    location: "Imported for you",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000",
    gallery:[
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000",
    "https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=1000"
    ],
    color: "#b96650",
  },
];

const steps = [
  {
    number: "1",
    title: "Reserve your puppy",
    description: "Tell us which puppy has captured your heart.",
  },
  {
    number: "2",
    title: "Personalized consultation",
    description:
      "We finalize details with you and share updates on your puppy's journey.",
  },
  {
    number: "3",
    title: "Import and arrival",
    description:
      "We manage health checks, travel arrangements, and documentation.",
  },
  {
    number: "4",
    title: "Welcome home",
    description:
      "We help your new puppy settle in and ensure a smooth transition into your home.",
  },
];

export default function PuppySection({ onDetailChange }) {
  const [selectedPuppy, setSelectedPuppy] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    area: "",
    message: "",
  });

  // OPEN PUPPY DETAILS
  const openPuppy = (puppy) => {
    setSelectedPuppy(puppy);
    setActiveImageIndex(0);

    if (onDetailChange) {
      onDetailChange(true);
    }

    setForm({
      name: "",
      phone: "",
      email: "",
      area: "",
      message: `Hi! I'd love to know more about ${puppy.name}.`,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // RETURN TO PUPPY LIST
  const closePuppy = () => {
    setSelectedPuppy(null);

    if (onDetailChange) {
      onDetailChange(false);
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // FORM INPUT HANDLER
  const updateForm = (event) => {
    setForm((previous) => ({
      ...previous,
      [event.target.name]: event.target.value,
    }));
  };

  // WHATSAPP LINK
  const whatsappLink = selectedPuppy
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        `Hello! I am interested in ${selectedPuppy.name}. Please share more details.`
      )}`
    : "#";

  // SEND ENQUIRY
  const submitEnquiry = (event) => {
    event.preventDefault();

    if (!selectedPuppy) return;

    const message = `Hello! I am interested in ${selectedPuppy.name}.

Name: ${form.name}
Phone: ${form.phone}
Email: ${form.email}
Area: ${form.area}
Message: ${form.message}`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  // =================================
  // PUPPY DETAIL PAGE
  // =================================

  if (selectedPuppy) {
    const galleryImages = selectedPuppy.gallery?.length
      ? selectedPuppy.gallery
      : [selectedPuppy.image];
    const selectedPuppyIndex = puppies.findIndex(
      (puppy) => puppy === selectedPuppy
    );
    const previousPuppy = puppies[(selectedPuppyIndex - 1 + puppies.length) % puppies.length];
    const nextPuppy = puppies[(selectedPuppyIndex + 1) % puppies.length];

    return (
      <section className="puppy-detail-page">

        {/* BREADCRUMB */}
        <div className="puppy-breadcrumb">
          <button onClick={closePuppy}>
            Available puppies
          </button>
          <span>/</span>
          <span>{selectedPuppy.name}</span>
        </div>

        {/* INTRODUCTION */}
        <div className="detail-step-label">
          <span>1</span>
          hello, it's me
        </div>

        {/* MAIN TWO-COLUMN LAYOUT */}
        <div className="puppy-detail-top">

          {/* LEFT: PUPPY IMAGE GALLERY */}
          <div className="puppy-gallery" style={{ width: "100%", minWidth: 0 }}>
            <div
              className="puppy-detail-photo"
              style={{ position: "relative", overflow: "hidden" }}
            >
              <img
                src={galleryImages[activeImageIndex]}
                alt={`${selectedPuppy.name} - photo ${activeImageIndex + 1}`}
              />

              {galleryImages.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label="Previous puppy photo"
                    onClick={() =>
                      setActiveImageIndex((current) =>
                        (current - 1 + galleryImages.length) % galleryImages.length
                      )
                    }
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "15px",
                      transform: "translateY(-50%)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "2px solid #321b10",
                      background: "#fffaf3",
                      color: "#321b10",
                      fontSize: "25px",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  >
                    ‹
                  </button>

                  <button
                    type="button"
                    aria-label="Next puppy photo"
                    onClick={() =>
                      setActiveImageIndex((current) =>
                        (current + 1) % galleryImages.length
                      )
                    }
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "15px",
                      transform: "translateY(-50%)",
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      border: "2px solid #321b10",
                      background: "#fffaf3",
                      color: "#321b10",
                      fontSize: "25px",
                      cursor: "pointer",
                      zIndex: 2,
                    }}
                  >
                    ›
                  </button>
                </>
              )}

              <span
                className="gallery-count"
                style={{
                  position: "absolute",
                  bottom: "15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  background: "#321b10",
                  color: "white",
                  padding: "6px 13px",
                  borderRadius: "20px",
                  fontSize: "12px",
                  zIndex: 2,
                }}
              >
                {activeImageIndex + 1}/{galleryImages.length}
              </span>
            </div>

            <div
              className="gallery-thumbnails"
              style={{ display: "flex", gap: "12px", marginTop: "14px", flexWrap: "wrap" }}
            >
              {galleryImages.map((photo, index) => (
                <button
                  type="button"
                  key={`${photo}-${index}`}
                  onClick={() => setActiveImageIndex(index)}
                  aria-label={`Show puppy photo ${index + 1}`}
                  aria-pressed={activeImageIndex === index}
                  style={{
                    padding: 0,
                    width: "78px",
                    height: "88px",
                    flex: "0 0 78px",
                    border: activeImageIndex === index
                      ? "2px solid #a94b19"
                      : "2px solid #b9aaa0",
                    borderRadius: "13px",
                    overflow: "hidden",
                    background: "#fffaf3",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={photo}
                    alt={`${selectedPuppy.name} thumbnail ${index + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                </button>
              ))}
            </div>
          </div>

        {/* RIGHT: INFORMATION AND BENEFITS */}
          <div className="puppy-detail-right">

            {/* PUPPY INFORMATION CARD */}
            <div className="puppy-detail-info">

              <span className="detail-available">
                <PawPrint size={13} />
                Available
              </span>

              <h1>{selectedPuppy.name}</h1>

              <div className="detail-facts">

                <div>
                  <span>Breed</span>
                  <strong>{selectedPuppy.breed}</strong>
                </div>

                <div>
                  <span>Boy or girl</span>
                  <strong>{selectedPuppy.gender}</strong>
                </div>

                <div>
                  <span>Age</span>
                  <strong>{selectedPuppy.age}</strong>
                </div>

                <div>
                  <span>Where</span>
                  <strong>{selectedPuppy.location}</strong>
                </div>

              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="detail-whatsapp-btn"
              >
                Ask about this puppy on WhatsApp
              </a>

              <button
                type="button"
                className="detail-enquiry-btn"
                onClick={() =>
                  document
                    .getElementById("puppy-enquiry")
                    ?.scrollIntoView({
                      behavior: "smooth",
                    })
                }
              >
                Send an enquiry
              </button>

            </div>

            {/* BENEFITS CARD - INSIDE RIGHT COLUMN */}
            <div className="puppy-benefits">

              <div className="detail-step-label">
                <span>2</span>
                <strong>
                  what comes with this {selectedPuppy.name}
                </strong>
              </div>

              <h2>Every Teddy Pup comes</h2>

              <ul>
                <li>
                  <Check />
                  Vaccinated
                </li>

                <li>
                  <Check />
                  Dewormed
                </li>

                <li>
                  <Check />
                  Verified health certificate from licensed vets
                </li>

                <li>
                  <Check />
                  Thoroughly checked before joining your family
                </li>
              </ul>

            </div>

          </div>

        {/* COMING HOME FROM ABROAD - DIRECTLY BELOW THE PUPPY GALLERY */}
        <section className="puppy-journey puppy-gallery-journey">
          <div className="detail-step-label">
            <span>3</span>
            <span>the way home</span>
          </div>

          <h2>Coming home from abroad</h2>

          <div className="journey-steps">
            {steps.map((step) => (
              <div className="journey-step" key={step.number}>
                <span className="journey-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </section>
        </div>

        {/* ENQUIRY FORM */}
        <section
          className="puppy-enquiry-section"
          id="puppy-enquiry"
        >

          <div className="enquiry-intro">

            <div className="detail-step-label">
              <span>4</span>
              dear TeddyPups...
            </div>

            <h2>
              Ask about
              <br />
              this puppy
            </h2>

            <p>
              Leave your details and our team will get back to you
              promptly — or message us on WhatsApp for the quickest reply.
            </p>

          </div>

          <form
            className="puppy-enquiry-form"
            onSubmit={submitEnquiry}
          >

            <label>
              Your name *

              <input
                type="text"
                name="name"
                value={form.name}
                onChange={updateForm}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              Phone or WhatsApp *

              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={updateForm}
                placeholder="+971 50 123 4567"
                required
              />

              <small>
                With country code, e.g. +971 50 123 4567
              </small>
            </label>

            <label>
              Email (optional)

              <input
                type="email"
                name="email"
                value={form.email}
                onChange={updateForm}
                placeholder="Your email"
              />
            </label>

            <label>
              Your area (optional)

              <input
                type="text"
                name="area"
                value={form.area}
                onChange={updateForm}
                placeholder="e.g. Dubai Marina"
              />
            </label>

            <label className="enquiry-message">
              Message (optional)

              <textarea
                name="message"
                value={form.message}
                onChange={updateForm}
                rows="4"
              />
            </label>

            <button
              type="submit"
              className="enquiry-submit-btn"
            >
              Send enquiry
            </button>

          </form>

        </section>

        {/* BACK BUTTON */}
        <button
          className="detail-back-bottom"
          onClick={closePuppy}
        >
          <ArrowLeft size={17} />
          Back to all puppies
        </button>

        {/* PREVIOUS / NEXT PUPPY NAVIGATION */}
        <nav className="puppy-detail-navigation" aria-label="Browse puppies">
          <button
            type="button"
            className="puppy-nav-card puppy-nav-previous"
            onClick={() => openPuppy(previousPuppy)}
          >
            <img src={previousPuppy.image} alt="" />
            <span className="puppy-nav-copy">
              <small>Previous pup</small>
              <strong>{previousPuppy.name}</strong>
            </span>
          </button>

          <button
            type="button"
            className="puppy-nav-card puppy-nav-next"
            onClick={() => openPuppy(nextPuppy)}
          >
            <span className="puppy-nav-copy">
              <small>Next pup</small>
              <strong>{nextPuppy.name}</strong>
            </span>
            <img src={nextPuppy.image} alt="" />
          </button>
        </nav>

        {/* SITE FOOTER */}
        <footer className="teddypups-footer">
          <div className="footer-wave" aria-hidden="true" />
          <div className="footer-stars" aria-hidden="true">✦　　·　　　 ✦　　　·　　　 ✦</div>

          <div className="footer-main">
            <div className="footer-brand-column">
              <h2>Home, at last.</h2>
              <p>
                TeddyPups U.A.E. is a Dubai-based brand specializing in
                miniature puppies, offering premium services and
                worldwide shipping.
              </p>
              <div className="footer-puppy-basket" aria-hidden="true">
                <span>🐶</span>
                <div />
              </div>
            </div>

            <div className="footer-explore">
              <h3>Explore</h3>
              <a href="#puppies" onClick={closePuppy}>Available puppies</a>
              <a href="#puppies" onClick={closePuppy}>Gone home</a>
              <a href="#happy-families">Happy families</a>
              <a href="#how-it-works">How it works</a>
              <a href="#delivery">Delivery &amp; collection</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Visit &amp; contact</a>
            </div>

            <div className="footer-contact">
              <h3>Say hello</h3>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer">
                WhatsApp +971 54 167 6733
              </a>
              <a href="mailto:teddypupsadmin@gmail.com">teddypupsadmin@gmail.com</a>
              <p>Downtown Dubai, United Arab Emirates</p>
              <div className="footer-socials" aria-label="Social media">
                <span>Instagram</span>
                <span>TikTok</span>
                <span>Facebook</span>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span className="footer-copyright">
              <span className="footer-logo-mark">🐶</span>
              © 2026 TeddyPups U.A.E.
            </span>
            <strong>every puppy is family</strong>
          </div>
        </footer>

      </section>
    );
  }

  // =================================
  // PUPPY LISTING PAGE
  // =================================

  return (
    <section className="puppy-section" id="puppies">

      <div className="puppy-heading">

        <div>
          <h2>Meet the pups</h2>

          <p>
            Real puppies, real photos, looking for their
            families right now.
          </p>
        </div>

        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
          className="puppy-all-btn"
        >
          See all available puppies
        </a>

      </div>

      <div className="puppy-scroll">

        <div className="puppy-cards">

          {puppies.map((puppy, index) => (

            <article
              className="puppy-card"
              key={puppy.name + index}
              onClick={() => openPuppy(puppy)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  openPuppy(puppy);
                }
              }}
            >

              <h3>{puppy.name}</h3>

              <p className="puppy-details">
                {puppy.details}
              </p>

              <div
                className="kennel"
                style={{
                  "--door-color": puppy.color,
                }}
              >

                <div className="kennel-inside">
                  <img
                    src={puppy.image}
                    alt={puppy.name}
                    loading="lazy"
                  />
                </div>

                <div className="door-panel door-single">
                  <span className="door-paw">🐾</span>
                  <span className="door-handle" />
                </div>

                <span className="availability">
                  Available
                </span>

              </div>

            </article>

          ))}

        </div>
      </div>

      <div className="wooden-floor">
        <div className="wood-lines" />
      </div>

    </section>
  );
}
