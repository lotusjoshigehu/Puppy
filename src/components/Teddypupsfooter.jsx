import React from "react";
import "../TeddyPupsFooter.css";

const exploreLinks = [
  ["Available puppies", "#puppies"],
  ["Gone home", "#gone-home"],
  ["Happy families", "#happy-families"],
  ["How it works", "#puppy-journey"],
  ["Delivery & collection", "#delivery"],
  ["FAQs", "#faqs"],
  ["Visit & contact", "#contact"],
];

export default function TeddyPupsFooter({
  basketImage = "/assets/puppy-basket.png",
  whatsapp = "https://wa.me/971541676733",
  email = "teddypupsadmin@gmail.com",
}) {
  return (
    <footer className="teddypups-footer" id="contact">
      <span className="teddypups-footer-moon" aria-hidden="true">☾</span>
      <div className="teddypups-footer-main">
        <div className="teddypups-footer-brand">
          <h2>Home, at last.</h2>
          <p>
            TeddyPups U.A.E. is a Dubai-based brand specializing in miniature
            puppies, offering premium services and worldwide shipping.
          </p>
         <img
  className="teddypups-footer-basket"
  src="/assets/basket.png"
  alt="TeddyPups puppy sitting in "
/>
        </div>

        <nav className="teddypups-footer-explore" aria-label="Explore">
          <h3>Explore</h3>
          {exploreLinks.map(([label, href]) => <a href={href} key={label}>{label}</a>)}
        </nav>

        <div className="teddypups-footer-contact">
          <h3>Say hello</h3>
          <a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp +971 54 167 6733</a>
          <a href={`mailto:${email}`}>{email}</a>
          <p>Downtown Dubai, United Arab Emirates</p>
          <div className="teddypups-footer-socials">
            <a href="#" aria-label="Instagram">Instagram</a>
            <a href="#" aria-label="TikTok">TikTok</a>
            <a href="#" aria-label="Facebook">Facebook</a>
          </div>
        </div>
      </div>

      <div className="teddypups-footer-bottom">
        <div className="teddypups-footer-copyright">
          <span className="teddypups-footer-logo" aria-hidden="true">🐾</span>
          <span>© 2026 TeddyPups U.A.E.</span>
        </div>
        <strong>every puppy is family</strong>
      </div>
    </footer>
  );
}
