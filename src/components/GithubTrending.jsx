import React from 'react'
import { Github, TrendingUp, Star } from 'lucide-react'

const LANG_COLORS = {
  Python: '#3572A5', TypeScript: '#3178c6', JavaScript: '#f1e05a',
  Go: '#00ADD8', Rust: '#dea584', default: '#8b949e',
}

function fmt(n) {
  if (n >= 1000) return (n / 1000).toFixed(1) + 'k'
  return n.toString()
}

export default function GithubTrending({ repos }) {
  return (
    <div style={{
      background: 'var(--bg-1)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', overflow: 'hidden',
    }}>
      <div style={{
        padding: '1rem 1.25rem',
        borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <Github size={16} color="var(--text-1)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-0)' }}>GitHub Trending</span>
        <span style={{
          marginLeft: 'auto', fontSize: 11, color: 'var(--accent-teal)',
          background: 'rgba(61,214,140,0.1)', padding: '2px 8px',
          borderRadius: 20, fontFamily: 'var(--font-mono)',
        }}>Today</span>
      </div>
      <div style={{ padding: '0.5rem 0' }}>
        {repos.slice(0, 6).map((repo, i) => (
          <div key={repo.name} style={{
            padding: '0.7rem 1.25rem',
            borderBottom: i < 5 ? '1px solid var(--border)' : 'none',
            display: 'flex', alignItems: 'center', gap: 12,
            transition: 'background 0.15s',
            cursor: 'pointer',
          }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--bg-2)'}
            onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
          >
            <span style={{ fontSize: 12, color: 'var(--text-2)', fontFamily: 'var(--font-mono)', minWidth: 16 }}>{i + 1}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--accent-blue)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{repo.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-1)', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{repo.desc}</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 3, flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, color: 'var(--text-1)' }}>
                <Star size={10} />
                {fmt(repo.stars)}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 11, color: 'var(--accent-teal)' }}>
                <TrendingUp size={10} />
                +{fmt(repo.trend)}
              </div>
            </div>
            <div style={{
              width: 8, height: 8, borderRadius: '50', flexShrink: 0,
              background: LANG_COLORS[repo.lang] || LANG_COLORS.default,
            }} />
          </div>
        ))}
      </div>
    </div>
  )
}
