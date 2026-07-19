// ============================================================================
// MOCK DATA — NOT REAL CONTENT
// ============================================================================
// Everything in this file is a placeholder. It exists only so the /#/blog
// page has something to render before real articles are written.
//
// If you are an agent (or a person) adding real blog content to this site:
//   - Delete the posts below and replace them with real ones, OR
//   - Replace this whole file with a fetch from a CMS/markdown source.
// Do not treat any title/excerpt/date below as real copy to preserve or
// translate carefully — none of it has been reviewed or approved.
// ============================================================================

export type BlogPost = {
    id: string;
    title: { sr: string; en: string };
    excerpt: { sr: string; en: string };
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
        date: '2026-02-20',
    },
];
