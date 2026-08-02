import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../lib/languageContext';
import { MOCK_BLOG_POSTS } from '../data/blogPosts.mock';

const POSTS_PER_PAGE = 4;

// This page renders src/data/blogPosts.mock.ts — see that file for the
// "this is mock data" notice. Nothing here needs to change once real
// posts exist; just replace the data source.
export function BlogPage() {
    const { t, locale } = useLanguage();
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = parseInt(searchParams.get('page') || '1', 10);

    const dateFormatter = new Intl.DateTimeFormat(locale === 'sr' ? 'sr-RS' : 'en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    const totalPages = Math.ceil(MOCK_BLOG_POSTS.length / POSTS_PER_PAGE);
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    const endIndex = startIndex + POSTS_PER_PAGE;
    const currentPosts = MOCK_BLOG_POSTS.slice(startIndex, endIndex);

    const goToPage = (page: number) => {
        setSearchParams({ page: page.toString() });
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <main id="main" className="blog-page">
            <div className="blog-page__inner">
                <Link className="blog-page__back" to="/">
                    {t.blog.back}
                </Link>
                <span className="eyebrow">{t.blog.eyebrow}</span>
                <h1 className="blog-page__title">{t.blog.title}</h1>
                <div className="blog-page__list">
                    {currentPosts.map((post) => (
                        <Link to={`/blog/${post.id}`} className="blog-card" key={post.id}>
                            <span className="blog-card__date">{dateFormatter.format(new Date(post.date))}</span>
                            <h2 className="blog-card__title">{post.title[locale]}</h2>
                            <p className="blog-card__excerpt">{post.excerpt[locale]}</p>
                        </Link>
                    ))}
                </div>
                {totalPages > 1 && (
                    <div className="blog-page__pagination">
                        <button
                            className="blog-page__pagination-btn"
                            onClick={() => goToPage(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            ←
                        </button>
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                            <button
                                key={page}
                                className={`blog-page__pagination-btn ${page === currentPage ? 'blog-page__pagination-btn--active' : ''}`}
                                onClick={() => goToPage(page)}
                            >
                                {page}
                            </button>
                        ))}
                        <button
                            className="blog-page__pagination-btn"
                            onClick={() => goToPage(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            →
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}
