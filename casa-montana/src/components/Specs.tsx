import { useReveal } from '../hooks/useReveal';

type SpecItem = {
    value: string;
    unit?: string;
    label: string;
};

// TODO: replace [XXX] placeholders with real figures once confirmed
const SPECS: SpecItem[] = [
    { value: '2', label: 'Spavaće sobe' },
    { value: '2', label: 'Kupatila' },
    { value: '[XXX]', unit: 'm²', label: 'Stambeni prostor' },
    { value: '[XXX]', unit: 'm²', label: 'Placa' },
];

export function Specs() {
    const ref = useReveal<HTMLElement>();

    return (
        <section ref={ref} className="specs reveal" aria-label="Osnovni podaci o nekretnini">
            <div className="specs__grid">
                {SPECS.map((s) => (
                    <div className="specs__item" key={s.label}>
                        <span className="specs__value">
                            {s.value}
                            {s.unit && <sup>{s.unit}</sup>}
                        </span>
                        <span className="specs__label">{s.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
