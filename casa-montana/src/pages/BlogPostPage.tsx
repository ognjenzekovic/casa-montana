import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../lib/languageContext';
import { MOCK_BLOG_POSTS } from '../data/blogPosts.mock';

export function BlogPostPage() {
    const { id } = useParams<{ id: string }>();
    const { t, locale } = useLanguage();

    const post = MOCK_BLOG_POSTS.find(p => p.id === id);

    if (!post) {
        return (
            <main id="main" className="blog-post">
                <div className="blog-post__inner">
                    <Link className="blog-post__back" to="/blog">
                        {t.blog.back}
                    </Link>
                    <h1>Post not found</h1>
                </div>
            </main>
        );
    }

    const dateFormatter = new Intl.DateTimeFormat(locale === 'sr' ? 'sr-RS' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <main id="main" className="blog-post">
            <div className="blog-post__inner">
                <Link className="blog-post__back" to="/blog">
                    {t.blog.back}
                </Link>
                <article>
                    <span className="blog-post__date">{dateFormatter.format(new Date(post.date))}</span>
                    <h1 className="blog-post__title">{post.title[locale]}</h1>
                    <div className="blog-post__content">
                        {post.content[locale]}
                    </div>
                </article>
            </div>
        </main>
    );
}
