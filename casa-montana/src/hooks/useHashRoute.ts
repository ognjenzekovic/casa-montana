import { useEffect, useState } from 'react';

// Minimal hash-based routing — no server rewrite config needed on any
// static host (including the GitHub Pages fallback URL), unlike real
// path-based routes. See the note on BlogPage.tsx about the SEO
// trade-off this implies.
export function useHashRoute() {
    const [hash, setHash] = useState(() => window.location.hash);

    useEffect(() => {
        const onHashChange = () => setHash(window.location.hash);
        window.addEventListener('hashchange', onHashChange);
        return () => window.removeEventListener('hashchange', onHashChange);
    }, []);

    return hash;
}
