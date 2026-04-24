import './index.css'
import './App.css'
import { Suspense, lazy, useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ProfileCard } from './components/ProfileCard'
import { ProfileSummary } from './components/ProfileSummary'
import { BlogSummary } from './components/BlogSummary'
import { ReadingSummary } from './components/ReadingSummary'
import { PublicEngagements } from './components/PublicEngagements'

const ProjectList = lazy(() =>
  import('./components/ProjectPages').then((module) => ({ default: module.ProjectList })),
)
const ProjectRedirect = lazy(() =>
  import('./components/ProjectPages').then((module) => ({ default: module.ProjectRedirect })),
)
const ProjectPaper = lazy(() =>
  import('./components/ProjectPaper').then((module) => ({ default: module.ProjectPaper })),
)
const BlogList = lazy(() =>
  import('./components/BlogPages').then((module) => ({ default: module.BlogList })),
)
const BlogDetail = lazy(() =>
  import('./components/BlogPages').then((module) => ({ default: module.BlogDetail })),
)
const ReadingList = lazy(() =>
  import('./components/ReadingPages').then((module) => ({ default: module.ReadingList })),
)
const EngagementList = lazy(() =>
  import('./components/EngagementPages').then((module) => ({ default: module.EngagementList })),
)
const EngagementDetail = lazy(() =>
  import('./components/EngagementPages').then((module) => ({ default: module.EngagementDetail })),
)

function RouteFallback() {
  return <p className="py-4 text-gray-700">Loading...</p>
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function ProfileCardWithRouteControl() {
  const location = useLocation();
  const path = location.pathname;
  const hideDescription =
    path.startsWith('/projects') || path.startsWith('/blogs') || path.startsWith('/reading');

  return <ProfileCard showDescription={!hideDescription} />;
}

type ThemeMode = 'light' | 'dark'

function getPreferredTheme(): ThemeMode {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

function App() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('light')

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme-mode')
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const applyTheme = (mode: ThemeMode) => {
      document.documentElement.dataset.theme = mode
      document.documentElement.style.colorScheme = mode
    }

    const initialTheme: ThemeMode = savedTheme === 'dark' || savedTheme === 'light'
      ? savedTheme
      : getPreferredTheme()

    setThemeMode(initialTheme)
    applyTheme(initialTheme)

    const handlePreferenceChange = () => {
      if (!window.localStorage.getItem('theme-mode')) {
        const preferredTheme = getPreferredTheme()
        setThemeMode(preferredTheme)
        applyTheme(preferredTheme)
      }
    }

    mediaQuery.addEventListener('change', handlePreferenceChange)
    return () => mediaQuery.removeEventListener('change', handlePreferenceChange)
  }, [])

  const toggleTheme = () => {
    const nextTheme: ThemeMode = themeMode === 'dark' ? 'light' : 'dark'
    setThemeMode(nextTheme)
    window.localStorage.setItem('theme-mode', nextTheme)
    document.documentElement.dataset.theme = nextTheme
    document.documentElement.style.colorScheme = nextTheme
  }

  const isDarkMode = themeMode === 'dark'

  return (
    <Router>
      <ScrollToTop />
      <div className="app-shell min-h-screen w-full flex flex-col justify-center items-center bg-white">
        <main className="app-main w-full max-w-3xl px-4 sm:px-8 py-10 flex-1 flex flex-col">
          <div className="theme-toggle-row">
            <button
              type="button"
              className="theme-toggle"
              data-testid="theme-toggle"
              data-theme-toggle
              onClick={toggleTheme}
              aria-label={isDarkMode ? 'Switch to light theme' : 'Switch to dark theme'}
              aria-pressed={isDarkMode}
              title={isDarkMode ? 'Dark mode enabled' : 'Light mode enabled'}
            >
              <span className="theme-toggle__icon" aria-hidden="true">{isDarkMode ? '🌙' : '☀️'}</span>
              <span>{isDarkMode ? 'Dark mode' : 'Light mode'}</span>
            </button>
          </div>
          <ProfileCardWithRouteControl />
          <Routes>
            <Route path="/" element={<><div className="border-b border-gray-200 mb-10"></div><ProfileSummary /><div className="border-b border-gray-200 mb-10"></div><ReadingSummary /><div className="border-b border-gray-200 mb-10"></div><BlogSummary /><div className="border-b border-gray-200 mb-10"></div><PublicEngagements /></>} />
            <Route path="/projects" element={<Suspense fallback={<RouteFallback />}><ProjectList /></Suspense>} />
            <Route path="/projects/:id" element={<Suspense fallback={<RouteFallback />}><ProjectRedirect /></Suspense>} />
            <Route path="/projects/:id/paper" element={<Suspense fallback={<RouteFallback />}><ProjectPaper /></Suspense>} />
            <Route path="/project/:id" element={<Suspense fallback={<RouteFallback />}><ProjectRedirect /></Suspense>} />
            <Route path="/project/:id/paper" element={<Suspense fallback={<RouteFallback />}><ProjectPaper /></Suspense>} />
            <Route path="/reading" element={<Suspense fallback={<RouteFallback />}><ReadingList /></Suspense>} />
            <Route path="/blogs" element={<Suspense fallback={<RouteFallback />}><BlogList /></Suspense>} />
            <Route path="/blogs/:id" element={<Suspense fallback={<RouteFallback />}><BlogDetail /></Suspense>} />
            <Route path="/engagements" element={<Suspense fallback={<RouteFallback />}><EngagementList /></Suspense>} />
            <Route path="/engagements/:id" element={<Suspense fallback={<RouteFallback />}><EngagementDetail /></Suspense>} />
          </Routes>
        </main>
        <footer className="app-footer w-full text-center text-gray-500 text-sm mt-16 border-t border-gray-100 pt-6 pb-4">
          © {new Date().getFullYear()} Abhishek Sankar, inspired by <a href="https://aarushsah.com/" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">aarushsah.com</a> 
        </footer>
      </div>
    </Router>
  )
}

export default App
