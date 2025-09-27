import React from 'react'

export default function Loading3D({ message = 'Loading...' }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/80 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-6">
        {/* 3D Cube */}
        <div className="cube w-24 h-24 md:w-28 md:h-28">
          <div className="face front" />
          <div className="face back" />
          <div className="face right" />
          <div className="face left" />
          <div className="face top" />
          <div className="face bottom" />
        </div>
        <p className="text-slate-200 text-sm md:text-base tracking-wide">
          {message}
        </p>
      </div>

      {/* Component-scoped styles */}
      <style>{`
        .cube {
          position: relative;
          transform-style: preserve-3d;
          animation: cube-rotate 2.8s linear infinite;
        }
        .cube .face {
          position: absolute;
          inset: 0;
          border-radius: 0.5rem;
          background: linear-gradient(135deg, rgba(34,211,238,0.9), rgba(232,121,249,0.9), rgba(251,191,36,0.9));
          box-shadow: 0 10px 25px rgba(0,0,0,0.35), inset 0 0 20px rgba(15,23,42,0.6);
          border: 1px solid rgba(148,163,184,0.25);
        }
        .cube .front  { transform: translateZ(3.5rem); }
        .cube .back   { transform: rotateY(180deg) translateZ(3.5rem); }
        .cube .right  { transform: rotateY(90deg) translateZ(3.5rem); }
        .cube .left   { transform: rotateY(-90deg) translateZ(3.5rem); }
        .cube .top    { transform: rotateX(90deg) translateZ(3.5rem); }
        .cube .bottom { transform: rotateX(-90deg) translateZ(3.5rem); }

        @media (min-width: 768px) {
          .cube .front,
          .cube .back,
          .cube .right,
          .cube .left,
          .cube .top,
          .cube .bottom { transform: translateZ(4rem); }
          .cube .back   { transform: rotateY(180deg) translateZ(4rem); }
          .cube .right  { transform: rotateY(90deg) translateZ(4rem); }
          .cube .left   { transform: rotateY(-90deg) translateZ(4rem); }
          .cube .top    { transform: rotateX(90deg) translateZ(4rem); }
          .cube .bottom { transform: rotateX(-90deg) translateZ(4rem); }
        }

        @keyframes cube-rotate {
          0%   { transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg); }
          50%  { transform: rotateX(180deg) rotateY(0deg) rotateZ(180deg); }
          100% { transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg); }
        }
      `}</style>
    </div>
  )
}
