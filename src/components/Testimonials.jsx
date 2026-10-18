import { useEffect, useRef, useState } from "react";
import ananyaPortrait from "../../brand/testimonials/ananya-krishnan.jpg";
import arjunPortrait from "../../brand/testimonials/arjun-nair.jpg";
import meeraPortrait from "../../brand/testimonials/meera-subramanian.jpg";
import karthikPortrait from "../../brand/testimonials/karthik-raman.jpg";

const testimonials = [
  {
    name: "Ananya Krishnan",
    portrait: ananyaPortrait,
    quote: "The therapist arrived on time and arranged the space neatly. The full body massage felt calm, respectful and never rushed.",
    service: "Full Body Massage",
    location: "Pollachi home visit",
  },
  {
    name: "Arjun Nair",
    portrait: arjunPortrait,
    quote: "Booking through WhatsApp was straightforward. The pressure was adjusted when I asked, and the session helped ease the tightness around my shoulders.",
    service: "Deep Tissue Massage",
    location: "Coimbatore home visit",
  },
  {
    name: "Meera Subramanian",
    portrait: meeraPortrait,
    quote: "The facial and de-tan session was handled carefully, and the products felt comfortable on my skin. I appreciated how clearly each step was explained.",
    service: "Facial and De-tan",
    location: "Pollachi home visit",
  },
  {
    name: "Karthik Raman",
    portrait: karthikPortrait,
    quote: "The foot massage was a welcome reset after a long week. The home setup was clean, quiet and convenient.",
    service: "Foot Massage",
    location: "Coimbatore home visit",
  },
];

export default function Testimonials() {
  const railRef = useRef(null);
  const [active, setActive] = useState(0);

  const move = (direction) => {
    const rail = railRef.current;
    if (!rail) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const card = rail.querySelector(".testimonial");
    const distance = card ? card.getBoundingClientRect().width + 20 : rail.clientWidth * 0.82;
    const next = Math.min(Math.max(active + direction, 0), testimonials.length - 1);
    rail.scrollTo({ left: distance * next, behavior: reduced ? "auto" : "smooth" });
    setActive(next);
  };

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return undefined;

    const syncActiveCard = () => {
      const card = rail.querySelector(".testimonial");
      if (!card) return;
      const distance = card.getBoundingClientRect().width + 20;
      setActive(Math.min(Math.round(rail.scrollLeft / distance), testimonials.length - 1));
    };

    rail.addEventListener("scroll", syncActiveCard, { passive: true });
    return () => rail.removeEventListener("scroll", syncActiveCard);
  }, []);

  return (
    <section className="section testimonials" aria-labelledby="testimonials-title">
      <div className="testimonials__intro reveal">
        <span className="testimonials__quote" aria-hidden="true">“</span>
        <h2 className="display display--sm" id="testimonials-title">What clients<br /><em>will remember.</em></h2>
        <p>Thoughtful details shape the experience, from a simple booking to calm, professional care at home.</p>
        <div className="testimonials__controls" aria-label="Testimonial navigation">
          <button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous testimonial">←</button>
          <div className="testimonials__progress" aria-hidden="true">
            {testimonials.map((item, index) => <i className={index === active ? "is-active" : ""} key={item.service} />)}
          </div>
          <button type="button" onClick={() => move(1)} disabled={active === testimonials.length - 1} aria-label="Next testimonial">→</button>
        </div>
      </div>

      <div className="testimonials__rail" ref={railRef} tabIndex={0} aria-label="Illustrative customer feedback">
        {testimonials.map((item) => (
          <article className="testimonial" key={item.service}>
            <div className="testimonial__card">
              <span className="testimonial__label">Illustrative feedback</span>
              <blockquote>“{item.quote}”</blockquote>
              <div className="testimonial__service">{item.service}</div>
            </div>
            <div className="testimonial__identity">
              <img
                className="testimonial__avatar"
                src={item.portrait}
                alt={`AI-generated fictional portrait of ${item.name}`}
                width="48"
                height="48"
                loading="lazy"
                decoding="async"
              />
              <div><strong>{item.name}</strong><small>Fictional persona - {item.location}</small></div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
