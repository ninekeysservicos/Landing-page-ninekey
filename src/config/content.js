/**
 * NineKeys Landing Page - Content Configuration
 *
 * Centralized content management for all text displayed on the site.
 * Copy sourced from product-details/UX_COPY.md
 */
// Hero Section Content
export const CONTENT = {
    hero: {
        h1: "NineKeys",
        h2: "Onde imóveis viram resultado.",
        subheadline: "Gestão profissional de imóveis, da estratégia à operação diária.",
        ctaPrimary: "Falar com a NineKeys",
        ctaSecondary: "Falar com a NineKeys"
    }
};
// External Links and Integrations
export const LINKS = {
    whatsappNumber: "5511921472102", // Format: country code + area code + number (no spaces)
    whatsappMessage: "Olá! Gostaria de avaliar meu imóvel com a NineKeys.",
    whatsappBaseUrl: "https://wa.me/"
};
/**
 * Build a WhatsApp URL with pre-filled message
 * @param message - Message to pre-fill (will be URL-encoded)
 * @returns Complete WhatsApp URL
 */
export function buildWhatsappUrl(message = LINKS.whatsappMessage) {
    const encoded = encodeURIComponent(message);
    return `${LINKS.whatsappBaseUrl}${LINKS.whatsappNumber}?text=${encoded}`;
}
