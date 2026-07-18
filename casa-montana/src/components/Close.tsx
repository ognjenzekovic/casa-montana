import { useReveal } from '../hooks/useReveal';

export function Closer() {
    const ref = useReveal<HTMLElement>();

    return (
        <section id="contact" ref={ref} className="closer reveal">
            <span className="eyebrow closer__eyebrow">Zainteresovani?</span>
            <h2 className="closer__title">
                Retko se ovakav posed pojavi na tržištu.
            </h2>
            <a className="closer__cta" href="mailto:info@casamontana.rs">
                Zatražite informacije
            </a>

            <div className="closer__links">
                <span className="closer__links-label">Ili pogledajte smeštaj i utiske gostiju</span>
                <div className="closer__links-row">
                    <a
                        href="https://www.booking.com/hotel/rs/casa-montana.sr.html"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Booking.com
                    </a>
                    <a
                        href="https://www.airbnb.com/rooms/830956234236950016"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Airbnb
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        Instagram
                    </a>
                </div>
            </div>
        </section>
    );
}