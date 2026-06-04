import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Globe2 } from 'lucide-react'

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const d = payload[0]
  return (
    <div style={{
      background: 'var(--bg-2)', border: '1px solid var(--border-bright)',
      borderRadius: 8, padding: '8px 12px', fontSize: 12,
    }}>
      <span style={{ color: 'var(--text-0)' }}>{d.name}: </span>
      <span style={{ color: d.payload.color, fontFamily: 'var(--font-mono)' }}>{d.value}%</span>
    </div>
  )
}

export default function RegionChart({ data }) {
  return (
    <div style={{
      background: 'var(--bg-1)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', padding: '1.25rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1rem' }}>
        <Globe2 size={16} color="var(--text-1)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-0)' }}>Traffic by Region</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <ResponsiveContainer width={120} height={120}>
          <PieChart>
            <Pie data={data} cx="50%" cy="50%" innerRadius={30} outerRadius={55} paddingAngle={3} dataKey="value">
              {data.map((entry, i) => <Cell key={i} fill={entry.color} strokeWidth={0} />)}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>
          {data.map(item => (
            <div key={item.name} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 8, height: 8, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
              <span style={{ fontSize: 12, color: 'var(--text-1)', flex: 1 }}>{item.name}</span>
              <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text-0)', fontFamily: 'var(--font-mono)' }}>{item.value}%</span>
              <div style={{ width: 50, height: 4, borderRadius: 2, background: 'var(--bg-3)' }}>
                <div style={{ width: `${item.value * 2}%`, height: '100%', borderRadius: 2, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
