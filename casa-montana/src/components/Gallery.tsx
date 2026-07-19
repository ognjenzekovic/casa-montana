import { useEffect, useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../lib/languageContext';

type Category = 'exterior' | 'living-room' | 'kitchen' | 'terrace' | 'bedroom' | 'bathroom';
type TimeOfDay = 'day' | 'night';

const CATEGORY_ORDER: Category[] = ['exterior', 'living-room', 'kitchen', 'terrace', 'bedroom', 'bathroom'];

// Auto-discovers every photo dropped into src/assets/gallery/<category>/ —
// to add a photo, just put the file in the matching folder, no code
// changes needed. Folder names must match the values in CATEGORY_ORDER.
// Drop a photo into <category>/night/ instead of the category root to
// tag it as a night shot — anything not in a night/ folder is "day".
const photoModules = import.meta.glob('/src/assets/gallery/*/**/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}', {
    eager: true,
    import: 'default',
}) as Record<string, string>;

type Tile = { id: string; category: Category; time: TimeOfDay } & (
    | { kind: 'image'; src: string }
    | { kind: 'placeholder' }
);

function buildTiles(): Tile[] {
    const byGroup = new Map<string, Tile[]>();

    for (const [path, src] of Object.entries(photoModules)) {
        const match = path.match(/\/gallery\/([^/]+)\/(?:(night)\/)?([^/]+)$/);
        if (!match) continue;
        const [, folder, nightFolder] = match;
        const category = CATEGORY_ORDER.find((c) => c === folder);
        if (!category) continue;
        const time: TimeOfDay = nightFolder ? 'night' : 'day';

        const tile: Tile = { id: path, kind: 'image', src, category, time };
        const key = `${category}:${time}`;
        const list = byGroup.get(key) ?? [];
        list.push(tile);
        byGroup.set(key, list);
    }

    return CATEGORY_ORDER.flatMap((category) =>
        (['day', 'night'] as TimeOfDay[]).flatMap((time) => {
            const key = `${category}:${time}`;
            const photos = (byGroup.get(key) ?? []).sort((a, b) => a.id.localeCompare(b.id));
            return photos.length > 0 ? photos : [{ id: `${key}-placeholder`, kind: 'placeholder', category, time }];
        })
    );
}

const TILES = buildTiles();

function navBottomPx() {
    const nav = document.querySelector('.nav');
    return nav ? nav.getBoundingClientRect().bottom : 90;
}

export function Gallery() {
    const ref = useReveal<HTMLElement>();
    const { t } = useLanguage();
    const [active, setActive] = useState<Category | 'all'>('all');
    const [time, setTime] = useState<TimeOfDay>('day');
    const [merged, setMerged] = useState(false);
    const visible = TILES.filter((tile) => (active === 'all' || tile.category === active) && tile.time === time);

    const TABS: { key: Category | 'all'; label: string }[] = [
        { key: 'all', label: t.gallery.all },
        ...CATEGORY_ORDER.map((key) => ({ key, label: t.gallery.categories[key] })),
    ];

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

    const selectTab = (key: Category | 'all') => {
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
                    <span className="eyebrow">{t.gallery.eyebrow}</span>
                    <h2 className="gallery__title">{t.gallery.title}</h2>
                </div>
            </div>
            <div className={`gallery__tabs-bar${merged ? ' gallery__tabs-bar--merged' : ''}`}>
                <div className="gallery__tabs" role="tablist" aria-label={t.gallery.filterAria}>
                    <button
                        type="button"
                        role="switch"
                        aria-checked={time === 'night'}
                        aria-label={time === 'day' ? t.gallery.dayAriaLabel : t.gallery.nightAriaLabel}
                        title={t.gallery.dayNightTitle}
                        className={`gallery__time-toggle${time === 'night' ? ' gallery__time-toggle--night' : ''}`}
                        onClick={() => setTime((prev) => (prev === 'day' ? 'night' : 'day'))}
                    >
                        <span className="gallery__time-thumb" aria-hidden="true" />
                        <svg className="gallery__time-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <circle cx="12" cy="12" r="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                            <path
                                d="M12 2.5v2.4M12 19.1v2.4M21.5 12h-2.4M4.9 12H2.5M18.5 5.5l-1.7 1.7M7.2 16.8l-1.7 1.7M18.5 18.5l-1.7-1.7M7.2 7.2 5.5 5.5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinecap="round"
                            />
                        </svg>
                        <svg className="gallery__time-icon" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                                d="M20.5 14.7A8.5 8.5 0 0 1 9.3 3.5a8.5 8.5 0 1 0 11.2 11.2Z"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.6"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>
                    <div className="gallery__tabs-list">
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
            </div>
            <div className="gallery__inner">
                <div className="gallery__grid">
                    {visible.map((tile) =>
                        tile.kind === 'image' ? (
                            <div className="gallery__tile" key={tile.id}>
                                <img
                                    src={tile.src}
                                    alt={`Casa Montana – ${t.gallery.categories[tile.category]}`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        ) : (
                            <div className="gallery__tile gallery__tile--placeholder" key={tile.id}>
                                <span>
                                    {t.gallery.categories[tile.category]}
                                    {tile.time === 'night' ? t.gallery.nightSuffix : ''}
                                </span>
                            </div>
                        )
                    )}
                </div>
            </div>
        </section>
    );
}
