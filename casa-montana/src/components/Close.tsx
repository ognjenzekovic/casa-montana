import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../lib/languageContext';
import { trackOutboundClick } from '../lib/analytics';

export function Closer() {
    const ref = useReveal<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section id="contact" ref={ref} className="closer reveal">
            <span className="eyebrow closer__eyebrow">{t.closer.eyebrow}</span>
            <h2 className="closer__title">{t.closer.title}</h2>
            <a
                className="closer__cta"
                href="mailto:casamontanakop@gmail.com"
                onClick={() => trackOutboundClick('contact')}
            >
                {t.closer.cta}
            </a>
        </section>
    );
}
