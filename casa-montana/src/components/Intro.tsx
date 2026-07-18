import { useReveal } from '../hooks/useReveal';

export function Intro() {
    const ref = useReveal<HTMLElement>();

    return (
        <section ref={ref} className="intro reveal">
            <span className="eyebrow intro__eyebrow">O kući</span>
            <p className="intro__statement">
                Kuća građena za jedan život, ne za jedan izdatak.
            </p>
            <p className="intro__body">
                Casa Montana stoji na kraju naselja, okružena jelovom šumom, deset
                minuta od Nacionalnog parka Kopaonik. Svaka greda je birana i sečena
                za ovu kuću — ovo nije katalog, ovo je jedna, konkretna kuća.
            </p>
        </section>
    );
}
