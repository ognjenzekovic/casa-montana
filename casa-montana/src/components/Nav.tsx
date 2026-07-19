import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../lib/languageContext';

export function Nav() {
    const navRef = useRef<HTMLElement | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [merged, setMerged] = useState(false);
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

    const isScrolled = scrolled || merged;
    const toggleLocale = () => setLocale(locale === 'sr' ? 'en' : 'sr');

    return (
        <>
            <nav
                ref={navRef}
                className={`nav${isScrolled ? ' nav--scrolled' : ''}${merged ? ' nav--merged' : ''}`}
            >
                <span className="nav__mark">Casa&nbsp;Montana</span>
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
            </nav>
            <button
                type="button"
                className={`nav-lang${isScrolled ? ' nav-lang--scrolled' : ''}`}
                onClick={toggleLocale}
            >
                {t.nav.langToggle}
            </button>
        </>
    );
}
