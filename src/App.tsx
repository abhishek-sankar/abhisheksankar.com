import './index.css'
import { ProfileCard } from './components/ProfileCard'
import { ProfileSummary } from './components/ProfileSummary'
import { BlogSummary } from './components/BlogSummary'
import { ReadingSummary } from './components/ReadingSummary'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { ProjectDetail, ProjectList } from './components/ProjectPages';
import { BlogList, BlogDetail } from './components/BlogPages';
import { ReadingList } from './components/ReadingPages';
import { EngagementDetail, EngagementList, PublicEngagements } from './components/PublicEngagements';
import { useEffect } from 'react';

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
  // Hide description on projects/blog routes; keep it on reading for homepage parity
  const hideDescription =
    path.startsWith('/projects') || path.startsWith('/blogs');
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
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/reading" element={<ReadingList />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetail />} />
            <Route path="/engagements" element={<EngagementList />} />
            <Route path="/engagements/:id" element={<EngagementDetail />} />
          </Routes>
        </main>
        <footer className="w-full text-center text-gray-400 text-sm mt-16 border-t border-gray-100 dark:border-neutral-800 pt-6 pb-4">
          © {new Date().getFullYear()} Abhishek Sankar, inspired by <a href="https://aarushsah.com/" target="_blank" rel="noopener noreferrer" className="">aarushsah.com</a> 
        </footer>
      </div>
    </Router>
  )
}

export default App
