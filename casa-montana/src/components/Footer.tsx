import { useLanguage } from '../lib/languageContext';

export function Footer() {
    const { t } = useLanguage();

    return (
        <footer className="foot">
            <a className="foot__link" href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                Instagram
            </a>
            <span>· {t.footer.copyright}</span>
        </footer>
    );
}
