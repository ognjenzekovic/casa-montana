export type Locale = 'sr' | 'en';

type StoryBody = { pre: string; strong: string; post: string };

type CategoryKey = 'exterior' | 'living-room' | 'kitchen' | 'terrace' | 'bedroom' | 'bathroom';

export type Translations = {
    htmlLang: string;
    pageTitle: string;
    metaDescription: string;
    skipLink: string;
    nav: { book: string; cta: string; langToggle: string; menu: string };
    hero: { badge: string; location: string; lead: string; scroll: string };
    intro: { eyebrow: string; statement: string; body: string; blogCta: string };
    specs: { ariaLabel: string; bedrooms: string; bathrooms: string; living: string; plot: string };
    gallery: {
        eyebrow: string;
        title: string;
        filterAria: string;
        dayNightAria: string;
        dayNightTitle: string;
        dayAriaLabel: string;
        nightAriaLabel: string;
        all: string;
        nightSuffix: string;
        categories: Record<CategoryKey, string>;
    };
    story: { eyebrow: string; title: string; body: StoryBody };
    trust: { ratingLabel: string; reviewsLabel: string; yearsLabel: string; quote: string; citation: string };
    book: { eyebrow: string; title: string; body: string; bookingBtn: string; airbnbBtn: string; followUs: string };
    location: { title: string; body: string; mapTitle: string; mapLink: string; mapLang: string };
    closer: { eyebrow: string; title: string; cta: string };
    footer: { copyright: string };
    blog: { eyebrow: string; title: string; back: string; readMore: string };
};

const sr: Translations = {
    htmlLang: 'sr',
    pageTitle: 'Casa Montana — Kuća na Kopaoniku na prodaju',
    metaDescription:
        'Ručno građena brvnara na Kopaoniku, 10 minuta od Nacionalnog parka. Retka prilika za posed u srcu planine.',
    skipLink: 'Preskoči na sadržaj',
    nav: { book: 'Rezervišite boravak', cta: 'Zakažite obilazak', langToggle: 'EN', menu: 'Meni' },
    hero: {
        badge: 'Na prodaju',
        location: 'Kopaonik, Srbija',
        lead: 'Ručno građena brvnara na ivici Nacionalnog parka Kopaonik. Jedna kuća, jedan posed, bez kompromisa.',
        scroll: 'Pogledajte nekretninu ↓',
    },
    intro: {
        eyebrow: 'O kući',
        statement: 'Kuća građena za jedan život, ne za jedan izdatak.',
        body: 'Casa Montana stoji na kraju naselja, okružena jelovom šumom, deset minuta od Nacionalnog parka Kopaonik. Svaka greda je birana i sečena za ovu kuću — ovo nije katalog, ovo je jedna, konkretna kuća.',
        blogCta: 'Pročitajte naš blog',
    },
    specs: {
        ariaLabel: 'Osnovni podaci o nekretnini',
        bedrooms: 'Spavaće sobe',
        bathrooms: 'Kupatila',
        living: 'Stambeni prostor',
        plot: 'Placa',
    },
    gallery: {
        eyebrow: 'Galerija',
        title: 'Prostor koji se oseti, ne samo vidi',
        filterAria: 'Filtriraj po prostoriji',
        dayNightAria: 'Dan ili noć',
        dayNightTitle: 'Dan / Noć',
        dayAriaLabel: 'Prikazane dnevne fotografije — klikni za noćne',
        nightAriaLabel: 'Prikazane noćne fotografije — klikni za dnevne',
        all: 'Sve',
        nightSuffix: ' · noć',
        categories: {
            exterior: 'Eksterijer',
            'living-room': 'Dnevni boravak',
            kitchen: 'Kuhinja',
            terrace: 'Terase',
            bedroom: 'Spavaće sobe',
            bathroom: 'Kupatila',
        },
    },
    story: {
        eyebrow: 'Zanat',
        title: 'Građena rukama, ne od kataloga',
        body: {
            pre: 'Dnevni boravak se otvara ka prostranoj terasi sa šporetom na drva — mesto gde se planina oseti i kada ste unutra. Kuhinja je potpuno opremljena, spavaće sobe imaju posteljinu ',
            strong: 'lokalnih proizvođača',
            post: ', a kupatila prate isti nivo pažnje.',
        },
    },
    trust: {
        ratingLabel: 'Prosečna ocena gostiju',
        reviewsLabel: 'Utisaka',
        yearsLabel: 'Godina ugošćavanja',
        quote: '„Skrivena u šumi, daleko od \'urbanog Kopaonika\' — komšije su jeleni i veverice, a pored kuće protiče muzikalni potok.”',
        citation: '— iz utiska gosta, Booking.com',
    },
    book: {
        eyebrow: 'Pre kupovine',
        title: 'Prenoćite pre nego što odlučite',
        body: 'Casa Montana se aktivno izdaje i nosi ocenu 9.8/10 od gostiju. Rezervišite boravak i uverite se lično, pre nego što se odlučite.',
        bookingBtn: 'Rezervišite na Booking.com',
        airbnbBtn: 'Rezervišite na Airbnb-u',
        followUs: 'Pratite nas na Instagramu',
    },
    location: {
        title: 'Deset minuta od Nacionalnog parka',
        body: 'Privatni parking, pristupni put koji se redovno čisti tokom zime, i skijalište, planinarske staze i mir prirode na dohvat ruke — bez kompromisa oko privatnosti.',
        mapTitle: 'Casa Montana na mapi',
        mapLink: 'Otvorite u Google mapama ↗',
        mapLang: 'sr',
    },
    closer: {
        eyebrow: 'Zainteresovani?',
        title: 'Retko se ovakav posed pojavi na tržištu.',
        cta: 'Zatražite informacije',
    },
    footer: { copyright: '© 2026 Casa Montana · Kopaonik, Srbija' },
    blog: {
        eyebrow: 'Blog',
        title: 'Vesti i vodiči o Kopaoniku',
        back: '← Nazad na početnu',
        readMore: 'Pročitaj više',
    },
};

const en: Translations = {
    htmlLang: 'en',
    pageTitle: 'Casa Montana — Mountain House for Sale in Kopaonik',
    metaDescription:
        'A hand-built log cabin in Kopaonik, 10 minutes from the National Park. A rare chance to own land at the heart of the mountain.',
    skipLink: 'Skip to content',
    nav: { book: 'Book a Stay', cta: 'Schedule a Viewing', langToggle: 'SR', menu: 'Menu' },
    hero: {
        badge: 'For Sale',
        location: 'Kopaonik, Serbia',
        lead: 'A hand-built log cabin on the edge of Kopaonik National Park. One house, one estate, no compromises.',
        scroll: 'View the Property ↓',
    },
    intro: {
        eyebrow: 'About the House',
        statement: 'A house built for a lifetime, not a line item.',
        body: 'Casa Montana stands at the edge of the settlement, surrounded by fir forest, ten minutes from Kopaonik National Park. Every beam was chosen and cut for this house — this isn\'t a catalog, it\'s one specific house.',
        blogCta: 'Read Our Blog',
    },
    specs: {
        ariaLabel: 'Key property details',
        bedrooms: 'Bedrooms',
        bathrooms: 'Bathrooms',
        living: 'Living Space',
        plot: 'Plot Size',
    },
    gallery: {
        eyebrow: 'Gallery',
        title: 'A space you feel, not just see',
        filterAria: 'Filter by room',
        dayNightAria: 'Day or night',
        dayNightTitle: 'Day / Night',
        dayAriaLabel: 'Showing daytime photos — click for night',
        nightAriaLabel: 'Showing night photos — click for daytime',
        all: 'All',
        nightSuffix: ' · night',
        categories: {
            exterior: 'Exterior',
            'living-room': 'Living Room',
            kitchen: 'Kitchen',
            terrace: 'Terrace',
            bedroom: 'Bedrooms',
            bathroom: 'Bathrooms',
        },
    },
    story: {
        eyebrow: 'Craft',
        title: 'Built by Hand, Not from a Catalog',
        body: {
            pre: 'The living room opens onto a spacious terrace with a wood-burning stove — a place where the mountain is felt even indoors. The kitchen is fully equipped, the bedrooms are dressed in linens from ',
            strong: 'local makers',
            post: ', and the bathrooms carry the same level of care.',
        },
    },
    trust: {
        ratingLabel: 'Average Guest Rating',
        reviewsLabel: 'Reviews',
        yearsLabel: 'Years Hosting',
        quote: '"Casa Montana has an exceptional location. Hidden in the forest, far from \'urban Kopaonik\' — the neighbors are deer and squirrels, and a musical stream runs past the house."',
        citation: '— from a guest review, Booking.com',
    },
    book: {
        eyebrow: 'Before You Buy',
        title: 'Stay the Night Before You Decide',
        body: 'Casa Montana is actively rented and holds a 9.8/10 guest rating. Book a stay and see it for yourself before you decide.',
        bookingBtn: 'Book on Booking.com',
        airbnbBtn: 'Book on Airbnb',
        followUs: 'Follow us on Instagram',
    },
    location: {
        title: 'Ten Minutes from the National Park',
        body: 'Private parking, an access road cleared regularly through winter, and the ski resort, hiking trails, and quiet of nature all within reach — without compromising on privacy.',
        mapTitle: 'Casa Montana on the map',
        mapLink: 'Open in Google Maps ↗',
        mapLang: 'en',
    },
    closer: {
        eyebrow: 'Interested?',
        title: 'A property like this rarely comes to market.',
        cta: 'Request Information',
    },
    footer: { copyright: '© 2026 Casa Montana · Kopaonik, Serbia' },
    blog: {
        eyebrow: 'Blog',
        title: 'Kopaonik News & Guides',
        back: '← Back to Home',
        readMore: 'Read more',
    },
};

export const translations: Record<Locale, Translations> = { sr, en };
