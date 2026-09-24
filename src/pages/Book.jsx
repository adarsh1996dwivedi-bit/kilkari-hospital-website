import { useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { doctors, hospital, specialities } from '../data';

export default function Book() {
  const [params] = useSearchParams();
  const [speciality, setSpeciality] = useState(params.get('speciality') || '');
  const [doctor, setDoctor] = useState(params.get('doctor') || '');
  const [error, setError] = useState('');
  const [sent, setSent] = useState(null);

  const doctorOptions = useMemo(() => {
    return doctors.filter((item) => {
      if (!item.bookable) return false;
      if (!speciality) return true;
      return item.specialitySlugs.includes(speciality);
    });
  }, [speciality]);

  const onSpeciality = (event) => {
    const value = event.target.value;
    setSpeciality(value);
    if (doctor && !doctors.find((item) => item.slug === doctor)?.specialitySlugs.includes(value)) {
      setDoctor('');
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') || '').trim();
    const phone = String(data.get('phone') || '').replace(/\s/g, '');
    const date = String(data.get('date') || '');
    const note = String(data.get('note') || '').trim();
    if (name.length < 2) return setError('Please add the patient’s name.');
    if (!/^[6-9]\d{9}$/.test(phone)) return setError('Enter a 10-digit mobile number.');
    if (!speciality) return setError('Choose a speciality.');
    if (!date) return setError('Choose a preferred date.');
    const spec = specialities.find((item) => item.slug === speciality);
    const doc = doctors.find((item) => item.slug === doctor);
    setError('');
    setSent({
      name,
      phone,
      date,
      note,
      speciality: spec?.title || speciality,
      doctor: doc?.name || 'Any available consultant',
    });
  };

  return (
    <>
      <PageHero
        kicker="Book appointment"
        title="Tell the desk who needs to be seen"
        text="Fill this in, then call 8791201424 to confirm. The hospital does not receive this form automatically."
        crumbs={[{ label: 'Book appointment' }]}
      />
      <section className="section">
        <div className="container narrow">
          {sent ? (
            <div className="success-card" role="status">
              <h2>Request ready for {sent.name}</h2>
              <ul className="check-list">
                <li>Speciality: {sent.speciality}</li>
                <li>Doctor: {sent.doctor}</li>
                <li>Preferred date: {sent.date}</li>
                <li>Mobile: {sent.phone}</li>
                {sent.note && <li>Note: {sent.note}</li>}
              </ul>
              <p>
                Call <a href={`tel:${hospital.phoneTel}`}>{hospital.phoneDisplay}</a> and read these
                details to the front desk. They will confirm whether that doctor is available.
              </p>
              <a className="btn btn-orange" href={`tel:${hospital.phoneTel}`}>
                Call to confirm
              </a>
            </div>
          ) : (
            <form className="form" onSubmit={onSubmit} noValidate>
              <label>
                Patient name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Mobile number
                <input name="phone" inputMode="numeric" autoComplete="tel" required />
              </label>
              <label>
                Speciality
                <select value={speciality} onChange={onSpeciality} required>
                  <option value="">Select a speciality</option>
                  {specialities.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Doctor
                <select value={doctor} onChange={(event) => setDoctor(event.target.value)}>
                  <option value="">Any available consultant</option>
                  {doctorOptions.map((item) => (
                    <option key={item.slug} value={item.slug}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Preferred date
                <input name="date" type="date" required />
              </label>
              <label>
                Anything the desk should know
                <textarea name="note" rows="4" placeholder="Age of the child, pregnancy week, or a skin concern" />
              </label>
              {error && <p className="form-error">{error}</p>}
              <button className="btn btn-orange" type="submit">
                Prepare appointment request
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
