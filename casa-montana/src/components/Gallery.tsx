import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';

type Category = 'eksterijer' | 'dnevni-boravak' | 'kuhinja' | 'terase' | 'spavace-sobe' | 'kupatila';

const CATEGORY_LABELS: Record<Category, string> = {
    eksterijer: 'Eksterijer',
    'dnevni-boravak': 'Dnevni boravak',
    kuhinja: 'Kuhinja',
    terase: 'Terase',
    'spavace-sobe': 'Spavaće sobe',
    kupatila: 'Kupatila',
};

const CATEGORY_ORDER = Object.keys(CATEGORY_LABELS) as Category[];

// Auto-discovers every photo dropped into src/assets/gallery/<category>/ —
// to add a photo, just put the file in the matching folder, no code
// changes needed. Folder names must match the keys in CATEGORY_LABELS.
const photoModules = import.meta.glob('/src/assets/gallery/*/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

type Tile = { id: string; category: Category } & (
    | { kind: 'image'; src: string; alt: string }
    | { kind: 'placeholder' }
);

function buildTiles(): Tile[] {
    const byCategory = new Map<Category, Tile[]>();

    for (const [path, src] of Object.entries(photoModules)) {
        const match = path.match(/\/gallery\/([^/]+)\/([^/]+)$/);
        if (!match) continue;
        const [, folder] = match;
        const category = CATEGORY_ORDER.find((c) => c === folder);
        if (!category) continue;

        const tile: Tile = {
            id: path,
            kind: 'image',
            src,
            alt: `Casa Montana – ${CATEGORY_LABELS[category]}`,
            category,
        };
        const list = byCategory.get(category) ?? [];
        list.push(tile);
        byCategory.set(category, list);
    }

    return CATEGORY_ORDER.flatMap((category) => {
        const photos = (byCategory.get(category) ?? []).sort((a, b) => a.id.localeCompare(b.id));
        return photos.length > 0 ? photos : [{ id: `${category}-placeholder`, kind: 'placeholder', category }];
    });
}

const TILES = buildTiles();

const TABS: { key: Category | 'sve'; label: string }[] = [
    { key: 'sve', label: 'Sve' },
    ...CATEGORY_ORDER.map((key) => ({ key, label: CATEGORY_LABELS[key] })),
];

function navBottomPx() {
    const nav = document.querySelector('.nav');
    return nav ? nav.getBoundingClientRect().bottom : 90;
}

export function Gallery() {
    const ref = useReveal<HTMLElement>();
    const [active, setActive] = useState<Category | 'sve'>('sve');
    const [merged, setMerged] = useState(false);
    const visible = active === 'sve' ? TILES : TILES.filter((t) => t.category === active);

    useEffect(() => {
        const measure = () => {
            const section = ref.current;
            const bar = section?.querySelector('.gallery__tabs-bar');
            if (!section || !bar) return;
            const navBottom = navBottomPx();
            const barTop = bar.getBoundingClientRect().top;
            const sectionBottom = section.getBoundingClientRect().bottom;
            setMerged(barTop <= navBottom && sectionBottom > navBottom);
        };

        // Coalesce to one measurement per animation frame — see Nav.tsx
        // for why (uncoalesced scroll handlers can lag behind during fast
        // scrolling and only catch up once scrolling stops).
        let ticking = false;
        const onScroll = () => {
            if (ticking) return;
            ticking = true;
            requestAnimationFrame(() => {
                measure();
                ticking = false;
            });
        };

        measure();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [ref]);

    const selectTab = (key: Category | 'sve') => {
        setActive(key);
        const bar = ref.current?.querySelector('.gallery__tabs-bar');
        if (!bar) return;
        // Scroll exactly as far as the bar needs to travel to touch the
        // nav — same measurement the merge check uses, so clicking a
        // filter always lands precisely where the merge happens.
        const delta = bar.getBoundingClientRect().top - navBottomPx();
        window.scrollTo({ top: window.scrollY + delta, behavior: 'smooth' });
    };

    return (
        <section ref={ref} className="gallery">
            <div className="gallery__inner">
                <div className="gallery__head">
                    <span className="eyebrow">Galerija</span>
                    <h2 className="gallery__title">Prostor koji se oseti, ne samo vidi</h2>
                </div>
            </div>
            <div className={`gallery__tabs-bar${merged ? ' gallery__tabs-bar--merged' : ''}`}>
                <div className="gallery__tabs" role="tablist" aria-label="Filtriraj po prostoriji">
                    {TABS.map((tab) => (
                        <button
                            key={tab.key}
                            type="button"
                            role="tab"
                            aria-selected={active === tab.key}
                            className={`gallery__tab${active === tab.key ? ' gallery__tab--active' : ''}`}
                            onClick={() => selectTab(tab.key)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>
            <div className="gallery__inner">
                <div className="gallery__grid">
                    {visible.map((tile) =>
                        tile.kind === 'image' ? (
                            <div className="gallery__tile" key={tile.id}>
                                <img src={tile.src} alt={tile.alt} />
                            </div>
                        ) : (
                            <div className="gallery__tile gallery__tile--placeholder" key={tile.id}>
                                <span>{CATEGORY_LABELS[tile.category]}</span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
