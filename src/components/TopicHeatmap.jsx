import React from 'react'
import { Flame } from 'lucide-react'

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

function getColor(val) {
  if (val >= 80) return '#58a6ff'
  if (val >= 60) return '#3dd68c'
  if (val >= 40) return '#f0a24a'
  if (val >= 20) return '#1f2937'
  return '#161b22'
}

function getTextColor(val) {
  if (val >= 40) return '#080b0f'
  return '#8b949e'
}

export default function TopicHeatmap({ data }) {
  return (
    <div style={{
      background: 'var(--bg-1)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', padding: '1.25rem',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
        <Flame size={16} color="var(--text-1)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-0)' }}>Topic Heat Map</span>
        <span style={{ fontSize: 11, color: 'var(--text-1)', marginLeft: 'auto', fontFamily: 'var(--font-mono)' }}>This week</span>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: 4 }}>
          <thead>
            <tr>
              <td style={{ width: 90 }} />
              {DAYS.map(d => (
                <td key={d} style={{ fontSize: 11, color: 'var(--text-1)', textAlign: 'center', paddingBottom: 6, fontFamily: 'var(--font-mono)' }}>{d}</td>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.topic}>
                <td style={{ fontSize: 12, color: 'var(--text-0)', paddingRight: 10, paddingBottom: 4, whiteSpace: 'nowrap' }}>{row.topic}</td>
                {DAYS.map(day => (
                  <td key={day} style={{ padding: 2 }}>
                    <div style={{
                      height: 28, borderRadius: 4,
                      background: getColor(row[day]),
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 10, fontWeight: 500,
                      color: row[day] >= 60 ? '#080b0f' : 'var(--text-2)',
                      fontFamily: 'var(--font-mono)',
                      transition: 'transform 0.15s',
                      cursor: 'default',
                    }}
                      title={`${row.topic} on ${day}: ${row[day]}`}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    >
                      {row[day]}
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 12 }}>
        <span style={{ fontSize: 11, color: 'var(--text-1)' }}>Low</span>
        {['#161b22', '#1f2937', '#f0a24a', '#3dd68c', '#58a6ff'].map((c, i) => (
          <div key={i} style={{ width: 16, height: 10, background: c, borderRadius: 2 }} />
        ))}
        <span style={{ fontSize: 11, color: 'var(--text-1)' }}>High</span>
      </div>
    </div>
  )
}
