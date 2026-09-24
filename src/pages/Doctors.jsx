import { useMemo, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { doctorBySlug, doctors, specialities } from '../data';
import NotFound from './NotFound';

export default function Doctors() {
  const { slug } = useParams();
  if (slug) return <DoctorProfile slug={slug} />;
  return <DoctorList />;
}

function DoctorList() {
  const [params, setParams] = useSearchParams();
  const initialQuery = params.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [filter, setFilter] = useState('all');

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return doctors.filter((doctor) => {
      const matchesFilter = filter === 'all' || doctor.specialitySlugs.includes(filter);
      const haystack = `${doctor.name} ${doctor.role} ${doctor.creds}`.toLowerCase();
      return matchesFilter && (!needle || haystack.includes(needle));
    });
  }, [query, filter]);

  const onSearch = (event) => {
    const value = event.target.value;
    setQuery(value);
    const next = new URLSearchParams(params);
    if (value) next.set('q', value);
    else next.delete('q');
    setParams(next, { replace: true });
  };

  return (
    <>
      <PageHero
        kicker="Find a doctor"
        title="Consultants at Kilkari Hospital"
        text="Search by name or choose a speciality. The managing director is listed with the team and is not booked as a clinician."
        crumbs={[{ label: 'Doctors' }]}
      />
      <section className="section">
        <div className="container">
          <div className="filters">
            <label className="search">
              <span className="sr-only">Search doctors</span>
              <input value={query} onChange={onSearch} placeholder="Search by name or speciality" />
            </label>
            <div className="filter-row" role="tablist" aria-label="Filter by speciality">
              <button type="button" className={filter === 'all' ? 'is-active' : ''} onClick={() => setFilter('all')}>
                All
              </button>
              {specialities
                .filter((item) => item.doctors.length > 0)
                .map((item) => (
                  <button
                    key={item.slug}
                    type="button"
                    className={filter === item.slug ? 'is-active' : ''}
                    onClick={() => setFilter(item.slug)}
                  >
                    {item.title}
                  </button>
                ))}
            </div>
          </div>

          {visible.length === 0 && <p className="empty">No doctor matches that search. Try another name, or call the front desk.</p>}

          <div className="doctor-grid">
            {visible.map((doctor) => (
              <Link className={`doctor-card band-${doctor.band}`} key={doctor.slug} to={`/doctors/${doctor.slug}`}>
                <div className="doctor-band">
                  <span className="avatar">{initials(doctor.name)}</span>
                  <h3>{doctor.name}</h3>
                </div>
                <div className="doctor-body">
                  <p className="doctor-role">{doctor.role}</p>
                  <p className="doctor-creds">{doctor.creds}</p>
                  <span className="text-link">View profile</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function DoctorProfile({ slug }) {
  const doctor = doctorBySlug(slug);
  if (!doctor) return <NotFound />;
  const related = specialities.filter((item) => doctor.specialitySlugs.includes(item.slug));

  return (
    <>
      <PageHero
        kicker={doctor.role}
        title={doctor.name}
        text={doctor.creds}
        crumbs={[{ label: 'Doctors', to: '/doctors' }, { label: doctor.name }]}
      />
      <section className="section">
        <div className="container split">
          <div className="prose">
            <p>{doctor.about}</p>
            {doctor.bookable ? (
              <Link className="btn btn-orange" to={`/book?doctor=${doctor.slug}`}>
                Book with {doctor.name.replace('Dr. ', '')}
              </Link>
            ) : (
              <Link className="btn btn-sky" to="/contact">
                Contact the hospital
              </Link>
            )}
          </div>
          <aside className="aside-card">
            <h3>Consults in</h3>
            {related.length === 0 && <p>Hospital leadership. Medical appointments go through the consultants.</p>}
            <ul className="plain-list">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link to={`/specialities/${item.slug}`}>{item.title}</Link>
                  <span>{item.blurb}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}

function initials(name) {
  return name
    .replace('Dr. ', '')
    .split(' ')
    .filter((part) => /[A-Za-z]/.test(part[0] || ''))
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}
