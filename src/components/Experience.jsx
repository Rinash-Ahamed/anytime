import Photo from "./Photo";
import { experienceImage, gallery } from "../data/site";

const pillars = [
  ["I", "Personalised treatments", "Each session is adjusted to what your body needs on the day."],
  ["II", "Professional care", "Calm, respectful and attentive from the first hello to the last moment."],
  ["III", "Calm, at home", "We bring the calm to you, so you can switch off without leaving your space."],
  ["IV", "Attention to detail", "Considered products and a tidy, quiet setup, so everything feels effortless."]
];

export function Philosophy() {
  return (
    <section className="section philosophy" id="philosophy">
      <div className="philosophy__media"><Photo id="experience" src={experienceImage} alt="Guest enjoying a quiet moment in a calm wellness room" brief="Calm wellness setting" className="photo--atmos" /></div>
      <div className="philosophy__body"><h2 className="display display--light reveal">Wellness,<br /><em>thoughtfully reimagined.</em></h2><p className="lede reveal">Every visit begins with listening. From there, the pace and pressure are shaped around you, in the comfort of your own home.</p><ul className="pillars">{pillars.map(([num, title, copy]) => <li className="reveal" key={num}><span>{num}</span><h3>{title}</h3><p>{copy}</p></li>)}</ul></div>
    </section>
  );
}

export function Gallery() {
  return (
    <section className="section gallery" id="gallery"><header className="section__head reveal"><h2 className="display">The calm,<br /><em>delivered.</em></h2></header><div className="mosaic">{gallery.map(([id, alt, brief, src], index) => <Photo key={id} id={id} src={src} alt={alt} brief={brief} className={`tile t${index + 1} reveal`} />)}</div></section>
  );
}

const standards = [
  ["clock", "60-minute sessions", "Full body sessions run a full hour, with no rushing."],
  ["leaf", "Premium olive oil", "Treatments use premium olive oil for a smooth, comfortable massage."],
  ["person", "Professional and safe", "Calm, respectful care from a trained, courteous therapist."],
  ["home", "We come to you", "Home service only, across Pollachi and Coimbatore."]
];

function StandardIcon({ type }) {
  if (type === "clock") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="11" /><path d="M16 9v7l5 3" /></svg>;
  if (type === "leaf") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M5 22c4-9 10-13 22-14-1 12-5 18-14 19M5 27c3-6 6-9 11-12" /></svg>;
  if (type === "person") return <svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="11" r="5" /><path d="M6 27c1-6 5-9 10-9s9 3 10 9" /></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M4 16 16 5l12 11M7 14v13h18V14M13 27v-7h6v7" /></svg>;
}

export function Standards() {
  return <section className="section standards" aria-labelledby="standardsTitle"><header className="section__head section__head--center reveal"><h2 className="display display--sm" id="standardsTitle">What you can <em>expect.</em></h2></header><ul className="standards__grid">{standards.map(([icon, title, copy]) => <li className="reveal" key={title}><StandardIcon type={icon} /><h3>{title}</h3><p>{copy}</p></li>)}</ul></section>;
}
