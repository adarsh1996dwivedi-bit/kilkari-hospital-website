import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { careServices, hospital } from '../data';

export default function Care() {
  return (
    <>
      <PageHero
        kicker="Patient care"
        title="OPD, admission, vaccines and the ambulance"
        text="Care is arranged from the Kalyanpur hospital. Call the front desk to confirm a slot, an admission, or a 24-hour ambulance."
        crumbs={[{ label: 'Patient care' }]}
      />
      <section className="section">
        <div className="container card-list">
          {careServices.map((item) => (
            <article className="list-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
        <div className="container care-cta">
          <p>{hospital.facilitiesLine}</p>
          <div className="hero-actions">
            <a className="btn btn-orange" href={`tel:${hospital.phoneTel}`}>
              Call {hospital.phoneDisplay}
            </a>
            <Link className="btn btn-ghost" to="/book">
              Prepare an appointment request
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
