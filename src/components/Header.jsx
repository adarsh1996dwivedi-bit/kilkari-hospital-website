import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo';
import { hospital, specialities } from '../data';

const aboutLinks = [
  { to: '/about', label: 'About the hospital' },
  { to: '/doctors', label: 'Our doctors' },
  { to: '/centre', label: 'Visit the centre' },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setMobile(false);
    setOpenMenu(null);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onPointer = (event) => {
      if (!headerRef.current?.contains(event.target)) setOpenMenu(null);
    };
    const onKey = (event) => {
      if (event.key === 'Escape') {
        setOpenMenu(null);
        setMobile(false);
      }
    };
    document.addEventListener('mousedown', onPointer);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onPointer);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  const toggle = (key) => setOpenMenu((current) => (current === key ? null : key));

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`} ref={headerRef}>
      <div className="topbar">
        <div className="container topbar-inner">
          <a className="topbar-phone" href={`tel:${hospital.phoneTel}`}>
            <PhoneIcon />
            {hospital.phoneDisplay}
          </a>
          <div className="topbar-links">
            <Link to="/book">Book Appointment</Link>
            <Link to="/doctors">Find a Doctor</Link>
            <Link to="/centre">Our Centre</Link>
          </div>
        </div>
      </div>

      <div className="nav-wrap">
        <div className="container nav-inner">
          <Logo />
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={mobile}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
            onClick={() => setMobile((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`main-nav ${mobile ? 'is-open' : ''}`} aria-label="Primary">
            <div className={`nav-drop ${openMenu === 'about' ? 'is-open' : ''}`}>
              <button type="button" className="nav-link" aria-expanded={openMenu === 'about'} onClick={() => toggle('about')}>
                About
                <Caret />
              </button>
              <div className="drop-panel">
                {aboutLinks.map((link) => (
                  <Link key={link.to} to={link.to}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className={`nav-drop ${openMenu === 'specialities' ? 'is-open' : ''}`}>
              <button
                type="button"
                className="nav-link"
                aria-expanded={openMenu === 'specialities'}
                onClick={() => toggle('specialities')}
              >
                Specialities
                <Caret />
              </button>
              <div className="drop-panel drop-panel-wide">
                {specialities.map((item) => (
                  <Link key={item.slug} to={`/specialities/${item.slug}`}>
                    {item.title}
                  </Link>
                ))}
                <Link className="drop-all" to="/specialities">
                  View all specialities
                </Link>
              </div>
            </div>

            <NavLink className="nav-link" to="/doctors">
              Doctors
            </NavLink>
            <NavLink className="nav-link" to="/care">
              Patient Care
            </NavLink>
            <NavLink className="nav-link" to="/blog">
              Journal
            </NavLink>
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>

            <Link className="btn btn-orange nav-cta" to="/book">
              Book Appointment
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Caret() {
  return (
    <svg viewBox="0 0 12 8" aria-hidden="true" className="caret">
      <path d="M1 1.5 6 6.5 11 1.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="phone-icon">
      <path
        fill="currentColor"
        d="M7.2 3.6c.4-.8 1.4-1.2 2.2-.8l1.8.9c.7.3 1 1.1.8 1.8l-.6 2.1c-.2.6 0 1.3.5 1.7l1.6 1.3c.5.4 1.2.5 1.8.2l2-1c.7-.3 1.5-.1 1.9.6l1 1.8c.4.8.2 1.8-.6 2.3-1.6 1-3.6 1.6-5.8 1.1-2.5-.6-5-2.3-7.1-4.4S3.7 7.6 4.1 5.1c.2-1.1.7-2.1 1.5-2.8.2.4.4.8.6 1.3Z"
      />
    </svg>
  );
}
