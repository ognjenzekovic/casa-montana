// Thin wrapper around gtag so components don't need to know whether GA
// loaded successfully (ad blockers, offline dev, etc.) — every call is a
// no-op if `window.gtag` isn't present, instead of throwing.
declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export function trackOutboundClick(destination: 'booking' | 'airbnb' | 'instagram' | 'contact') {
    window.gtag?.('event', 'outbound_click', {
        event_category: 'engagement',
        event_label: destination,
        destination,
    });
}
