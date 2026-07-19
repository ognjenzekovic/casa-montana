import { useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import { useLanguage } from '../lib/languageContext';

export function Nav() {
    const navRef = useRef<HTMLElement | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [merged, setMerged] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const { locale, setLocale, t } = useLanguage();

    useEffect(() => {
        const updateNavBottom = () => {
            const nav = navRef.current;
            if (!nav) return;
            const rect = nav.getBoundingClientRect();
            // Overlap by a few px so the bar tucks under the nav instead
            // of risking a sub-pixel rounding gap between the two edges.
            document.documentElement.style.setProperty('--nav-bottom', `${rect.bottom - 10}px`);
            // Drives the language bubble's size so it always matches nav's
            // actual rendered height exactly, whatever that happens to be.
            document.documentElement.style.setProperty('--nav-height', `${rect.height}px`);
        };

        const measure = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.7);
            updateNavBottom();

            const nav = navRef.current;
            const bar = document.querySelector('.gallery__tabs-bar');
            const section = document.querySelector('.gallery');
            if (nav && bar && section) {
                const navBottom = nav.getBoundingClientRect().bottom;
                const barTop = bar.getBoundingClientRect().top;
                const sectionBottom = section.getBoundingClientRect().bottom;
                setMerged(barTop <= navBottom && sectionBottom > navBottom);
            } else {
                setMerged(false);
            }
        };

        // Scroll fires far more often than the browser can paint — doing
        // the layout-forcing measurement work on every single event lets
        // it fall behind during fast scrolling and only catch up once
        // scrolling stops. Coalescing to one measurement per animation
        // frame keeps it in sync with what's actually on screen.
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                measure();
                ticking = false;
            });
        };

        updateNavBottom();
        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateNavBottom);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateNavBottom);
        };
    }, []);

    // The mobile menu only exists below the burger breakpoint (see CSS) —
    // if the window gets resized past it while open (e.g. rotating a
    // tablet, or a desktop user shrinking the window back up), close it
    // so it can't get stuck open somewhere it no longer makes sense.
    useEffect(() => {
        if (!menuOpen) return;
        const onResize = () => {
            if (window.innerWidth > 640) setMenuOpen(false);
        };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [menuOpen]);

    const isScrolled = scrolled || merged;
    const toggleLocale = () => setLocale(locale === 'sr' ? 'en' : 'sr');
    const closeMenu = () => setMenuOpen(false);

    // Acts as a home link: clears any #/blog route and scrolls to top.
    // Smooth here (unlike the instant route-switch reset in App.tsx) is
    // intentional — clicked from the main page itself it should feel
    // like a normal "back to top", not a page reload. If already on
    // "#" the hash won't change, so hashchange won't fire and App's
    // route-switch effect won't run this scroll for us — hence the
    // explicit scrollTo here regardless of current route.
    const goHome = (event: MouseEvent) => {
        event.preventDefault();
        if (window.location.hash) window.location.hash = '';
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        closeMenu();
    };

    return (
        <>
            <nav
                ref={navRef}
                className={`nav${isScrolled ? ' nav--scrolled' : ''}${merged ? ' nav--merged' : ''}`}
            >
                <a className="nav__mark" href="#" onClick={goHome}>
                    Casa&nbsp;Montana
                </a>
                <div className="nav__links">
                    <a className="nav__link" href="#book">
                        {t.nav.book}
                    </a>
                    {/* Below the width where the floating .nav-lang bubble has
                        room to sit beside nav, this inline twin takes over —
                        see the matching media query in index.css. */}
                    <button type="button" className="nav__lang-inline" onClick={toggleLocale}>
                        {t.nav.langToggle}
                    </button>
                    <a className="nav__cta" href="#contact">
                        {t.nav.cta}
                    </a>
                </div>
                <button
                    type="button"
                    className="nav__burger"
                    aria-expanded={menuOpen}
                    aria-label={t.nav.menu}
                    onClick={() => setMenuOpen((open) => !open)}
                >
                    <span className={`nav__burger-lines${menuOpen ? ' nav__burger-lines--open' : ''}`}>
                        <span className="nav__burger-line" />
                        <span className="nav__burger-line" />
                        <span className="nav__burger-line" />
                    </span>
                </button>
            </nav>
            <button
                type="button"
                className={`nav-lang${isScrolled ? ' nav-lang--scrolled' : ''}`}
                onClick={toggleLocale}
            >
                {t.nav.langToggle}
            </button>
            {menuOpen && (
                <div className={`nav__mobile-menu${isScrolled ? ' nav__mobile-menu--scrolled' : ''}`}>
                    <a className="nav__mobile-link" href="#book" onClick={closeMenu}>
                        {t.nav.book}
                    </a>
                    <a className="nav__mobile-link" href="#contact" onClick={closeMenu}>
                        {t.nav.cta}
                    </a>
                    <button type="button" className="nav__mobile-lang" onClick={toggleLocale}>
                        {t.nav.langToggle}
                    </button>
                </div>
            )}
        </>
    );
}
