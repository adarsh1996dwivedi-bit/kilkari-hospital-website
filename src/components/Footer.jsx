import { Link } from 'react-router-dom';
import { hospital, specialities } from '../data';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">
            <span>Kilkari</span> Hospital
          </p>
          <p className="footer-hindi">{hospital.hindi}</p>
          <p className="footer-tag">{hospital.tagline}</p>
          <p>{hospital.address}</p>
          <a className="footer-phone" href={`tel:${hospital.phoneTel}`}>
            {hospital.phoneDisplay}
          </a>
        </div>

        <div>
          <h2>Specialities</h2>
          <ul>
            {specialities.slice(0, 8).map((item) => (
              <li key={item.slug}>
                <Link to={`/specialities/${item.slug}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Visit</h2>
          <ul>
            <li>
              <Link to="/about">About us</Link>
            </li>
            <li>
              <Link to="/doctors">Find a doctor</Link>
            </li>
            <li>
              <Link to="/centre">Our centre</Link>
            </li>
            <li>
              <Link to="/care">Patient care</Link>
            </li>
            <li>
              <Link to="/blog">Journal</Link>
            </li>
            <li>
              <Link to="/book">Book appointment</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div>
          <h2>Front desk</h2>
          <p>Call to confirm today’s OPD and which consultant is available.</p>
          <p className="footer-note">{hospital.facilitiesLine}</p>
          <Link className="btn btn-orange" to="/book">
            Book Appointment
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} Kilkari Hospital, Kalyanpur, Kanpur Nagar.</p>
        </div>
      </div>
    </footer>
  );
}
