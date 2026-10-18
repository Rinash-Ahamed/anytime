import { useEffect, useState } from "react";
import brandMark from "../../brand/onlylogo-anytime.png";

const links = [["top", "Home"], ["treatments", "Treatments"], ["journey", "How it works"], ["philosophy", "Our Philosophy"], ["contact", "Contact"]];

export default function Header({ solid }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    document.body.classList.toggle("has-menu", open);
    return () => document.body.classList.remove("has-menu");
  }, [open]);

  return (
    <header className={`header${solid ? " is-solid" : ""}${open ? " menu-open" : ""}`}>
      <div className="header__bar">
        <a className="brand" href="#top" aria-label="Anytime Wellness, home" onClick={close}>
          <span className="brand__logo-frame">
            <img className="brand__logo" src={brandMark} alt="" fetchPriority="high" />
            <span className="brand__wordmark" aria-hidden="true"><strong>Anytime</strong><small>Wellness</small></span>
          </span>
        </a>
        <nav className={`nav${open ? " is-open" : ""}`} id="nav" aria-label="Primary">
          {links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={close}>{label}</a>)}
        </nav>
        <a className="btn btn--gold header__cta" href="#book">Book Your Experience <span aria-hidden="true">↗</span></a>
        <button className="burger" aria-expanded={open} aria-controls="nav" aria-label={`${open ? "Close" : "Open"} menu`} onClick={() => setOpen(!open)}><span /><span /></button>
      </div>
    </header>
  );
}
