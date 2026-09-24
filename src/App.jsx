import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Specialities from './pages/Specialities';
import Doctors from './pages/Doctors';
import Care from './pages/Care';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Book from './pages/Book';
import Centre from './pages/Centre';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialities" element={<Specialities />} />
          <Route path="/specialities/:slug" element={<Specialities />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:slug" element={<Doctors />} />
          <Route path="/care" element={<Care />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Book />} />
          <Route path="/centre" element={<Centre />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
