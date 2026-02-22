export function MapEmbed() {
  return (
    <div
      className="h-48 rounded-2xl overflow-hidden border border-gray-100 shadow-inner"
      data-testid="map-embed"
    >
      <iframe
        title="iT Systems office location"
        src="https://maps.google.com/maps?q=Paromlinska+34,+Sarajevo&t=&z=15&ie=UTF8&iwloc=&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
