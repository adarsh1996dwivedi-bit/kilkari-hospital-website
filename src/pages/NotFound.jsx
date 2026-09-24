import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';

export default function NotFound() {
  return (
    <>
      <PageHero
        kicker="404"
        title="That page is not on this site"
        text="The address may be mistyped. The hospital itself is still at Kalyanpur."
      />
      <section className="section">
        <div className="container">
          <Link className="btn btn-sky" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
