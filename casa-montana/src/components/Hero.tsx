import { useLanguage } from '../lib/languageContext';

export function Hero() {
    const { t } = useLanguage();

    return (
        <header className="hero">
            <div className="hero__media">
                <img
                    src={`${import.meta.env.BASE_URL}assets/hero.jpeg`}
                    alt="Casa Montana, brvnara okružena šumom na Kopaoniku, snimljeno dronom u sumrak."
                />
            </div>
            <div className="hero__scrim" />
            <div className="hero__content">
                <div className="hero__tags">
                    <a className="hero__badge" href="#contact">
                        {t.hero.badge}
                    </a>
                    <p className="eyebrow hero__eyebrow">{t.hero.location}</p>
                </div>
                <h1 className="hero__title">
                    Casa <em>Montana</em>
                </h1>
                <div className="hero__row">
                    <p className="hero__lead">{t.hero.lead}</p>
                    <span className="hero__scroll">{t.hero.scroll}</span>
                </div>
            </div>
        </header>
    );
}
