import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  doctors,
  hospital,
  posts,
  reasons,
  slides,
  specialities,
  stats,
  stories,
} from '../data';

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [story, setStory] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const id = setInterval(() => setSlide((current) => (current + 1) % slides.length), 6500);
    return () => clearInterval(id);
  }, [paused]);

  useEffect(() => {
    const id = setInterval(() => setStory((current) => (current + 1) % stories.length), 7000);
    return () => clearInterval(id);
  }, []);

  const current = slides[slide];

  return (
    <>
      <section
        className={`hero tone-${current.tone}`}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {slides.map((item, index) => (
          <div
            key={item.id}
            className={`hero-photo ${index === slide ? 'is-active' : ''}`}
            style={{ backgroundImage: `url(${item.image})` }}
          />
        ))}
        <div className="hero-shade" />
        <div className="container hero-copy">
          <p className="hero-kicker">{current.kicker}</p>
          <h1>{current.title}</h1>
          <p className="hero-text">{current.text}</p>
          <div className="hero-actions">
            <Link className="btn btn-orange" to="/book">
              Book Appointment
            </Link>
            <a className="btn btn-white" href={`tel:${hospital.phoneTel}`}>
              Call {hospital.phoneDisplay}
            </a>
          </div>
          <div className="hero-dots" role="tablist" aria-label="Highlights">
            {slides.map((item, index) => (
              <button
                key={item.id}
                type="button"
                className={index === slide ? 'is-active' : ''}
                aria-label={`Show slide ${index + 1}`}
                onClick={() => setSlide(index)}
              />
            ))}
          </div>
        </div>
        <div className="hero-arrows">
          <button type="button" aria-label="Previous slide" onClick={() => setSlide((slide + slides.length - 1) % slides.length)}>
            ‹
          </button>
          <button type="button" aria-label="Next slide" onClick={() => setSlide((slide + 1) % slides.length)}>
            ›
          </button>
        </div>
      </section>

      <section className="stats-wrap">
        <div className="container stats">
          {stats.map((item) => (
            <div className="stat" key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container centre-layout">
          <div>
            <p className="kicker">Our hospital</p>
            <h2>One center for the family, near SBI Bank Kalyanpur, Kanpur.</h2>
            <p className="lead">
              Kilkari Hospital is a children’s hospital in Awas Vikas, Kalyanpur, Kanpur Nagar. Parents come for
              comprehensive paediatric care | NICU | PICU | IPD | OPD | Neonatal & Child Care, vaccination and newborn questions, and adults come for gynaecology &
              skin care.
            </p>
            <p className="hindi-line">{hospital.facilitiesLine}</p>
            <Link className="text-link" to="/centre">
              Know more about the centre
            </Link>
          </div>
          <article className="centre-card">
            <p className="centre-city">Kanpur Nagar</p>
            <h3>Kilkari Hospital, Kalyanpur</h3>
            <p>{hospital.address}</p>
            <ul className="chip-list">
              <li>Paediatric OPD & IPD</li>
              <li>NICU & PICU</li>
              <li>Vaccination</li>
              <li>Gynaecology</li>
              <li>24-hour Ambulance</li>
            </ul>
            <div className="card-actions">
              <a className="btn btn-sky" href={hospital.maps} target="_blank" rel="noreferrer">
                Get directions
              </a>
              <Link className="btn btn-ghost" to="/book">
                Book a Appointment
              </Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Specialities</p>
            <h2>Care that matches this hospital</h2>
            <p>Only the services named by Kilkari Hospital — not a borrowed list from a larger chain.</p>
          </div>
          <div className="spec-grid">
            {specialities.map((item) => (
              <Link className="spec-card" key={item.slug} to={`/specialities/${item.slug}`}>
                <span className="spec-icon" aria-hidden="true">
                  {item.title.slice(0, 1)}
                </span>
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Doctors</p>
            <h2>The people you will actually meet</h2>
            <Link className="text-link" to="/doctors">
              Find a doctor
            </Link>
          </div>
          <div className="doctor-grid">
            {doctors.map((doctor) => (
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

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Families</p>
            <h2>What a visit is meant to feel like</h2>
            <p>These are sample notes for the website, written in the voice of families we hope to look after. They are not published patient reviews.</p>
          </div>
          <div className="quote-stage">
            {stories.map((item, index) => (
              <blockquote className={`quote-card ${index === story ? 'is-active' : ''}`} key={item.topic}>
                <p>“{item.quote}”</p>
                <footer>
                  <strong>{item.name}</strong>
                  <span>
                    {item.place} · {item.topic}
                  </span>
                </footer>
              </blockquote>
            ))}
            <div className="hero-dots">
              {stories.map((item, index) => (
                <button
                  key={item.topic}
                  type="button"
                  className={index === story ? 'is-active' : ''}
                  aria-label={`Show story ${index + 1}`}
                  onClick={() => setStory(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Journal</p>
            <h2>Short notes from our consultants</h2>
            <Link className="text-link" to="/blog">
              Read all notes
            </Link>
          </div>
          <div className="blog-grid">
            {posts.slice(0, 3).map((post) => (
              <article className="blog-card" key={post.slug}>
                <p className="blog-meta">
                  <span>{post.date}</span>
                  <span>{post.topic}</span>
                </p>
                <h3>
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <p>{post.excerpt}</p>
                <p className="blog-author">{post.author}</p>
                <Link className="text-link" to={`/blog/${post.slug}`}>
                  Read more
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Why families stop here</p>
            <h2>A neighbourhood hospital with named doctors</h2>
          </div>
          <div className="why-grid">
            {reasons.map((item) => (
              <article className="why-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="prose-band">
        <div className="container narrow">
          <h2>Kilkari Hospital, for children and the people who bring them</h2>
          <p>
            Kilkari Hospital sits at H.N. 75, Awas Vikas No.-1, near SBI Bank, Kalyanpur, Kanpur
            Nagar. The board outside calls it बच्चों का अस्पताल — a hospital for children — and the
            consulting rooms follow that promise: paediatricians and neonatologists, a gynaecologist,
            a physician intensivist, and a dermatologist.
          </p>
          <p>
            Families use the same phone number for an OPD appointment and for the 24-hour ambulance:{' '}
            <a href={`tel:${hospital.phoneTel}`}>{hospital.phoneDisplay}</a>. Ask who is in clinic,
            what to carry, and whether a vaccination is in stock that day. The form on this website
            prepares your request. The front desk confirms it when you call.
          </p>
        </div>
      </section>
    </>
  );
}

function initials(name) {
  return name
    .replace('Dr. ', '')
    .split(' ')
    .filter((part) => part[0] && part[0] === part[0].toUpperCase() && /[A-Za-z]/.test(part[0]))
    .slice(0, 2)
    .map((part) => part[0])
    .join('');
}
