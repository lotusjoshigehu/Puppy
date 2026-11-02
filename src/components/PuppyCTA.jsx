import React from "react";
import "../PuppyCTA.css";

export default function PuppyCTA({
  puppyImage = "/assets/door-puppy.jpg",
  whatsappUrl = "https://wa.me/971541676733",
  contactUrl = "#contact",
}) {
  return (
    <section className="puppy-cta-section" id="gone-home">
      <div className="puppy-cta-content">
        <h2>Ready to meet your<br />new best friend?</h2>
        <p>
          Bring home a healthy, happy teacup or designer puppy with expert
          guidance every step of the way. We help you find the right match and
          ensure a smooth, safe delivery across the UAE.
        </p>
        <div className="puppy-cta-scene">
          <div className="puppy-cta-wall" />
          <div className="puppy-cta-doorway">
            <div className="puppy-cta-frame">
              <div className="puppy-cta-puppy">
                <img src="/assets/dog.png" />
              </div>
              <div className="puppy-cta-door"><span /></div>
            </div>
            <span className="puppy-cta-light" />
            <span className="puppy-cta-plant"><i /><i /></span>
          </div>
          <div className="puppy-cta-welcome">welcome home</div>
          <div className="puppy-cta-floor" />
        </div>
        <div className="puppy-cta-actions">
          <a className="puppy-cta-whatsapp" href={whatsappUrl} target="_blank" rel="noreferrer">Enquire on WhatsApp</a>
          <a className="puppy-cta-contact" href={contactUrl}>Visit &amp; contact</a>
        </div>
      </div>
    </section>
  );
}
