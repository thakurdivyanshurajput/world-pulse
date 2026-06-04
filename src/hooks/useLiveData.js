import { useState, useEffect } from 'react'

const GITHUB_REPOS = [
  { name: 'ollama/ollama', lang: 'Go', stars: 87420, trend: 1240, desc: 'Get up and running with LLMs locally' },
  { name: 'microsoft/phi-4', lang: 'Python', stars: 23100, trend: 980, desc: 'Phi-4 small language model by Microsoft' },
  { name: 'anthropics/claude-code', lang: 'TypeScript', stars: 18900, trend: 870, desc: 'Claude Code agentic coding tool' },
  { name: 'deepseek-ai/DeepSeek-V3', lang: 'Python', stars: 45200, trend: 760, desc: 'DeepSeek V3 base model' },
  { name: 'huggingface/transformers', lang: 'Python', stars: 134000, trend: 620, desc: 'State-of-the-art ML for everyone' },
  { name: 'vercel/ai', lang: 'TypeScript', stars: 12300, trend: 540, desc: 'Build AI-powered applications' },
  { name: 'langchain-ai/langchain', lang: 'Python', stars: 96400, trend: 490, desc: 'Build LLM-powered applications' },
  { name: 'comfyanonymous/ComfyUI', lang: 'Python', stars: 57800, trend: 430, desc: 'Powerful UI for Stable Diffusion' },
]

const NEWS_HEADLINES = [
  { title: 'AI models surpass human performance on new reasoning benchmarks', source: 'TechCrunch', region: 'Global', category: 'AI', time: '2h ago' },
  { title: 'Global renewable energy capacity hits record milestone in 2025', source: 'Reuters', region: 'Global', category: 'Climate', time: '3h ago' },
  { title: 'Quantum computing breakthrough enables faster drug discovery', source: 'Nature', region: 'Global', category: 'Science', time: '4h ago' },
  { title: 'India launches largest solar farm in Southeast Asia', source: 'Bloomberg', region: 'Asia', category: 'Energy', time: '5h ago' },
  { title: 'OpenAI and Google compete to deploy AI agents in enterprise', source: 'WSJ', region: 'US', category: 'AI', time: '6h ago' },
  { title: 'European regulators finalize AI Act enforcement guidelines', source: 'FT', region: 'Europe', category: 'Policy', time: '7h ago' },
  { title: 'SpaceX Starship completes first commercial payload mission', source: 'Space.com', region: 'Global', category: 'Space', time: '8h ago' },
  { title: 'Semiconductor shortage eases as TSMC expands production', source: 'Nikkei', region: 'Asia', category: 'Tech', time: '10h ago' },
]

const LANG_TREND_DATA = [
  { month: 'Jan', Python: 38, JavaScript: 28, TypeScript: 18, Go: 10, Rust: 6 },
  { month: 'Feb', Python: 40, JavaScript: 27, TypeScript: 19, Go: 9, Rust: 5 },
  { month: 'Mar', Python: 41, JavaScript: 26, TypeScript: 20, Go: 8, Rust: 5 },
  { month: 'Apr', Python: 43, JavaScript: 25, TypeScript: 21, Go: 9, Rust: 6 },
  { month: 'May', Python: 44, JavaScript: 24, TypeScript: 22, Go: 10, Rust: 7 },
  { month: 'Jun', Python: 46, JavaScript: 23, TypeScript: 23, Go: 11, Rust: 8 },
]

const TOPIC_HEATMAP = [
  { topic: 'AI / LLM', Mon: 92, Tue: 88, Wed: 95, Thu: 91, Fri: 87, Sat: 70, Sun: 65 },
  { topic: 'Climate', Mon: 45, Tue: 48, Wed: 52, Thu: 49, Fri: 55, Sat: 60, Sun: 58 },
  { topic: 'Space', Mon: 30, Tue: 35, Wed: 28, Thu: 72, Fri: 40, Sat: 38, Sun: 32 },
  { topic: 'Crypto', Mon: 55, Tue: 60, Wed: 58, Thu: 62, Fri: 65, Sat: 70, Sun: 68 },
  { topic: 'Health', Mon: 48, Tue: 50, Wed: 53, Thu: 51, Fri: 47, Sat: 44, Sun: 42 },
  { topic: 'Politics', Mon: 75, Tue: 80, Wed: 78, Thu: 82, Fri: 85, Sat: 55, Sun: 50 },
]

const REGION_DATA = [
  { name: 'North America', value: 32, color: '#58a6ff' },
  { name: 'Europe', value: 24, color: '#bc8cff' },
  { name: 'Asia Pacific', value: 28, color: '#3dd68c' },
  { name: 'Latin America', value: 9, color: '#f0a24a' },
  { name: 'Africa & ME', value: 7, color: '#ff7eb6' },
]

function addNoise(val, pct = 0.05) {
  return Math.round(val * (1 + (Math.random() - 0.5) * pct))
}

export function useLiveData() {
  const [data, setData] = useState({
    repos: GITHUB_REPOS,
    news: NEWS_HEADLINES,
    langTrend: LANG_TREND_DATA,
    heatmap: TOPIC_HEATMAP,
    regions: REGION_DATA,
    lastUpdated: new Date(),
    totalTrending: 1420,
    activeRegions: 187,
    aiMentions: 94200,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prev => ({
        ...prev,
        repos: prev.repos.map(r => ({ ...r, trend: addNoise(r.trend), stars: r.stars + Math.floor(Math.random() * 5) })),
        totalTrending: addNoise(prev.totalTrending),
        aiMentions: prev.aiMentions + Math.floor(Math.random() * 50),
        lastUpdated: new Date(),
      }))
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return data
}
