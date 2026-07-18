import { useEffect, useState } from 'react';

export function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > window.innerHeight * 0.7);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
            <span className="nav__mark">Casa&nbsp;Montana</span>
            <a className="nav__cta" href="#contact">
                Zakažite obilazak
            </a>
        </nav>
    );
}
