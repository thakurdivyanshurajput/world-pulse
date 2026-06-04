import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import { Code2 } from 'lucide-react'

const COLORS = {
  Python: '#58a6ff',
  JavaScript: '#f0a24a',
  TypeScript: '#bc8cff',
  Go: '#3dd68c',
  Rust: '#ff7eb6',
}

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: 'var(--bg-2)', border: '1px solid var(--border-bright)',
      borderRadius: 8, padding: '10px 14px', fontSize: 12,
    }}>
      <p style={{ color: 'var(--text-1)', marginBottom: 6, fontFamily: 'var(--font-mono)' }}>{label}</p>
      {payload.map(p => (
        <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 3 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: p.color }} />
          <span style={{ color: 'var(--text-0)' }}>{p.name}</span>
          <span style={{ color: p.color, marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>{p.value}%</span>
        </div>
      ))}
    </div>
  )
}

export default function LangTrends({ data }) {
  return (
    <div style={{
      background: 'var(--bg-1)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', padding: '1.25rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
        <Code2 size={16} color="var(--text-1)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-0)' }}>Language Popularity Trends</span>
        <span style={{ fontSize: 11, color: 'var(--text-1)', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>% of repos · 6mo</span>
      </div>
      <ResponsiveContainer width="100%" height={220}>
        <LineChart data={data} margin={{ top: 4, right: 8, bottom: 0, left: -20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" tick={{ fill: '#8b949e', fontSize: 11, fontFamily: 'DM Mono' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#8b949e', fontSize: 11, fontFamily: 'DM Mono' }} axisLine={false} tickLine={false} />
          <Tooltip content={<CustomTooltip />} />
          {Object.entries(COLORS).map(([lang, color]) => (
            <Line
              key={lang} type="monotone" dataKey={lang}
              stroke={color} strokeWidth={2} dot={false}
              activeDot={{ r: 4, strokeWidth: 0 }}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
      <div style={{ display: 'flex', gap: 16, marginTop: 12, flexWrap: 'wrap' }}>
        {Object.entries(COLORS).map(([lang, color]) => (
          <div key={lang} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            <div style={{ width: 20, height: 2, background: color, borderRadius: 1 }} />
            <span style={{ fontSize: 11, color: 'var(--text-1)' }}>{lang}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
