import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { doctors, hospital } from '../data';

export default function About() {
  return (
    <>
      <PageHero
        kicker={hospital.tagline}
        title="A children’s hospital in Kalyanpur"
        text="Kilkari Hospital was introduced to the neighbourhood as बच्चों का अस्पताल — with paediatricians, a neonatology team, gynaecology, critical care and skin care under one roof."
        crumbs={[{ label: 'About' }]}
      />
      <section className="section">
        <div className="container split">
          <div className="prose">
            <h2>What the name is asking us to do</h2>
            <p>
              Kilkari is the small bell children wear. The hospital keeps that meaning in plain
              sight: the first patient is often a child, and the adult who carried them in is the
              second. OPD, IPD, vaccination and a 24-hour ambulance are the practical version of
              that idea.
            </p>
            <p>
              The consulting team is small enough to name. Dr. A.K. Krishnawat and Dr. Satyam Gupta
              see children and newborns. Dr. Ankita Gupta sees gynaecology, maternity and infertility
              consultations. Dr. Pallavi Gupta is the physician and intensivist. Dr. Dhwani Singh
              sees skin, laser and hair transplant consultations. Adarash Dwivedi is the managing
              director.
            </p>
            <p>
              This website follows the shape of a large maternity-and-children’s hospital homepage,
              because that is a useful way to find a doctor, a speciality and a phone number. The
              facts on the pages are Kilkari’s: one centre, the doctors on the hospital board, and
              the facilities written under it.
            </p>
            <Link className="btn btn-orange" to="/doctors">
              Meet the doctors
            </Link>
          </div>
          <aside className="aside-card">
            <h3>At a glance</h3>
            <dl>
              <div>
                <dt>Address</dt>
                <dd>{hospital.address}</dd>
              </div>
              <div>
                <dt>Phone</dt>
                <dd>
                  <a href={`tel:${hospital.phoneTel}`}>{hospital.phoneDisplay}</a>
                </dd>
              </div>
              <div>
                <dt>Team</dt>
                <dd>{doctors.length} people, including five consultants and the managing director</dd>
              </div>
              <div>
                <dt>Always listed</dt>
                <dd>OPD, IPD, vaccination, skin care, and 24-hour ambulance</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </>
  );
}
