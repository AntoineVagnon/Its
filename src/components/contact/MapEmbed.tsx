import { Icon } from '@iconify/react';

export function MapEmbed() {
  return (
    <div
      className="h-48 rounded-2xl bg-gray-200 border border-gray-100 overflow-hidden relative shadow-inner flex items-center justify-center"
      data-testid="map-placeholder"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'repeating-linear-gradient(45deg, #1A2332 0, #1A2332 1px, transparent 0, transparent 50%)',
          backgroundSize: '10px 10px',
        }}
      />
      <div className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md text-its-gold">
        <Icon icon="solar:map-point-linear" width={24} />
        <div className="absolute w-4 h-4 bg-its-gold rounded-full animate-ping opacity-20" />
      </div>
    </div>
  );
}
