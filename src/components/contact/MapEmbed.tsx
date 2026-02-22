export function MapEmbed() {
  return (
    <div
      className="h-48 rounded-2xl overflow-hidden border border-gray-100 shadow-inner"
      data-testid="map-embed"
    >
      <iframe
        title="iT Systems office location"
        src="https://www.google.com/maps?q=Paromlinska+34,+71000+Sarajevo&z=15&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
