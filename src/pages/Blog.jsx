import { Link, useParams } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { postBySlug, posts } from '../data';
import NotFound from './NotFound';

export default function Blog() {
  const { slug } = useParams();
  if (slug) return <Article slug={slug} />;

  return (
    <>
      <PageHero
        kicker="Journal"
        title="Notes from Kilkari consultants"
        text="Short, practical pieces for parents and patients. They are general information, not a personal diagnosis."
        crumbs={[{ label: 'Journal' }]}
      />
      <section className="section">
        <div className="container blog-grid">
          {posts.map((post) => (
            <article className="blog-card" key={post.slug}>
              <p className="blog-meta">
                <span>{post.date}</span>
                <span>{post.topic}</span>
              </p>
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>
              <p>{post.excerpt}</p>
              <p className="blog-author">
                <Link to={`/doctors/${post.authorSlug}`}>{post.author}</Link>
              </p>
              <Link className="text-link" to={`/blog/${post.slug}`}>
                Read more
              </Link>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

function Article({ slug }) {
  const post = postBySlug(slug);
  if (!post) return <NotFound />;

  return (
    <>
      <PageHero
        kicker={post.topic}
        title={post.title}
        text={`${post.author} · ${post.date}`}
        crumbs={[{ label: 'Journal', to: '/blog' }, { label: post.title }]}
      />
      <section className="section">
        <div className="container narrow prose">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
          <p className="fine-print">
            This note is general education from the hospital website. It does not replace a
            consultation. If a child is hard to wake, struggling to breathe, or under three months
            with a fever, call {` `}
            <a href="tel:+918791201424">8791201424</a> or go to the hospital.
          </p>
          <Link className="text-link" to={`/doctors/${post.authorSlug}`}>
            {post.author}
          </Link>
        </div>
      </section>
    </>
  );
}
