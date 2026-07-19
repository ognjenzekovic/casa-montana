import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../lib/languageContext';

export function Location() {
    const ref = useReveal<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section ref={ref} className="location reveal">
            <svg className="location__icon" viewBox="0 0 64 40" aria-hidden="true">
                <path
                    d="M2 36 L18 12 L26 24 L34 6 L48 30 L54 20 L62 36"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                />
            </svg>
            <h2 className="location__title">{t.location.title}</h2>
            <p className="location__body">{t.location.body}</p>
            <div className="location__map">
                <iframe
                    src={`https://www.google.com/maps?q=43.2801,20.8123&z=14&hl=${t.location.mapLang}&output=embed`}
                    title={t.location.mapTitle}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
            <a
                className="location__map-link"
                href={`https://www.google.com/maps/search/?api=1&query=43.2801,20.8123&hl=${t.location.mapLang}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {t.location.mapLink}
            </a>
        </section>
    );
}
