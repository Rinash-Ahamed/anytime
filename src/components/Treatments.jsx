import Photo from "./Photo";
import { treatments } from "../data/site";

function Treatment({ treatment, onSelect }) {
  return (
    <article className="svc reveal">
      <div className="svc__media">
        <Photo src={treatment.image} alt={treatment.alt} />
        <span className="svc__num">{treatment.number}</span>
      </div>
      <div className="svc__body">
        <div className="svc__heading">
          <h3 className="svc__name">{treatment.name}</h3>
        </div>
        <p className="svc__desc">{treatment.description}</p>
        <div className="svc__footer">
          <div className="svc__facts">
            {treatment.price ? <span className="svc__price">{treatment.price}</span> : <span className="svc__price svc__price--quiet">Ask for details</span>}
            {treatment.duration && <span className="svc__duration"><svg viewBox="0 0 20 20" aria-hidden="true"><circle cx="10" cy="10" r="7.5" /><path d="M10 5.8V10l3 1.8" /></svg>{treatment.duration}</span>}
          </div>
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
        </div>
      </header>
      <div className="treatments__grid">
        {treatments.map((item) => <Treatment key={item.id} treatment={item} onSelect={onSelect} />)}
      </div>
    </section>
  );
}
