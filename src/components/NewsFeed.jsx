import React from 'react'
import { Newspaper, ExternalLink } from 'lucide-react'

const CATEGORY_COLORS = {
  AI: { bg: 'rgba(88,166,255,0.1)', color: '#58a6ff' },
  Climate: { bg: 'rgba(61,214,140,0.1)', color: '#3dd68c' },
  Science: { bg: 'rgba(188,140,255,0.1)', color: '#bc8cff' },
  Energy: { bg: 'rgba(240,162,74,0.1)', color: '#f0a24a' },
  Policy: { bg: 'rgba(255,126,182,0.1)', color: '#ff7eb6' },
  Space: { bg: 'rgba(88,166,255,0.1)', color: '#58a6ff' },
  Tech: { bg: 'rgba(61,214,140,0.1)', color: '#3dd68c' },
}

export default function NewsFeed({ news }) {
  return (
    <div style={{
      background: 'var(--bg-1)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', overflow: 'hidden',
    }}>
      <div style={{
        padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <Newspaper size={16} color="var(--text-1)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-0)' }}>Global Headlines</span>
        <span style={{
          marginLeft: 'auto', fontSize: 11, color: 'var(--accent-amber)',
          background: 'rgba(240,162,74,0.1)', padding: '2px 8px',
          borderRadius: 20, fontFamily: 'var(--font-mono)',
        }}>Breaking</span>
      </div>
      <div>
        {news.map((item, i) => {
          const cat = CATEGORY_COLORS[item.category] || { bg: 'rgba(139,148,158,0.1)', color: '#8b949e' }
          return (
            <div key={i} style={{
              padding: '0.85rem 1.25rem',
              borderBottom: i < news.length - 1 ? '1px solid var(--border)' : 'none',
              cursor: 'pointer', transition: 'background 0.15s',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, color: 'var(--text-0)', lineHeight: 1.4, marginBottom: 6 }}>{item.title}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{
                      fontSize: 10, fontWeight: 600, padding: '2px 7px',
                      borderRadius: 4, background: cat.bg, color: cat.color,
                      fontFamily: 'var(--font-mono)',
                    }}>{item.category}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-1)' }}>{item.source}</span>
                    <span style={{ fontSize: 11, color: 'var(--text-2)', marginLeft: 'auto' }}>{item.time}</span>
                  </div>
                </div>
                <ExternalLink size={12} color="var(--text-2)" style={{ marginTop: 2, flexShrink: 0 }} />
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
