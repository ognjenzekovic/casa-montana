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
import { LanguageProvider } from './lib/i18n.tsx';
import { useLanguage } from './lib/languageContext';
import { useHashRoute } from './hooks/useHashRoute';
import { useEffect } from 'react';

function AppContent() {
  const { t } = useLanguage();
  const hash = useHashRoute();
  const isBlog = hash.startsWith('#/blog');

  // Jump to the top on every route switch instead of carrying over
  // wherever the previous page happened to be scrolled to — each
  // "page" should open fresh, the way a real navigation would. Forced
  // to 'instant' because html has scroll-behavior: smooth globally,
  // which would otherwise animate this into a visible scroll-up.
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [isBlog]);

  return (
    <>
      <a className="skip-link" href="#main">
        {t.skipLink}
      </a>

      <Nav />

      {isBlog ? (
        <BlogPage />
      ) : (
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
      )}

      <Footer />
    </>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;
