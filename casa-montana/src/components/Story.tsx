import { useReveal } from '../hooks/useReveal';
import { useLanguage } from '../lib/languageContext';

export function Story() {
    const ref = useReveal<HTMLElement>();
    const { t } = useLanguage();

    return (
        <section ref={ref} className="story reveal">
            <div className="story__media">
                <img
                    src={`${import.meta.env.BASE_URL}assets/hero.jpeg`}
                    alt="Detalj brvnare — drvena fasada i krov od tamnog lima, okružen šumom."
                />
            </div>
            <div className="story__text">
                <p className="eyebrow story__eyebrow">{t.story.eyebrow}</p>
                <h2 className="story__title">{t.story.title}</h2>
                <p className="story__body">
                    {t.story.body.pre}
                    <strong>{t.story.body.strong}</strong>
                    {t.story.body.post}
                </p>
            </div>
        </section>
    );
}
