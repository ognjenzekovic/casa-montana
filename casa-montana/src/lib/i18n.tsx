import { useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import { translations } from './translations';
import type { Locale } from './translations';
import { LanguageContext } from './languageContext';

const STORAGE_KEY = 'casamontana-locale';

function readStoredLocale(): Locale {
    if (typeof window === 'undefined') return 'sr';
    const stored = window.localStorage.getItem(STORAGE_KEY);
    return stored === 'en' ? 'en' : 'sr';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [locale, setLocaleState] = useState<Locale>(readStoredLocale);

    const setLocale = (next: Locale) => {
        setLocaleState(next);
        window.localStorage.setItem(STORAGE_KEY, next);
    };

    useEffect(() => {
        document.documentElement.lang = translations[locale].htmlLang;
        document.title = translations[locale].pageTitle;
        const description = document.querySelector('meta[name="description"]');
        if (description) description.setAttribute('content', translations[locale].metaDescription);
    }, [locale]);

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
            {children}
        </LanguageContext.Provider>
    );
}
