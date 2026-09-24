import { useState } from 'react';
import PageHero from '../components/PageHero';
import { hospital } from '../data';

export default function Contact() {
  const [sent, setSent] = useState(null);
  const [error, setError] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').replace(/\s/g, '');
    const message = String(data.get('message') || '').trim();
    if (name.length < 2) {
      setError('Please add your name.');
      return;
    }
    if (!/^[6-9]\d{9}$/.test(phone)) {
      setError('Enter a 10-digit mobile number.');
      return;
    }
    if (message.length < 8) {
      setError('Add a short note so the desk knows why you are calling.');
      return;
    }
    setError('');
    setSent({ name, phone, message });
  };

  return (
    <>
      <PageHero
        kicker="Contact"
        title="Call the front desk"
        text="Appointments are confirmed on the phone. The form below keeps your note tidy so you can read it out when you call."
        crumbs={[{ label: 'Contact' }]}
      />
      <section className="section">
        <div className="container split">
          <div>
            {sent ? (
              <div className="success-card" role="status">
                <h2>Ready to call, {sent.name}</h2>
                <p>
                  This page cannot send the note to the hospital by itself. Call{' '}
                  <a href={`tel:${hospital.phoneTel}`}>{hospital.phoneDisplay}</a> and read this:
                </p>
                <p className="summary">
                  {sent.name}, {sent.phone}. {sent.message}
                </p>
                <a className="btn btn-orange" href={`tel:${hospital.phoneTel}`}>
                  Call now
                </a>
              </div>
            ) : (
              <form className="form" onSubmit={onSubmit} noValidate>
                <label>
                  Your name
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  Mobile number
                  <input name="phone" inputMode="numeric" autoComplete="tel" placeholder="10-digit mobile" required />
                </label>
                <label>
                  How can the desk help?
                  <textarea name="message" rows="5" required />
                </label>
                {error && <p className="form-error">{error}</p>}
                <button className="btn btn-orange" type="submit">
                  Prepare my note
                </button>
              </form>
            )}
          </div>
          <aside className="aside-card">
            <h3>Kilkari Hospital</h3>
            <p>{hospital.address}</p>
            <p>
              <a href={`tel:${hospital.phoneTel}`}>{hospital.phoneDisplay}</a>
            </p>
            <p>
              <a href={hospital.maps} target="_blank" rel="noreferrer">
                Directions from Google Maps
              </a>
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
