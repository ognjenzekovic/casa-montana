import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Nav } from './components/Nav.tsx';
import { Hero } from './components/Hero.tsx';
import { Specs } from './components/Specs.tsx';
import { Story } from './components/Story.tsx';
import { Closer } from './components/Close.tsx';
import { Footer } from './components/Footer.tsx';
import { Location } from './components/Location.tsx';
import { Intro } from './components/Intro.tsx';
import { Gallery } from './components/Gallery.tsx';
import { Trust } from './components/Trust.tsx';
import { Book } from './components/Book.tsx';
import { BlogPage } from './pages/BlogPage.tsx';
import { BlogPostPage } from './pages/BlogPostPage.tsx';
import { LanguageProvider } from './lib/i18n.tsx';
import { useLanguage } from './lib/languageContext';
import { useEffect } from 'react';

function HomePage() {
  const { t } = useLanguage();

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>
      <main id="main">
        <Hero />
        <Intro />
        <Specs />
        <Gallery />
        <Story />
        <Trust />
        <Book />
        <Location />
        <Closer />
      </main>
    </>
  );
}

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
