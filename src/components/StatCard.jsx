import React from 'react'
import { TrendingUp } from 'lucide-react'

export default function StatCard({ label, value, sub, color = 'var(--accent-blue)', icon: Icon }) {
  return (
    <div style={{
      background: 'var(--bg-1)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)',
      padding: '1.25rem 1.5rem',
      position: 'relative',
      overflow: 'hidden',
      transition: 'border-color 0.2s',
    }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border-bright)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
    >
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: color, opacity: 0.6,
      }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
        <span style={{ fontSize: 12, color: 'var(--text-1)', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: 'var(--font-mono)' }}>{label}</span>
        {Icon && <div style={{ color, opacity: 0.7 }}><Icon size={16} /></div>}
      </div>
      <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--text-0)', letterSpacing: '-0.03em', marginBottom: 4 }}>{value}</div>
      <div style={{ fontSize: 12, color, display: 'flex', alignItems: 'center', gap: 4 }}>
        <TrendingUp size={12} />
        {sub}
      </div>
    </div>
  )
}
