import React from "react";
import "../PuppyMeetWays.css";

const LOCAL_PUPPY_IMAGE =
  "https://images.unsplash.com/photo-1517849845537-4d257902454a?w=900";
const IMPORTED_PUPPY_IMAGE =
  "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=900";

export default function PuppyMeetWays({
  localImage = LOCAL_PUPPY_IMAGE,
  importedImage = IMPORTED_PUPPY_IMAGE,
  onLocalClick,
  onImportedClick,
}) {
  const scrollToPuppies = () => {
    document.getElementById("puppies")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="meet-ways-section" aria-labelledby="meet-ways-title">
      <div className="meet-ways-inner">
        <h2 id="meet-ways-title">
          Two ways to
          <br />
          meet your puppy
        </h2>

        <div className="meet-ways-sign" aria-hidden="true">
          <span className="meet-sign meet-sign-left">Puppies in Dubai</span>
          <span className="meet-sign meet-sign-right">Imported for you</span>
          <span className="meet-sign-post" />
        </div>

        <div className="meet-ways-divider" aria-hidden="true" />

        <article className="meet-way meet-way-local">
          <div className="local-city-art" aria-hidden="true">
            <span className="city-building building-one" />
            <span className="city-building building-two" />
            <span className="city-building building-three" />
            <span className="city-building building-four" />
            <span className="city-building building-five" />
            <div className="showroom-frame">
              <div className="showroom-awning" />
              <img src={localImage} alt="A puppy available in our Dubai showroom" />
            </div>
            <span className="showroom-caption">In our showroom</span>
          </div>
          <div className="meet-way-copy">
            <p>
              See them, love them, take them home. Come meet our locally
              available puppies before you decide.
            </p>
            <button type="button" onClick={onLocalClick || scrollToPuppies}>
              Meet local puppies
            </button>
          </div>
        </article>

        <article className="meet-way meet-way-imported">
          <div className="flight-art" aria-hidden="true">
            <svg viewBox="0 0 470 260" role="img">
              <path className="flight-path" d="M35 218 C115 42 315 28 430 145" />
              <circle cx="35" cy="218" r="5" />
              <circle cx="430" cy="145" r="5" />
              <text x="16" y="246">Korea</text>
              <text x="408" y="174">Dubai</text>
              <g className="flight-plane" transform="translate(228 105) rotate(-8)">
                <path d="M-95 0 L-62 -13 L-46 -44 L-27 -44 L-34 -10 L38 -10 L63 -34 L80 -32 L70 -4 Q94 0 70 5 L80 32 L63 34 L38 10 L-34 10 L-27 44 L-46 44 L-62 13 Z" />
                <rect x="-91" y="-18" width="182" height="36" rx="18" />
                <circle cx="0" cy="0" r="15" />
              </g>
            </svg>
          </div>
          <div className="imported-puppy-preview">
            <img src={importedImage} alt="A puppy available through our import service" />
          </div>
          <div className="meet-way-copy">
            <p>
              Exclusive Korean teacup puppies, delivered. Order from the
              world's most reputable breeders and let us handle the import.
            </p>
            <button type="button" onClick={onImportedClick || scrollToPuppies}>
              See imported puppies
            </button>
          </div>
        </article>

        
      </div>
    </section>
  );
}
