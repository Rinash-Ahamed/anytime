import { site, treatments } from "../data/site";
import brandMark from "../../brand/onlylogo-anytime.png";

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__top">
        <div className="footer__brand">
          <a className="footer__logo-frame" href="#top" aria-label="Anytime Wellness, back to top">
            <img className="footer__logo" src={brandMark} alt="Anytime Wellness" />
          </a>
          <h2 className="footer__statement">Make space to feel <em>better.</em></h2>
          <p className="footer__about">Thoughtful wellness care, brought into the comfort of your home across Pollachi and Coimbatore.</p>
          <a className="footer__action" href={`https://wa.me/${site.contact.whatsappNumber}`} target="_blank" rel="noreferrer">
            Start a conversation <span aria-hidden="true">↗</span>
          </a>
        </div>

        <div className="footer__links">
          <div>
            <h3 className="footer__h">Explore</h3>
            <ul className="footer__list">
              <li><a href="#top">Home</a></li>
              <li><a href="#philosophy">Our philosophy</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#book">Book a visit</a></li>
            </ul>
          </div>
          <div>
            <h3 className="footer__h">Treatments</h3>
            <ul className="footer__list">{treatments.map((item) => <li key={item.id}><a href="#treatments">{item.name}</a></li>)}</ul>
          </div>
          <div>
            <h3 className="footer__h">Connect</h3>
            <ul className="footer__list">
              <li><a href={`https://wa.me/${site.contact.whatsappNumber}`} target="_blank" rel="noreferrer">WhatsApp</a></li>
              <li><a href={`tel:${site.contact.phone.replace(/\D/g, "")}`}>{site.contact.phone}</a></li>
              <li className="is-static">{site.contact.serviceArea}</li>
              <li className="is-static">By appointment</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} {site.brand.name}. All rights reserved.</p>
        <p><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a><a href="https://unsplash.com/?utm_source=anytime_wellness&utm_medium=referral" target="_blank" rel="noreferrer">Photography</a></p>
      </div>
    </footer>
  );
}
