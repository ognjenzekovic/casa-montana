import { useReveal } from '../hooks/useReveal';

export function Story() {
    const ref = useReveal<HTMLElement>();

    return (
        <section ref={ref} className="story reveal">
            <div className="story__media">
                <img
                    src={`${import.meta.env.BASE_URL}assets/hero.jpeg`}
                    alt="Detalj brvnare — drvena fasada i krov od tamnog lima, okružen šumom."
                />
            </div>
            <div className="story__text">
                <p className="eyebrow story__eyebrow">Zanat</p>
                <h2 className="story__title">Građena rukama, ne od kataloga</h2>
                <p className="story__body">
                    Dnevni boravak se otvara ka prostranoj terasi sa šporetom na drva —
                    mesto gde se planina oseti i kada ste unutra. Kuhinja je potpuno
                    opremljena, spavaće sobe imaju posteljinu{' '}
                    <strong>lokalnih proizvođača</strong>, a kupatila prate isti nivo
                    pažnje.
                </p>
            </div>
        </section>
    );
}