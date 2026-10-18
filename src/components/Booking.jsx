import { useMemo, useState } from "react";
import { site, treatments } from "../data/site";

export default function Booking({ selected, onSelected }) {
  const [status, setStatus] = useState("");
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const submit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) { form.reportValidity(); setStatus("Please complete each required field."); return; }
    const data = Object.fromEntries(new FormData(form));
    const message = [`Hello Alltime Wellness,`, `I would like to enquire about an appointment.`, ``, `Treatment: ${data.service}`, `Preferred date: ${data.date}`, `Preferred time: ${data.time}`, `Area: ${data.area}`, `Name: ${data.name}`, `Contact: ${data.phone}`, data.message ? `Message: ${data.message}` : ""].filter(Boolean).join("\n");
    window.open(`https://wa.me/${site.contact.whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    form.reset();
    onSelected("");
    setStatus("WhatsApp opened. Your enquiry form has been cleared.");
  };
  return (
    <section className="section book" id="book">
      <div className="book__intro"><h2 className="display display--light reveal">Reserve your<br /><em>moment.</em></h2><p className="lede reveal">Choose your treatment, day and area. This is an enquiry, so we’ll reply to confirm availability. Nothing is booked until you hear back.</p><a className="btn btn--gold reveal" href={`https://wa.me/${site.contact.whatsappNumber}`} target="_blank" rel="noreferrer">Chat on WhatsApp</a></div>
      <form className="form reveal" onSubmit={submit} noValidate={false}>
        <div className="field"><label htmlFor="service">Treatment</label><select id="service" name="service" required value={selected} onChange={(event) => onSelected(event.target.value)}><option value="">Select a treatment</option>{treatments.map((item) => <option key={item.id}>{item.name}</option>)}</select></div>
        <div className="field-row"><div className="field"><label htmlFor="date">Preferred date</label><input type="date" id="date" name="date" min={today} required /></div><div className="field"><label htmlFor="time">Preferred time</label><input type="time" id="time" name="time" required /></div></div>
        <div className="field"><label htmlFor="area">Service area <span>(home visit)</span></label><select id="area" name="area" required><option value="">Select your area</option><option>Pollachi</option><option>Coimbatore</option></select></div>
        <div className="field-row"><div className="field"><label htmlFor="name">Name</label><input type="text" id="name" name="name" autoComplete="name" required /></div><div className="field"><label htmlFor="phone">Contact number</label><input type="tel" id="phone" name="phone" inputMode="tel" autoComplete="tel" required /></div></div>
        <div className="field"><label htmlFor="message">Message <span>(optional)</span></label><textarea id="message" name="message" rows="3" /></div><button className="btn btn--gold btn--block" type="submit">Send Enquiry via WhatsApp</button><p className="form__status" role="status" aria-live="polite">{status}</p>
      </form>
    </section>
  );
}
