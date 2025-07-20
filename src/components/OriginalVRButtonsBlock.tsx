// Bloque de botones originales para Realidad Virtual
export default function OriginalVRButtonsBlock() {
  return (
    <div className="flex gap-6 mt-[70px] pl-[50px] relative z-10">
      {[
        'Entorno de realidad virtual',
        'Entorno de realidad aumentada',
        'Renderizado 3D interactivo',
        'Simulación inmersiva',
      ].map((txt, idx) => (
        <button
          key={txt}
          className="group relative overflow-hidden rounded-full px-9 py-4 min-w-[260px] font-work-sans text-lg font-semibold text-white transition-transform duration-200"
          style={{
            background: 'rgba(24, 24, 32, 0.85)',
            boxShadow: '0 2px 12px 0 rgba(140,82,225,0.15)',
            border: '1.5px solid #8C52E1',
          }}
        >
          {/* Overlay gradiente animado hover */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 transition-all duration-300 group-hover:opacity-100 opacity-0"
            style={{
              background: 'linear-gradient(90deg, #8C52E1 0%, #BD4DCF 50%, #8C52E1 100%)',
              filter: 'blur(8px)',
            }}
          />
          {/* Overlay gradiente base */}
          <div
            aria-hidden
            className="absolute inset-0 z-0 opacity-30"
            style={{
              background: 'linear-gradient(90deg, #8C52E1 0%, #BD4DCF 50%, #8C52E1 100%)',
            }}
          />
          <span className="relative z-10">{txt}</span>
        </button>
      ))}
    </div>
  );
}
