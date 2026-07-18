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

function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Preskoči na sadržaj
      </a>

      <Nav />

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

      <Footer />
    </>
  );
}

export default App;