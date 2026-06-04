# 🌍 World Pulse — Global Trends Dashboard

A real-time global trends dashboard powered by Claude AI. Built with React, Recharts, and the Anthropic API.

![World Pulse Dashboard](https://img.shields.io/badge/React-18-blue) ![Recharts](https://img.shields.io/badge/Recharts-2.10-purple) ![Claude AI](https://img.shields.io/badge/Claude-AI-green) ![Vite](https://img.shields.io/badge/Vite-5-yellow)

## ✨ Features

- **📊 Language Trends** — Line chart tracking top programming language popularity over 6 months
- **🔥 Topic Heatmap** — Weekly activity heatmap across 6 global topics
- **🐙 GitHub Trending** — Live-updating trending repositories with star counts
- **📰 Global Headlines** — Curated international news feed with category tags
- **🌐 Region Distribution** — Donut chart of web traffic by continent
- **🤖 AI Insights** — Ask Claude AI about today's trends, powered by Anthropic API
- **⚡ Live Updates** — Auto-refreshes data every 4 seconds

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- An Anthropic API key ([get one here](https://console.anthropic.com))

### Local Setup

```bash
# 1. Install dependencies
npm install

# 2. Set up environment variables
cp .env.example .env
# Edit .env and add your VITE_ANTHROPIC_API_KEY

# 3. Start the dev server
npm run dev

# 4. Open http://localhost:5173
```

## 🌐 Deploy to Vercel (Free, 1 minute)

1. Push this project to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo
3. Add environment variable: `VITE_ANTHROPIC_API_KEY` = your key
4. Click **Deploy** ✅

That's it! Vercel gives you a live URL to share on your resume.

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI framework |
| Recharts | Charts & data viz |
| Vite | Build tool |
| Anthropic Claude API | AI-powered insights |
| Lucide React | Icon library |

## 📁 Project Structure

```
world-pulse/
├── src/
│   ├── components/
│   │   ├── Header.jsx        # Sticky header with live clock
│   │   ├── StatCard.jsx      # KPI metric cards
│   │   ├── GithubTrending.jsx # GitHub trending repos panel
│   │   ├── LangTrends.jsx    # Language popularity line chart
│   │   ├── TopicHeatmap.jsx  # Topic activity heatmap
│   │   ├── NewsFeed.jsx      # Global headlines feed
│   │   ├── RegionChart.jsx   # Region donut chart
│   │   └── AIInsights.jsx    # Claude AI insights panel
│   ├── hooks/
│   │   └── useLiveData.js    # Data layer with live simulation
│   ├── App.jsx               # Main layout
│   ├── main.jsx              # Entry point
│   └── index.css             # Global dark theme styles
├── index.html
├── vite.config.js
└── package.json
```

## 🔒 Note on API Keys

The AI Insights panel calls the Anthropic API directly from the browser. For a production app, you'd want to proxy this through a backend to keep your API key secret. For a portfolio demo, this is fine.

---

Built with ❤️ as a portfolio project showcasing Data Science + AI integration skills.
