import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { hospital } from '../data';

export default function Centre() {
  return (
    <>
      <PageHero
        kicker="Our centers"
        title="Kilkari Hospital, Kanpur"
        text="A single hospital for children’s care, maternity consultations, skin care."
        crumbs={[{ label: 'Our centre' }]}
      />
      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>How to reach</h2>
            <p>{hospital.address}</p>
            <p>
              The landmark families use is Panki Road Chowki, Awas Vikas 1, Kalyanpur. If you are sending someone
              by ambulance or auto, say “Kilkari Hospital, near SBI Bank, Kalyanpur.”
            </p>
            <p>{hospital.facilitiesLine}</p>
            <div className="hero-actions">
              <a className="btn btn-sky" href={hospital.maps} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
              <Link className="btn btn-ghost" to="/contact">
                Contact the desk
              </Link>
            </div>
          </div>
          <aside className="aside-card">
            <h3>Before you leave home</h3>
            <ul className="check-list">
              <li>Call {hospital.phoneDisplay} and ask which doctor is in OPD.</li>
              <li>Carry previous prescriptions and the child’s vaccination card.</li>
              <li>For ambulance, say the patient’s age and your current location first.</li>
              <li>OPD hours can change. The phone confirms the day, this page does not guess them.</li>
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
