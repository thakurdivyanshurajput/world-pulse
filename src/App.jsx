import React, { useState } from 'react'
import { Globe, GitBranch, TrendingUp, Activity } from 'lucide-react'
import Header from './components/Header'
import StatCard from './components/StatCard'
import GithubTrending from './components/GithubTrending'
import LangTrends from './components/LangTrends'
import TopicHeatmap from './components/TopicHeatmap'
import NewsFeed from './components/NewsFeed'
import RegionChart from './components/RegionChart'
import AIInsights from './components/AIInsights'
import { useLiveData } from './hooks/useLiveData'

function fmt(n) {
  if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M'
  if (n >= 1000) return (n / 1000).toFixed(1) + 'K'
  return n.toString()
}

export default function App() {
  const data = useLiveData()
  const [, forceUpdate] = useState(0)

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-0)' }}>
      <Header lastUpdated={data.lastUpdated} onRefresh={() => forceUpdate(n => n + 1)} />

      <main style={{ maxWidth: 1400, margin: '0 auto', padding: '1.5rem 2rem 4rem' }}>

        {/* Stat Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 14, marginBottom: 20,
        }}>
          <StatCard label="Trending Repos" value={fmt(data.totalTrending)} sub="+12% from yesterday" color="var(--accent-blue)" icon={GitBranch} />
          <StatCard label="Active Regions" value={data.activeRegions} sub="Across 6 continents" color="var(--accent-teal)" icon={Globe} />
          <StatCard label="AI Mentions" value={fmt(data.aiMentions)} sub="Across all platforms" color="var(--accent-purple)" icon={TrendingUp} />
          <StatCard label="Live Updates" value="4s" sub="Auto-refresh interval" color="var(--accent-amber)" icon={Activity} />
        </div>

        {/* Main Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 340px', gap: 14, alignItems: 'start' }}>

          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <LangTrends data={data.langTrend} />
            <TopicHeatmap data={data.heatmap} />
          </div>

          {/* Middle column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <GithubTrending repos={data.repos} />
            <RegionChart data={data.regions} />
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <AIInsights repos={data.repos} news={data.news} />
            <NewsFeed news={data.news.slice(0, 5)} />
          </div>
        </div>
      </main>
    </div>
  )
}
