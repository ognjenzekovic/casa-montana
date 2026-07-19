import { useLanguage } from '../lib/languageContext';
import { MOCK_BLOG_POSTS } from '../data/blogPosts.mock';

// This page renders src/data/blogPosts.mock.ts — see that file for the
// "this is mock data" notice. Nothing here needs to change once real
// posts exist; just replace the data source.
export function BlogPage() {
    const { t, locale } = useLanguage();
    const dateFormatter = new Intl.DateTimeFormat(locale === 'sr' ? 'sr-RS' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <main id="main" className="blog-page">
            <div className="blog-page__inner">
                <a className="blog-page__back" href="#">
                    {t.blog.back}
                </a>
                <span className="eyebrow">{t.blog.eyebrow}</span>
                <h1 className="blog-page__title">{t.blog.title}</h1>
                <div className="blog-page__list">
                    {MOCK_BLOG_POSTS.map((post) => (
                        <article className="blog-card" key={post.id}>
                            <span className="blog-card__date">{dateFormatter.format(new Date(post.date))}</span>
                            <h2 className="blog-card__title">{post.title[locale]}</h2>
                            <p className="blog-card__excerpt">{post.excerpt[locale]}</p>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    );
}
