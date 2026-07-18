import { useReveal } from '../hooks/useReveal';

export function Location() {
    const ref = useReveal<HTMLElement>();

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
            <h2 className="location__title">Deset minuta od Nacionalnog parka</h2>
            <p className="location__body">
                Privatni parking, pristupni put koji se redovno čisti tokom zime, i
                skijalište, planinarske staze i mir prirode na dohvat ruke — bez
                kompromisa oko privatnosti.
            </p>
            <div className="location__map">
                <iframe
                    src="https://www.google.com/maps?q=43.2801,20.8123&z=14&output=embed"
                    title="Casa Montana na mapi"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
            <a
                className="location__map-link"
                href="https://www.google.com/maps/search/?api=1&query=43.2801,20.8123"
                target="_blank"
                rel="noopener noreferrer"
            >
                Otvorite u Google mapama ↗
            </a>
        </section>
    );
}
