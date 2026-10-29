import { useEffect, useState } from "react";
import Photo from "./Photo";
import { experienceImages, gallery } from "../data/site";
import expectSession from "../../images/expect-session.webp";
import expectOliveOil from "../../images/expect-olive-oil.webp";
import expectProfessionalCare from "../../images/expect-professional-care.webp";
import expectHomeService from "../../images/expect-home-service.webp";

const pillars = [
  ["Personalised treatments", "Each session is adjusted to what your body needs on the day."],
  ["Professional care", "Calm, respectful and attentive from the first hello to the last moment."],
  ["Calm, at home", "We bring the calm to you, so you can switch off without leaving your space."],
  ["Attention to detail", "Considered products and a tidy, quiet setup, so everything feels effortless."]
];

export function Philosophy() {
  const [activeImage, setActiveImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motionQuery.matches || isPaused) return undefined;
    const timer = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % experienceImages.length);
    }, 1500);
    return () => window.clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="section philosophy" id="philosophy">
      <div className="philosophy__media">
        <div className="philosophy__slideshow" role="group" aria-roledescription="carousel" aria-label="Alltime Wellness treatment experience">
          {experienceImages.map((image, index) => (
            <img
              key={image.src}
              className={`philosophy__slide${index === activeImage ? " is-active" : ""}`}
              src={image.src}
              alt={index === activeImage ? image.alt : ""}
              aria-hidden={index !== activeImage}
              style={{ objectPosition: image.position }}
              loading={index === 0 ? "eager" : "lazy"}
            />
          ))}
          <div className="philosophy__slide-nav" aria-label="Choose experience image">
            <span>{String(activeImage + 1).padStart(2, "0")} / {String(experienceImages.length).padStart(2, "0")}</span>
            <div className="philosophy__slide-actions">
              <div className="philosophy__dots">{experienceImages.map((image, index) => <button key={image.src} type="button" className={index === activeImage ? "is-active" : ""} aria-label={`Show image ${index + 1}`} aria-current={index === activeImage ? "true" : undefined} onClick={() => setActiveImage(index)} />)}</div>
              <button className="philosophy__pause" type="button" aria-label={isPaused ? "Resume image slideshow" : "Pause image slideshow"} aria-pressed={isPaused} onClick={() => setIsPaused((paused) => !paused)}>{isPaused ? "Play" : "Pause"}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="philosophy__body"><h2 className="display display--light reveal">Wellness,<br /><em>thoughtfully reimagined.</em></h2><p className="lede reveal">Every visit begins with listening. From there, the pace and pressure are shaped around you, in the comfort of your own home.</p><ul className="pillars">{pillars.map(([title, copy]) => <li className="reveal" key={title}><h3>{title}</h3><p>{copy}</p></li>)}</ul></div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section gallery" id="gallery"><header className="section__head reveal"><h2 className="display">The calm,<br /><em>delivered.</em></h2></header><div className="mosaic">{gallery.map(([id, alt, src], index) => <Photo key={id} src={src} alt={alt} className={`tile t${index + 1} reveal`} />)}</div></section>
  );
}

const standards = [
  { icon: "clock", title: "60-minute sessions", copy: "Full body sessions run a full hour, with no rushing.", image: expectSession },
  { icon: "leaf", title: "Premium olive oil", copy: "Treatments use premium olive oil for a smooth, comfortable massage.", image: expectOliveOil },
  { icon: "person", title: "Professional and safe", copy: "Calm, respectful care from a trained, courteous therapist.", image: expectProfessionalCare },
  { icon: "home", title: "We come to you", copy: "Home service only, across Pollachi and Coimbatore.", image: expectHomeService }
];

function StandardIcon({ type }) {
  if (type === "clock") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11" /><path d="M16 9v7l5 3" /></svg>;
  if (type === "leaf") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 22c4-9 10-13 22-14-1 12-5 18-14 19M5 27c3-6 6-9 11-12" /></svg>;
  if (type === "person") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="11" r="5" /><path d="M6 27c1-6 5-9 10-9s9 3 10 9" /></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 16 16 5l12 11M7 14v13h18V14M13 27v-7h6v7" /></svg>;
}

export function Standards() {
  return <section className="section standards" aria-labelledby="standardsTitle"><header className="section__head section__head--center reveal"><h2 className="display display--sm" id="standardsTitle">What you can <em>expect.</em></h2></header><ul className="standards__grid">{standards.map(({ icon, title, copy, image }) => <li className="reveal" key={title} style={{ "--standard-image": `url(${image})` }}><StandardIcon type={icon} /><h3>{title}</h3><p>{copy}</p></li>)}</ul></section>;
}
