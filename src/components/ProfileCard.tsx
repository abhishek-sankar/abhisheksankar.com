import TwitterIcon from '../assets/twitter.svg'
import GitHubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedin.svg'
import AbhishekSankar from '../assets/Abhishek_Sankar_avatar.webp'
import { TWITTER_URL, GITHUB_URL, LINKEDIN_URL } from '../constants'
import React from 'react';
import { StaggerGroup } from './StaggerGroup';
import { staggerStyle } from './staggerStyle';
import { useTheme } from '../contexts/ThemeContext';

interface ProfileCardProps {
  showDescription?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ showDescription = true }) => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
        <div className="container">
          <header className="mb-10" role="banner">
            <div className="flex items-center gap-4 sm:items-start sm:gap-6">
              <div className="profile-avatar">
              <img
                alt="Profile photo of Abhishek Sankar"
                width={96}
                height={96}
                decoding="async"
                loading="eager"
                fetchPriority="high"
                sizes="96px"
                className="profile-image object-cover rounded-full w-24 h-24"
                src={AbhishekSankar}
                style={{ color: "transparent" }}
              />
              </div>
              <div className="min-w-0 flex-1 self-center sm:self-auto">
                <div className="mb-2 flex flex-wrap items-center gap-x-4 gap-y-2">
                  <p className="text-xl font-bold leading-tight">Abhishek Sankar</p>
                  <div className="header-actions flex gap-4 items-center">
                    <button
                      data-testid="theme-toggle"
                      data-theme-toggle
                      onClick={toggleTheme}
                      className="theme-toggle"
                      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                    >
                      {isDark ? '☀️' : '🌙'}
                    </button>
                    <a
                      href={TWITTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button no-underline"
                      title="Twitter"
                    >
                      <img src={TwitterIcon} alt="Twitter" />
                    </a>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button no-underline"
                      title="GitHub"
                    >
                      <img src={GitHubIcon} alt="GitHub" />
                    </a>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button no-underline"
                      title="LinkedIn"
                    >
                      <img src={LinkedInIcon} alt="LinkedIn" />
                    </a>
                  </div>
                </div>
                <p className="text-light leading-snug sm:leading-normal">Artificial Intelligence @ <a href="https://www.cmu.edu" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">CMU</a></p>
                <p className="text-light leading-snug sm:leading-normal">Prev. Applied AI @ <a href="https://www.bny.com/corporate/global/en/about-us/technology-innovation/artificial-intelligence.html" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">BNY AI Hub</a>, Engineering @ <a href="https://www.providence.org" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">Providence Health</a></p>
              </div>
            </div>
          </header>
        {showDescription && (
          <StaggerGroup as="div" className="text-base text-gray-700 mb-6 space-y-3">
            <p className="stagger-item" style={staggerStyle(0)}>
              I&apos;m a graduate student at <a href="https://msaii.cs.cmu.edu/directory/students/current/s" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">Carnegie Mellon University</a> studying Artificial Intelligence.
            </p>
            <p className="stagger-item" style={staggerStyle(1)}>
              I&apos;m interested in efforts toward systems that make English the main programming language.
            </p>
            <p className="stagger-item" style={staggerStyle(2)}>
              Previously, I worked as an Applied AI engineer at the Bank of New York, where I played around with coding agents.
            </p>
          </StaggerGroup>
        )}
        </div>
  );
};
