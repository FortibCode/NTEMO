// "Disponible sur Google Play" button. Kept as plain text + a generic play
// glyph rather than Google's artwork.
export default function GooglePlayButton({ href, appName }: { href: string; appName: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Télécharger ${appName} sur Google Play`}
      className="inline-flex items-center gap-3 bg-black text-white pl-4 pr-6 py-2.5 hover:bg-[#0a1d6e] transition-colors"
    >
      {/* Four-colour Play triangle: blue left, green top, yellow right, red bottom */}
      <svg viewBox="0 0 24 24" className="w-7 h-7" aria-hidden="true">
        <path d="M3.2 1.6 12.6 12 3.2 22.4c-.3-.2-.5-.6-.5-1V2.6c0-.4.2-.8.5-1Z" fill="#4285F4" />
        <path d="M3.2 1.6c.4-.3.9-.3 1.4 0l11.6 6.6-3.6 3.8Z" fill="#34A853" />
        <path d="m16.2 8.2 4.1 2.3c1.1.6 1.1 2.4 0 3l-4.1 2.3L12.6 12Z" fill="#FBBC04" />
        <path d="M3.2 22.4 12.6 12l3.6 3.8-11.6 6.6c-.5.3-1 .3-1.4 0Z" fill="#EA4335" />
      </svg>
      <span className="flex flex-col leading-none text-left">
        <span className="text-[10px] uppercase tracking-wide text-white/80">Disponible sur</span>
        <span className="text-lg font-semibold">Google Play</span>
      </span>
    </a>
  );
}
