import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../lib/languageContext';

export function Trust() {
    const ref = useReveal<HTMLElement>();
    const { t } = useLanguage();

    const TRUST = [
        { value: '5.0', label: t.trust.ratingLabel },
        { value: '14', label: t.trust.reviewsLabel },
        { value: '13', label: t.trust.yearsLabel },
    ];

    return (
        <section ref={ref} className="trust reveal" aria-label={t.trust.ratingLabel}>
            <div className="trust__row">
                {TRUST.map((item) => (
                    <div className="trust__item" key={item.label}>
                        <span className="trust__value">{item.value}</span>
                        <span className="trust__label">{item.label}</span>
                    </div>
                ))}
            </div>
            <blockquote className="trust__quote">
                {t.trust.quote}
                <cite>{t.trust.citation}</cite>
            </blockquote>
        </section>
    );
}
