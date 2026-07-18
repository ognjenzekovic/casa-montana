export function Hero() {
    return (
        <header className="hero">
            <div className="hero__media">
                <img
                    src="/assets/hero.jpeg"
                    alt="Casa Montana, brvnara okružena šumom na Kopaoniku, snimljeno dronom u sumrak."
                />
            </div>
            <div className="hero__scrim" />
            <div className="hero__content">
                <p className="eyebrow hero__eyebrow">Kopaonik, Srbija · Na prodaju</p>
                <h1 className="hero__title">
                    Casa <em>Montana</em>
                </h1>
                <div className="hero__row">
                    <p className="hero__lead">
                        Ručno građena brvnara na ivici Nacionalnog parka Kopaonik. Jedna
                        kuća, jedan posed, bez kompromisa.
                    </p>
                    <span className="hero__scroll">Pogledajte nekretninu ↓</span>
                </div>
            </div>
        </header>
    );
}