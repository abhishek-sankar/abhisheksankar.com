import './index.css'
import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ProfileCard } from './components/ProfileCard'
import { ProfileSummary } from './components/ProfileSummary'
import { BlogSummary } from './components/BlogSummary'
import { ReadingSummary } from './components/ReadingSummary'
import { PublicEngagements } from './components/PublicEngagements'
import { ThemeProvider, useTheme } from './ThemeContext'

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

function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      data-testid="theme-toggle"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      onClick={toggleTheme}
    >
      {isDark ? (
        /* Sun icon for switching to light */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
        </svg>
      ) : (
        /* Moon icon for switching to dark */
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  )
}

function AppShell() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-white">
        <div className="w-full max-w-3xl px-4 sm:px-8 pt-4 flex justify-end">
          <ThemeToggleButton />
        </div>
        <main className="w-full max-w-3xl px-4 sm:px-8 py-6 flex-1 flex flex-col">
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
        <footer className="w-full text-center text-gray-500 text-sm mt-16 border-t border-gray-100 pt-6 pb-4">
          © {new Date().getFullYear()} Abhishek Sankar, inspired by <a href="https://aarushsah.com/" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">aarushsah.com</a> 
        </footer>
      </div>
    </Router>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppShell />
    </ThemeProvider>
  )
}

export default App
