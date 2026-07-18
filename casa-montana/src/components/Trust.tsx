import { useReveal } from '../hooks/useReveal';

type TrustItem = { value: string; label: string };

const TRUST: TrustItem[] = [
    { value: '5.0', label: 'Prosečna ocena gostiju' },
    { value: '14', label: 'Utisaka' },
    { value: '13', label: 'Godina ugošćavanja' },
];

export function Trust() {
    const ref = useReveal<HTMLElement>();

    return (
        <section ref={ref} className="trust reveal" aria-label="Poverenje gostiju">
            <div className="trust__row">
                {TRUST.map((t) => (
                    <div className="trust__item" key={t.label}>
                        <span className="trust__value">{t.value}</span>
                        <span className="trust__label">{t.label}</span>
                    </div>
                ))}
            </div>
            <blockquote className="trust__quote">
                „Skrivena u šumi, daleko od 'urbanog Kopaonika' — komšije su jeleni i
                veverice, a pored kuće protiče muzikalni potok.”
                <cite>— iz utiska gosta, Booking.com</cite>
            </blockquote>
        </section>
    );
}
