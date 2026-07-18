import { useEffect, useRef, useState } from 'react';

export function Nav() {
    const navRef = useRef<HTMLElement | null>(null);
    const [scrolled, setScrolled] = useState(false);
    const [merged, setMerged] = useState(false);

    useEffect(() => {
        const updateNavBottom = () => {
            const nav = navRef.current;
            if (!nav) return;
            // Overlap by a few px so the bar tucks under the nav instead
            // of risking a sub-pixel rounding gap between the two edges.
            document.documentElement.style.setProperty(
                '--nav-bottom',
                `${nav.getBoundingClientRect().bottom - 10}px`
            );
        };

        const onScroll = () => {
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

        updateNavBottom();
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', updateNavBottom);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', updateNavBottom);
        };
    }, []);

    const className = ['nav', scrolled || merged ? 'nav--scrolled' : '', merged ? 'nav--merged' : '']
        .filter(Boolean)
        .join(' ');

    return (
        <nav ref={navRef} className={className}>
            <span className="nav__mark">Casa&nbsp;Montana</span>
            <a className="nav__cta" href="#contact">
                Zakažite obilazak
            </a>
        </nav>
    );
}
