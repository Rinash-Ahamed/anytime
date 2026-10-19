import { useEffect, useRef } from "react";
import { site, treatments } from "../data/site";
import brandMark from "../../brand/onlylogo-alltime.png";
import footerVideo from "../../brand/footer.mp4";

export default function Footer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isVisible = false;
    const syncPlayback = () => {
      if (motionQuery.matches || !isVisible) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      isVisible = entry.isIntersecting;
      syncPlayback();
    }, { rootMargin: "300px 0px", threshold: 0.01 });

    observer.observe(video);
    motionQuery.addEventListener?.("change", syncPlayback);
    return () => {
      observer.disconnect();
      motionQuery.removeEventListener?.("change", syncPlayback);
    };
  }, []);

  return (
    <footer className="footer" id="contact">
      <div className="footer__media" aria-hidden="true">
        <video
          ref={videoRef}
          className="footer__video"
          muted
          loop
          playsInline
          preload="metadata"
          tabIndex={-1}
        >
          <source src={footerVideo} type="video/mp4" />
        </video>
      </div>

      <div className="footer__top">
        <div className="footer__brand">
          <a className="footer__logo-frame" href="#top" aria-label="Alltime Wellness, back to top">
            <img className="footer__logo" src={brandMark} alt="Alltime Wellness" />
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
              <li><a href="#journey">How it works</a></li>
              <li><a href="#philosophy">Our philosophy</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#faq">FAQ</a></li>
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
        <p className="footer__developer">Developer connect - <a href="https://www.httpier.in" target="_blank" rel="noreferrer">www.httpier.in</a></p>
        <p><a href="/privacy.html">Privacy</a><a href="/terms.html">Terms</a></p>
      </div>
    </footer>
  );
}
