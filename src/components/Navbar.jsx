
import { useState } from "react";
import { Menu, X, PawPrint } from "lucide-react";

const links = [
  ["Home", "#home"],
  ["Puppies", "#puppies"],
  ["Happy families", "#happy-families"],
  ["FAQ", "#faqs"],
  ["How it works", "#journey"],
  ["Visit & contact", "#contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const handleNavClick = (event, label, href) => {
    event.preventDefault();

    setActive(label);
    setOpen(false);

    const target = document.querySelector(href);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Section not found: ${href}`);
    }
  };

  return (
    <header className="navbar">
      <a
        href="#home"
        className="brand"
        onClick={(event) => handleNavClick(event, "Home", "#home")}
      >
        <span className="brand-logo">🐶</span>
        <span>TeddyPups</span>
      </a>

      <nav className={open ? "nav-links active" : "nav-links"}>
        {links.map(([label, href]) => (
          <a
            key={label}
            href={href}
            className={active === label ? "active-link" : ""}
            onClick={(event) => handleNavClick(event, label, href)}
          >
            {label}

            {active === label && (
              <PawPrint className="nav-paw" />
            )}
          </a>
        ))}
      </nav>

      <a
        className="whatsapp-btn"
        href="https://wa.me/971541676733"
        target="_blank"
        rel="noreferrer"
      >
        WhatsApp us
      </a>

      <button
        className="menu-btn"
        onClick={() => setOpen((previous) => !previous)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>
    </header>
  );
}
