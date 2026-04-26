import './index.css'
import { Suspense, lazy, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeProvider'
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

function App() {
  return (
    <ThemeProvider>
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full flex flex-col justify-center items-center" style={{ backgroundColor: 'var(--color-bg-primary)', color: 'var(--color-text-primary)', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
        <main className="w-full max-w-3xl px-4 sm:px-8 py-10 flex-1 flex flex-col">
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
        <footer className="w-full text-center text-sm mt-16 pt-6 pb-4" style={{ color: 'var(--color-text-muted)', borderTop: '1px solid var(--color-border)' }}>
          © {new Date().getFullYear()} Abhishek Sankar, inspired by <a href="https://aarushsah.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-link)' }} className="hover:underline">aarushsah.com</a> 
        </footer>
      </div>
    </Router>
    </ThemeProvider>
  )
}

export default App
