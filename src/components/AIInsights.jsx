import React, { useState } from 'react'
import { Sparkles, Loader, ChevronRight } from 'lucide-react'

const PROMPTS = [
  'What are the top 3 takeaways from today\'s global tech trends?',
  'Which programming language is trending fastest and why?',
  'Summarize the biggest news themes this week in 3 bullet points.',
  'What should a Data Science student focus on learning based on today\'s trends?',
]

export default function AIInsights({ repos, news }) {
  const [insight, setInsight] = useState('')
  const [loading, setLoading] = useState(false)
  const [activePrompt, setActivePrompt] = useState(null)
  const [error, setError] = useState('')

  async function fetchInsight(prompt, idx) {
    setLoading(true)
    setActivePrompt(idx)
    setInsight('')
    setError('')

    const context = `
GitHub Trending Today:
${repos.slice(0, 5).map(r => `- ${r.name} (${r.lang}): +${r.trend} stars today`).join('\n')}

Top Headlines:
${news.slice(0, 5).map(n => `- ${n.title} (${n.source})`).join('\n')}
    `

    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: 'You are a concise tech trend analyst. Give crisp, insightful analysis in 3-4 sentences max. Be specific and actionable. No markdown, plain text only.',
          messages: [{ role: 'user', content: `${prompt}\n\nContext:\n${context}` }],
        }),
      })
      const data = await res.json()
      if (data.error) throw new Error(data.error.message)
      const text = data.content?.map(b => b.text || '').join('')
      setInsight(text)
    } catch (e) {
      setError('Could not fetch insight. Make sure the Claude API is accessible.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{
      background: 'var(--bg-1)', border: '1px solid var(--border)',
      borderRadius: 'var(--radius-lg)', overflow: 'hidden',
    }}>
      <div style={{
        padding: '1rem 1.25rem', borderBottom: '1px solid var(--border)',
        display: 'flex', alignItems: 'center', gap: 8,
        background: 'linear-gradient(90deg, rgba(88,166,255,0.05) 0%, transparent 100%)',
      }}>
        <Sparkles size={16} color="var(--accent-blue)" />
        <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--text-0)' }}>AI Insights</span>
        <span style={{
          fontSize: 10, color: 'var(--accent-blue)', background: 'rgba(88,166,255,0.1)',
          padding: '2px 8px', borderRadius: 20, marginLeft: 4, fontFamily: 'var(--font-mono)',
        }}>Powered by Claude</span>
      </div>

      <div style={{ padding: '1rem 1.25rem' }}>
        <p style={{ fontSize: 12, color: 'var(--text-1)', marginBottom: 12 }}>Ask Claude about today's trends:</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
          {PROMPTS.map((p, i) => (
            <button key={i} onClick={() => fetchInsight(p, i)} style={{
              background: activePrompt === i ? 'rgba(88,166,255,0.1)' : 'var(--bg-2)',
              border: `1px solid ${activePrompt === i ? 'rgba(88,166,255,0.3)' : 'var(--border)'}`,
              borderRadius: 8, padding: '8px 12px',
              color: activePrompt === i ? 'var(--accent-blue)' : 'var(--text-1)',
              fontSize: 12, textAlign: 'left', cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
              transition: 'all 0.15s',
            }}
              onMouseEnter={e => { if (activePrompt !== i) { e.currentTarget.style.borderColor = 'var(--border-bright)'; e.currentTarget.style.color = 'var(--text-0)' } }}
              onMouseLeave={e => { if (activePrompt !== i) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-1)' } }}
            >
              <ChevronRight size={12} style={{ flexShrink: 0 }} />
              {p}
            </button>
          ))}
        </div>

        <div style={{
          minHeight: 80, padding: 14,
          background: 'var(--bg-0)', borderRadius: 10,
          border: '1px solid var(--border)',
        }}>
          {loading && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--text-1)' }}>
              <Loader size={14} style={{ animation: 'spin 1s linear infinite' }} />
              <span style={{ fontSize: 13 }}>Analyzing trends...</span>
            </div>
          )}
          {!loading && error && (
            <p style={{ fontSize: 13, color: 'var(--accent-red)' }}>{error}</p>
          )}
          {!loading && insight && (
            <p style={{ fontSize: 13, color: 'var(--text-0)', lineHeight: 1.6 }}>{insight}</p>
          )}
          {!loading && !insight && !error && (
            <p style={{ fontSize: 13, color: 'var(--text-2)' }}>Click a question above to get AI-powered insights...</p>
          )}
        </div>
      </div>
      <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
