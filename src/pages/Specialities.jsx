import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { doctorsForSpeciality, specialities, specialityBySlug } from '../data';
import NotFound from './NotFound';

export default function Specialities() {
  const { slug } = useParams();
  if (slug) return <SpecialityDetail slug={slug} />;

  return (
    <>
      <PageHero
        kicker="Specialities"
        title="Services at Kilkari Hospital"
        text="Paediatrics and newborn care lead the list. Gynaecology, critical care, dermatology, vaccination, ambulance and inpatient beds sit beside them."
        crumbs={[{ label: 'Specialities' }]}
      />
      <section className="section">
        <div className="container card-list">
          {specialities.map((item) => (
            <article className="list-card" key={item.slug}>
              <h2>
                <Link to={`/specialities/${item.slug}`}>{item.title}</Link>
              </h2>
              <p>{item.blurb}</p>
              <Link className="text-link" to={`/specialities/${item.slug}`}>
                Know more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function SpecialityDetail({ slug }) {
  const item = specialityBySlug(slug);
  if (!item) return <NotFound />;
  const people = doctorsForSpeciality(item.slug);

  return (
    <>
      <PageHero
        kicker="Speciality"
        title={item.title}
        text={item.blurb}
        crumbs={[{ label: 'Specialities', to: '/specialities' }, { label: item.title }]}
      />
      <section className="section">
        <div className="container split">
          <div className="prose">
            <p>{item.text}</p>
            <Link className="btn btn-orange" to={`/book?speciality=${item.slug}`}>
              Book this speciality
            </Link>
          </div>
          <aside className="aside-card">
            <h3>Doctors</h3>
            {people.length === 0 && <p>Call the front desk to arrange this service.</p>}
            <ul className="plain-list">
              {people.map((doctor) => (
                <li key={doctor.slug}>
                  <Link to={`/doctors/${doctor.slug}`}>{doctor.name}</Link>
                  <span>{doctor.role}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
