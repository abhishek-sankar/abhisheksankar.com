import TwitterIcon from '../assets/twitter.svg'
import GitHubIcon from '../assets/github.svg'
import LinkedInIcon from '../assets/linkedin.svg'
import AbhishekSankar from '../assets/Abhishek_Sankar.png'
import { TWITTER_URL, GITHUB_URL, LINKEDIN_URL } from '../constants'
import React from 'react';

interface ProfileCardProps {
  showDescription?: boolean;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ showDescription = true }) => {
  return (
        <div className="container relative">
          <div className="header-actions flex gap-4 absolute right-0 top-0">
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
          <header className="flex items-center mb-10" role="banner">
            <div className="mr-6">
              <img
                alt="Profile photo of Abhishek Sankar"
                width="100"
                height="100"
                decoding="async"
                className="profile-image object-cover rounded-full w-24 h-24"
                src={AbhishekSankar}
                style={{ color: "transparent" }}
              />
            </div>
            <div>
              <p className="text-xl mb-1 font-bold">Abhishek Sankar</p>
              <p className="text-light">Artificial Intelligence @ <a href="https://www.cmu.edu" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">CMU</a></p>
              <p className="text-light">Prev. Engineering @ <a href="https://www.providence.org" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">Providence Health</a></p>
            </div>
          </header>
        {showDescription && (
          <div className="text-base text-gray-700 dark:text-gray-300 mb-6">
            I'm a graduate student at <a href="https://msaii.cs.cmu.edu/directory/students/current/s" target="_blank" rel="noopener noreferrer" className="text-phthalo-green-500 hover:underline">Carnegie Mellon University</a> studying Artificial Intelligence.
            I'm interested in learning what makes LLMs tick, and how we can better understand emergent behaviours. 
            
            Previously, I worked on behaviourial health and async care products at Providence Health and Services, 
            where I led frontend engineering and analytics. 
          </div>
        )}
        </div>
  );
};