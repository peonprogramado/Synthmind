"use client";

export default function ButtonScrollToBlackSection() {
  return (
    <button
      onClick={() => {
        const el = document.getElementById('realidad-virtual');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }}
      style={{
        position: 'fixed',
        top: 20,
        right: 20,
        zIndex: 1000,
        padding: '12px 24px',
        background: '#222',
        color: '#fff',
        borderRadius: '8px',
        cursor: 'pointer'
      }}
    >
      Ver sección negra
    </button>
  );
}
