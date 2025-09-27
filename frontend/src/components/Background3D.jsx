import React, { useEffect, useRef } from 'react'

// Animated blurred gradient blobs with subtle 3D parallax
export default function Background3D() {
  const bgRef = useRef(null)

  useEffect(() => {
    const el = bgRef.current
    if (!el) return

    let raf = 0
    const state = { rx: 0, ry: 0, tx: 0, ty: 0 }

    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      state.tx = y * 8 // rotateX
      state.ty = -x * 8 // rotateY
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const tick = () => {
      state.rx += (state.tx - state.rx) * 0.08
      state.ry += (state.ty - state.ry) * 0.08
      el.style.transform = `perspective(1200px) rotateX(${state.rx}deg) rotateY(${state.ry}deg)`
      raf = 0
    }

    window.addEventListener('mousemove', onMove)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div ref={bgRef} className="relative w-full h-full will-change-transform">
        {/* Blob A */}
        <div className="absolute -top-16 -left-24 w-[28rem] h-[28rem] rounded-full blur-3xl opacity-25 animate-blob-slow bg-gradient-to-tr from-cyan-400 via-fuchsia-400 to-amber-300" />
        {/* Blob B */}
        <div className="absolute top-1/3 -right-24 w-[26rem] h-[26rem] rounded-full blur-3xl opacity-20 animate-blob-med bg-gradient-to-br from-fuchsia-400 via-amber-300 to-cyan-400" />
        {/* Blob C */}
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] rounded-full blur-[60px] opacity-15 animate-blob-fast bg-gradient-to-tl from-amber-300 via-cyan-400 to-fuchsia-400" />
      </div>
      <style>{`
        @keyframes blob-slow {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(20px,-30px,0) scale(1.05); }
        }
        @keyframes blob-med {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(-25px,15px,0) scale(0.98); }
        }
        @keyframes blob-fast {
          0%, 100% { transform: translate3d(0,0,0) scale(1); }
          50% { transform: translate3d(15px,25px,0) scale(1.03); }
        }
        .animate-blob-slow { animation: blob-slow 18s ease-in-out infinite; }
        .animate-blob-med { animation: blob-med 14s ease-in-out infinite; }
        .animate-blob-fast { animation: blob-fast 10s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
