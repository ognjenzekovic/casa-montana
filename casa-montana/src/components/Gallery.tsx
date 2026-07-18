import { useReveal } from '../hooks/useReveal';

type Tile =
    | { kind: 'image'; src: string; alt: string; size: 'wide' | 'narrow' }
    | { kind: 'placeholder'; label: string; size: 'wide' | 'narrow' };

// Swap placeholder tiles for real photos as they come in —
// just change kind to 'image' and add src + alt.
const TILES: Tile[] = [
    { kind: 'image', src: '/assets/hero.jpeg', alt: 'Casa Montana iz vazduha, u sumrak.', size: 'wide' },
    { kind: 'placeholder', label: 'Dnevni boravak', size: 'narrow' },
    { kind: 'placeholder', label: 'Kuhinja', size: 'narrow' },
    { kind: 'placeholder', label: 'Terasa i šporet na drva', size: 'wide' },
    { kind: 'placeholder', label: 'Spavaća soba', size: 'narrow' },
    { kind: 'placeholder', label: 'Kupatilo', size: 'narrow' },
];

export function Gallery() {
    const ref = useReveal<HTMLElement>();

    return (
        <section ref={ref} className="gallery reveal">
            <div className="gallery__head">
                <span className="eyebrow">Enterijer</span>
                <h2 className="gallery__title">Prostor koji se oseti, ne samo vidi</h2>
            </div>
            <div className="gallery__grid">
                {TILES.map((tile, i) =>
                    tile.kind === 'image' ? (
                        <div className={`gallery__tile gallery__tile--${tile.size}`} key={i}>
                            <img src={tile.src} alt={tile.alt} />
                        </div>
                    ) : (
                        <div
                            className={`gallery__tile gallery__tile--${tile.size} gallery__tile--placeholder`}
                            key={i}
                        >
                            <span>{tile.label}</span>
                        </div>
                    )
                )}
            </div>
        </section>
    );
}
