import { motion, type Variants } from 'framer-motion';
import { skills } from '../data/resumeData';

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

const categoryContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08
    }
  }
};

const skillCardVariants: Variants = {
  hidden: { opacity: 0, y: 15, scale: 0.9 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 }
  }
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
    <section id="skills" className="min-h-screen py-24 flex items-center border-t border-minimal-border/50 relative">
      <div className="w-full">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs sm:text-sm font-bold tracking-[0.3em] text-minimal-accent uppercase mb-12 flex items-center gap-3"
        >
          <span className="w-8 h-[2px] bg-minimal-accent rounded-full inline-block" />
          02. Skills & Technologies
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {categories.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-minimal-surface/40 backdrop-blur-sm border border-minimal-border rounded-2xl p-6 hover:border-minimal-accent/40 transition-colors shadow-sm"
            >
              <h3 className="text-lg font-bold text-minimal-white mb-6 pb-3 border-b border-minimal-border/70 flex items-center justify-between">
                <span>{category.title}</span>
                <span className="text-xs font-mono text-minimal-accent bg-minimal-accent/10 px-2.5 py-0.5 rounded-full">
                  {category.items.length}
                </span>
              </h3>

              <motion.div 
                variants={categoryContainerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-3"
              >
                {category.items.map(skill => {
                  const iconUrl = getTechIcon(skill);
                  const cleanName = skill.replace(' (ES6+)', '').replace(' (Pandas, NumPy)', '');
                  return (
                    <motion.div 
                      key={skill} 
                      variants={skillCardVariants}
                      whileHover={{ y: -6, scale: 1.05, boxShadow: "0 10px 25px -5px rgba(20, 184, 166, 0.2)" }}
                      className="group flex flex-col items-center justify-center p-3 bg-minimal-surface border border-minimal-border rounded-xl hover:border-minimal-accent transition-all duration-300 cursor-pointer"
                    >
                      {iconUrl ? (
                        <img 
                          src={iconUrl} 
                          alt={skill} 
                          className="w-8 h-8 mb-2 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300" 
                        />
                      ) : (
                        <div className="w-8 h-8 mb-2 flex items-center justify-center bg-minimal-bg rounded-full text-minimal-accent font-bold text-xs group-hover:scale-110 transition-transform">
                          {cleanName.charAt(0)}
                        </div>
                      )}
                      <span className="text-[11px] font-medium text-minimal-text text-center leading-tight truncate w-full group-hover:text-minimal-white transition-colors">
                        {cleanName}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
