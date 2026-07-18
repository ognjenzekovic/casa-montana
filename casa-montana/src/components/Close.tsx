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
        </section>
    );
}
