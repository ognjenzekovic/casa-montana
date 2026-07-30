export type Locale = 'sr' | 'en';

type StoryBody = { pre: string; strong: string; post: string };

type CategoryKey = 'exterior' | 'living-room' | 'kitchen' | 'terrace' | 'bedroom' | 'bathroom' | 'sauna';

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
        altSuffix: string;
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
    pageTitle: 'Casa Montana — luksuzna brvnara sa saunom na Kopaoniku',
    metaDescription:
        'Luksuzna brvnara na Kopaoniku sa saunom i prostranim terasama, 5 minuta od Nacionalnog parka. Dostupna za izdavanje i prodaju.',
    skipLink: 'Preskoči na sadržaj',
    nav: { book: 'Rezervišite boravak', cta: 'Zakažite obilazak', langToggle: 'EN', menu: 'Meni' },
    hero: {
        badge: 'Na prodaju',
        location: 'Kopaonik, Srbija',
        lead: 'Ručno građena brvnara na ivici Nacionalnog parka Kopaonik.',
        scroll: 'Pogledajte kuću ↓',
    },
    intro: {
        eyebrow: 'O kući',
        statement: 'Svaka greda je sečena za ovu kuću, ne za sličnu.',
        body: 'Casa Montana stoji na kraju naselja, pet minuta od Nacionalnog parka — poslednja kuća pre nego što put nestane u šumi.',
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
        altSuffix: 'luksuzna brvnara na Kopaoniku',
        categories: {
            exterior: 'Eksterijer',
            'living-room': 'Dnevni boravak',
            kitchen: 'Kuhinja',
            terrace: 'Terase',
            bedroom: 'Spavaće sobe',
            bathroom: 'Kupatila',
            sauna: 'Sauna',
        },
    },
    story: {
        eyebrow: 'Zanat',
        title: 'Drvo i vatra',
        body: {
            pre: 'Dnevni boravak se otvara ka prostranoj terasi sa šporetom na drva — mesto gde se planina oseti i kada ste unutra. U kuhinji ima sve što treba da se skuva večera za ceo sto. Uveče, jedini zvuk spolja je potok koji teče pored kuće; posteljina u spavaćim sobama dolazi od ',
            strong: 'lokalnih proizvođača',
            post: ', a kupatila prate isti nivo pažnje.',
        },
    },
    trust: {
        ratingLabel: 'Prosečna ocena na Airbnb-u',
        reviewsLabel: 'Utisaka',
        yearsLabel: 'Godina ugošćavanja',
        quote: '„Skrivena u šumi, daleko od \'urbanog Kopaonika\' — komšije su jeleni i veverice, a pored kuće protiče muzikalni potok.”',
        citation: '— iz utiska gosta, Booking.com',
    },
    book: {
        eyebrow: 'Pre kupovine',
        title: 'Prenoćite pre nego što odlučite',
        body: 'Casa Montana se aktivno izdaje i nosi ocenu 9.8/10 na Booking-u. Rezervišite boravak i uverite se lično, pre nego što se odlučite.',
        bookingBtn: 'Rezervišite na Booking.com',
        airbnbBtn: 'Rezervišite na Airbnb-u',
        followUs: 'Pratite nas na Instagramu',
    },
    location: {
        title: 'Pet minuta od Nacionalnog parka',
        body: 'Privatni parking, pristupni put koji se redovno čisti tokom zime, skijalište i planinarske staze na dohvat ruke — a kuća ostaje potpuno vaša, bez pogleda suseda.',
        mapTitle: 'Casa Montana na mapi',
        mapLink: 'Otvorite u Google mapama ↗',
        mapLang: 'sr',
    },
    closer: {
        eyebrow: 'Zainteresovani?',
        title: 'Kuće ovakve retko menjaju vlasnika.',
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
    pageTitle: 'Casa Montana — Luxury Log Cabin with Sauna on Kopaonik',
    metaDescription:
        'A luxury log cabin on Kopaonik with a sauna and spacious terraces, 5 minutes from the National Park. Available to rent and to buy.',
    skipLink: 'Skip to content',
    nav: { book: 'Book a Stay', cta: 'Schedule a Viewing', langToggle: 'SR', menu: 'Menu' },
    hero: {
        badge: 'For Sale',
        location: 'Kopaonik, Serbia',
        lead: 'A hand-built log cabin on the edge of Kopaonik National Park.',
        scroll: 'View the House ↓',
    },
    intro: {
        eyebrow: 'About the House',
        statement: 'Every beam was cut for this house, not a similar one.',
        body: 'Casa Montana stands at the edge of the settlement, five minutes from the National Park — the last house before the road disappears into the forest.',
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
        altSuffix: 'a luxury log cabin on Kopaonik',
        categories: {
            exterior: 'Exterior',
            'living-room': 'Living Room',
            kitchen: 'Kitchen',
            terrace: 'Terrace',
            bedroom: 'Bedrooms',
            bathroom: 'Bathrooms',
            sauna: 'Sauna',
        },
    },
    story: {
        eyebrow: 'Craft',
        title: 'Wood and Fire',
        body: {
            pre: 'The living room opens onto a spacious terrace with a wood-burning stove — a place where the mountain is felt even indoors. The kitchen has everything you need to cook dinner for a full table. In the evening, the only sound outside is the stream running past the house; the bedrooms are dressed in linens from ',
            strong: 'local makers',
            post: ', and the bathrooms carry the same level of care.',
        },
    },
    trust: {
        ratingLabel: 'Average Rating on Airbnb',
        reviewsLabel: 'Reviews',
        yearsLabel: 'Years Hosting',
        quote: '"Casa Montana has an exceptional location. Hidden in the forest, far from \'urban Kopaonik\' — the neighbors are deer and squirrels, and a musical stream runs past the house."',
        citation: '— from a guest review, Booking.com',
    },
    book: {
        eyebrow: 'Before You Buy',
        title: 'Stay the Night Before You Decide',
        body: 'Casa Montana is actively rented and holds a 9.8/10 rating on Booking. Book a stay and see it for yourself before you decide.',
        bookingBtn: 'Book on Booking.com',
        airbnbBtn: 'Book on Airbnb',
        followUs: 'Follow us on Instagram',
    },
    location: {
        title: 'Five Minutes from the National Park',
        body: 'Private parking, an access road cleared regularly through winter, the ski resort and hiking trails within reach — and the house stays entirely yours, with no neighbors in view.',
        mapTitle: 'Casa Montana on the map',
        mapLink: 'Open in Google Maps ↗',
        mapLang: 'en',
    },
    closer: {
        eyebrow: 'Interested?',
        title: 'Houses like this rarely change hands.',
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
