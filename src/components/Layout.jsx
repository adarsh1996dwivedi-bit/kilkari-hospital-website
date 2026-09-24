import { Link, Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { hospital } from '../data';

export default function Layout() {
  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <div className="mobile-bar">
        <a href={`tel:${hospital.phoneTel}`}>Call</a>
        <Link to="/book">Book</Link>
      </div>
    </div>
  );
}
