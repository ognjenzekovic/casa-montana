import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../lib/languageContext';

export function Intro() {
    const ref = useReveal<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section ref={ref} className="intro reveal">
            <span className="eyebrow intro__eyebrow">{t.intro.eyebrow}</span>
            <p className="intro__statement">{t.intro.statement}</p>
            <p className="intro__body">{t.intro.body}</p>
        </section>
    );
}
