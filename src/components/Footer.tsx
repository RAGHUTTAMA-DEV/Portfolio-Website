import { useEffect, useState } from 'react';
import { GENERAL_INFO } from '../data/data';
import { GitFork, Star } from 'lucide-react';

interface RepoStats {
  stargazers_count: number;
  forks_count: number;
}

const Footer = () => {
  const [stats, setStats] = useState<RepoStats | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/tajmirul/portfolio-2.0')
      .then(res => res.json())
      .then((data: RepoStats) => setStats(data));
  }, []);

  return (
    <footer className="text-center pb-5" id="contact">
      <div className="container">
        <p className="text-lg">Have a project in mind?</p>
        <a
          href={`mailto:${GENERAL_INFO.email}`}
          className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
        >
          {GENERAL_INFO.email}
        </a>

        <div>
          <a
            href="https://github.com/Tajmirul/portfolio-2.0"
            target="_blank"
            rel="noopener noreferrer"
            className="leading-none text-muted-foreground hover:underline hover:text-white"
          >
            Design & built by Raghuttama
            <div className="flex items-center justify-center gap-5 pt-1">
              <span className="flex items-center gap-2">
                <Star size={18} /> {stats ? stats.stargazers_count : '--'}
              </span>
              <span className="flex items-center gap-2">
                <GitFork size={18} /> {stats ? stats.forks_count : '--'}
              </span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;