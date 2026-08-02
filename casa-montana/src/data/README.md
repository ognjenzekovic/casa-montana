# Blog Data

This folder contains data for the Casa Montana blog.

## Adding New Blog Posts

To add a new blog post, edit `blogPosts.mock.ts` and add a new entry to the `MOCK_BLOG_POSTS` array.

### Required Fields

Each blog post must have:

```typescript
{
    id: string,              // Unique URL identifier (e.g., 'winter-guide-2026')
    title: {                 // Post title in both languages
        sr: string,          // Serbian title
        en: string           // English title
    },
    excerpt: {               // Short summary for the blog list page
        sr: string,          // Serbian excerpt (1-2 sentences)
        en: string           // English excerpt (1-2 sentences)
    },
    content: {               // Full blog post content
        sr: string,          // Serbian content (full text)
        en: string           // English content (full text)
    },
    date: string             // ISO date format: 'YYYY-MM-DD'
}
```

### Example

```typescript
{
    id: 'skiing-tips-2026',
    title: {
        sr: 'Najbolji saveti za skijanje na Kopaoniku',
        en: 'Best Skiing Tips for Kopaonik'
    },
    excerpt: {
        sr: 'Saznajte kako da maksimalno iskoristite svoje skijanje na Kopaoniku ove zime.',
        en: 'Learn how to make the most of your skiing on Kopaonik this winter.'
    },
    content: {
        sr: 'Kopaonik nudi odlične uslove za skijanje... [pun tekst ovde]',
        en: 'Kopaonik offers excellent skiing conditions... [full text here]'
    },
    date: '2026-12-15'
}
```

### Important Notes

- **URL Structure**: Each post is accessible at `/blog/{id}`
- **Pagination**: The blog list shows 4 posts per page automatically
- **Order**: Posts appear in the order they're in the array (put newest first)
- **ID Format**: Use lowercase letters, numbers, and hyphens only (URL-safe)
- **Date Format**: Must be valid ISO date (YYYY-MM-DD)
- **Content**: Can be plain text or you can add formatting later

### For AI Agents

When asked to add blog posts:
1. Read `blogPosts.mock.ts`
2. Add your new post object to the `MOCK_BLOG_POSTS` array
3. Ensure all fields (sr and en) are filled
4. Use a unique ID that describes the post topic
5. Set a realistic date

No other files need to be modified - the blog system will automatically:
- Display the new post in the blog list
- Create a page at `/blog/{your-id}`
- Handle pagination if there are more than 4 posts
