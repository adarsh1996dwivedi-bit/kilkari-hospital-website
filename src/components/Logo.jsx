import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="logo" aria-label="Kilkari Hospital home">
      <svg className="logo-mark" viewBox="0 0 64 64" aria-hidden="true">
        <circle cx="32" cy="32" r="29" fill="#F0F9FF" stroke="#0284C7" strokeWidth="3" />
        <circle cx="30" cy="22" r="6" fill="#F97316" />
        <path d="M16 48c2.4-10 8-15 14-15s11.6 5 14 15" fill="#F97316" />
        <path
          d="M32 30c8 1.5 13-3 18-11"
          fill="none"
          stroke="#0284C7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="48" cy="18" r="3.2" fill="#F97316" />
      </svg>
      <span className="logo-words">
        <span className="logo-name">
          <span className="logo-kilkari">Kilkari</span> <span className="logo-hospital">Hospital</span>
        </span>
        <span className="logo-hindi">बच्चों का अस्पताल</span>
      </span>
    </Link>
  );
}
