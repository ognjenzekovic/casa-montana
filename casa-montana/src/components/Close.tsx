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
            <div className="closer__contact">
                <a
                    className="closer__link"
                    href="tel:+38163509724"
                    onClick={() => trackOutboundClick('phone')}
                >
                    +381 63 509 724
                </a>
                <a
                    className="closer__link"
                    href="mailto:casamontanakop@gmail.com"
                    onClick={() => trackOutboundClick('email')}
                >
                    casamontanakop@gmail.com
                </a>
            </div>
        </section>
    );
}
