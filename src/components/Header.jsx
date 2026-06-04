import React, { useState, useEffect } from 'react'
import { Globe, Zap, RefreshCw } from 'lucide-react'

export default function Header({ lastUpdated, onRefresh }) {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <header style={{
      borderBottom: '1px solid var(--border)',
      padding: '0 2rem',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'var(--bg-1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, #1a3a5c, #0d2235)',
          border: '1px solid var(--border-bright)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Globe size={18} color="var(--accent-blue)" />
        </div>
        <div>
          <h1 style={{ fontSize: 18, fontWeight: 700, color: 'var(--text-0)', letterSpacing: '-0.02em' }}>
            World Pulse
          </h1>
          <p style={{ fontSize: 11, color: 'var(--text-1)', fontFamily: 'var(--font-mono)' }}>
            GLOBAL TRENDS DASHBOARD
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            width: 7, height: 7, borderRadius: '50%',
            background: 'var(--accent-teal)',
            boxShadow: '0 0 8px var(--accent-teal)',
            animation: 'livepulse 2s infinite',
          }} />
          <span style={{ fontSize: 12, color: 'var(--accent-teal)', fontFamily: 'var(--font-mono)' }}>LIVE</span>
        </div>

        <span style={{ fontSize: 12, color: 'var(--text-1)', fontFamily: 'var(--font-mono)' }}>
          {time.toLocaleTimeString()}
        </span>

        <button onClick={onRefresh} style={{
          background: 'var(--bg-2)',
          border: '1px solid var(--border)',
          borderRadius: 8,
          padding: '6px 12px',
          color: 'var(--text-1)',
          fontSize: 12,
          display: 'flex', alignItems: 'center', gap: 6,
          transition: 'all 0.2s',
        }}
          onMouseEnter={e => { e.target.style.color = 'var(--text-0)'; e.target.style.borderColor = 'var(--border-bright)' }}
          onMouseLeave={e => { e.target.style.color = 'var(--text-1)'; e.target.style.borderColor = 'var(--border)' }}
        >
          <RefreshCw size={12} />
          Refresh
        </button>
      </div>

      <style>{`
        @keyframes livepulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.3); }
        }
      `}</style>
    </header>
  )
}
