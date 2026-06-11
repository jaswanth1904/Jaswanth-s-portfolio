import { motion } from 'framer-motion';
import { skills } from '../data/resumeData';

// Helper to map skill names to devicon SVG paths
const getTechIcon = (skillName: string) => {
  const name = skillName.toLowerCase();
  if (name.includes('react')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg';
  if (name.includes('typescript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg';
  if (name.includes('javascript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg';
  if (name.includes('tailwind') || name.includes('css')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg';
  if (name.includes('node')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg';
  if (name.includes('express')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg';
  if (name.includes('mongo')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg';
  if (name.includes('mysql')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg';
  if (name.includes('git')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg';
  if (name.includes('github')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg';
  if (name.includes('vscode')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg';
  if (name.includes('java') && !name.includes('javascript')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg';
  if (name.includes('python') || name.includes('pandas') || name.includes('numpy')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg';
  if (name.includes('html')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg';
  if (name.includes('vercel')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg';
  if (name.includes('eslint')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/eslint/eslint-original.svg';
  if (name.includes('postman')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg';
  if (name.includes('bootstrap')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg';
  if (name.includes('npm') || name.includes('yarn')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg';
  if (name.includes('zustand') || name.includes('context')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg';
  if (name.includes('rest') || name.includes('api')) return 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg';
  return null;
};

export default function SkillsSection() {
  const categories = [
    { title: 'Frontend', items: skills.frontend },
    { title: 'Backend', items: skills.backend },
    { title: 'Database', items: skills.database },
    { title: 'Tools', items: skills.tools },
    { title: 'Languages', items: skills.languages },
  ];

  return (
    <section id="skills" className="min-h-screen py-24 flex items-center border-t border-minimal-border/50">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-12"
        >
          02. Skills
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-bold text-minimal-white mb-6 pb-2 border-b border-minimal-border">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-4">
                {category.items.map(skill => {
                  const iconUrl = getTechIcon(skill);
                  return (
                    <div key={skill} className="flex flex-col items-center justify-center p-3 bg-minimal-surface border border-minimal-border rounded-xl hover:border-minimal-accent/50 hover:-translate-y-1 transition-all duration-300 w-24">
                      {iconUrl ? (
                        <img src={iconUrl} alt={skill} className="w-8 h-8 mb-2" />
                      ) : (
                        <div className="w-8 h-8 mb-2 flex items-center justify-center bg-minimal-bg rounded-full text-minimal-accent font-bold text-xs">
                          {skill.charAt(0)}
                        </div>
                      )}
                      <span className="text-xs text-minimal-text text-center leading-tight truncate w-full">
                        {skill.replace(' (ES6+)', '').replace(' (Pandas, NumPy)', '')}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
