import Photo from "./Photo";
import { treatments } from "../data/site";

function Treatment({ treatment, onSelect }) {
  return (
    <article className="svc reveal">
      <div className="svc__media">
        <Photo id={treatment.id} src={treatment.image} alt={treatment.alt} brief={treatment.brief} />
        <span className="svc__num">{treatment.number}</span>
      </div>
      <div className="svc__body">
        <div className="svc__heading">
          <h3 className="svc__name">{treatment.name}</h3>
          {treatment.duration && <span className="svc__duration">{treatment.duration}</span>}
        </div>
        <p className="svc__desc">{treatment.description}</p>
        <div className="svc__footer">
          {treatment.price ? <span className="svc__price">{treatment.price}</span> : <span className="svc__price svc__price--quiet">Tailored to you</span>}
          <a className="link" href="#book" onClick={() => onSelect(treatment.name)}>Choose treatment <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </article>
  );
}

export default function Treatments({ onSelect }) {
  return (
    <section className="section treatments" id="treatments">
      <header className="section__head treatments__head reveal">
        <h2 className="display">Care that meets you <em>where you are.</em></h2>
        <div className="treatments__intro">
          <p>Four focused experiences, each adapted to how you feel on the day and delivered in the comfort of your own space.</p>
          <span>01 — Treatments</span>
        </div>
      </header>
      <div className="treatments__grid">
        {treatments.map((item) => <Treatment key={item.id} treatment={item} onSelect={onSelect} />)}
      </div>
    </section>
  );
}
