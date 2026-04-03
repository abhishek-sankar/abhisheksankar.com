import './index.css'
import { Suspense, lazy, useEffect } from 'react'
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
  return <p className="py-4 text-gray-700 dark:text-gray-300">Loading...</p>
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
    <Router>
      <ScrollToTop />
      <div className="min-h-screen w-full flex flex-col justify-center items-center bg-white dark:bg-neutral-900">
        <main className="w-full max-w-3xl px-4 sm:px-8 py-10 flex-1 flex flex-col">
          <ProfileCardWithRouteControl />
          <Routes>
            <Route path="/" element={<><div className="border-b border-gray-200 dark:border-neutral-800 mb-10"></div><ProfileSummary /><div className="border-b border-gray-200 dark:border-neutral-800 mb-10"></div><ReadingSummary /><div className="border-b border-gray-200 dark:border-neutral-800 mb-10"></div><BlogSummary /><div className="border-b border-gray-200 dark:border-neutral-800 mb-10"></div><PublicEngagements /></>} />
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
        <footer className="w-full text-center text-gray-500 dark:text-gray-400 text-sm mt-16 border-t border-gray-100 dark:border-neutral-800 pt-6 pb-4">
          © {new Date().getFullYear()} Abhishek Sankar, inspired by <a href="https://aarushsah.com/" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">aarushsah.com</a> 
        </footer>
      </div>
    </Router>
  )
}

export default App
