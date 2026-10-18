/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** A kapcsolati üzeneteket fogadó API címe (az AdReuse backendje), pl. https://api.adreuse.uk. Üresen: mailto. */
  readonly VITE_CONTACT_API_URL?: string;
  /** Cloudflare Turnstile nyilvános site key. Üresen a widget nem jelenik meg. */
  readonly VITE_TURNSTILE_SITE_KEY?: string;
}
