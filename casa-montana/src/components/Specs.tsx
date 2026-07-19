import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../lib/languageContext';

export function Specs() {
    const ref = useReveal<HTMLElement>();
    const { t } = useLanguage();

    const SPECS = [
        { value: '2', label: t.specs.bedrooms },
        { value: '2', label: t.specs.bathrooms },
        { value: '200', unit: 'm²', label: t.specs.living },
        { value: '700', unit: 'm²', label: t.specs.plot },
    ];

    return (
        <section ref={ref} className="specs reveal" aria-label={t.specs.ariaLabel}>
            <div className="specs__grid">
                {SPECS.map((s) => (
                    <div className="specs__item" key={s.label}>
                        <span className="specs__value">
                            {s.value}
                            {s.unit && <sup>{s.unit}</sup>}
                        </span>
                        <span className="specs__label">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
