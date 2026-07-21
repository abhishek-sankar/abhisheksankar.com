import TwitterIcon from '../assets/twitter.svg'
import GitHubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedin.svg'
import AbhishekSankar from '../assets/Abhishek_Sankar_avatar.webp'
import { TWITTER_URL, GITHUB_URL, LINKEDIN_URL } from '../constants'
import React from 'react';
import { StaggerGroup } from './StaggerGroup';
import { staggerStyle } from './staggerStyle';
import { useTheme } from '../contexts/useTheme';

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
                  <p className="text-xl font-bold leading-tight" style={{ color: 'var(--color-text-primary)' }}>Abhishek Sankar</p>
                  <div className="header-actions flex gap-4 items-center">
                    <a
                      href={TWITTER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button no-underline"
                      title="Twitter"
                    >
                      <img src={TwitterIcon} alt="Twitter" style={{ filter: isDark ? 'invert(1)' : 'none' }} />
                    </a>
                    <a
                      href={GITHUB_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button no-underline"
                      title="GitHub"
                    >
                      <img src={GitHubIcon} alt="GitHub" style={{ filter: isDark ? 'invert(1)' : 'none' }} />
                    </a>
                    <a
                      href={LINKEDIN_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-button no-underline"
                      title="LinkedIn"
                    >
                      <img src={LinkedInIcon} alt="LinkedIn" style={{ filter: isDark ? 'invert(1)' : 'none' }} />
                    </a>
                    <button
                      data-testid="theme-toggle"
                      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
                      onClick={toggleTheme}
                      className="theme-toggle"
                      title={isDark ? 'Light mode' : 'Dark mode'}
                    >
                      {isDark ? (
                        // Sun icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <circle cx="12" cy="12" r="4"/>
                          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/>
                        </svg>
                      ) : (
                        // Moon icon
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
                <p className="text-light leading-snug sm:leading-normal" style={{ color: 'var(--color-text-secondary)' }}>Artificial Intelligence @ <a href="https://www.cmu.edu" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-link)' }} className="hover:underline">CMU</a></p>
                <p className="text-light leading-snug sm:leading-normal" style={{ color: 'var(--color-text-secondary)' }}>Prev. Applied AI @ <a href="https://www.bny.com/corporate/global/en/about-us/technology-innovation/artificial-intelligence.html" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-link)' }} className="hover:underline">BNY AI Hub</a>, Engineering @ <a href="https://www.providence.org" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-link)' }} className="hover:underline">Providence Health</a></p>
              </div>
            </div>
          </header>
        {showDescription && (
          <StaggerGroup as="div" className="text-base mb-6 space-y-3" style={{ color: 'var(--color-text-secondary)' }}>
            <p className="stagger-item" style={staggerStyle(0)}>
              I&apos;m a graduate student at <a href="https://msaii.cs.cmu.edu/directory/students/current/s" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-link)' }} className="hover:underline">Carnegie Mellon University</a> studying Artificial Intelligence.
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
