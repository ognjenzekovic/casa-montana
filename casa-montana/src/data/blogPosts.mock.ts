// ============================================================================
// BLOG POSTS DATA
// ============================================================================
// This file contains all blog posts for the Casa Montana website.
//
// HOW TO ADD A NEW BLOG POST (for AI agents or developers):
// 1. Add a new object to the MOCK_BLOG_POSTS array below
// 2. Required fields:
//    - id: unique URL-friendly identifier (e.g., 'my-post-title')
//    - title: { sr: 'Serbian title', en: 'English title' }
//    - excerpt: { sr: 'Short Serbian summary', en: 'Short English summary' }
//    - content: { sr: 'Full Serbian content', en: 'Full English content' }
//    - date: ISO date string (YYYY-MM-DD)
// 3. Posts are displayed in array order (newest first recommended)
// 4. Pagination automatically shows 4 posts per page
// 5. Each post will be accessible at /blog/{id}
//
// EXAMPLE:
// {
//     id: 'my-new-post',
//     title: { sr: 'Moj novi post', en: 'My New Post' },
//     excerpt: { sr: 'Kratak opis...', en: 'Short description...' },
//     content: { sr: 'Pun tekst na srpskom...', en: 'Full text in English...' },
//     date: '2026-04-15',
// }
//
// NOTE: Current posts below are MOCK data with [MOCK] prefix.
// Replace them with real content when ready.
// ============================================================================

export type BlogPost = {
    id: string;
    title: { sr: string; en: string };
    excerpt: { sr: string; en: string };
    content: { sr: string; en: string };
    date: string; // ISO date (YYYY-MM-DD)
};

export const MOCK_BLOG_POSTS: BlogPost[] = [
    {
        id: 'kopaonik-investment-outlook',
        title: {
            sr: '[MOCK] Zašto je Kopaonik sve traženija investicija',
            en: '[MOCK] Why Kopaonik Is a Growing Investment Destination',
        },
        excerpt: {
            sr: 'Kratak pregled šta pokreće tražnju za planinskim nekretninama na Kopaoniku i šta to znači za vlasnike.',
            en: 'A short look at what is driving demand for mountain property in Kopaonik, and what it means for owners.',
        },
        content: {
            sr: '[MOCK SADRŽAJ] Ovo je privremeni sadržaj blog posta o investicijama na Kopaoniku. Ovde će biti detaljniji tekst o trendovima, tržištu i prilikama.',
            en: '[MOCK CONTENT] This is temporary blog post content about investments in Kopaonik. Here will be detailed text about trends, market and opportunities.',
        },
        date: '2026-01-15',
    },
    {
        id: 'national-park-guide',
        title: {
            sr: '[MOCK] Vodič kroz Nacionalni park Kopaonik',
            en: '[MOCK] A Guide to Kopaonik National Park',
        },
        excerpt: {
            sr: 'Staze, vidikovci i divlji svet koji čeka odmah iza dvorišta — vodič za goste i vlasnike.',
            en: 'Trails, viewpoints, and wildlife right past the backyard — a guide for guests and owners alike.',
        },
        content: {
            sr: '[MOCK SADRŽAJ] Privremeni sadržaj vodiča kroz nacionalni park. Ovde će biti informacije o stazama, viewpointima i prirodi.',
            en: '[MOCK CONTENT] Temporary guide content about the national park. Here will be information about trails, viewpoints and nature.',
        },
        date: '2026-02-03',
    },
    {
        id: 'winter-in-a-log-cabin',
        title: {
            sr: '[MOCK] Kako izgleda zima u brvnari na planini',
            en: '[MOCK] What Winter Looks Like in a Mountain Log Cabin',
        },
        excerpt: {
            sr: 'Od prvog snega do proleća — šta znači održavati i uživati u brvnari tokom planinske zime.',
            en: 'From first snowfall to spring thaw — what it actually takes to maintain and enjoy a cabin through a mountain winter.',
        },
        content: {
            sr: '[MOCK SADRŽAJ] Privremeni sadržaj o zimovanju u brvnari. Ovde će biti priča o održavanju, atmosferi i iskustvu.',
            en: '[MOCK CONTENT] Temporary content about winter in a cabin. Here will be a story about maintenance, atmosphere and experience.',
        },
        date: '2026-02-20',
    },
    {
        id: 'summer-activities-kopaonik',
        title: {
            sr: '[MOCK] Letnje aktivnosti na Kopaoniku',
            en: '[MOCK] Summer Activities on Kopaonik',
        },
        excerpt: {
            sr: 'Planinarenje, biciklizam i istraživanje — šta raditi na Kopaoniku kada sneg nestane.',
            en: 'Hiking, cycling and exploring — what to do on Kopaonik when the snow melts.',
        },
        content: {
            sr: '[MOCK SADRŽAJ] Privremeni sadržaj o letnjim aktivnostima. Ovde će biti informacije o planinarenju, biciklizmu i drugim aktivnostima.',
            en: '[MOCK CONTENT] Temporary content about summer activities. Here will be information about hiking, cycling and other activities.',
        },
        date: '2026-03-10',
    },
    {
        id: 'local-cuisine-guide',
        title: {
            sr: '[MOCK] Vodič kroz lokalnu kuhinju',
            en: '[MOCK] Guide to Local Cuisine',
        },
        excerpt: {
            sr: 'Tradicionalna jela, domaći proizvodi i najbolja mesta za jelo u okolini Kopaonika.',
            en: 'Traditional dishes, local products and the best places to eat around Kopaonik.',
        },
        content: {
            sr: '[MOCK SADRŽAJ] Privremeni sadržaj o lokalnoj kuhinji. Ovde će biti recenzije restorana, tradiconalna jela i preporuke.',
            en: '[MOCK CONTENT] Temporary content about local cuisine. Here will be restaurant reviews, traditional dishes and recommendations.',
        },
        date: '2026-03-25',
    },
];
