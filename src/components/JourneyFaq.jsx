const steps = [
  {
    icon: "care",
    title: "Choose your care",
    copy: "Explore the treatments, then select the experience that best matches how you want to feel.",
  },
  {
    icon: "calendar",
    title: "Share your preference",
    copy: "Tell us your preferred date, time and whether your home visit is in Pollachi or Coimbatore.",
  },
  {
    icon: "chat",
    title: "Confirm on WhatsApp",
    copy: "Your enquiry opens in WhatsApp. Your appointment is confirmed only after Alltime Wellness replies.",
  },
];

function StepIcon({ type }) {
  if (type === "care") return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 27C9 22 5 17.8 5 12.7A5.7 5.7 0 0 1 15.4 9.5L16 10l.6-.5A5.7 5.7 0 0 1 27 12.7C27 17.8 23 22 16 27Z" /><path d="M16 10v10M11 15h10" /></svg>;
  if (type === "calendar") return <svg viewBox="0 0 32 32" aria-hidden="true"><rect x="5" y="7" width="22" height="20" rx="2" /><path d="M10 4v6M22 4v6M5 13h22M11 19h3M18 19h3" /></svg>;
  return <svg viewBox="0 0 32 32" aria-hidden="true"><path d="M6 7h20v15H15l-6 5v-5H6V7Z" /><path d="m12 15 3 3 6-7" /></svg>;
}

const questions = [
  {
    question: "Where are home visits available?",
    answer: "Alltime Wellness currently lists home service across Pollachi and Coimbatore.",
  },
  {
    question: "Is my appointment confirmed when I submit the form?",
    answer: "The form prepares a WhatsApp enquiry with your preferences. Your appointment is confirmed after you receive a reply from Alltime Wellness.",
  },
  {
    question: "How should I prepare for a home treatment?",
    answer: "Choose a quiet, private area with enough space for the treatment. Confirm any access or setup questions on WhatsApp before your visit.",
  },
  {
    question: "How are payment, changes and cancellations handled?",
    answer: "Please confirm the current payment options and any change or cancellation arrangements on WhatsApp before the appointment is finalised.",
  },
  {
    question: "What if I am unsure which treatment to choose?",
    answer: "Review the treatment descriptions or message Alltime Wellness on WhatsApp before sending your enquiry.",
  },
];

function Journey() {
  return (
    <section className="section journey" id="journey" aria-labelledby="journey-title">
      <header className="journey__head reveal">
        <h2 className="display display--sm" id="journey-title">From your screen<br /><em>to your space.</em></h2>
        <p>Booking begins with a simple enquiry and ends with a personally confirmed home visit.</p>
      </header>
      <ol className="journey__steps">
        {steps.map((step) => (
          <li className="journey__step reveal" key={step.title}>
            <div className="journey__icon"><StepIcon type={step.icon} /></div>
            <h3>{step.title}</h3>
            <p>{step.copy}</p>
          </li>
        ))}
      </ol>
      <a className="journey__link reveal" href="#book">Begin your enquiry <span aria-hidden="true">↘</span></a>
    </section>
  );
}

function Faq() {
  return (
    <section className="section faq" id="faq" aria-labelledby="faq-title">
      <div className="faq__intro reveal">
        <h2 className="display display--sm" id="faq-title">Before your<br /><em>appointment.</em></h2>
        <p>Clear answers for a calm, straightforward booking experience.</p>
        <a href="#book">Still have a question? Send an enquiry.</a>
      </div>
      <div className="faq__list">
        {questions.map((item, index) => (
          <details className="faq__item reveal" key={item.question} open={index === 0}>
            <summary>{item.question}<i aria-hidden="true" /></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export default function JourneyFaq({ type }) {
  return type === "journey" ? <Journey /> : <Faq />;
}
