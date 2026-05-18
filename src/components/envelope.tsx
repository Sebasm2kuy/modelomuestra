'use client'
import { useState, useCallback } from 'react'
import { useConfig } from '@/hooks/useConfig'

interface EnvelopeProps { onOpen: () => void }

export default function Envelope({ onOpen }: EnvelopeProps) {
  const cfg = useConfig()
  const [exiting, setExiting] = useState(false)

  const handleOpen = useCallback(() => {
    if (exiting) return
    setExiting(true)
    onOpen()
  }, [exiting, onOpen])

  return (
    <div
      onClick={handleOpen}
      className="fixed inset-0 z-[200] cursor-pointer bg-black flex items-center justify-center"
      style={{
        opacity: exiting ? 0 : 1,
        transition: 'opacity 0.6s ease',
        padding: 'clamp(12px, 3vw, 48px)',
      }}
    >
      <div
        className="relative"
        style={{ animation: 'fadeIn 1.5s ease forwards' }}
      >
        {/* Glow dorado pulsante detras de la imagen */}
        <div
          className="absolute rounded-2xl"
          style={{
            inset: '-20px',
            background: 'radial-gradient(ellipse, rgba(212,175,55,0.15) 0%, transparent 60%)',
            animation: 'breathe 3s ease-in-out infinite',
          }}
        />

        <picture>
          <source srcSet={cfg.invitacion.imagen} type="image/webp" />
          <img
            src={cfg.invitacion.imagenFallback}
            alt="Invitación XV Años - Valentina"
            draggable={false}
            className="object-contain rounded-lg relative z-10"
            style={{
              display: 'block',
              maxWidth: 'calc(100vw - 24px)',
              maxHeight: 'calc(100vh - 24px)',
              boxShadow: '0 0 40px rgba(212,175,55,0.15), 0 8px 32px rgba(0,0,0,0.4)',
              border: '1px solid rgba(212,175,55,0.1)',
            }}
          />
        </picture>

        {/* Sello de cera sobre la imagen */}
        <div
          className="absolute z-20"
          style={{
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            opacity: 0,
            animation: 'fadeIn 0.8s ease 1.8s both',
          }}
        >
          <img
            src="/modelomuestra/sello-sm.png"
            alt="Sello"
            draggable={false}
            className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
            style={{
              objectFit: 'contain',
              filter: 'drop-shadow(0 4px 16px rgba(139, 0, 0, 0.5)) drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
              animation: 'selloStamp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 1.8s both',
            }}
          />
        </div>
      </div>

      <p
        className="fixed bottom-6 sm:bottom-12 left-0 right-0 text-center text-goldLight/60 text-[10px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.5em] font-light"
        style={{ opacity: 0, animation: 'fadeIn 1s ease 2s both, slideHint 2.5s ease-in-out 3s infinite' }}
      >
        {cfg.invitacion.textoAbrir}
      </p>
    </div>
  )
}
