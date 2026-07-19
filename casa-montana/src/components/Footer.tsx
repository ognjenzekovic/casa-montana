import { useLanguage } from '../lib/languageContext';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="foot">
            <a
                className="foot__ig"
                href="https://instagram.com/casamontanakop"
                target="_blank"
                rel="noopener noreferrer"
            >
                <svg className="foot__ig-icon" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
                </svg>
                @casamontanakop
            </a>
            <span className="foot__copy">· {t.footer.copyright}</span>
        </footer>
    );
}
